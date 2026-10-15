"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

export const PHOTO_BASE = "/assets/photos/";

/**
 * Ảnh trong /public/assets/photos. Khi file chưa có, hiển thị nhãn tên file thay vì ảnh vỡ —
 * chỉ cần thả ảnh đúng tên vào thư mục là tự hiện.
 */
export function Photo({ file, alt, label, className, imgClassName, fallback }: { file: string; alt: string; label?: string; className?: string; imgClassName?: string; fallback?: "label" | "pending" | "blank" }) {
  const [err, setErr] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  // Ảnh lỗi trước khi hydrate sẽ không bắn onError — kiểm tra lại sau khi mount.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setErr(true);
  }, []);

  if (err) {
    if (fallback === "blank") return <div className={cn("relative h-full w-full", className)} />;
    if (fallback === "pending") {
      return (
        <div className={cn("flex h-full w-full items-center justify-center rounded-icon border-[1.5px] border-dashed border-line p-5 text-center text-[14px] leading-[1.5] text-subtle", className)}>
          Chờ bổ sung tư liệu: {file}
        </div>
      );
    }
    return (
      <div className={cn("relative h-full w-full", className)}>
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center font-mono text-[11.5px] font-medium uppercase tracking-[0.06em] text-ink opacity-70">{label ?? file}</div>
      </div>
    );
  }

  return (
    <div className={cn("relative h-full w-full", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img ref={ref} src={PHOTO_BASE + file} alt={alt} onError={() => setErr(true)} className={cn("block h-full w-full object-cover", imgClassName)} />
    </div>
  );
}
