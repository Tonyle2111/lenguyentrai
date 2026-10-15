"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type Step = string | { label: string; note?: string };

function Node({ n, last }: { n: number; last: boolean }) {
  return (
    <span
      className={cn(
        "relative z-[1] inline-flex h-11 w-11 flex-none items-center justify-center rounded-full font-mono text-[14px] tabular-nums",
        last ? "bg-flow font-bold text-ink shadow-[0_10px_22px_-10px_rgba(236,74,12,.65)]" : "border-2 border-orange bg-surface font-semibold text-accent",
      )}
    >
      {String(n).padStart(2, "0")}
    </span>
  );
}

function Label({ step, align }: { step: { label: string; note?: string }; align: "left" | "center" }) {
  return (
    <span className={cn("flex min-w-0 flex-col gap-1", align === "center" ? "text-center" : "text-left")}>
      <span className="text-[15.5px] font-bold leading-[1.3] tracking-[-0.005em] text-body [text-wrap:balance]">{step.label}</span>
      {step.note ? <span className="text-[13.5px] leading-[1.45] text-subtle">{step.note}</span> : null}
    </span>
  );
}

/**
 * Chữ ký "chuỗi dòng chảy": các nút tròn 44px nối bằng ống sọc hổ phách/cam chảy theo chiều dòng.
 * Nút cuối là kết quả (gradient). Tự chuyển sang dọc khi không đủ chỗ.
 */
export function FlowChain({ steps, orientation = "auto", minStepWidth = 120, ariaLabel, className }: { steps: Step[]; orientation?: "auto" | "horizontal" | "vertical"; minStepWidth?: number; ariaLabel?: string; className?: string }) {
  const items = steps.map((s) => (typeof s === "string" ? { label: s } : s));
  const n = items.length;
  const ref = useRef<HTMLDivElement>(null);
  const [autoV, setAutoV] = useState(false);

  useEffect(() => {
    if (orientation !== "auto" || !ref.current) return;
    const ro = new ResizeObserver(([e]) => setAutoV(e.contentRect.width < n * minStepWidth));
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, [orientation, n, minStepWidth]);

  const vertical = orientation === "vertical" || (orientation === "auto" && autoV);
  const inset = `calc((100% - ${(n - 1) * 12}px) / ${2 * n})`;

  return (
    <div ref={ref} className={cn("w-full", className)}>
      {vertical ? (
        <ol aria-label={ariaLabel} className="m-0 flex list-none flex-col p-0">
          {items.map((it, i) => (
            <li key={i} className={cn("relative flex items-start gap-4", i < n - 1 && "pb-[22px]")}>
              {i < n - 1 ? <span aria-hidden="true" className="absolute left-[19px] top-[22px] z-0 h-full w-1.5 animate-pipe-flow-v rounded-full bg-stripes [background-size:28.284px_28.284px]" /> : null}
              <Node n={i + 1} last={i === n - 1} />
              <span className="pt-[11px]">
                <Label step={it} align="left" />
              </span>
            </li>
          ))}
        </ol>
      ) : (
        <ol aria-label={ariaLabel} className="relative m-0 grid list-none gap-x-3 p-0" style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}>
          <span aria-hidden="true" className="absolute top-[19px] z-0 h-1.5 animate-pipe-flow rounded-full bg-stripes [background-size:28.284px_28.284px]" style={{ left: inset, right: inset }} />
          {items.map((it, i) => (
            <li key={i} className="flex flex-col items-center gap-3.5">
              <Node n={i + 1} last={i === n - 1} />
              <Label step={it} align="center" />
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
