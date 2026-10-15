import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Eyebrow, HeroGlow } from "@/components/ui/brand";

export function Breadcrumb({ items }: { items: Array<{ label: string; href?: string }> }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-[14px] font-semibold text-subtle">
      {items.map((it, i) => (
        <span key={it.label} className="flex gap-2">
          {i > 0 ? <span aria-hidden="true" className="text-line">/</span> : null}
          {it.href ? (
            <Link href={it.href} className="text-subtle no-underline hover:text-body">
              {it.label}
            </Link>
          ) : (
            <span className="text-body">{it.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

/** Hero của các trang con: breadcrumb, eyebrow, H1, lead, và quầng sáng hổ phách góc phải trên. */
export function PageHero({ crumb, eyebrow, title, lead, children, titleClassName, bottomPad = "default", bordered = true }: { crumb: string; eyebrow: string; title: ReactNode; lead?: ReactNode; children?: ReactNode; titleClassName?: string; bottomPad?: "default" | "none" | "lg"; bordered?: boolean }) {
  return (
    <section className={cn("relative overflow-hidden", bordered && "border-b border-line")}>
      <HeroGlow className="-top-[70%] right-[-18%] h-[900px] w-[900px]" />
      <div className={cn("container-site relative z-[1] flex flex-col gap-[22px] pt-[clamp(32px,5vw,56px)]", bottomPad === "none" ? "pb-0" : bottomPad === "lg" ? "pb-[clamp(56px,8vw,96px)]" : "pb-[clamp(48px,7vw,80px)]")}>
        <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: crumb }]} />
        <Eyebrow className="mt-3">{eyebrow}</Eyebrow>
        <h1 className={cn("h1-page", titleClassName ?? "max-w-[13em]")}>{title}</h1>
        {lead ? <p className="lead">{lead}</p> : null}
        {children}
      </div>
    </section>
  );
}
