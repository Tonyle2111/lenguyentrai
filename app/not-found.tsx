import { Button } from "@/components/ui/Button";
import { Eyebrow, HeroGlow, Reflection } from "@/components/ui/brand";

export default function NotFound() {
  return (
    <main className="relative overflow-hidden">
      <HeroGlow className="-bottom-[60%] -right-[30%] h-[900px] w-[900px]" />
      <div className="container-site relative z-[1] flex min-h-[60vh] flex-col items-start justify-center gap-6 py-[clamp(56px,10vw,112px)]">
        <Eyebrow>404 · Không tìm thấy trang</Eyebrow>
        <h1 className="h1-page max-w-[13em]">Đường ống này chưa được xây.</h1>
        <Reflection>Có lẽ trang bạn tìm đã đổi chỗ. Bước tiếp theo là của bạn.</Reflection>
        <div className="flex flex-wrap gap-3">
          <Button href="/">Về trang chủ</Button>
          <Button href="/thu-vien" variant="secondary">
            Vào thư viện
          </Button>
        </div>
      </div>
    </main>
  );
}
