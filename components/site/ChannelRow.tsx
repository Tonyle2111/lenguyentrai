"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";

/** Một kênh liên hệ trực tiếp, có nút sao chép. */
export function ChannelRow({ icon, label, value }: { icon: IconName; label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(value).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };
  return (
    <div className="flex flex-wrap items-center gap-3.5 rounded-icon border border-line bg-surface py-3.5 pl-4 pr-3.5">
      <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-input bg-soft">
        <Icon name={icon} size={20} />
      </span>
      <div className="flex min-w-0 flex-[1_1_160px] flex-col gap-0.5">
        <span className="text-[13px] font-semibold text-subtle">{label}</span>
        <span className="select-text break-words font-mono text-[14.5px] font-medium [overflow-wrap:anywhere]">{value}</span>
      </div>
      <Button size="sm" variant="secondary" icon={copied ? "check" : "copy"} onClick={copy} className="min-w-[112px]">
        {copied ? "Đã sao chép" : "Sao chép"}
      </Button>
    </div>
  );
}
