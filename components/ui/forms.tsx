import { forwardRef, type InputHTMLAttributes, type ReactNode, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

const control =
  "w-full rounded-input border bg-surface text-[16px] leading-[1.5] text-body outline-none transition-[border-color,box-shadow] duration-fast placeholder:text-subtle placeholder:opacity-70 focus:border-orange focus:shadow-ring";

export function Field({ label, hint, error, htmlFor, children, className }: { label?: ReactNode; hint?: ReactNode; error?: string; htmlFor?: string; children: ReactNode; className?: string }) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label ? (
        <label htmlFor={htmlFor} className="text-[14px] font-semibold text-body">
          {label}
        </label>
      ) : null}
      {children}
      {error ? (
        <span role="alert" className="text-[13.5px] font-semibold text-danger">
          {error}
        </span>
      ) : hint ? (
        <span className="text-[13.5px] text-subtle">{hint}</span>
      ) : null}
    </div>
  );
}

type InputProps = { label?: ReactNode; hint?: ReactNode; error?: string; fieldClassName?: string } & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ label, hint, error, id, fieldClassName, className, ...rest }, ref) {
  return (
    <Field label={label} hint={hint} error={error} htmlFor={id} className={fieldClassName}>
      <input ref={ref} id={id} aria-invalid={error ? true : undefined} className={cn(control, "h-12 px-4", error ? "border-fire focus:border-fire focus:shadow-[0_0_0_3px_rgba(236,74,12,.22)]" : "border-line", className)} {...rest} />
    </Field>
  );
});

type TextareaProps = { label?: ReactNode; hint?: ReactNode; error?: string } & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ label, hint, error, id, className, rows = 4, ...rest }: TextareaProps) {
  return (
    <Field label={label} hint={hint} error={error} htmlFor={id}>
      <textarea id={id} rows={rows} className={cn(control, "min-h-12 resize-y border-line px-4 py-[13px]", className)} {...rest} />
    </Field>
  );
}

/** Ô đánh dấu 24px, bo 8px, đổi sang mực khi chọn. */
export function Checkbox({ label, checked, onChange, id }: { label: ReactNode; checked: boolean; onChange: (v: boolean) => void; id?: string }) {
  return (
    <label className="group relative flex cursor-pointer items-start gap-3">
      <input id={id} type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="peer absolute h-px w-px opacity-0" />
      <span
        aria-hidden="true"
        className={cn(
          "mt-px inline-flex h-6 w-6 flex-none items-center justify-center rounded-lg border-[1.5px] transition-colors duration-fast peer-focus-visible:shadow-ring",
          checked ? "border-body bg-body text-page" : "border-line bg-surface",
        )}
      >
        {checked ? <Icon name="check" size={16} /> : null}
      </span>
      <span className="text-[15.5px] font-medium leading-[1.5] text-body">{label}</span>
    </label>
  );
}
