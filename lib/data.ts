import type { IconName } from "@/components/ui/Icon";

export const SITE = {
  name: "Lê Nguyễn Trãi",
  tagline: "Tư duy dòng tiền",
  domain: "Lenguyentrai.com",
  url: "https://lenguyentrai.com",
  description:
    "Chia sẻ nguyên lý xây dựng hệ thống thay vì chỉ làm việc để kiếm tiền, và kết nối cộng đồng hướng tới giàu có toàn diện: tài chính, sức khỏe, mối quan hệ, nội tâm.",
};

export const NAV: Array<{ href: string; label: string }> = [
  { href: "/", label: "Trang chủ" },
  { href: "/ve-toi", label: "Về tôi" },
  { href: "/tu-duy-dong-tien", label: "Tư duy dòng tiền" },
  { href: "/he-sinh-thai", label: "Phương pháp & Hệ sinh thái" },
  { href: "/cong-dong", label: "Cộng đồng" },
  { href: "/thu-vien", label: "Thư viện" },
];

export type LibraryType = "bai-viet" | "video" | "podcast";

export type LibraryItem = {
  id: string;
  type: LibraryType;
  topic: string;
  min: number;
  title: string;
  excerpt: string;
  pillar?: string;
  icon?: IconName;
  cover?: string;
};

export const ARTICLES: LibraryItem[] = [
  { id: "xach-nuoc", type: "bai-viet", pillar: "Tài chính", icon: "droplets", min: 8, topic: "Xây dựng hệ thống", title: "Xách nước hay xây đường ống?", excerpt: "Hai cách tạo ra thu nhập, và cái giá khác nhau của mỗi cách.", cover: "lnt-img-01-xach-nuoc-duong-ong.png" },
  { id: "von", type: "bai-viet", pillar: "Tài chính", icon: "scale", min: 9, topic: "Vốn & giá trị", title: "Vốn tài chính và vốn con người", excerpt: "Tiền là một loại vốn. Năng lực và niềm tin là loại vốn còn lại.", cover: "lnt-img-02-von-tai-chinh-con-nguoi.png" },
  { id: "nhan-ban", type: "bai-viet", pillar: "Mối quan hệ", icon: "waypoints", min: 11, topic: "Xây dựng hệ thống", title: "Vì sao hệ thống có thể nhân bản?", excerpt: "Một cách làm chỉ thành hệ thống khi người khác làm theo được.", cover: "lnt-img-03-cong-thuc-chuyen-giao.png" },
  { id: "dan-duong", type: "bai-viet", pillar: "Mối quan hệ", icon: "compass", min: 10, topic: "Người dẫn đường", title: "Công thức thành công và vai trò của người dẫn đường", excerpt: "Đi đúng hướng sớm tiết kiệm nhiều năm đi vòng." },
  { id: "cung-nhau", type: "bai-viet", pillar: "Nội tâm", icon: "users", min: 7, topic: "Cộng đồng", title: "Thành công cùng nhau", excerpt: "Kết quả bền vững khi người đi cùng cũng có kết quả." },
  { id: "toan-dien", type: "bai-viet", pillar: "Sức khỏe", icon: "sprout", min: 8, topic: "Giàu có toàn diện", title: "Tư duy dòng tiền và cuộc sống giàu có toàn diện", excerpt: "Tài chính là điểm khởi đầu, không phải toàn bộ câu chuyện." },
];

export const LIBRARY: LibraryItem[] = [
  ...ARTICLES,
  { id: "v-duong-ong", type: "video", topic: "Xây dựng hệ thống", min: 14, title: "Video: Vẽ lại đường ống của bạn trên một tờ giấy", excerpt: "Một bài tập 15 phút để thấy thu nhập của bạn đang đến từ xô nước hay đường ống." },
  { id: "v-nguoi-dan-duong", type: "video", topic: "Người dẫn đường", min: 18, title: "Video: Người dẫn đường làm gì, và không làm gì", excerpt: "Hướng dẫn để người khác tự đi được, không để họ phụ thuộc mãi." },
  { id: "p-ky-luat", type: "podcast", topic: "Giàu có toàn diện", min: 32, title: "Podcast: Kỷ luật nhỏ mỗi ngày", excerpt: "Những thói quen giúp người xây đường ống đi qua giai đoạn chưa thấy kết quả." },
];

