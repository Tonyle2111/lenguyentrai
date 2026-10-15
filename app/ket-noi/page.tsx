import type { Metadata } from "next";
import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/Icon";
import { PendingNote, Section } from "@/components/ui/layout";
import { ChannelRow } from "@/components/site/ChannelRow";
import { MessageForm } from "@/components/site/MessageForm";
import { PageHero } from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "Kết nối",
  description: "Gửi lời nhắn, đăng ký nhận thông tin hoặc liên hệ trực tiếp với Lê Nguyễn Trãi. Bạn chọn bước tiếp theo, không có áp lực tham gia.",
};

const STEPS: Array<[string, IconName, string]> = [
  ["Đọc thêm bài viết", "book-open", "/thu-vien"],
  ["Xem video chia sẻ", "play-circle", "/thu-vien?tab=video"],
  ["Tìm hiểu hoạt động cộng đồng", "users", "/cong-dong#tham-gia"],
  ["Tự đánh giá bánh xe giàu có toàn diện", "target", "/cong-dong#banh-xe"],
];

function Channels() {
  const h = "text-[22px] font-extrabold leading-[1.3] tracking-[-0.02em]";
  return (
    <div id="kenh" className="flex scroll-mt-24 flex-col gap-3.5">
      <h2 className={h}>Liên hệ trực tiếp</h2>
      <ChannelRow icon="mail" label="Email" value="lienhe@lenguyentrai.com" />
      <ChannelRow icon="youtube" label="YouTube" value="youtube.com/@lenguyentrai" />
      <ChannelRow icon="facebook" label="Facebook" value="facebook.com/lenguyentrai" />
      <PendingNote>Chờ bổ sung: số điện thoại / Zalo chính thức.</PendingNote>
      <h2 className={`${h} mt-7`}>Bước tiếp theo bạn có thể chọn</h2>
      <div className="flex flex-col border-t border-line">
        {STEPS.map(([label, icon, href]) => (
          <Link key={label} href={href} className="group flex items-center gap-3.5 border-b border-line px-1 py-4 text-[16px] font-semibold text-body no-underline">
            <Icon name={icon} size={20} className="text-accent" />
            <span className="flex-1">{label}</span>
            <Icon name="arrow-right" size={18} className="text-subtle transition-transform duration-base ease-flow group-hover:translate-x-0.5" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function ConnectPage() {
  return (
    <main>
      <PageHero crumb="Kết nối" eyebrow="Kết nối" title="Kết nối những con người cùng khát vọng." lead="Bạn có thể đọc thêm, xem video, tìm hiểu cộng đồng, đăng ký nhận thông tin hoặc gửi lời nhắn. Bạn chọn bước tiếp theo, không có áp lực tham gia." />
      <Section>
        <div className="grid items-start gap-12 wide:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] wide:gap-14">
          <MessageForm />
          <Channels />
        </div>
      </Section>
    </main>
  );
}
