import Link from "next/link";
import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Eyebrow } from "./brand";
import { Icon, type IconName } from "./Icon";

type Tone = "page" | "muted" | "surface" | "inverse";

const SECTION_TONE: Record<Tone, string> = {
  page: "bg-page text-body",
  muted: "bg-soft text-body",
  surface: "bg-surface text-body",
  inverse: "bg-ink text-paper",
};

/** Dải nội dung rộng 1180px, khoảng cách dọc co giãn 56–112px. Tone inverse tự chuyển sang theme tối. */
export function Section({ children, tone = "page", spacing = "lg", id, className, innerClassName }: { children: ReactNode; tone?: Tone; spacing?: "sm" | "md" | "lg"; id?: string; className?: string; innerClassName?: string }) {
  const pad = spacing === "sm" ? "py-[clamp(40px,6vw,56px)]" : spacing === "md" ? "py-[clamp(56px,8vw,80px)]" : "py-[clamp(56px,10vw,112px)]";
  return (
    <section id={id} data-theme={tone === "inverse" ? "dark" : undefined} className={cn("relative overflow-hidden", pad, SECTION_TONE[tone], className)}>
      <div className={cn("container-site relative z-[1]", innerClassName)}>{children}</div>
    </section>
  );
}

const CARD_TONE = {
  surface: "border border-line bg-surface text-body",
  muted: "border border-transparent bg-soft text-body",
  inverse: "border border-transparent bg-ink text-cream",
};

export function Card({ children, tone = "surface", raised, padding = "lg", className, ...rest }: { children: ReactNode; tone?: keyof typeof CARD_TONE; raised?: boolean; padding?: "sm" | "md" | "lg"; className?: string } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("rounded-card", padding === "sm" ? "p-5" : padding === "md" ? "p-6" : "p-[clamp(24px,3vw,32px)]", raised && "shadow-raised", CARD_TONE[tone], className)} {...rest}>
      {children}
    </div>
  );
}

/** Thẻ có thể bấm: nhấc 2px và có bóng khi hover. */
export function LinkCard({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={cn("block h-full rounded-card border border-line bg-surface p-6 text-body no-underline transition-[box-shadow,transform] duration-base ease-flow hover:-translate-y-0.5 hover:shadow-raised", className)}>
      {children}
    </Link>
  );
}

export function IconTile({ icon, size = 52, accent, onSurface, className }: { icon: IconName; size?: number; accent?: boolean; onSurface?: boolean; className?: string }) {
  return (
    <span className={cn("inline-flex flex-none items-center justify-center rounded-icon", onSurface ? "bg-surface" : "bg-soft", accent ? "text-accent" : "text-body", className)} style={{ width: size, height: size }}>
      <Icon name={icon} size={Math.round(size * 0.46)} />
    </span>
  );
}

export function PillarCard({ number, title, children }: { number: string; title: string; children?: ReactNode }) {
  return (
    <div className="flex flex-col gap-3 rounded-card border border-line bg-surface p-[clamp(22px,3vw,28px)]">
      <span className="text-gradient self-start font-mono text-[40px] font-bold leading-none tracking-[-0.04em]">{number}</span>
      <h3 className="h3 mt-2 leading-[1.25]">{title}</h3>
      {children ? <p className="text-[15.5px] leading-[1.6] text-subtle">{children}</p> : null}
    </div>
  );
}

const BADGE_TONE = {
  neutral: "bg-soft text-subtle",
  accent: "bg-soft text-accent",
  outline: "border-line bg-transparent text-body",
  gradient: "bg-flow text-ink",
};

export function Badge({ children, tone = "neutral", mono, className }: { children: ReactNode; tone?: keyof typeof BADGE_TONE; mono?: boolean; className?: string }) {
  return (
    <span className={cn("inline-flex min-h-[26px] items-center gap-1.5 rounded-full border border-transparent px-2.5", mono ? "font-mono text-[12px] font-semibold tracking-[0.02em]" : "text-[12.5px] font-bold tracking-[0.01em]", BADGE_TONE[tone], className)}>
      {children}
    </span>
  );
}

/** Ghi chú "Chờ bổ sung tư liệu" viền nét đứt. */
export function PendingNote({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-input border-[1.5px] border-dashed border-line px-[18px] py-4 text-[14px] leading-[1.55] text-subtle", className)}>{children}</div>;
}

/** Chip điều hướng tới một mục trong trang. */
export function AnchorChip({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="inline-flex h-[38px] items-center whitespace-nowrap rounded-full border border-line bg-surface px-4 text-[14.5px] font-semibold text-body no-underline transition-colors duration-fast ease-flow hover:bg-soft">
      {children}
    </a>
  );
}

export function SectionHead({ eyebrow, title, lead, center, inverse, className }: { eyebrow?: string; title: ReactNode; lead?: ReactNode; center?: boolean; inverse?: boolean; className?: string }) {
  return (
    <div className={cn("mb-[clamp(28px,4vw,48px)] flex flex-col gap-4", center ? "items-center text-center" : "items-start", className)}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="h2 max-w-[20em]">{title}</h2>
      {lead ? <p className={cn("lead", inverse && "text-paper-2", center && "mx-auto")}>{lead}</p> : null}
    </div>
  );
}
