"use client";

import { useEffect, useRef } from "react";

/** Thanh tiến độ đọc gradient, dính ngay dưới header. Theo dõi phần tử #article-body. */
export function ReadingProgress({ targetId = "article-body" }: { targetId?: string }) {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const f = () => {
      const el = document.getElementById(targetId);
      if (!el || !bar.current) return;
      const r = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (window.innerHeight * 0.35 - r.top) / Math.max(1, r.height - window.innerHeight * 0.5)));
      bar.current.style.transform = `scaleX(${p.toFixed(4)})`;
    };
    f();
    window.addEventListener("scroll", f, { passive: true });
    window.addEventListener("resize", f);
    return () => {
      window.removeEventListener("scroll", f);
      window.removeEventListener("resize", f);
    };
  }, [targetId]);

  return (
    <div aria-hidden="true" className="sticky top-16 z-[39] h-[3px] nav:top-[76px]">
      <div ref={bar} className="h-[3px] w-full origin-left scale-x-0 rounded-r-sm bg-flow-h" />
    </div>
  );
}
