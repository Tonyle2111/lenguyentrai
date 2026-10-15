import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Nhãn nhỏ viết hoa, có vạch gradient 22×4 phía trước. */
export function Eyebrow({ children, bar = true, className }: { children: ReactNode; bar?: boolean; className?: string }) {
  return (
    <div className={cn("inline-flex items-center gap-2.5 text-[12.5px] font-bold uppercase leading-[1.2] tracking-[0.14em] text-accent", className)}>
      {bar ? <span aria-hidden="true" className="h-1 w-[22px] flex-none rounded-sm bg-flow-h" /> : null}
      <span>{children}</span>
    </div>
  );
}

/** Cụm từ gradient — mỗi màn hình chỉ một lần. */
export function GradientText({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("text-gradient", className)}>{children}</span>;
}

/** Giọng suy ngẫm: Noto Serif nghiêng, vạch gradient 4px bên trái. */
export function Reflection({ children, cite, size = "md", className }: { children: ReactNode; cite?: ReactNode; size?: "md" | "lg"; className?: string }) {
  return (
    <figure className={cn("relative m-0 max-w-[34em]", size === "lg" ? "pl-7" : "pl-[22px]", className)}>
      <span aria-hidden="true" className="absolute bottom-1 left-0 top-1 w-1 rounded-sm bg-flow-v" />
      <blockquote className={cn("m-0 font-serif italic leading-[1.45] text-body", size === "lg" ? "text-[clamp(22px,2.6vw,30px)]" : "text-[21px]")}>{children}</blockquote>
      {cite ? <figcaption className="mt-3.5 text-[14px] font-semibold text-subtle">{cite}</figcaption> : null}
    </figure>
  );
}

/** Mặt trời hổ phách mờ ở góc hero. Phần tử cha cần relative + overflow-hidden. */
export function HeroGlow({ className }: { className?: string }) {
  return <div aria-hidden="true" className={cn("pointer-events-none absolute z-0 rounded-full bg-glow", className)} />;
}
