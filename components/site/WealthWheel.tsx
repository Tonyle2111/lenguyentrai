"use client";

import { useEffect, useState } from "react";
import { PILLARS, type Pillar } from "@/lib/data";
import { Card } from "@/components/ui/layout";

type Scores = Record<Pillar["key"], number>;
const DEFAULT: Scores = { tc: 7, sk: 6, mqh: 5, nt: 4 };
const STORAGE_KEY = "lnt-wheel";

const S = 320, C = S / 2, RAD = 120;
const AXES: Array<[number, number]> = [[0, -1], [1, 0], [0, 1], [-1, 0]];
const pt = (i: number, val: number): [number, number] => [C + AXES[i][0] * RAD * (val / 10), C + AXES[i][1] * RAD * (val / 10)];

function Radar({ v }: { v: Scores }) {
  const poly = PILLARS.map((p, i) => pt(i, v[p.key]).join(",")).join(" ");
  const labelPos: Array<[number, number, "middle" | "end" | "start"]> = [[C, 14, "middle"], [S - 2, C + 4, "end"], [C, S - 6, "middle"], [2, C + 4, "start"]];
  return (
    <svg viewBox={`-40 -10 ${S + 80} ${S + 20}`} className="mx-auto block h-auto w-full max-w-[400px] overflow-visible" role="img" aria-label="Biểu đồ bánh xe giàu có toàn diện">
      <defs>
        <radialGradient id="wheelFill" cx="50%" cy="50%" r="60%">
          <stop offset="0" stopColor="#F9A51A" stopOpacity=".55" />
          <stop offset="1" stopColor="#F47B2E" stopOpacity=".18" />
        </radialGradient>
      </defs>
      {[2, 4, 6, 8, 10].map((g) => (
        <polygon key={g} points={AXES.map((_, i) => pt(i, g).join(",")).join(" ")} fill="none" stroke="var(--border)" strokeWidth="1" />
      ))}
      {AXES.map((_, i) => {
        const [x, y] = pt(i, 10);
        return <line key={i} x1={C} y1={C} x2={x} y2={y} stroke="var(--border)" strokeWidth="1" />;
      })}
      <polygon points={poly} fill="url(#wheelFill)" stroke="#F47B2E" strokeWidth="3" strokeLinejoin="round" />
      {PILLARS.map((p, i) => {
        const [x, y] = pt(i, v[p.key]);
        return <circle key={p.key} cx={x} cy={y} r="5" fill="var(--bg-surface)" stroke="#F47B2E" strokeWidth="2.5" />;
      })}
      {PILLARS.map((p, i) => {
        const [x, y] = pt(i, v[p.key]);
        const off = [[14, 4], [0, -12], [14, 4], [0, -12]][i];
        return (
          <text key={"v" + p.key} x={x + off[0]} y={y + off[1]} textAnchor={i === 1 || i === 3 ? "middle" : "start"} className="fill-[var(--text-accent)] font-mono text-[13px] font-bold">
            {v[p.key]}
          </text>
        );
      })}
      {PILLARS.map((p, i) => {
        const [x, y, a] = labelPos[i];
        const dx = i === 1 ? 40 : i === 3 ? -40 : 0;
        const dy = i === 0 ? -6 : i === 2 ? 6 : 0;
        return (
          <text key={"l" + p.key} x={x + dx} y={y + dy} textAnchor={a} className="fill-[var(--text-body)] font-sans text-[13.5px] font-bold">
            {p.short}
          </text>
        );
      })}
    </svg>
  );
}

/** Tự chấm điểm bốn trụ cột 1–10. Điểm chỉ lưu trên trình duyệt (localStorage). */
export function WealthWheel() {
  const [v, setV] = useState<Scores>(DEFAULT);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (saved && PILLARS.every((p) => typeof saved[p.key] === "number")) setV(saved);
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(v));
    } catch {}
  }, [v, loaded]);

  const avg = (PILLARS.reduce((s, p) => s + v[p.key], 0) / 4).toFixed(1).replace(".", ",");
  const low = PILLARS.reduce((a, p) => (v[p.key] < v[a.key] ? p : a), PILLARS[0]);

  return (
    <Card raised>
      <div className="grid items-center gap-7 min-[900px]:grid-cols-2 min-[900px]:gap-14">
        <Radar v={v} />
        <div className="flex flex-col gap-[22px]">
          {PILLARS.map((p) => (
            <label key={p.key} className="flex flex-col gap-2.5">
              <span className="flex justify-between text-[15.5px] font-bold">
                <span>{p.short}</span>
                <span className="font-mono text-[14px] tabular-nums text-accent">{v[p.key]}/10</span>
              </span>
              <input type="range" min={1} max={10} step={1} value={v[p.key]} onChange={(e) => setV({ ...v, [p.key]: +e.target.value })} className="m-0 w-full" />
            </label>
          ))}
          <div className="mt-1 rounded-input bg-soft px-[18px] py-4 text-[15px] leading-[1.6]">
            Điểm trung bình <strong className="font-mono tabular-nums">{avg}/10</strong>. Trụ cột cần chú ý nhất lúc này: <strong>{low.short}</strong>. <span className="text-subtle">{low.tip}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
