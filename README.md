# Lenguyentrai.com — Tư duy dòng tiền

Website thương hiệu cá nhân của **Lê Nguyễn Trãi**, dựng bằng **Next.js 15 (App Router) + React 19 + Tailwind CSS 3**, theo design system **"Dòng Chảy"**.

## Chạy dự án

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build production (xuất HTML tĩnh cho mọi trang)
npm run start
```

Yêu cầu Node.js 18.18 trở lên (khuyến nghị bản LTS mới nhất).

## Các trang

| Đường dẫn | Nội dung |
| --- | --- |
| `/` | Trang chủ: hero, xách nước vs đường ống, mô phỏng 36 tháng, ba nền tảng, về tôi, ứng dụng, bốn trụ cột, thư viện, kết nối |
| `/ve-toi` | Câu chuyện, ba vai trò, hành trình 5 chặng, inside–out growth, giá trị |
| `/tu-duy-dong-tien` | Bốn nguyên lý cốt lõi, mô phỏng, cây chuyển giao tương tác |
| `/he-sinh-thai` | S&P500 & IB, Vinalink, Đào tạo, nguyên tắc minh bạch |
| `/cong-dong` | Bốn trụ cột, bánh xe giàu có toàn diện (lưu trên trình duyệt), hoạt động |
| `/thu-vien` | Thư viện có tab (`?tab=video`) và tìm kiếm không phân biệt dấu |
| `/thu-vien/[id]` | Trang bài đọc với thanh tiến độ đọc |
| `/ket-noi` | Form gửi lời nhắn (`?quan-tam=sp,vl` để chọn sẵn chủ đề), kênh liên hệ |

## Cấu trúc

```
app/                 Trang (App Router), layout, globals.css (design tokens)
components/ui/       Thành phần nền: Button, FlowChain, Eyebrow, Reflection, Card, Section, forms, Photo…
components/site/     Thành phần của site: Header, Footer, PipeSimulator, MentorTree, WealthWheel, MessageForm…
lib/data.ts          Nội dung: điều hướng, bài viết, trụ cột, chủ đề quan tâm
public/assets/       Logo và ảnh minh họa
```

## Design system

- Màu, gradient, bán kính, bóng đổ khai báo trong `app/globals.css` (CSS variables) và ánh xạ sang Tailwind trong `tailwind.config.ts` (`bg-page`, `bg-soft`, `text-subtle`, `text-accent`, `bg-flow`, `rounded-card`, `shadow-raised`…).
- Chế độ tối: đặt `data-theme="dark"` trên bất kỳ phần tử nào; nút mặt trăng/mặt trời trên header lưu lựa chọn vào `localStorage`.
- Font: Be Vietnam Pro, Noto Serif (giọng suy ngẫm), JetBrains Mono (số liệu) — tải qua `next/font`.
- Icon: Lucide (`lucide-react`), gọi bằng tên qua `components/ui/Icon.tsx`.

## Ảnh cần bổ sung

Thả ảnh đúng tên vào `public/assets/photos/` là tự hiển thị; khi chưa có, site hiện nhãn tên file hoặc ô "Chờ bổ sung tư liệu".

- Đã có: `lnt-img-01-xach-nuoc-duong-ong.png`, `lnt-img-02-von-tai-chinh-con-nguoi.png`, `lnt-img-03-cong-thuc-chuyen-giao.png`
- Còn thiếu: `lnt-photo-p01-chan-dung.jpg`, `lnt-photo-p02-chan-dung-2.jpg`, `lnt-photo-p03-chia-se.jpg`, `lnt-photo-p04-nhom.jpg`, `lnt-photo-p05-suc-khoe.jpg`, `lnt-photo-p06-vinalink.jpg`, `lnt-img-04-thanh-cong-cung-nhau.png`, `lnt-img-05-sp500-ib.png`, `lnt-img-06-vinalink.png`, `lnt-img-07-dao-tao.png`, `lnt-img-08-tai-chinh.png` … `lnt-img-11-noi-tam.png`

## Việc còn lại

- Form "Gửi lời nhắn" và "Nhận bài viết mới" hiện chỉ kiểm tra dữ liệu và hiện trạng thái thành công ở phía trình duyệt; cần nối với API/CRM/email khi có.
- Nội dung bài đọc đang dùng chung một bài mẫu; thay bằng nội dung thật (ví dụ MDX hoặc CMS).
- Số điện thoại / Zalo chính thức.
