"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { cn } from "@/lib/cn";
import { Photo } from "@/components/ui/Photo";

function useReducedMotion() {
  const [r, setR] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const f = () => setR(mq.matches);
    f();
    mq.addEventListener("change", f);
    return () => mq.removeEventListener("change", f);
  }, []);
  return r;
}

/** Minh họa rộng, viền mờ dần; nghiêng nhẹ (≤4°) theo chuột và có vệt sáng quét chéo khi hover. */
export function TiltIllustration({ file, alt, aspect = "16 / 9", maxWidth = 880, className }: { file: string; alt: string; aspect?: string; maxWidth?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [t, setT] = useState({ rx: 0, ry: 0, on: false });

  const move = (e: MouseEvent) => {
    if (reduce || !ref.current) return;
    const b = ref.current.getBoundingClientRect();
    const px = (e.clientX - b.left) / b.width - 0.5;
    const py = (e.clientY - b.top) / b.height - 0.5;
    setT({ rx: -py * 8, ry: px * 8, on: true });
  };

  const mask = "radial-gradient(ellipse 74% 72% at 50% 50%, #000 56%, transparent 100%)";
  return (
    <div className={cn("mx-auto w-full [perspective:1100px]", className)} style={{ maxWidth }}>
      <div
        ref={ref}
        onMouseMove={move}
        onMouseEnter={() => setT((s) => ({ ...s, on: true }))}
        onMouseLeave={() => setT({ rx: 0, ry: 0, on: false })}
        className="relative"
        style={{
          aspectRatio: aspect,
          transform: `rotateX(${t.rx.toFixed(2)}deg) rotateY(${t.ry.toFixed(2)}deg)`,
          transition: t.on ? "transform 120ms linear" : "transform 420ms cubic-bezier(.22,.61,.36,1)",
          WebkitMaskImage: mask,
          maskImage: mask,
        }}
      >
        <Photo file={file} alt={alt} imgClassName="object-contain" className="bg-[color-mix(in_oklab,var(--bg-surface)_70%,transparent)]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(115deg, transparent 38%, rgba(255,248,236,.45) 50%, transparent 62%)",
            backgroundSize: "260% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: t.on && !reduce ? "0% 0" : "120% 0",
            opacity: t.on && !reduce ? 1 : 0,
            transition: "background-position 900ms cubic-bezier(.22,.61,.36,1), opacity 300ms",
          }}
        />
      </div>
    </div>
  );
}
