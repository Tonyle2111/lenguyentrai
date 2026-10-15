"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";

export const THEME_KEY = "lnt-theme";

/** Script chạy trước khi vẽ trang để tránh nháy sai theme. */
export const themeInitScript = `try{var t=localStorage.getItem("${THEME_KEY}");if(t==="dark"||t==="light")document.documentElement.dataset.theme=t;}catch(e){}`;

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {}
  };

  const label = theme === "dark" ? "Giao diện sáng" : "Giao diện tối";
  return (
    <button type="button" onClick={toggle} aria-label={label} title={label} className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full border border-line bg-surface text-body transition-colors duration-fast ease-flow hover:bg-soft">
      <Icon name={theme === "dark" ? "sun" : "moon"} size={18} />
    </button>
  );
}
