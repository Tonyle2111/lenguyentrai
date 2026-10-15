import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/brand";
import { FlowChain } from "@/components/ui/FlowChain";
import { Icon, type IconName } from "@/components/ui/Icon";
import { AnchorChip, Card, IconTile, Section } from "@/components/ui/layout";
import { FramedPhoto } from "@/components/ui/FramedPhoto";
import { PageHero } from "@/components/site/PageHero";
import { TiltIllustration } from "@/components/site/TiltIllustration";

export const metadata: Metadata = {
  title: "Phương pháp & Hệ sinh thái",
  description: "Tư duy dòng tiền trong thực tiễn: đầu tư S&P500 & hệ thống IB, mạng lưới tiêu dùng Vinalink, đào tạo và phát triển con người.",
};

function Field01() {
  const bullets = [
    "Chỉ số S&P500 là gì và vì sao nhà đầu tư dài hạn quan tâm.",
    "Cách xây kế hoạch đầu tư định kỳ phù hợp với khả năng của bạn.",
    "Mô hình IB vận hành thế nào, ai làm gì, chi phí ra sao.",
    "Những rủi ro cần hiểu rõ trước khi bắt đầu.",
  ];
  return (
    <Section id="sp500">
      <div className="grid items-start gap-10 wide:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] wide:gap-16">
        <div className="flex flex-col gap-[18px]">
          <Eyebrow>Lĩnh vực 01</Eyebrow>
          <h2 className="h2">S&P500 & Hệ thống IB.</h2>
          <p className="lead">Đầu tư dài hạn theo chỉ số, vận hành bằng kỷ luật thay vì cảm xúc thị trường.</p>
          <p className="prose-body text-subtle">
            <strong className="text-body">S&P500</strong> là chỉ số theo dõi 500 doanh nghiệp lớn niêm yết tại Mỹ. Đầu tư theo chỉ số nghĩa là sở hữu một phần nhỏ của cả nhóm, thay vì chọn từng cổ phiếu. <strong className="text-body">IB (Introducing Broker)</strong> là mô hình giới thiệu và đồng hành cùng nhà đầu tư: người đi trước hướng dẫn người đi sau mở tài khoản, hiểu sản phẩm và giữ kỷ luật.
          </p>
          <TiltIllustration file="lnt-img-05-sp500-ib.png" alt="Minh họa đầu tư S&P500 và hệ thống IB" aspect="16 / 10" className="mt-3" />
        </div>
        <Card raised className="flex flex-col gap-[18px] wide:sticky wide:top-[108px]">
          <h3 className="h3">Bạn có thể tìm hiểu</h3>
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3 text-[15.5px] leading-[1.55]">
                <span aria-hidden="true" className="mt-2 h-2 w-2 flex-none rounded-full bg-orange" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="flex gap-3 rounded-input border-[1.5px] border-dashed border-line bg-page px-4 py-3.5">
            <Icon name="info" size={20} className="mt-px text-orange" />
            <p className="text-[13.5px] leading-[1.55] text-subtle">Đầu tư tài chính có thể thua lỗ một phần hoặc toàn bộ vốn. Nội dung mang tính giáo dục, không phải lời khuyên đầu tư. Hãy cân nhắc khả năng tài chính và mức chịu rủi ro của bạn trước khi quyết định.</p>
          </div>
          <Button href="/ket-noi?quan-tam=sp" fullWidth>
            Đăng ký tìm hiểu chương trình
          </Button>
        </Card>
      </div>
    </Section>
  );
}

function Field02() {
  return (
    <Section tone="muted" id="vinalink">
      <div className="grid items-start gap-10 wide:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] wide:gap-16">
        <Card raised className="order-2 flex flex-col gap-5 wide:sticky wide:top-[108px] wide:order-none">
          <span className="mono-label text-accent">Chuỗi tiêu dùng bền vững</span>
          <FlowChain
            orientation="vertical"
            steps={[
              { label: "Sản phẩm thật", note: "Đáp ứng nhu cầu có thật" },
              { label: "Khách hàng hài lòng", note: "Dùng xong muốn dùng tiếp" },
              { label: "Tiêu dùng lặp lại", note: "Nhu cầu hằng ngày, hằng tháng" },
              { label: "Hệ thống", note: "Mạng lưới tự duy trì" },
            ]}
          />
        </Card>
        <div className="flex flex-col gap-[18px]">
          <Eyebrow>Lĩnh vực 02</Eyebrow>
          <h2 className="h2">Mạng lưới tiêu dùng Vinalink.</h2>
          <p className="lead">Biến nhu cầu tiêu dùng hằng ngày thành một mạng lưới có thể chia sẻ và nhân bản.</p>
          <TiltIllustration file="lnt-img-06-vinalink.png" alt="Minh họa mạng lưới tiêu dùng Vinalink" aspect="16 / 10" className="mt-1" />
          <p className="mt-2 max-w-[30em] font-serif text-[clamp(20px,2.2vw,24px)] italic leading-[1.45]">Một hệ thống tiêu dùng bền vững bắt đầu từ sản phẩm người dùng thật sự cần, không bắt đầu từ lời hứa thu nhập.</p>
          <FramedPhoto file="lnt-photo-p06-vinalink.jpg" alt="Sản phẩm Vinalink" frameClassName="aspect-[3/2] max-w-[520px] rounded-card border border-line" pendingText="Chờ bổ sung tư liệu: ảnh sản phẩm chính thức của Vinalink." />

          <Button href="/ket-noi?quan-tam=vl" variant="secondary" className="mt-1 self-start">
            Tìm hiểu sản phẩm & mô hình
          </Button>
        </div>
      </div>
    </Section>
  );
}

