"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { PHOTO_BASE } from "./Photo";

/**
 * Ảnh tư liệu có khung. Khi chưa có file, cả khung được thay bằng ô nét đứt "Chờ bổ sung tư liệu".
 * watermark: đóng dấu mark L nhỏ ở góc như thiết kế ảnh hoạt động cộng đồng.
 */
export function FramedPhoto({ file, alt, frameClassName, pendingClassName, pendingText, watermark }: { file: string; alt: string; frameClassName?: string; pendingClassName?: string; pendingText?: string; watermark?: boolean }) {
  const [ok, setOk] = useState(true);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setOk(false);
  }, []);

  if (!ok) {
    return (
      <div className={cn("flex items-center justify-center rounded-icon border-[1.5px] border-dashed border-line p-5 text-center text-[14px] leading-[1.5] text-subtle", pendingClassName)}>
        {pendingText ?? `Chờ bổ sung tư liệu: ${file}`}
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden bg-soft", frameClassName)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img ref={ref} src={PHOTO_BASE + file} alt={alt} onError={() => setOk(false)} className="block h-full w-full object-cover" />
      {watermark ? <Image src="/assets/logo/lnt-mark.png" alt="" aria-hidden="true" width={24} height={24} className="mark-watermark absolute bottom-3 right-3 rounded-[7px] opacity-75" /> : null}
    </div>
  );
}
