import Link from "next/link";
import { ARTICLES, BUCKET_CHAIN, BUCKET_LINES, PIPE_CHAIN, PIPE_LINES } from "@/lib/data";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Eyebrow, GradientText, HeroGlow, Reflection } from "@/components/ui/brand";
import { FlowChain } from "@/components/ui/FlowChain";
import { Icon, type IconName } from "@/components/ui/Icon";
import { LinkCard, PillarCard, Section, SectionHead } from "@/components/ui/layout";
import { Photo } from "@/components/ui/Photo";
import { CompareCard } from "@/components/site/CompareCard";
import { InkCTA } from "@/components/site/InkCTA";
import { PipeSimulator } from "@/components/site/PipeSimulator";

function HomeHero() {
  const dot = <span className="mx-[0.5em] text-orange">·</span>;
  return (
    <section className="relative overflow-hidden">
      <HeroGlow className="-bottom-[20%] -right-[70%] h-[640px] w-[640px] tab:-bottom-[62%] tab:-right-[20%] tab:h-[1150px] tab:w-[1150px]" />
      <div className="container-site relative z-[1] grid items-center gap-12 pb-[clamp(56px,9vw,112px)] pt-[clamp(40px,7vw,88px)] tab:grid-cols-[55fr_45fr] tab:gap-16">
        <div className="flex min-w-0 flex-col gap-6">
          <Eyebrow>Lê Nguyễn Trãi · Lenguyentrai.com</Eyebrow>
          <h1 className="h1 text-[clamp(48px,8vw,90px)]">
            Tư duy <GradientText>dòng tiền</GradientText>
          </h1>
          <p className="text-[13px] font-bold uppercase leading-[1.7] tracking-[0.1em] text-body">
            Bắt đầu từ tư duy{dot}Phát triển bằng hệ thống{dot}Thành công cùng nhau
          </p>
          <Reflection>Bạn đang làm việc để kiếm tiền, hay đang xây dựng một hệ thống tạo ra dòng tiền?</Reflection>
          <div className="flex flex-col gap-3.5">
            <p className="prose-body text-subtle">Tôi chia sẻ nguyên lý xây dựng hệ thống, thay vì chỉ làm việc để đổi lấy thu nhập. Đó là những điều tôi đã học, đã làm và đã thấy hiệu quả, cùng cả những lần chưa thành.</p>
            <p className="prose-body text-subtle">Đây cũng là nơi kết nối những người muốn giàu có toàn diện: tài chính, sức khỏe, mối quan hệ và nội tâm.</p>
          </div>
          <div className="mt-1 flex flex-wrap gap-3">
            <Button href="/tu-duy-dong-tien">Khám phá tư duy dòng tiền</Button>
            <Button href="/ve-toi" variant="secondary">
              Tìm hiểu về tôi
            </Button>
          </div>
        </div>
        <div className="relative w-full max-w-[460px] justify-self-center tab:justify-self-end">
          <div className="relative aspect-[4/5] overflow-hidden rounded-arch bg-flow">
            <div aria-hidden="true" className="absolute left-1/2 top-[16%] aspect-square w-[82%] -translate-x-1/2 rounded-full bg-white/[.22]" />
            <Photo file="lnt-photo-p01-chan-dung.jpg" alt="Chân dung Lê Nguyễn Trãi" className="!absolute inset-0" imgClassName="object-[center_bottom]" />
          </div>
          <div data-theme="dark" className="absolute bottom-4 left-4 right-4 flex flex-col gap-1 rounded-icon bg-ink px-[18px] py-3.5 text-paper shadow-pop">
            <span className="text-[15.5px] font-extrabold tracking-[-0.01em]">Lê Nguyễn Trãi</span>
            <span className="text-[13.5px] leading-[1.45] text-paper-2">Tư duy dòng tiền & Kiến tạo cộng đồng giàu có toàn diện</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function BucketVsPipe() {
  return (
    <Section tone="muted" id="xach-nuoc">
      <div className="flex flex-col items-center gap-4 text-center">
        <Eyebrow>Xách nước hay xây đường ống</Eyebrow>
        <h2 className="h2 max-w-[18em]">Cùng là kiếm tiền, nhưng khác nhau ở cách tư duy.</h2>
      </div>
      <div className="soft-edge mx-auto my-[clamp(28px,4vw,40px)] aspect-video max-w-[720px] tab:mb-[clamp(28px,4vw,48px)]">
        <Photo file="lnt-img-01-xach-nuoc-duong-ong.png" alt="Minh họa người xách nước và người xây đường ống" className="bg-surface" imgClassName="object-contain" />
      </div>
      <div className="grid items-stretch gap-4 tab:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] tab:gap-5">
        <CompareCard title="Xách nước" lines={BUCKET_LINES} chain={BUCKET_CHAIN} />
        <div className="flex h-14 w-14 items-center justify-center self-center justify-self-center rounded-full border border-line bg-page font-serif text-[18px] italic text-accent">hay</div>
        <CompareCard dark title="Xây đường ống" lines={PIPE_LINES} chain={PIPE_CHAIN} />
      </div>
      <p className="statement mt-[clamp(40px,6vw,72px)]">
        Đừng chỉ hỏi mình có thể làm được bao nhiêu.{" "}
        <span className="font-serif font-normal italic tracking-normal">Hãy hỏi mình có thể xây dựng một hệ thống giúp bao nhiêu người cùng làm được.</span>
      </p>
    </Section>
  );
}

function Simulation() {
  return (
    <Section>
      <div className="grid items-center gap-8 wide:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] wide:gap-16">
        <div className="flex flex-col gap-5">
          <Eyebrow>Mô phỏng</Eyebrow>
          <h2 className="h2 text-[clamp(28px,3.6vw,42px)]">Xô nước cạn ngay khi bạn dừng tay. Đường ống thì chậm hơn lúc đầu.</h2>
          <p className="prose-body text-subtle">Những tháng đầu, người xách nước luôn có nhiều hơn. Đường ống cần thời gian để xây, và có lúc tưởng như không chảy. Kéo thanh trượt để xem điều gì xảy ra khi bạn ngừng trực tiếp làm ở các thời điểm khác nhau.</p>
          <Link href="/tu-duy-dong-tien#xach-nuoc" className="inline-flex items-center gap-2 text-[15.5px] font-bold text-accent no-underline hover:text-fire">
            Đọc nguyên lý đầy đủ <Icon name="arrow-right" size={18} />
          </Link>
        </div>
        <PipeSimulator />
      </div>
    </Section>
  );
}

function Foundations() {
  const items: Array<[IconName, string, string]> = [
    ["brain", "Tư duy", "Hiểu dòng tiền đến từ đâu, và vì sao chăm chỉ thôi là chưa đủ."],
    ["boxes", "Hệ thống", "Biến cách làm thành quy trình có thể lặp lại khi bạn không có mặt."],
    ["users", "Con người", "Hệ thống chỉ bền khi có người hiểu, làm theo và cùng phát triển."],
  ];
  return (
    <Section tone="inverse">
      <div className="mb-[clamp(32px,4vw,48px)] flex flex-col gap-4">
        <Eyebrow>Ba nền tảng</Eyebrow>
        <h2 className="h2 text-paper">Tư duy · Hệ thống · Con người</h2>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-4">
        {items.map(([ic, t, d]) => (
          <div key={t} className="flex flex-col gap-3.5 rounded-card border border-paper/[.12] p-[clamp(24px,3vw,28px)]">
            <span className="inline-flex h-[52px] w-[52px] items-center justify-center rounded-icon bg-paper/[.06] text-accent-dark">
              <Icon name={ic} size={24} />
            </span>
            <h3 className="h3 text-paper">{t}</h3>
            <p className="text-[15.5px] leading-[1.6] text-paper-2">{d}</p>
          </div>
        ))}
      </div>
      <div className="mt-[clamp(40px,6vw,64px)]">
        <FlowChain steps={["Tư duy đúng", "Phương pháp đúng", "Hệ thống", "Nhân bản", "Phát triển bền vững"]} ariaLabel="Chuỗi phát triển" />
      </div>
    </Section>
  );
}

function AboutMe() {
  return (
    <Section id="ve-toi">
      <div className="grid items-center gap-10 tab:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] tab:gap-[72px]">
        <div className="aspect-[4/5] w-full max-w-[460px] justify-self-center overflow-hidden rounded-arch-inv border border-line bg-soft tab:justify-self-start">
          <Photo file="lnt-photo-p03-chia-se.jpg" alt="Lê Nguyễn Trãi chia sẻ cùng cộng đồng" />
        </div>
        <div className="flex flex-col gap-[22px]">
          <Eyebrow>Về Lê Nguyễn Trãi</Eyebrow>
          <h2 className="h2 text-[clamp(28px,3.8vw,44px)]">Từ hành trình thực tiễn đến tư duy kiến tạo hệ thống.</h2>
          <p className="prose-body text-subtle">Tôi bắt đầu như phần lớn mọi người: làm việc chăm chỉ và đổi thời gian lấy thu nhập. Rồi tôi nhận ra điều mình thiếu không phải sự cố gắng, mà là một cách nghĩ khác về dòng tiền.</p>
          <Reflection size="lg">Điều gì sẽ còn lại khi bạn không còn trực tiếp làm việc?</Reflection>
          <p className="prose-body text-subtle">Câu hỏi đó dẫn tôi qua đầu tư chỉ số S&P500, đào tạo và phát triển con người, và xây dựng mạng lưới tiêu dùng. Mỗi lĩnh vực một cách làm, nhưng cùng một nguyên lý: xây hệ thống, rồi giúp người khác làm được như vậy.</p>
          <Button href="/ve-toi" variant="secondary" className="self-start">
            Khám phá hành trình của tôi
          </Button>
        </div>
      </div>
    </Section>
  );
}

function AppCard({ n, icon, title, desc, dark, href }: { n: string; icon: IconName; title: string; desc: string; dark?: boolean; href: string }) {
  return (
    <Link
      href={href}
      data-theme={dark ? "dark" : undefined}
      className={cn(
        "flex h-full flex-col gap-4 rounded-card border p-[clamp(24px,3vw,32px)] no-underline transition-[transform,border-color,box-shadow] duration-base ease-flow hover:-translate-y-[3px] hover:border-orange hover:shadow-raised",
        dark ? "border-transparent bg-ink text-paper shadow-raised" : "border-line bg-surface text-body",
      )}
    >
      <span className="mono-label text-accent">ỨNG DỤNG {n}</span>
      <span className={cn("inline-flex h-[52px] w-[52px] items-center justify-center rounded-icon", dark ? "bg-paper/[.08]" : "bg-soft")}>
        <Icon name={icon} size={24} />
      </span>
      <h3 className="h3 text-[21px]">{title}</h3>
      <p className={cn("flex-1 text-[15.5px] leading-[1.6]", dark ? "text-paper-2" : "text-subtle")}>{desc}</p>
      <span className="inline-flex items-center gap-2 text-[15px] font-bold text-accent">
        Tìm hiểu <Icon name="arrow-right" size={16} />
      </span>
    </Link>
  );
}

function Applications() {
  return (
    <Section tone="muted" id="ung-dung">
      <SectionHead eyebrow="Phương pháp & Hệ sinh thái" title="Một triết lý, nhiều lĩnh vực." />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-5">
        <AppCard dark href="/he-sinh-thai#sp500" n="01" icon="landmark" title="S&P500 & Hệ thống IB" desc="Đầu tư dài hạn theo chỉ số, vận hành bằng một hệ thống rõ ràng thay vì cảm xúc thị trường." />
        <AppCard href="/he-sinh-thai#vinalink" n="02" icon="network" title="Mạng lưới tiêu dùng Vinalink" desc="Biến nhu cầu tiêu dùng hằng ngày thành một mạng lưới có thể chia sẻ và nhân bản." />
        <AppCard href="/he-sinh-thai#dao-tao" n="03" icon="graduation-cap" title="Đào tạo & Phát triển con người" desc="Trao lại phương pháp để người khác tự xây được hệ thống của chính họ." />
      </div>
    </Section>
  );
}

function CommunityPillars() {
  return (
    <Section>
      <SectionHead eyebrow="Cộng đồng giàu có toàn diện" title="Thành công tài chính là điểm khởi đầu. Giàu có toàn diện là đích đến." />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-4">
        <PillarCard number="01" title="Tài chính">Dòng tiền đến từ hệ thống, không chỉ từ giờ làm.</PillarCard>
        <PillarCard number="02" title="Sức khỏe">Người vận hành khỏe thì hệ thống mới chạy lâu.</PillarCard>
        <PillarCard number="03" title="Mối quan hệ">Đi xa cần người đi cùng, và người tin bạn.</PillarCard>
        <PillarCard number="04" title="Nội tâm">Bình thản trước rủi ro. Kiên nhẫn với thời gian.</PillarCard>
      </div>
      <Button href="/cong-dong" variant="secondary" className="mt-8">
        Khám phá tầm nhìn cộng đồng
      </Button>
    </Section>
  );
}

function Library() {
  return (
    <Section tone="muted">
      <div className="flex flex-wrap items-end justify-between gap-x-6">
        <SectionHead eyebrow="Thư viện tri thức" title="Mỗi góc nhìn đúng có thể mở ra một hướng đi mới." />
        <Button href="/thu-vien" variant="secondary" size="sm" arrow className="mb-[clamp(28px,4vw,48px)]">
          Vào thư viện
        </Button>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,320px),1fr))] gap-5">
        {ARTICLES.map((a) => (
          <LinkCard key={a.id} href={`/thu-vien/${a.id}`} className="flex flex-col gap-3">
            <span className="mono-label text-accent">Bài viết</span>
            <h3 className="h3">{a.title}</h3>
            <p className="flex-1 text-[15.5px] leading-[1.6] text-subtle">{a.excerpt}</p>
            <span className="mt-1.5 inline-flex items-center gap-2 text-[14.5px] font-bold text-accent">
              Đọc bài <Icon name="arrow-right" size={16} />
            </span>
          </LinkCard>
        ))}
      </div>
    </Section>
  );
}

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <BucketVsPipe />
      <Simulation />
      <Foundations />
      <AboutMe />
      <Applications />
      <CommunityPillars />
      <Library />
      <InkCTA
        id="ket-noi"
        eyebrow="Kết nối"
        title="Kết nối những con người cùng khát vọng."
        actions={
          <>
            <Button href="/ket-noi">Kết nối với Lê Nguyễn Trãi</Button>
            <Button href="/cong-dong" variant="secondary">
              Khám phá cộng đồng
            </Button>
          </>
        }
      >
        Nếu bạn đang muốn xây một hệ thống của riêng mình, hoặc chỉ muốn trao đổi về một góc nhìn, hãy gửi cho tôi đôi dòng. Không có cam kết nào ở bước này.
      </InkCTA>
    </main>
  );
}
