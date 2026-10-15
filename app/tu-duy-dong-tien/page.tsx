import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BUCKET_CHAIN, BUCKET_LINES, PIPE_CHAIN, PIPE_LINES } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Eyebrow, GradientText } from "@/components/ui/brand";
import { FlowChain } from "@/components/ui/FlowChain";
import { AnchorChip, Badge, Card, IconTile, Section } from "@/components/ui/layout";
import { CompareCard } from "@/components/site/CompareCard";
import { InkCTA } from "@/components/site/InkCTA";
import { MentorTree } from "@/components/site/MentorTree";
import { PageHero } from "@/components/site/PageHero";
import { PipeSimulator } from "@/components/site/PipeSimulator";
import { TiltIllustration } from "@/components/site/TiltIllustration";

export const metadata: Metadata = {
  title: "Tư duy dòng tiền",
  description: "Bốn nguyên lý cốt lõi: xách nước và xây đường ống, vốn tài chính và vốn con người, công thức chuyển giao, thành công cùng nhau.",
};

function PrincipleHead({ n, title, lead }: { n: number; title: string; lead?: ReactNode }) {
  return (
    <div className="mb-[clamp(28px,4vw,44px)] flex flex-col items-start gap-4">
      <Eyebrow>Nguyên lý {n}</Eyebrow>
      <h2 className="h2 max-w-[18em]">{title}</h2>
      {lead ? <p className="lead">{lead}</p> : null}
    </div>
  );
}

function Principle1() {
  return (
    <Section id="xach-nuoc">
      <PrincipleHead n={1} title="Xách nước và xây đường ống." lead="Cả hai đều mang nước về. Khác nhau ở chỗ điều gì xảy ra khi bạn dừng tay." />
      <TiltIllustration file="lnt-img-01-xach-nuoc-duong-ong.png" alt="Minh họa xách nước và xây đường ống" />
      <div className="mt-[clamp(32px,5vw,56px)] grid gap-5 wide:grid-cols-2">
        <CompareCard title="Xách nước" lines={BUCKET_LINES} chain={BUCKET_CHAIN} />
        <CompareCard dark title="Xây đường ống" lines={PIPE_LINES} chain={PIPE_CHAIN} />
      </div>
      <div className="mt-[clamp(56px,8vw,96px)] grid items-center gap-8 wide:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] wide:gap-16">
        <div className="flex flex-col gap-[18px]">
          <h3 className="text-[clamp(24px,2.8vw,32px)] font-extrabold leading-[1.15] tracking-[-0.02em]">Xây hệ thống không có nghĩa là không cần làm việc.</h3>
          <p className="prose-body text-subtle">Đường ống đòi hỏi nhiều việc hơn lúc đầu, không ít hơn. Bạn phải chấp nhận rủi ro khi chưa thấy kết quả. Bạn phải chuẩn hóa cách làm để người khác làm theo được. Bạn phải quản trị để hệ thống không rò rỉ. Và cuối cùng, bạn phải chuyển giao, nếu không hệ thống vẫn chỉ là một người xách nước giỏi hơn.</p>
        </div>
        <PipeSimulator />
      </div>
    </Section>
  );
}

function Principle2() {
  const chip = "h-auto self-start whitespace-normal px-3 py-[5px] leading-[1.35]";
  return (
    <Section tone="muted" id="von">
      <PrincipleHead n={2} title="Vốn tài chính và vốn con người." lead="Tiền là một loại vốn. Năng lực, niềm tin và các mối quan hệ là loại vốn còn lại, và thường bị bỏ quên." />
      <div className="grid items-center gap-7 wide:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] wide:gap-12">
        <TiltIllustration file="lnt-img-02-von-tai-chinh-con-nguoi.png" alt="Minh họa vốn tài chính và vốn con người" aspect="4 / 3" />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 rounded-card border border-line bg-surface p-[clamp(22px,3vw,28px)]">
            <h3 className="h3">Vốn tài chính</h3>
            <p className="text-[15.5px] leading-[1.6] text-subtle">Số tiền bạn có để đầu tư. Quan trọng, nhưng tăng chậm và phụ thuộc vào điểm xuất phát của mỗi người.</p>
            <Badge className={chip}>Thường bị giới hạn bởi khả năng từng cá nhân</Badge>
          </div>
          <div className="flex flex-col gap-3 rounded-card border-2 border-orange bg-surface p-[clamp(22px,3vw,28px)] shadow-raised">
            <h3 className="h3">Vốn con người</h3>
            <p className="text-[15.5px] leading-[1.6] text-subtle">Kiến thức, kỹ năng và những người tin tưởng bạn. Loại vốn này lớn lên mỗi khi được chia sẻ.</p>
            <Badge tone="gradient" className={chip}>Mở rộng được qua học hỏi, hợp tác, chuyển giao</Badge>
          </div>
        </div>
      </div>
      <p className="statement mt-[clamp(48px,7vw,80px)]">
        Đừng chỉ hỏi mình đang có bao nhiêu tiền.{" "}
        <span className="font-serif font-normal italic tracking-normal">Hãy hỏi mình có thể tạo ra giá trị cho bao nhiêu người, và cùng họ xây dựng được điều gì.</span>
      </p>
    </Section>
  );
}

