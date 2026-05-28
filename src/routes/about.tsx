import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { CtaLink } from "@/components/cta-button";
import crew from "@/assets/crew-on-roof.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About T3 · Owner-Operated Roofer in Two Rivers, WI" },
      {
        name: "description",
        content:
          "T3 Roofing & Construction is owner-operated by Tony Elvetici, serving the WI Lakeshore with honest roofing and construction work.",
      },
      { property: "og:title", content: "About T3 Roofing & Construction" },
      { property: "og:description", content: "Owner-operated by Tony Elvetici. Roofing done right on the Wisconsin Lakeshore." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:gap-16 md:px-8 md:py-28">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">About</div>
            <h1 className="mt-4 text-6xl md:text-7xl uppercase leading-[0.9]">
              Built by hand.<br /><span className="text-accent">Run by phone.</span>
            </h1>
            <div className="mt-8 space-y-5 text-foreground/80 text-lg">
              <p>
                T3 Roofing &amp; Construction is owner-operated by {SITE.owner} out of
                Two Rivers, Wisconsin. We started T3 because the Lakeshore deserved a
                roofer who answered the phone and showed up when they said they would.
              </p>
              <p>
                Every job is run by Tony personally. Every estimate is honest. Every
                roof is built like our name is on the sign in the front yard. Because
                it is.
              </p>
              <p>
                We work on small repairs, full re-roofs, siding jobs, interior flooring,
                insulation and complete new builds. If you live on the Lakeshore and need
                something built or fixed, call us first.
              </p>
            </div>
            <div className="mt-10">
              <CtaLink href={SITE.phoneHref} variant="primary">
                <Phone className="h-4 w-4" /> Talk to Tony
              </CtaLink>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-4 -bottom-4 hidden h-full w-full border-2 border-accent md:block" />
            <img
              src={crew}
              alt="Roofing crew working safely on a Wisconsin home"
              loading="lazy"
              className="relative aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--ink)] text-cream">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:grid-cols-3 md:px-8">
          {[
            { stat: "5.0", label: "Star rating on Yelp & Birdeye" },
            { stat: "10 min", label: "On-site on a recent Two Rivers call (per Yelp)" },
            { stat: "100%", label: "Owner-operated, local to Two Rivers" },
          ].map((s) => (
            <div key={s.label} className="border-l-2 border-accent pl-6">
              <div className="text-6xl md:text-7xl text-accent font-[var(--font-display)]">
                {s.stat}
              </div>
              <div className="mt-2 text-sm uppercase tracking-wider text-cream/80">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}