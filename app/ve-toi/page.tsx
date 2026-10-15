import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Eyebrow, GradientText } from "@/components/ui/brand";
import { FlowChain } from "@/components/ui/FlowChain";
import type { IconName } from "@/components/ui/Icon";
import { Card, IconTile, PendingNote, Section, SectionHead } from "@/components/ui/layout";
import { Photo } from "@/components/ui/Photo";
import { PageHero } from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "Về tôi",
  description: "Người chia sẻ tư duy dòng tiền, có kinh nghiệm thực tiễn trong đầu tư, phát triển hệ thống và đào tạo đội ngũ.",
};

function Story() {
  return (
    <Section>
      <div className="grid items-center gap-10 tab:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] tab:gap-[72px]">
        <div className="flex flex-col gap-5">
          <Eyebrow>Câu chuyện</Eyebrow>
          <h2 className="h2">Một câu hỏi theo tôi suốt hành trình.</h2>
          <p className="prose-body text-subtle">Làm sao để giá trị mình tạo ra không dừng lại ở một người, một năm, mà được chuyển giao qua nhiều thế hệ? Câu hỏi đó đến với tôi từ rất sớm, và chưa bao giờ rời đi.</p>
          <p className="prose-body text-subtle">Tôi bắt đầu bằng việc tự đầu tư cho chính mình. Rồi tôi đào tạo những người đi sau, cùng họ xây dựng đội ngũ. Từ những đội ngũ đó, một tầm nhìn lớn hơn dần rõ ràng: một cộng đồng cùng nhau giàu có toàn diện.</p>
          <p className="prose-body text-subtle">Tôi không muốn ai phụ thuộc mãi vào người dẫn đường. Điều tôi muốn trao lại là cách nghĩ và phương pháp, để mỗi người tự đi tiếp được trên con đường của mình.</p>
        </div>
        <div className="relative w-full max-w-[440px] justify-self-center tab:justify-self-end">
          <div className="aspect-[4/5] overflow-hidden rounded-arch bg-flow">
            <Photo file="lnt-photo-p02-chan-dung-2.jpg" alt="Chân dung Lê Nguyễn Trãi" />
          </div>
          <Image src="/assets/logo/lnt-mark.png" alt="" aria-hidden="true" width={28} height={28} className="mark-watermark absolute bottom-5 right-5 rounded-lg opacity-90" />
        </div>
      </div>
    </Section>
  );
}

