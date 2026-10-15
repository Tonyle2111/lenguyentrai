import { cn } from "@/lib/cn";
import { FlowChain } from "@/components/ui/FlowChain";
import { Icon } from "@/components/ui/Icon";

/** Thẻ so sánh "Xách nước" (sáng) và "Xây đường ống" (mực, có quầng gradient). */
export function CompareCard({ dark, title, lines, chain }: { dark?: boolean; title: string; lines: string[]; chain: string[] }) {
  return (
    <div
      data-theme={dark ? "dark" : undefined}
      className={cn(
        "relative flex h-full flex-col gap-[22px] overflow-hidden rounded-card p-[clamp(24px,3vw,32px)]",
        dark ? "border border-transparent bg-ink text-paper shadow-raised" : "border border-line bg-surface text-body",
      )}
    >
      {dark ? <div aria-hidden="true" className="absolute -right-[120px] -top-[140px] h-80 w-80 rounded-full bg-flow opacity-[.32] blur-[50px]" /> : null}
      <h3 className="relative text-[24px] font-extrabold leading-[1.3] tracking-[-0.02em]">{title}</h3>
      <ul className="relative m-0 flex list-none flex-col gap-3.5 p-0">
        {lines.map((l) => (
          <li key={l} className="flex items-start gap-3 text-[16px] leading-[1.5]">
            <Icon name={dark ? "check" : "minus"} size={20} className={cn("mt-0.5", dark ? "text-orange" : "text-ink-2 opacity-60")} />
            <span className={dark ? "text-paper" : "text-subtle"}>{l}</span>
          </li>
        ))}
      </ul>
      <div className="relative mt-auto border-t border-line pt-[22px]">
        <FlowChain steps={chain} minStepWidth={110} />
      </div>
    </div>
  );
}
