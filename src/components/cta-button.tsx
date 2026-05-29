import { Link } from "@tanstack/react-router";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "outlineLight";

const styles: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover",
  outline:
    "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
  outlineLight:
    "border border-cream/40 text-cream hover:bg-cream hover:text-[var(--ink)]",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-none px-6 py-3.5 text-sm font-bold uppercase tracking-[0.04em] transition-colors";

export function CtaLink({
  to,
  href,
  variant = "primary",
  className,
  children,
  ...rest
}: {
  to?: string;
  href?: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentProps<"a">, "href">) {
  const cls = cn(base, styles[variant], className);
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to!} className={cls}>
      {children}
    </Link>
  );
}