function Roles() {
  const roles: Array<[IconName, string, string]> = [
    ["compass", "Người khai mở tư duy", "Tôi đặt câu hỏi trước khi đưa câu trả lời. Mục tiêu là giúp bạn nhìn dòng tiền theo một cách khác, rồi tự quyết định con đường của mình."],
    ["boxes", "Người kiến tạo hệ thống", "Tôi biến những điều đã làm được thành quy trình rõ ràng. Một hệ thống tốt phải chạy được khi tôi không có mặt."],
    ["users", "Người kiến tạo cộng đồng", "Tôi kết nối những người cùng khát vọng. Ở đó, mỗi người vừa học hỏi vừa trở thành người dẫn đường cho người đi sau."],
  ];
  return (
    <Section tone="muted">
      <SectionHead eyebrow="Ba vai trò" title="Điều tôi làm, theo ba cách." />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-5">
        {roles.map(([ic, t, d]) => (
          <Card key={t} raised className="flex flex-col gap-4">
            <IconTile icon={ic} accent />
            <h3 className="h3">{t}</h3>
            <p className="text-[15.5px] leading-[1.6] text-subtle">{d}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Journey() {
  const stages: Array<[string, string, string, boolean?]> = [
    ["Khởi đầu", "Làm việc và câu hỏi về dòng tiền", "Những năm đầu đi làm, thu nhập tăng theo giờ làm. Tôi bắt đầu hỏi điều gì sẽ xảy ra nếu mình dừng lại."],
    ["Đầu tư", "Bước vào lĩnh vực S&P500", "Tôi học cách đầu tư dài hạn theo chỉ số, và hiểu giá trị của kỷ luật hơn là dự đoán."],
    ["Đào tạo", "Đào tạo nhà đầu tư và xây dựng hệ thống IB", "Tôi bắt đầu hướng dẫn người khác làm điều mình đã làm, và cùng họ xây dựng một hệ thống có thể nhân bản.", true],
    ["Mở rộng", "Nghiên cứu mô hình mạng lưới tiêu dùng", "Tôi tìm hiểu cách nhu cầu tiêu dùng hằng ngày có thể trở thành một mạng lưới chia sẻ giá trị."],
    ["Tầm nhìn", "Kiến tạo cộng đồng giàu có toàn diện", "Mọi chặng trước dẫn đến đây: một cộng đồng cùng phát triển tài chính, sức khỏe, mối quan hệ và nội tâm."],
  ];
  return (
    <Section>
      <div className="grid items-start gap-10 tab:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] tab:gap-[72px]">
        <div className="flex flex-col gap-5 tab:sticky tab:top-[108px]">
          <Eyebrow>Hành trình</Eyebrow>
          <h2 className="h2">Những chặng đường đã đi qua.</h2>
          <p className="lead">Không có bước nhảy vọt nào. Chỉ có những chặng nối tiếp nhau, mỗi chặng dạy tôi một điều cho chặng sau.</p>
          <PendingNote className="mt-2">Chờ bổ sung tư liệu: mốc thời gian, con số quy mô đào tạo và hình ảnh kiểm chứng…</PendingNote>
        </div>
        <ol className="relative m-0 list-none p-0">
          <span aria-hidden="true" className="absolute bottom-2.5 left-[9px] top-2.5 w-[3px] rounded-sm bg-flow-v" />
          {stages.map(([tag, t, d, photo], i) => (
            <li key={t} className={`relative flex flex-col gap-2 pl-12 ${i < stages.length - 1 ? "pb-10" : ""}`}>
              <span aria-hidden="true" className="absolute left-0 top-0 h-[21px] w-[21px] rounded-full border-4 border-orange bg-page" />
              <span className="mono-label leading-[21px] text-accent">
                Chặng {i + 1} · {tag}
              </span>
              <h3 className="h3 text-[21px]">{t}</h3>
              <p className="max-w-[52ch] text-[16px] leading-[1.6] text-subtle">{d}</p>
              {photo ? (
                <div className="mt-2.5 aspect-[3/2] w-full max-w-[360px] overflow-hidden rounded-input border border-line bg-soft">
                  <Photo file="lnt-photo-p03-chia-se.jpg" alt="Buổi chia sẻ cùng nhà đầu tư" />
                </div>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

function Growth() {
  const lines: Array<[string, string, boolean?]> = [
    ["Bắt đầu từ ", "tư duy dòng tiền."],
    ["Phát triển bằng ", "sức mạnh hệ thống."],
    ["Cùng kiến tạo ", "cuộc sống giàu có toàn diện.", true],
  ];
  return (
    <Section tone="inverse">
      <div className="mb-[clamp(36px,5vw,56px)] flex flex-col gap-4">
        <Eyebrow>Inside–out growth</Eyebrow>
        <h2 className="h2 max-w-[18em] text-paper">Trưởng thành từ bên trong để kiến tạo kết quả bên ngoài.</h2>
      </div>
      <FlowChain
        minStepWidth={118}
        ariaLabel="Chuỗi trưởng thành từ bên trong"
        steps={[
          { label: "Tư duy", note: "Cách nhìn" },
          { label: "Niềm tin", note: "Điều mình tin là thật" },
          { label: "Thái độ", note: "Cách mình phản ứng" },
          { label: "Hành động", note: "Điều mình làm mỗi ngày" },
          { label: "Năng lực", note: "Điều mình làm được" },
          { label: "Kết quả", note: "Điều người khác nhìn thấy" },
        ]}
      />
      <div className="mt-[clamp(48px,7vw,88px)] flex flex-col gap-1.5 border-t border-night-line pt-[clamp(32px,4vw,48px)]">
        {lines.map(([a, b, g]) => (
          <p key={a} className="text-[clamp(26px,4vw,46px)] font-extrabold leading-[1.2] tracking-[-0.025em] [text-wrap:balance]">
            <span className="font-medium text-paper-2">{a}</span>
            {g ? <GradientText>{b}</GradientText> : <span className="text-paper">{b}</span>}
          </p>
        ))}
      </div>
    </Section>
  );
}

function Values() {
  const values = [
    ["01", "Trách nhiệm", "Nói rõ rủi ro và công sức trước khi nói về kết quả."],
    ["02", "Kỷ luật", "Làm đúng điều cần làm, kể cả khi chưa thấy kết quả."],
    ["03", "Hợp tác", "Thành công bền vững khi người đi cùng cũng thành công."],
    ["04", "Trân trọng", "Tôn trọng lựa chọn và tốc độ riêng của mỗi người."],
  ];
  return (
    <Section>
      <SectionHead eyebrow="Giá trị" title="Bốn điều tôi giữ trong mọi việc." />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-4">
        {values.map(([n, t, d]) => (
          <div key={t} className="flex flex-col gap-2.5 rounded-card border border-line bg-surface p-6">
            <span className="mono-label text-accent">{n}</span>
            <h3 className="h3">{t}</h3>
            <p className="text-[15px] leading-[1.6] text-subtle">{d}</p>
          </div>
        ))}
      </div>
      <div className="mt-[clamp(40px,6vw,64px)] flex flex-wrap gap-3">
        <Button href="/tu-duy-dong-tien">Đọc các nguyên lý tư duy dòng tiền</Button>
        <Button href="/ket-noi" variant="secondary">
          Kết nối với tôi
        </Button>
      </div>
    </Section>
  );
}

export default function AboutPage() {
  return (
    <main>
      <PageHero crumb="Về tôi" eyebrow="Về Lê Nguyễn Trãi" title="Từ hành trình thực tiễn đến tư duy kiến tạo hệ thống." titleClassName="max-w-[14em]" lead="Người chia sẻ tư duy dòng tiền, có kinh nghiệm thực tiễn trong đầu tư, phát triển hệ thống và đào tạo đội ngũ." bottomPad="lg" />
      <Story />
      <Roles />
      <Journey />
      <Growth />
      <Values />
    </main>
  );
}
