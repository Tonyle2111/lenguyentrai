"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/layout";

const MAX = 4;
const W = 600, H = 300, TOP = 30, BOTTOM = 26;
const R = [18, 14, 11, 9, 7];

/** Cây minh họa "mỗi người hướng dẫn hai người", tối đa 4 thế hệ. */
export function MentorTree() {
  const [gen, setGen] = useState(0);
  const levels: Array<Array<{ x: number; y: number; g: number; i: number }>> = [];
  for (let g = 0; g <= gen; g++) {
    const n = Math.pow(2, g);
    const y = TOP + (g / MAX) * (H - TOP - BOTTOM);
    levels.push(Array.from({ length: n }, (_, i) => ({ x: ((i + 0.5) / n) * W, y, g, i })));
  }
  const total = Math.pow(2, gen + 1) - 2;

  return (
    <Card raised className="flex flex-col gap-4">
      <h3 className="h3">Mỗi người hướng dẫn hai người</h3>
      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full overflow-visible" role="img" aria-label={`Sơ đồ cây ${gen + 1} tầng`}>
        <defs>
          <linearGradient id="treeRoot" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#F9A51A" />
            <stop offset=".52" stopColor="#F47B2E" />
            <stop offset="1" stopColor="#EC4A0C" />
          </linearGradient>
        </defs>
        {levels.slice(1).map((lv) =>
          lv.map((nd) => {
            const p = levels[nd.g - 1][Math.floor(nd.i / 2)];
            return <line key={`l${nd.g}-${nd.i}`} x1={p.x} y1={p.y} x2={nd.x} y2={nd.y} stroke="var(--border)" strokeWidth="2" className="animate-fade-up" />;
          }),
        )}
        {levels.map((lv) =>
          lv.map((nd) =>
            nd.g === 0 ? (
              <circle key="root" cx={nd.x} cy={nd.y} r={R[0]} fill="url(#treeRoot)" />
            ) : (
              <circle key={`${nd.g}-${nd.i}`} cx={nd.x} cy={nd.y} r={R[nd.g]} fill="var(--bg-surface)" stroke="#F47B2E" strokeWidth={nd.g > 2 ? 1.5 : 2} className="animate-fade-up" />
            ),
          ),
        )}
      </svg>
      <p aria-live="polite" className="font-mono text-[13.5px] font-semibold tabular-nums text-accent">
        {gen === 0 ? "Bắt đầu: một người hiểu đúng và làm đúng." : `Thế hệ ${gen}: ${total} người đã được hướng dẫn${gen >= MAX ? ". Đã đến tầng cuối của minh họa." : "."}`}
      </p>
      <div className="flex flex-wrap gap-2.5">
        <Button size="sm" disabled={gen >= MAX} onClick={() => setGen(Math.min(MAX, gen + 1))}>
          Chuyển giao thế hệ tiếp theo
        </Button>
        <Button size="sm" variant="secondary" disabled={gen === 0} onClick={() => setGen(0)}>
          Bắt đầu lại
        </Button>
      </div>
      <p className="text-[12.5px] leading-[1.5] text-subtle">Sơ đồ minh họa nguyên lý chuyển giao, không phải mô hình tuyển dụng hay cam kết về số người hoặc thu nhập.</p>
    </Card>
  );
}
