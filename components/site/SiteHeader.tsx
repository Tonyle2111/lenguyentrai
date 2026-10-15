"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/data";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ThemeToggle } from "./ThemeToggle";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
}

export function BrandLockup() {
  return (
    <Link href="/" className="flex flex-none items-center gap-2.5 text-body no-underline">
      <Image src="/assets/logo/lnt-mark.png" alt="" width={36} height={36} className="block h-9 w-9 rounded-[10px]" priority />
      <span className="flex flex-col gap-0.5">
        <span className="text-[16px] font-extrabold leading-[1.1] tracking-[-0.02em] nav:text-[17px]">Lê Nguyễn Trãi</span>
        <span className="text-[10px] font-bold leading-[1.1] tracking-[0.16em] text-subtle">TƯ DUY DÒNG TIỀN</span>
      </span>
    </Link>
  );
}

/** Header dính, nền kem gần đục + viền 1px. Dưới 1180px chuyển sang menu thả xuống. */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-[color-mix(in_oklab,var(--bg-page)_94%,transparent)]">
      <div className="container-site flex h-16 items-center justify-between gap-6 nav:h-[76px]">
        <BrandLockup />
        <div className="flex items-center gap-1.5 nav:gap-7">
          <nav aria-label="Điều hướng chính" className="hidden items-center gap-6 nav:flex">
            {NAV.map((item) => {
              const on = isActive(pathname, item.href);
              return (
                <Link key={item.href} href={item.href} aria-current={on ? "page" : undefined} className={cn("relative whitespace-nowrap py-2 text-[14.5px] no-underline transition-colors duration-fast hover:text-body", on ? "font-bold text-body" : "font-semibold text-subtle")}>
                  {item.label}
                  {on ? <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-sm bg-orange" /> : null}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <Button href="/ket-noi" size="sm" className={cn("hidden nav:inline-flex", pathname === "/ket-noi" && "shadow-[0_0_0_2px_var(--bg-page),0_0_0_4px_#F47B2E]")}>
              Kết nối
            </Button>
            <button type="button" aria-label={open ? "Đóng menu" : "Mở menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="inline-flex h-11 w-11 items-center justify-center rounded-full text-body transition-colors duration-fast hover:bg-soft nav:hidden">
              <Icon name={open ? "x" : "menu"} size={20} />
            </button>
          </div>
        </div>
      </div>
      {open ? (
        <nav aria-label="Điều hướng chính" className="flex max-h-[calc(100vh-64px)] animate-fade-up flex-col overflow-y-auto border-t border-line bg-page px-gutter pb-6 pt-1 nav:hidden">
          {NAV.map((item) => {
            const on = isActive(pathname, item.href);
            return (
              <Link key={item.href} href={item.href} aria-current={on ? "page" : undefined} className={cn("border-b border-line py-3.5 text-[18px] no-underline", on ? "font-bold text-body" : "font-semibold text-subtle")}>
                {item.label}
                {on ? <span className="ml-2.5 inline-block h-2 w-2 rounded-full bg-orange align-middle" /> : null}
              </Link>
            );
          })}
          <Button href="/ket-noi" fullWidth className="mt-5">
            Kết nối
          </Button>
        </nav>
      ) : null}
    </header>
  );
}
