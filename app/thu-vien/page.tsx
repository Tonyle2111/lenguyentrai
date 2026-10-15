import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { LibraryBrowser } from "@/components/site/LibraryBrowser";

export const metadata: Metadata = {
  title: "Thư viện tri thức",
  description: "Bài viết, video và podcast về tư duy dòng tiền, hệ thống và con người.",
};

export default function LibraryPage() {
  return (
    <main>
      <PageHero crumb="Thư viện" eyebrow="Thư viện tri thức" title="Mỗi góc nhìn đúng có thể mở ra một hướng đi mới." titleClassName="max-w-[14em]" lead="Bài viết, video và podcast về tư duy dòng tiền, hệ thống và con người. Đọc chậm, nghĩ lâu." bottomPad="none" bordered={false} />
      <LibraryBrowser />
    </main>
  );
}