function Principle3() {
  return (
    <Section id="cong-thuc">
      <PrincipleHead n={3} title="Công thức chuyển giao." lead="Một cách làm chỉ trở thành hệ thống khi nó đi qua đủ năm bước, và người cuối chuỗi bắt đầu một chuỗi mới." />
      <TiltIllustration file="lnt-img-03-cong-thuc-chuyen-giao.png" alt="Minh họa công thức chuyển giao" />
      <Card className="mt-[clamp(32px,5vw,56px)]">
        <FlowChain
          ariaLabel="Công thức chuyển giao"
          steps={[
            { label: "Hiểu đúng", note: "Nắm bản chất" },
            { label: "Làm đúng", note: "Theo phương pháp" },
            { label: "Có kết quả", note: "Tự kiểm chứng" },
            { label: "Chia sẻ", note: "Kể lại cách làm" },
            { label: "Hướng dẫn", note: "Người tiếp theo" },
          ]}
        />
      </Card>
      <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-5">
        <Card tone="muted" className="flex flex-col gap-3.5">
          <IconTile icon="sprout" onSurface />
          <h3 className="h3">Không ai phải xuất sắc ngay từ đầu.</h3>
          <p className="text-[15.5px] leading-[1.6] text-subtle">Bạn chỉ cần hiểu đúng và làm đúng một bước. Kết quả nhỏ đầu tiên là bằng chứng, và là điều bạn có thể kể lại cho người khác.</p>
        </Card>
        <Card tone="muted" className="flex flex-col gap-3.5">
          <IconTile icon="compass" onSurface />
          <h3 className="h3">Vai trò của người dẫn đường.</h3>
          <p className="text-[15.5px] leading-[1.6] text-subtle">Người dẫn đường không làm thay. Họ chỉ ra bước tiếp theo, giúp bạn tránh những đoạn vòng, rồi lùi lại để bạn tự đi.</p>
        </Card>
      </div>
    </Section>
  );
}

function Principle4() {
  return (
    <Section tone="muted" id="cung-nhau">
      <div className="grid items-start gap-10 wide:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] wide:gap-16">
        <div className="flex flex-col gap-[18px] wide:sticky wide:top-[108px]">
          <Eyebrow>Nguyên lý 4</Eyebrow>
          <h2 className="h2">Thành công cùng nhau.</h2>
          <p className="lead">Thành công của bạn chưa trọn vẹn nếu nó dừng lại ở bạn. Nó bền vững khi người bạn hướng dẫn cũng đủ sức hướng dẫn người khác.</p>
          <FlowChain orientation="vertical" className="mt-4" steps={["Mình làm được", "Giúp người khác làm được", "Họ tiếp tục giúp người khác"]} />
        </div>
        <div className="flex flex-col gap-6">
          <TiltIllustration file="lnt-img-04-thanh-cong-cung-nhau.png" alt="Minh họa thành công cùng nhau" aspect="16 / 10" />
          <MentorTree />
        </div>
      </div>
    </Section>
  );
}

export default function PrinciplesPage() {
  const anchors: Array<[string, string]> = [
    ["xach-nuoc", "1 · Xách nước và xây đường ống"],
    ["von", "2 · Vốn tài chính và vốn con người"],
    ["cong-thuc", "3 · Công thức chuyển giao"],
    ["cung-nhau", "4 · Thành công cùng nhau"],
  ];
  return (
    <main>
      <PageHero
        crumb="Tư duy dòng tiền"
        eyebrow="Nền tảng khác biệt"
        title={
          <>
            Tư duy <GradientText>dòng tiền</GradientText>: bốn nguyên lý cốt lõi.
          </>
        }
        lead="Bốn nguyên lý nối tiếp nhau. Nguyên lý đầu tiên thay đổi cách bạn nhìn thu nhập. Nguyên lý cuối cùng thay đổi cách bạn nhìn thành công."
      >
        <div className="mt-2 flex flex-wrap gap-2">
          {anchors.map(([id, l]) => (
            <AnchorChip key={id} href={`#${id}`}>
              {l}
            </AnchorChip>
          ))}
        </div>
      </PageHero>
      <Principle1 />
      <Principle2 />
      <Principle3 />
      <Principle4 />
      <InkCTA
        eyebrow="Thư viện tri thức"
        title="Đọc sâu hơn trong Thư viện tri thức."
        actions={
          <>
            <Button href="/thu-vien">Vào thư viện</Button>
            <Button href="/he-sinh-thai" variant="secondary">
              Xem các lĩnh vực ứng dụng
            </Button>
          </>
        }
      >
        Mỗi nguyên lý có những bài viết đi sâu vào cách làm, ví dụ thực tế và những sai lầm thường gặp.
      </InkCTA>
    </main>
  );
}
