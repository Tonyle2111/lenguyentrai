"use client";

import { useId, useState } from "react";
import { Card } from "@/components/ui/layout";

/** Đường ống: tăng theo đường cong chữ S, sau khi ngừng làm thì suy giảm chậm 1,5%/tháng. */
function pipeValue(t: number, stop: number) {
  const L = 22, t0 = 13, k = 3.2;
  const f = (x: number) => L / (1 + Math.exp(-(x - t0) / k)) - L / (1 + Math.exp(t0 / k));
  return t <= stop ? f(t) : f(stop) * Math.pow(0.985, t - stop);
}
const bucketValue = (t: number, stop: number) => (t < stop ? 10 : 0);

const W = 560, H = 290, PL = 34, PR = 14, PT = 18, PB = 30, Y_MAX = 24;
const x = (t: number) => PL + (t / 36) * (W - PL - PR);
const y = (v: number) => PT + (1 - v / Y_MAX) * (H - PT - PB);

function Stat({ label, value, accent }: { label: string; value: number; accent?: boolean }) {
  return (
    <div className="flex flex-[1_1_140px] flex-col gap-1.5 rounded-input bg-soft px-4 py-3.5">
      <span className="text-[12.5px] font-semibold text-subtle">{label}</span>
      <span className={`font-mono text-[28px] font-bold leading-none tracking-[-0.03em] tabular-nums ${accent ? "text-accent" : "text-body"}`}>
        {Math.round(value).toLocaleString("vi-VN")}
        <span className="ml-1.5 whitespace-nowrap text-[13px] font-medium tracking-normal text-subtle">đơn vị</span>
      </span>
    </div>
  );
}

/** Mô phỏng 0–36 tháng: xô nước cạn ngay khi dừng tay, đường ống chậm lúc đầu nhưng vẫn chảy. */
export function PipeSimulator() {
  const [stop, setStop] = useState(18);
  const uid = useId().replace(/:/g, "");

  const pts: string[] = [];
  for (let t = 0; t <= 36; t += 0.25) pts.push(x(t).toFixed(1) + "," + y(pipeValue(t, stop)).toFixed(1));
  const line = "M" + pts.join(" L");
  const area = `${line} L${x(36)},${y(0)} L${x(0)},${y(0)} Z`;
  const bucket = `M${x(0)},${y(10)} L${x(stop)},${y(10)} L${x(stop)},${y(0)} L${x(36)},${y(0)}`;

  let sumB = 0, sumP = 0;
  for (let m = 1; m <= 36; m++) {
    sumB += bucketValue(m - 1, stop);
    sumP += pipeValue(m, stop);
  }
  const mono = "font-mono text-[11px] fill-[var(--text-muted)]";

  return (
    <Card raised className="flex flex-col gap-[18px]">
      <div className="flex flex-wrap gap-[18px] text-[13.5px] font-semibold text-subtle">
        <span className="inline-flex items-center gap-2">
          <svg width="26" height="6" aria-hidden="true">
            <line x1="0" y1="3" x2="26" y2="3" stroke="var(--text-muted)" strokeWidth="2" strokeDasharray="4 4" />
          </svg>
          Xách nước
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-1 w-[26px] rounded-sm bg-flow-h" />
          Đường ống
        </span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full overflow-visible" role="img" aria-label="Biểu đồ minh họa dòng tiền xách nước và đường ống theo tháng">
        <defs>
          <linearGradient id={`area-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#F9A51A" stopOpacity=".38" />
            <stop offset="1" stopColor="#F9A51A" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={`line-${uid}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#F9A51A" />
            <stop offset=".52" stopColor="#F47B2E" />
            <stop offset="1" stopColor="#EC4A0C" />
          </linearGradient>
        </defs>
        {[0, 6, 12, 18, 24].map((v) => (
          <g key={v}>
            <line x1={PL} x2={W - PR} y1={y(v)} y2={y(v)} stroke="var(--border)" strokeWidth="1" />
            <text x={PL - 8} y={y(v) + 4} textAnchor="end" className={mono}>{v}</text>
          </g>
        ))}
        {[0, 6, 12, 18, 24, 30, 36].map((m) => (
          <text key={m} x={x(m)} y={H - 8} textAnchor="middle" className={mono}>{m}</text>
        ))}
        <path d={area} fill={`url(#area-${uid})`} />
        <path d={bucket} fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeDasharray="5 5" strokeLinejoin="round" />
        <path d={line} fill="none" stroke={`url(#line-${uid})`} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <line x1={x(stop)} x2={x(stop)} y1={PT - 4} y2={y(0)} stroke="#565C72" strokeWidth="1.5" strokeDasharray="3 4" />
        <text x={stop > 27 ? x(stop) - 8 : x(stop) + 8} y={PT + 6} textAnchor={stop > 27 ? "end" : "start"} className="fill-[var(--text-body)] font-sans text-[12px] font-bold">
          Ngừng trực tiếp làm
        </text>
      </svg>
      <label className="flex flex-col gap-2.5">
        <span className="flex justify-between text-[14px] font-semibold">
          <span>Tháng bạn ngừng trực tiếp làm</span>
          <span className="font-mono font-bold tabular-nums text-accent">Tháng {stop}</span>
        </span>
        <input type="range" min={6} max={36} step={1} value={stop} onChange={(e) => setStop(+e.target.value)} className="m-0 w-full" />
      </label>
      <div className="flex flex-wrap gap-3">
        <Stat label="Tổng 36 tháng · Xách nước" value={sumB} />
        <Stat label="Tổng 36 tháng · Đường ống" value={sumP} accent />
      </div>
      <p className="text-[12.5px] leading-[1.5] text-subtle">Mô hình minh họa khái niệm với đơn vị quy ước, không phải số liệu thật hay cam kết thu nhập.</p>
    </Card>
  );
}
