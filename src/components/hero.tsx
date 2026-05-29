import { useEffect, useRef } from "react";
import { Phone, ArrowRight, Star } from "lucide-react";
import { SITE } from "@/lib/site";
import { CtaLink } from "@/components/cta-button";
import heroWide from "@/assets/hero-lakeshore-wide.jpg";

/**
 * Full-bleed lakeshore hero with a scroll parallax on the photo. The image is
 * scaled up to create headroom, then translated a fraction of scrollY so it
 * drifts slower than the page (capped so the edges never reveal). The gradient
 * overlay and text stay fixed so the headline keeps full contrast. Honors
 * prefers-reduced-motion; the effect is client-only (SSR-safe).
 */
export function Hero() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    const update = () => {
      const y = Math.min(window.scrollY * 0.28, 120);
      img.style.transform = `translate3d(0, ${y}px, 0) scale(1.3)`;
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <img
        ref={imgRef}
        src={heroWide}
        alt="Navy craftsman home with a new dark shingle roof on the Lake Michigan shoreline in Two Rivers, Wisconsin"
        className="absolute inset-0 h-full w-full object-cover will-change-transform"
        style={{ transform: "scale(1.3)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)] via-[var(--ink)]/85 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 py-28 md:px-8 md:py-40 lg:py-48">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 text-[0.8125rem] uppercase tracking-[0.15em] text-accent font-semibold">
            <span className="h-px w-8 bg-accent" />
            Two Rivers, WI · Owner-Operated
          </div>
          <h1 className="mt-6 text-6xl md:text-7xl lg:text-8xl leading-[0.9] uppercase text-cream">
            We pick up.<br />
            <span className="text-accent">We show up.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-cream/80">
            Roofing, siding and construction for the Wisconsin Lakeshore, done
            right the first time. No voicemail tag. No "we'll get back to you next week."
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <CtaLink href={SITE.phoneHref} variant="primary">
              <Phone className="h-4 w-4" />
              Call {SITE.phoneDisplay}
            </CtaLink>
            <CtaLink to="/contact" variant="outlineLight">
              Free Estimate <ArrowRight className="h-4 w-4" />
            </CtaLink>
          </div>
          <div className="mt-10 flex items-center gap-3 text-sm text-cream/70">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <span>Rated 5.0 on Yelp &amp; Birdeye</span>
          </div>
        </div>
      </div>
    </section>
  );
}
