import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/brand";

/** Khối kêu gọi hành động nền mực, mặt trời gradient góc dưới phải. */
export function InkCTA({ id, eyebrow, title, children, actions }: { id?: string; eyebrow: string; title: string; children: ReactNode; actions: ReactNode }) {
  return (
    <section id={id} className="px-gutter py-[clamp(56px,9vw,112px)]">
      <div data-theme="dark" className="relative mx-auto max-w-content overflow-hidden rounded-[32px] bg-ink px-[clamp(24px,6vw,72px)] py-[clamp(40px,7vw,88px)] text-paper">
        <div aria-hidden="true" className="absolute -bottom-[220px] -right-[160px] h-[520px] w-[520px] rounded-full bg-flow opacity-90" />
        <div className="relative z-[1] flex max-w-[620px] flex-col gap-5">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="h2 text-paper">{title}</h2>
          <p className="prose-body text-paper-2">{children}</p>
          <div className="mt-2 flex flex-wrap gap-3">{actions}</div>
        </div>
      </div>
    </section>
  );
}
