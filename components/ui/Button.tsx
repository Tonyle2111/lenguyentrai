import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./Icon";

type Variant = "primary" | "secondary" | "gradient" | "ghost";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: "sm" | "md";
  arrow?: boolean;
  icon?: IconName;
  fullWidth?: boolean;
  className?: string;
};

type ButtonAsLink = CommonProps & { href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children">;
type ButtonAsButton = CommonProps & { href?: undefined } & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

const VARIANTS: Record<Variant, string> = {
  primary: "border-transparent bg-body text-page hover:bg-[color-mix(in_oklab,var(--text-body)_86%,var(--bg-page))]",
  secondary: "border-body bg-transparent text-body hover:bg-soft",
  gradient: "border-transparent bg-flow text-ink hover:shadow-[0_12px_26px_-12px_rgba(236,74,12,.6)]",
  ghost: "border-transparent bg-transparent text-accent hover:bg-soft",
};

/** Nút dạng viên thuốc. Primary có chấm gradient chứa mũi tên, dịch 2px khi hover. */
export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { children, variant = "primary", size = "md", arrow, icon, fullWidth, className, ...rest } = props;
  const showArrow = arrow ?? variant === "primary";
  const sm = size === "sm";
  const cls = cn(
    "group items-center justify-center whitespace-nowrap rounded-full border-[1.5px] font-bold leading-none tracking-[-0.005em] no-underline",
    "transition-[background-color,border-color,box-shadow,transform] duration-fast ease-flow active:scale-[.98]",
    "disabled:cursor-not-allowed disabled:opacity-45 disabled:active:scale-100",
    fullWidth ? "flex w-full" : "inline-flex",
    sm ? "h-10 gap-2.5 text-[14px]" : "h-12 gap-3 text-[15.5px]",
    showArrow ? (sm ? "pl-[18px] pr-[9px]" : "pl-6 pr-[13px]") : sm ? "px-[18px]" : "px-6",
    VARIANTS[variant],
    className,
  );
  const inner = (
    <>
      {icon ? <Icon name={icon} size={sm ? 16 : 18} /> : null}
      <span>{children}</span>
      {showArrow ? (
        <span
          aria-hidden="true"
          className={cn(
            "inline-flex h-[22px] w-[22px] flex-none items-center justify-center rounded-full transition-transform duration-base ease-flow group-hover:translate-x-0.5",
            variant === "gradient" ? "bg-ink text-cream" : "bg-flow text-ink",
          )}
        >
          <Icon name="arrow-right" size={13} />
        </span>
      ) : null}
    </>
  );
  if ("href" in rest && rest.href !== undefined) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={cls} {...linkRest}>
        {inner}
      </Link>
    );
  }
  const { type = "button", ...btnRest } = rest as Omit<ButtonAsButton, keyof CommonProps>;
  return (
    <button type={type} className={cls} {...btnRest}>
      {inner}
    </button>
  );
}
