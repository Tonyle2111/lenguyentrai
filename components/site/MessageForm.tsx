"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { INTERESTS } from "@/lib/data";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Checkbox, Input, Textarea } from "@/components/ui/forms";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Card } from "@/components/ui/layout";

type Form = { name: string; phone: string; email: string; msg: string; interests: string[]; agree: boolean };
type Errors = Partial<Record<"name" | "phone" | "email" | "agree", string>>;

const BLANK: Form = { name: "", phone: "", email: "", msg: "", interests: [], agree: false };

function InterestCard({ label, icon, on, toggle }: { label: string; icon: IconName; on: boolean; toggle: () => void }) {
  return (
    <label
      className={cn(
        "relative flex min-h-14 cursor-pointer items-center gap-3 rounded-input px-3.5 py-3 transition-[background-color,border-color] duration-fast has-[:focus-visible]:shadow-ring",
        on ? "border-2 border-orange bg-soft" : "m-px border border-line bg-surface",
      )}
    >
      <input type="checkbox" checked={on} onChange={toggle} className="absolute h-px w-px opacity-0" />
      <Icon name={icon} size={20} className={on ? "text-accent" : "text-subtle"} />
      <span className="flex-1 text-[15px] font-semibold leading-[1.35]">{label}</span>
      <span aria-hidden="true" className={cn("inline-flex h-5 w-5 flex-none items-center justify-center rounded-full", on ? "bg-orange text-ink" : "border-[1.5px] border-line")}>
        {on ? <Icon name="check" size={13} /> : null}
      </span>
    </label>
  );
}

/** Form "Gửi lời nhắn": kiểm tra lỗi ngay trong form, focus vào ô lỗi đầu tiên, rồi hiện trạng thái đã gửi. */
export function MessageForm() {
  const [f, setF] = useState<Form>(BLANK);
  const [err, setErr] = useState<Errors>({});
  const [sent, setSent] = useState<Form | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // ?quan-tam=sp,vl — chọn sẵn chủ đề khi đến từ trang Hệ sinh thái.
  useEffect(() => {
    const prefill = (new URLSearchParams(window.location.search).get("quan-tam") ?? "").split(",").filter((id) => INTERESTS.some((i) => i.id === id));
    if (prefill.length) setF((x) => ({ ...x, interests: prefill }));
  }, []);

  const set = (k: "name" | "phone" | "email" | "msg") => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value });
  const toggle = (id: string) => setF({ ...f, interests: f.interests.includes(id) ? f.interests.filter((x) => x !== id) : [...f.interests, id] });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const n: Errors = {};
    if (f.name.trim().length < 2) n.name = "Hãy nhập họ và tên để chúng tôi biết cách xưng hô.";
    if (f.phone.replace(/\D/g, "").length < 9) n.phone = "Số điện thoại/Zalo cần ít nhất 9 chữ số.";
    if (f.email && !/^\S+@\S+\.\S+$/.test(f.email)) n.email = "Email cần có dạng ten@tenmien.com, hoặc để trống.";
    if (!f.agree) n.agree = "Đánh dấu ô này để chúng tôi được phép liên hệ lại với bạn.";
    setErr(n);
    const first = (["name", "phone", "email", "agree"] as const).find((k) => n[k]);
    if (first) {
      setTimeout(() => formRef.current?.querySelector<HTMLInputElement>(`#kn-${first}`)?.focus(), 0);
      return;
    }
    // TODO: nối với API/CRM khi có (ví dụ route handler app/api/lien-he/route.ts).
    setSent(f);
  };

  if (sent) {
    const topics = INTERESTS.filter((i) => sent.interests.includes(i.id)).map((i) => i.label);
    return (
      <Card raised>
        <div role="status" className="flex animate-fade-up flex-col gap-3.5 rounded-[18px] bg-soft p-[clamp(22px,3vw,28px)]">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-flow text-ink">
            <Icon name="check" size={22} />
          </span>
          <h3 className="text-[22px] font-extrabold leading-[1.3]">Đã nhận lời nhắn của {sent.name.trim()}.</h3>
          {topics.length ? (
            <p className="text-[15.5px] leading-[1.6]">
              <span className="text-subtle">Chủ đề quan tâm: </span>
              <strong>{topics.join(" · ")}</strong>
            </p>
          ) : null}
          <p className="text-[15.5px] leading-[1.6] text-subtle">
            Chúng tôi sẽ liên hệ lại qua số <span className="font-mono text-body">{sent.phone}</span> trong vòng 2 ngày làm việc.
          </p>
          <Button
            variant="secondary"
            size="sm"
            className="mt-1.5 self-start"
            onClick={() => {
              setF(BLANK);
              setErr({});
              setSent(null);
            }}
          >
            Gửi lời nhắn khác
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card raised>
      <form ref={formRef} onSubmit={submit} noValidate className="flex flex-col gap-5">
        <h2 className="text-[24px] font-extrabold leading-[1.3] tracking-[-0.02em]">Gửi lời nhắn</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-4">
          <Input id="kn-name" label="Họ và tên" placeholder="Nguyễn Văn An" value={f.name} onChange={set("name")} error={err.name} autoComplete="name" />
          <Input id="kn-phone" label="Điện thoại / Zalo" placeholder="0912 345 678" type="tel" inputMode="tel" value={f.phone} onChange={set("phone")} error={err.phone} autoComplete="tel" />
        </div>
        <Input id="kn-email" label="Email (không bắt buộc)" placeholder="ban@email.com" type="email" value={f.email} onChange={set("email")} error={err.email} autoComplete="email" />
        <fieldset className="m-0 flex flex-col gap-2.5 border-0 p-0">
          <legend className="mb-2.5 p-0 text-[14px] font-semibold">Bạn quan tâm đến</legend>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-2.5">
            {INTERESTS.map((it) => (
              <InterestCard key={it.id} label={it.label} icon={it.icon} on={f.interests.includes(it.id)} toggle={() => toggle(it.id)} />
            ))}
          </div>
        </fieldset>
        <Textarea id="kn-msg" label="Lời nhắn" placeholder="Bạn đang ở đâu trên hành trình của mình, và bạn muốn trao đổi điều gì?" value={f.msg} onChange={set("msg")} />
        <div className="flex flex-col gap-1.5">
          <Checkbox id="kn-agree" label="Tôi đồng ý để Lê Nguyễn Trãi liên hệ lại qua thông tin đã cung cấp." checked={f.agree} onChange={(v) => setF({ ...f, agree: v })} />
          {err.agree ? (
            <span role="alert" className="pl-9 text-[13.5px] font-semibold text-danger">
              {err.agree}
            </span>
          ) : null}
        </div>
        <Button type="submit" variant="gradient" arrow fullWidth>
          Gửi lời nhắn
        </Button>
        <p className="text-center text-[13px] leading-[1.5] text-subtle">Thông tin chỉ dùng để liên hệ lại với bạn, không chia sẻ cho bên thứ ba.</p>
      </form>
    </Card>
  );
}
