import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "./NewsletterForm";

const MANIFESTO: Array<[string, string]> = [
  ["Tư duy dòng tiền", " là gốc rễ."],
  ["Phương pháp và hệ thống", " là con đường."],
  ["Con người và sự nhân bản", " là sức mạnh."],
  ["Cộng đồng giàu có toàn diện", " là đích đến."],
];

const COLS: Array<{ title: string; items: Array<[string, string]> }> = [
  {
    title: "Khám phá",
    items: [
      ["Tư duy dòng tiền", "/tu-duy-dong-tien"],
      ["Về Lê Nguyễn Trãi", "/ve-toi"],
      ["Phương pháp & Hệ sinh thái", "/he-sinh-thai"],
      ["Cộng đồng", "/cong-dong"],
      ["Thư viện", "/thu-vien"],
    ],
  },
  {
    title: "Kết nối",
    items: [
      ["Gửi lời nhắn", "/ket-noi"],
      ["Zalo · YouTube · Facebook", "/ket-noi#kenh"],
      ["Hoạt động cộng đồng", "/cong-dong#tham-gia"],
      ["Bánh xe giàu có toàn diện", "/cong-dong#banh-xe"],
    ],
  },
];

const head = "font-mono text-[12px] font-semibold uppercase tracking-[0.08em] text-paper-2";

export function SiteFooter() {
  return (
    <footer data-theme="dark" className="bg-ink text-paper">
      <div className="container-site grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-10 pb-10 pt-[clamp(56px,8vw,80px)]">
        <div className="flex min-w-0 flex-col gap-5">
          <Image src="/assets/logo/lnt-logo-full-dark.png" alt="Lê Nguyễn Trãi — Tư duy dòng tiền" width={1040} height={280} className="-ml-2 h-11 w-auto self-start" />
          <div className="flex flex-col gap-1.5 text-[15px] leading-[1.5]">
            {MANIFESTO.map(([a, b]) => (
              <span key={a}>
                <strong className="font-bold text-paper">{a}</strong>
                <span className="text-paper-2">{b}</span>
              </span>
            ))}
          </div>
        </div>
        {COLS.map((col) => (
          <div key={col.title} className="flex flex-col gap-3">
            <span className={head}>{col.title}</span>
            {col.items.map(([label, href]) => (
              <Link key={label} href={href} className="text-[15px] text-paper no-underline transition-colors duration-fast hover:text-accent-dark">
                {label}
              </Link>
            ))}
          </div>
        ))}
        <div className="flex flex-col gap-3">
          <span className={head}>Nhận bài viết mới</span>
          <NewsletterForm />
        </div>
      </div>
      <div className="container-site flex flex-wrap justify-between gap-4 border-t border-night-line pb-8 pt-5 text-[13px] leading-[1.55] text-paper-2">
        <span className="max-w-[70ch]">Nội dung mang tính chia sẻ tư duy và giáo dục, không phải lời khuyên đầu tư hay cam kết thu nhập. Mỗi người tự cân nhắc và chịu trách nhiệm với quyết định của mình.</span>
        <span>© {new Date().getFullYear()} Lenguyentrai.com</span>
      </div>
    </footer>
  );
}