export const TYPE_LABEL: Record<LibraryType, string> = { "bai-viet": "Bài viết", video: "Video", podcast: "Podcast" };

export const BUCKET_LINES = ["Thu nhập gắn với thời gian bạn có mặt.", "Dừng tay là dòng tiền dừng.", "Muốn nhiều hơn thì phải làm nhiều hơn.", "Khó trao lại cho người khác."];
export const BUCKET_CHAIN = ["Làm việc", "Tạo thu nhập", "Tiếp tục làm việc"];
export const PIPE_LINES = ["Bỏ nhiều công sức và thời gian lúc đầu.", "Hệ thống vẫn vận hành khi bạn vắng mặt.", "Người khác học được và làm theo được.", "Dòng tiền được duy trì và phát triển."];
export const PIPE_CHAIN = ["Tạo giá trị", "Xây hệ thống", "Nhân bản", "Duy trì và phát triển dòng tiền"];

export type Pillar = { key: "tc" | "sk" | "mqh" | "nt"; n: string; short: string; img: string; title: string; desc: string; tip: string };

export const PILLARS: Pillar[] = [
  { key: "tc", n: "01", short: "Tài chính", img: "lnt-img-08-tai-chinh.png", title: "Giàu có về tài chính", desc: "Dòng tiền đến từ hệ thống, không chỉ từ giờ làm. Bạn có quỹ dự phòng, có kế hoạch đầu tư và hiểu tiền của mình đang đi đâu.", tip: "Ghi lại mọi khoản chi trong bảy ngày. Bạn sẽ thấy dòng tiền rõ hơn bất kỳ lời khuyên nào." },
  { key: "sk", n: "02", short: "Sức khỏe", img: "lnt-img-09-suc-khoe.png", title: "Giàu có về sức khỏe", desc: "Người vận hành khỏe thì hệ thống mới chạy lâu. Ngủ đủ, vận động đều và ăn uống có chủ đích là khoản đầu tư sinh lời bền nhất.", tip: "Chọn một giờ đi ngủ cố định và giữ nó trong hai tuần." },
  { key: "mqh", n: "03", short: "Mối quan hệ", img: "lnt-img-10-moi-quan-he.png", title: "Giàu có về các mối quan hệ", desc: "Đi xa cần người đi cùng. Gia đình, bạn bè và đồng đội là những người tin bạn khi chưa có kết quả.", tip: "Mỗi tuần dành một buổi trọn vẹn, không điện thoại, cho người thân." },
  { key: "nt", n: "04", short: "Nội tâm", img: "lnt-img-11-noi-tam.png", title: "Giàu có về nội tâm", desc: "Bình thản trước rủi ro, kiên nhẫn với thời gian. Nội tâm an vui giúp bạn ra quyết định tốt hơn khi mọi thứ chưa chắc chắn.", tip: "Viết ra ba điều bạn biết ơn mỗi tối, trong hai mươi mốt ngày." },
];

export const INTERESTS: Array<{ id: string; label: string; icon: IconName }> = [
  { id: "td", label: "Tư duy dòng tiền", icon: "brain" },
  { id: "sp", label: "Đầu tư S&P500 & IB", icon: "landmark" },
  { id: "vl", label: "Vinalink", icon: "network" },
  { id: "cd", label: "Cộng đồng", icon: "users" },
];

/** Bỏ dấu tiếng Việt để tìm kiếm không phân biệt dấu. */
export function foldVi(s: string) {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toLowerCase();
}
