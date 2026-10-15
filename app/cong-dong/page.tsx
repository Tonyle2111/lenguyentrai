import type { Metadata } from "next";
import Link from "next/link";
import { PILLARS } from "@/lib/data";
import { Eyebrow } from "@/components/ui/brand";
import { FramedPhoto } from "@/components/ui/FramedPhoto";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Card, IconTile, Section, SectionHead } from "@/components/ui/layout";
import { Photo } from "@/components/ui/Photo";
import { PageHero } from "@/components/site/PageHero";
import { WealthWheel } from "@/components/site/WealthWheel";

export const metadata: Metadata = {
  title: "Cộng đồng",
  description: "Cộng đồng giàu có toàn diện: thịnh vượng tài chính, sức khỏe, mối quan hệ và nội tâm an vui.",
};

function PillarsGrid() {
  return (
    <Section>
      <SectionHead eyebrow="Bốn trụ cột" title="Thịnh vượng tài chính · Sức khỏe · Mối quan hệ · Nội tâm an vui." />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-5">
        {PILLARS.map((p) => (
          <Card key={p.key} raised className="flex flex-col gap-3.5">
            <div className="soft-edge aspect-square max-h-[280px] w-full overflow-hidden rounded-[20px] bg-soft">
              <Photo file={p.img} alt={`Minh họa ${p.title.toLowerCase()}`} imgClassName="object-contain" />
            </div>
            <span className="text-gradient self-start font-mono text-[36px] font-bold leading-none tracking-[-0.04em]">{p.n}</span>
            <h3 className="h3 text-[22px]">{p.title}</h3>
            <p className="text-[15.5px] leading-[1.6] text-subtle">{p.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function MemberTraits() {
  const traits: Array<[IconName, string, string]> = [
    ["mountain", "Khát vọng thành công", "Muốn nhiều hơn cho bản thân và những người mình thương."],
    ["lightbulb", "Tư duy mở", "Sẵn sàng nghe điều khác với điều mình đang tin."],
    ["zap", "Tinh thần chủ động", "Tự đặt câu hỏi và tự tìm bước tiếp theo."],
    ["boxes", "Tư duy hệ thống", "Nhìn thấy quy trình phía sau mỗi kết quả."],
    ["hand-heart", "Tinh thần giúp người", "Thấy vui khi người khác làm được nhờ mình."],
  ];
  return (
    <Section>
      <SectionHead eyebrow="Chân dung thành viên" title="Không giới hạn nghề nghiệp. Chung một tinh thần." />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,320px),1fr))] gap-4">
        {traits.map(([ic, t, d]) => (
          <div key={t} className="flex items-start gap-4 rounded-card border border-line bg-surface p-6">
            <IconTile icon={ic} />
            <div className="flex flex-col gap-1.5 pt-0.5">
              <h3 className="h3 text-[18px]">{t}</h3>
              <p className="text-[15px] leading-[1.55] text-subtle">{d}</p>
            </div>
          </div>
        ))}
        <div data-theme="dark" className="relative flex flex-col justify-between gap-4 overflow-hidden rounded-card bg-ink p-6 text-paper">
          <div aria-hidden="true" className="absolute -bottom-20 -right-[60px] h-[180px] w-[180px] rounded-full bg-flow opacity-35 blur-[30px]" />
          <p className="relative font-serif text-[20px] italic leading-[1.45]">Bạn thấy mình ở đây? Hãy bắt đầu bằng một cuộc trò chuyện.</p>
          <Link href="/ket-noi" className="relative inline-flex items-center gap-2 text-[15px] font-bold text-accent-dark no-underline">
            Kết nối <Icon name="arrow-right" size={16} />
          </Link>
        </div>
      </div>
    </Section>
  );
}

function JoinValues() {
  const rows = [
    "Gặp gỡ định kỳ với những người cùng xây hệ thống.",
    "Tiếp cận tài liệu, bài viết và buổi chia sẻ chuyên sâu.",
    "Có người đồng hành khi bạn bắt đầu một bước mới.",
    "Học từ những điều đã làm được, và cả những điều chưa thành.",
    "Hoạt động sức khỏe và gắn kết ngoài công việc.",
    "Cơ hội trở thành người hướng dẫn cho người đi sau.",
  ];
  return (
    <Section tone="inverse" id="tham-gia">
      <div className="grid items-start gap-8 min-[900px]:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] min-[900px]:gap-[72px]">
        <div className="flex flex-col gap-4">
          <Eyebrow>Giá trị khi tham gia</Eyebrow>
          <h2 className="h2 text-paper">Điều bạn nhận được khi đi cùng cộng đồng.</h2>
          <p className="prose-body text-paper-2">Tham gia là tự nguyện. Bạn có thể rời đi bất cứ lúc nào.</p>
        </div>
        <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
          {rows.map((r) => (
            <li key={r} className="flex items-start gap-3.5 rounded-input border border-paper/[.12] px-[18px] py-4 text-[16px] leading-[1.5] text-paper">
              <Icon name="check" size={20} className="mt-px text-orange" />
              {r}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

function Activities() {
  const items: Array<{ icon?: IconName; photo?: string; alt?: string; t: string; d: string }> = [
    { icon: "mic", t: "Buổi chia sẻ tư duy", d: "Mỗi tháng một chủ đề. Trình bày ngắn, thảo luận dài, mang về một việc cụ thể để làm." },
    { photo: "lnt-photo-p04-nhom.jpg", alt: "Nhóm đồng hành", t: "Nhóm đồng hành", d: "Nhóm nhỏ năm đến tám người, gặp nhau hằng tuần để theo dõi tiến độ và hỗ trợ nhau." },
    { photo: "lnt-photo-p05-suc-khoe.jpg", alt: "Hoạt động sức khỏe", t: "Hoạt động sức khỏe & gắn kết", d: "Đi bộ, chạy bộ và những buổi gặp gỡ ngoài công việc, cho cả thành viên và gia đình." },
  ];
  return (
    <Section>
      <SectionHead eyebrow="Hoạt động cộng đồng" title="Học cùng nhau, khỏe cùng nhau." />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-5">
        {items.map((it) => (
          <Card key={it.t} padding="md" className="flex flex-col gap-4">
            {it.photo ? <FramedPhoto file={it.photo} alt={it.alt ?? ""} frameClassName="aspect-[16/10] rounded-icon" pendingClassName="aspect-[16/10]" watermark /> : <IconTile icon={it.icon ?? "mic"} accent />}
            <h3 className="h3">{it.t}</h3>
            <p className="text-[15.5px] leading-[1.6] text-subtle">{it.d}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default function CommunityPage() {
  return (
    <main>
      <PageHero crumb="Cộng đồng" eyebrow="Cộng đồng giàu có toàn diện" title="Tiền là điểm khởi đầu. Giàu có toàn diện là đích đến." lead="Một cộng đồng của những người muốn phát triển cân bằng: tài chính vững, sức khỏe tốt, các mối quan hệ tử tế và một nội tâm bình an." />
      <PillarsGrid />
      <Section tone="muted" id="banh-xe">
        <SectionHead eyebrow="Tự đánh giá" title="Bánh xe giàu có toàn diện của bạn." lead="Chấm điểm từng trụ cột từ 1 đến 10, theo cảm nhận thật của bạn hôm nay. Điểm chỉ lưu trên trình duyệt của bạn." />
        <WealthWheel />
      </Section>
      <MemberTraits />
      <JoinValues />
      <Activities />
    </main>
  );
}
