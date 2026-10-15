"use client";

import { useEffect, useState } from "react";
import { LIBRARY, foldVi, type LibraryType } from "@/lib/data";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/layout";
import { LibraryCard } from "./LibraryCard";

type Tab = "all" | LibraryType;
const TABS: Array<[Tab, string]> = [["all", "Tất cả"], ["bai-viet", "Bài viết"], ["video", "Video"], ["podcast", "Podcast"]];
const isTab = (s: string | null): s is Tab => TABS.some(([id]) => id === s);

const byTab = (t: Tab) => LIBRARY.filter((a) => t === "all" || a.type === t);

/** Bộ lọc thư viện: tab theo loại nội dung (đồng bộ ?tab=) + ô tìm kiếm không phân biệt dấu. */
export function LibraryBrowser() {
  const [tab, setTabState] = useState<Tab>("all");
  const [q, setQ] = useState("");

  // Đọc ?tab= sau khi mount để danh sách vẫn được render sẵn trong HTML tĩnh.
  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("tab");
    if (isTab(t)) setTabState(t);
  }, []);

  const setTab = (t: Tab) => {
    setTabState(t);
    window.history.replaceState(null, "", t === "all" ? "/thu-vien" : `/thu-vien?tab=${t}`);
  };

  const nq = foldVi(q.trim());
  const list = byTab(tab).filter((a) => !nq || foldVi(`${a.title} ${a.excerpt} ${a.topic}`).includes(nq));

  return (
    <>
      <div className="container-site relative z-[1] mt-3 flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
        <div role="tablist" aria-label="Loại nội dung" className="flex flex-[1_1_auto] gap-7 overflow-x-auto [scrollbar-width:none]">
          {TABS.map(([id, label]) => {
            const on = id === tab;
            return (
              <button key={id} role="tab" type="button" aria-selected={on} onClick={() => setTab(id)} className={cn("relative inline-flex items-center gap-2 whitespace-nowrap pb-3.5 pt-3 text-[15.5px]", on ? "font-bold text-body" : "font-semibold text-subtle hover:text-body")}>
                {label}
                <span className={cn("font-mono text-[12px] font-semibold", on ? "text-accent" : "text-subtle")}>{byTab(id).length}</span>
                <span aria-hidden="true" className={cn("absolute -bottom-px left-0 right-0 h-[3px] rounded-sm", on ? "bg-orange" : "bg-transparent")} />
              </button>
            );
          })}
        </div>
        <label className="relative mb-3 min-w-[220px] flex-[0_1_320px]">
          <Icon name="search" size={18} className="absolute left-3.5 top-[15px] text-subtle" />
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Tìm bài viết, chủ đề…"
            aria-label="Tìm trong thư viện"
            className="h-12 w-full rounded-full border border-line bg-surface pl-[42px] pr-4 text-[15.5px] text-body outline-none transition-[border-color,box-shadow] duration-fast focus:border-orange focus:shadow-ring"
          />
        </label>
      </div>
      <div className="border-b border-line" />
      <Section spacing="md">
        {list.length ? (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,320px),1fr))] gap-5">
            {list.map((a) => (
              <LibraryCard key={a.id} item={a} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-start gap-4 rounded-card border-[1.5px] border-dashed border-line bg-surface p-[clamp(32px,6vw,64px)]">
            <span className="inline-flex h-[52px] w-[52px] items-center justify-center rounded-icon bg-soft text-subtle">
              <Icon name="search-x" size={24} />
            </span>
            <h2 className="h3 text-[22px]">Chưa có nội dung phù hợp với “{q.trim()}”.</h2>
            <p className="prose-body text-subtle">Thử một từ khóa ngắn hơn, như “hệ thống” hoặc “dòng tiền”, hoặc xem tất cả nội dung.</p>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setQ("");
                setTab("all");
              }}
            >
              Xem tất cả
            </Button>
          </div>
        )}
      </Section>
    </>
  );
}
