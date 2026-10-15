import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LIBRARY } from "@/lib/data";
import { Eyebrow } from "@/components/ui/brand";
import { FlowChain } from "@/components/ui/FlowChain";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/layout";
import { Photo } from "@/components/ui/Photo";
import { LibraryCard } from "@/components/site/LibraryCard";
import { NewsletterForm } from "@/components/site/NewsletterForm";
import { Breadcrumb } from "@/components/site/PageHero";
import { ReadingProgress } from "@/components/site/ReadingProgress";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return LIBRARY.map((a) => ({ id: a.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const a = LIBRARY.find((x) => x.id === id);
  return a ? { title: a.title, description: a.excerpt } : {};
}

export default async function ArticlePage({ params }: Props) {
  const { id } = await params;
  const a = LIBRARY.find((x) => x.id === id);
  if (!a) notFound();

  const related = LIBRARY.filter((x) => x.id !== a.id && x.type === "bai-viet").slice(0, 3);
  const cover = a.cover ?? "lnt-img-01-xach-nuoc-duong-ong.png";
  const p = "text-[18px] leading-[1.75]";
  const h2 = "mt-4 text-[26px] font-extrabold leading-[1.3] tracking-[-0.02em]";

  return (
    <main>
      <ReadingProgress />
      <div className="mx-auto flex max-w-[720px] flex-col gap-5 px-gutter pt-[clamp(28px,5vw,56px)]">
        <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: "Thư viện", href: "/thu-vien" }, { label: a.topic }]} />
        <Eyebrow className="mt-2">{a.topic}</Eyebrow>
        <h1 className="h1 text-[clamp(34px,5.4vw,56px)] leading-[1.08]">{a.title}</h1>
        <div className="flex items-center gap-3">
          <span className="h-8 w-8 flex-none overflow-hidden rounded-full bg-flow">
            <Photo file="lnt-photo-p02-chan-dung-2.jpg" alt="" fallback="blank" />
          </span>
          <span className="font-mono text-[13px] font-medium text-subtle">Lê Nguyễn Trãi · {a.min} phút đọc · cập nhật 10/2026</span>
        </div>
      </div>

      <div className="mx-auto mt-[clamp(28px,4vw,40px)] max-w-[1000px] px-gutter">
        <div className="aspect-video overflow-hidden rounded-card bg-soft [-webkit-mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_62%,transparent_100%)] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_62%,transparent_100%)]">
          <Photo file={cover} alt={`Minh họa bài ${a.title}`} imgClassName="object-contain" />
        </div>
      </div>

      <article id="article-body" className="mx-auto flex max-w-[720px] flex-col gap-6 px-gutter pt-[clamp(32px,5vw,48px)]">
        <p className={`${p} text-[20px] text-subtle`}>{a.excerpt}</p>
        <p className={p}>Hãy hình dung một ngôi làng cần nước. Hai người nhận việc mang nước từ con suối về. Người thứ nhất bắt đầu xách ngay. Cuối ngày, anh có tiền công. Người thứ hai dành phần lớn thời gian đào rãnh và đặt ống.</p>
        <p className={p}>Những tuần đầu, người thứ hai không có gì để khoe. Anh mệt hơn, kiếm ít hơn, và có lúc nghi ngờ chính mình.</p>
        <figure className="relative my-2 pl-6">
          <span aria-hidden="true" className="absolute bottom-1 left-0 top-1 w-1 rounded-sm bg-orange" />
          <blockquote className="font-serif text-[22px] italic leading-[1.5]">Xô nước cạn ngay khi bạn dừng tay. Đường ống thì chậm hơn lúc đầu, nhưng vẫn chảy khi bạn nghỉ.</blockquote>
        </figure>
        <h2 className={h2}>Đường ống được xây theo thứ tự</h2>
        <p className={p}>Không ai đặt ống trước khi biết nguồn nước ở đâu. Tư duy đi trước, phương pháp đi sau, hệ thống chỉ xuất hiện khi hai bước đầu đã vững.</p>
        <div className="px-1 py-6">
          <FlowChain steps={["Tư duy đúng", "Phương pháp đúng", "Hệ thống", "Nhân bản", "Phát triển bền vững"]} minStepWidth={120} />
        </div>
        <h2 className={h2}>Rủi ro và công sức</h2>
        <p className={p}>Xây đường ống không miễn phí. Bạn trả bằng thời gian, bằng thu nhập bỏ lỡ lúc đầu, và bằng khả năng đường ống không bao giờ hoàn thành. Hãy cân nhắc kỹ trước khi chọn.</p>
        <div className="rounded-input bg-soft px-[22px] py-5 text-[17px] leading-[1.65]">
          <strong>Câu hỏi để bạn tự suy ngẫm:</strong> nếu ngày mai bạn ngừng làm việc trong ba tháng, điều gì vẫn tiếp tục tạo ra giá trị?
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-4 rounded-card border border-line bg-surface p-5">
          <span className="h-16 w-16 flex-none overflow-hidden rounded-full bg-flow">
            <Photo file="lnt-photo-p02-chan-dung-2.jpg" alt="Lê Nguyễn Trãi" fallback="blank" />
          </span>
          <div className="flex flex-[1_1_220px] flex-col gap-1">
            <span className="text-[17px] font-extrabold">Lê Nguyễn Trãi</span>
            <span className="text-[15px] leading-[1.5] text-subtle">Chia sẻ tư duy dòng tiền và kiến tạo cộng đồng giàu có toàn diện.</span>
          </div>
          <Link href="/ve-toi" className="inline-flex items-center gap-2 text-[15px] font-bold text-accent no-underline hover:text-fire">
            Về tôi <Icon name="arrow-right" size={16} />
          </Link>
        </div>

        <div className="flex flex-col gap-3.5 rounded-card bg-soft p-[clamp(22px,3vw,28px)]">
          <h2 className="text-[21px] font-extrabold leading-[1.3]">Nhận bài viết mới</h2>
          <NewsletterForm variant="inline" />
        </div>
      </article>

      <Section spacing="md">
        <h2 className="mb-6 text-[24px] font-extrabold leading-[1.3]">Bài viết liên quan</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-5">
          {related.map((x) => (
            <LibraryCard key={x.id} item={x} />
          ))}
        </div>
        <Link href="/thu-vien" className="mt-8 inline-flex text-[15.5px] font-bold text-body no-underline hover:text-accent">
          ← Thư viện
        </Link>
      </Section>
    </main>
  );
}
