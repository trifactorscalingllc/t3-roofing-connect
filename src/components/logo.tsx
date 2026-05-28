import { Link } from "@tanstack/react-router";

type Tone = "light" | "dark";

const TONES: Record<
  Tone,
  { badge: string; stroke: string; peak: string; t3: string }
> = {
  // For use on a light (cream) background — header
  light: {
    badge: "var(--primary)", // steel navy fill
    stroke: "transparent",
    peak: "var(--cream)",
    t3: "var(--cream)",
  },
  // For use on a dark (ink) background — footer
  dark: {
    badge: "transparent",
    stroke: "color-mix(in oklch, var(--cream) 30%, transparent)",
    peak: "var(--cream)",
    t3: "var(--cream)",
  },
};

/**
 * T3 roof-peak badge. Pure SVG shapes + Bebas "T3" so it stays crisp at any
 * size (header, footer, favicon). The roofline chevron reads as roofing
 * instantly; the lake-blue ridge ties it to the brand accent.
 */
export function LogoMark({
  size = 44,
  tone = "light",
  className,
}: {
  size?: number;
  tone?: Tone;
  className?: string;
}) {
  const c = TONES[tone];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="T3 Roofing & Construction"
    >
      <rect
        x="1"
        y="1"
        width="46"
        height="46"
        rx="7"
        fill={c.badge}
        stroke={c.stroke}
        strokeWidth="2"
      />
      {/* roof chevron band */}
      <path
        d="M24 8 L41 22 L41 27.5 L24 13.5 L7 27.5 L7 22 Z"
        fill={c.peak}
      />
      {/* lake-blue ridge accent under the peak */}
      <path
        d="M11 30.5 H37"
        stroke="var(--accent)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* T3 wordmark inside the badge */}
      <text
        x="24"
        y="44"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="15"
        letterSpacing="0.5"
        fill={c.t3}
      >
        T3
      </text>
    </svg>
  );
}

/**
 * Full horizontal lockup: mark + stacked wordmark. Used in the header and
 * footer. `tone` controls colors for light vs dark backgrounds.
 */
export function LogoLockup({
  tone = "light",
  className,
  markSize = 44,
}: {
  tone?: Tone;
  className?: string;
  markSize?: number;
}) {
  const nameColor = tone === "dark" ? "text-cream" : "text-primary";
  const subColor = tone === "dark" ? "text-cream/60" : "text-muted-foreground";
  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <LogoMark size={markSize} tone={tone} className="flex-none" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-[var(--font-display)] text-2xl md:text-3xl leading-[0.85] ${nameColor}`}
        >
          T3 Roofing
        </span>
        <span
          className={`text-[9px] md:text-[10px] uppercase tracking-[0.28em] ${subColor} mt-1`}
        >
          &amp; Construction
        </span>
      </span>
    </span>
  );
}

/** Link-wrapped lockup for nav use. */
export function LogoLink({ tone = "light" }: { tone?: Tone }) {
  return (
    <Link to="/" className="group" aria-label="T3 Roofing & Construction, home">
      <LogoLockup
        tone={tone}
        className="transition-opacity group-hover:opacity-80"
      />
    </Link>
  );
}
