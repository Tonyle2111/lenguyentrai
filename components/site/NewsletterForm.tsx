"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/forms";

const EMAIL_RE = /^\S+@\S+\.\S+$/;

/** Đăng ký nhận bài viết. variant "inline" dùng trong trang bài đọc. */
export function NewsletterForm({ variant = "footer" }: { variant?: "footer" | "inline" }) {
  const [mail, setMail] = useState("");
  const [err, setErr] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!EMAIL_RE.test(mail)) {
      setErr("Email cần có dạng ten@tenmien.com.");
      return;
    }
    setErr("");
    setDone(true);
  };

  if (done) {
    return (
      <p role="status" className="text-[15.5px] leading-[1.6]">
        {variant === "footer" ? "Đã đăng ký. Bài viết mới sẽ đến hộp thư của bạn." : "Đã đăng ký. Bài tiếp theo sẽ đến hộp thư của bạn."}
      </p>
    );
  }

  if (variant === "inline") {
    return (
      <form onSubmit={submit} noValidate className="flex flex-wrap items-start gap-3">
        <Input type="email" placeholder="ban@email.com" value={mail} onChange={(e) => setMail(e.target.value)} error={err} aria-label="Email" fieldClassName="flex-[1_1_240px]" />
        <Button type="submit">Đăng ký</Button>
      </form>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="flex flex-col gap-3">
      <Input type="email" placeholder="ban@email.com" value={mail} onChange={(e) => setMail(e.target.value)} error={err} aria-label="Email" />
      <Button type="submit" variant="gradient" arrow={false}>
        Đăng ký
      </Button>
    </form>
  );
}
