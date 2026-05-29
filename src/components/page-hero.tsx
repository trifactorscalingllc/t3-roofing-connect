import type { ReactNode } from "react";
import heroWide from "@/assets/hero-lakeshore-wide.png";

/**
 * Compact page-header band for inner routes. Reuses the home hero's lakeshore
 * photo at low opacity under an ink gradient so every page feels congruent with
 * the homepage while keeping the heading dominant. Image is decorative.
 */
export function PageHero({
  eyebrow,
  title,
  accent,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-cream">
      <img
        src={heroWide}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)] via-[var(--ink)]/95 to-[var(--ink)]/70" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="text-[0.8125rem] uppercase tracking-[0.15em] text-accent font-semibold">
          {eyebrow}
        </div>
        <h1 className="mt-4 text-6xl md:text-7xl uppercase leading-[0.9]">
          {title}
          {accent && (
            <>
              <br />
              <span className="text-accent">{accent}</span>
            </>
          )}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg text-cream/80">{subtitle}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
