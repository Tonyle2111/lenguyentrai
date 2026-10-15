import { TYPE_LABEL, type LibraryItem } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { LinkCard } from "@/components/ui/layout";

export function LibraryCard({ item }: { item: LibraryItem }) {
  const cta = item.type === "video" ? "Xem video" : item.type === "podcast" ? "Nghe tập này" : "Đọc bài";
  return (
    <LinkCard href={`/thu-vien/${item.id}`} className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-3">
        <span className="mono-label inline-flex items-center gap-2 text-accent">
          {item.type !== "bai-viet" ? <Icon name={item.type === "video" ? "play-circle" : "mic"} size={15} /> : null}
          {TYPE_LABEL[item.type]}
        </span>
        <span className="font-mono text-[12px] text-subtle">{item.min} PHÚT</span>
      </div>
      <h3 className="h3">{item.title}</h3>
      <p className="flex-1 text-[15.5px] leading-[1.6] text-subtle">{item.excerpt}</p>
      <span className="mt-1.5 inline-flex items-center gap-2 text-[14.5px] font-bold text-accent">
        {cta} <Icon name="arrow-right" size={16} />
      </span>
    </LinkCard>
  );
}