function Field03() {
  const levels: Array<[IconName, string, string]> = [
    ["brain", "Tư duy", "Hiểu dòng tiền, hệ thống và vai trò của bản thân trong đó."],
    ["wrench", "Kỹ năng", "Làm đúng từng việc: trình bày, tư vấn, theo dõi kết quả."],
    ["boxes", "Tổ chức", "Sắp xếp quy trình và con người để công việc chạy đều."],
    ["flag", "Lãnh đạo", "Dẫn dắt người khác đến lúc họ tự dẫn dắt được."],
  ];
  return (
    <Section id="dao-tao">
      <div className="mb-[clamp(28px,4vw,44px)] flex flex-col gap-4">
        <Eyebrow>Lĩnh vực 03</Eyebrow>
        <h2 className="h2">Đào tạo & Phát triển con người.</h2>
        <p className="lead">Trao lại phương pháp để người khác tự xây được hệ thống của chính họ. Bốn cấp độ, mỗi cấp là nền cho cấp sau.</p>
      </div>
      <TiltIllustration file="lnt-img-07-dao-tao.png" alt="Minh họa đào tạo và phát triển con người" />
      <div className="mt-[clamp(32px,5vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-4">
        {levels.map(([ic, t, d], i) => (
          <div key={t} className="flex flex-col gap-3.5 rounded-card border border-line bg-surface p-[clamp(22px,3vw,26px)]">
            <div className="flex items-center justify-between">
              <span className="mono-label text-accent">Cấp độ {i + 1}</span>
              <IconTile icon={ic} size={44} />
            </div>
            <h3 className="h3">{t}</h3>
            <p className="text-[15.5px] leading-[1.6] text-subtle">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Transparency() {
  const items: Array<[IconName, string, string]> = [
    ["shield-check", "Không hứa hẹn thu nhập", "Chúng tôi chia sẻ cách làm, không chia sẻ con số kỳ vọng. Kết quả của mỗi người phụ thuộc vào công sức và điều kiện riêng."],
    ["info", "Nói rõ rủi ro", "Mỗi lĩnh vực đều có rủi ro. Chúng tôi nói về rủi ro trước khi nói về cơ hội."],
    ["heart", "Tự do lựa chọn", "Bạn có thể tìm hiểu, đặt câu hỏi và từ chối. Không có áp lực thời gian hay số lượng."],
  ];
  return (
    <Section tone="inverse">
      <div className="mb-[clamp(32px,5vw,56px)] flex flex-col items-center gap-4 text-center">
        <Eyebrow>Nguyên tắc minh bạch</Eyebrow>
        <h2 className="h2 max-w-[16em] text-paper">Những điều chúng tôi cam kết khi chia sẻ.</h2>
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
    </Section>
  );
}

export default function EcosystemPage() {
  const anchors: Array<[string, string]> = [
    ["sp500", "Đầu tư S&P500 & IB"],
    ["vinalink", "Vinalink"],
    ["dao-tao", "Đào tạo & Phát triển con người"],
  ];
  return (
    <main>
      <PageHero crumb="Phương pháp & Hệ sinh thái" eyebrow="Một triết lý · Nhiều lĩnh vực" title="Tư duy dòng tiền trong thực tiễn." titleClassName="max-w-[12em]" lead="Các mô hình tạo dòng tiền dưới đây là nơi tư duy được kiểm chứng. Chúng là một phần của hành trình, chưa phải đích đến.">
        <div className="mt-2 flex flex-wrap gap-2">
          {anchors.map(([id, l]) => (
            <AnchorChip key={id} href={`#${id}`}>
              {l}
            </AnchorChip>
          ))}
        </div>
      </PageHero>
      <Field01 />
      <Field02 />
      <Field03 />
      <Transparency />
    </main>
  );
}
