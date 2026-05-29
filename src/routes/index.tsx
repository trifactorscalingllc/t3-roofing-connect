import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star } from "lucide-react";
import { SERVICES } from "@/lib/site";
import { Hero } from "@/components/hero";
import {
  HowItWorks,
  WhyChooseUs,
  ProjectsPreview,
  ServiceAreaMap,
  CtaBand,
  Faq,
} from "@/components/home-sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "T3 Roofing & Construction | Two Rivers, WI Roofer" },
      {
        name: "description",
        content:
          "Roofing, siding and construction on the Wisconsin Lakeshore. The roofer who actually answers the phone. Free estimates. Call (920) 304-6859.",
      },
      { property: "og:title", content: "T3 Roofing & Construction | Two Rivers, WI" },
      {
        property: "og:description",
        content: "The roofer who actually answers the phone. Free estimates in Two Rivers, WI.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO — full-bleed lakeshore photo with scroll parallax */}
      <Hero />

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* SERVICES PREVIEW — dark (ink) block */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-[0.8125rem] uppercase tracking-[0.15em] text-accent font-semibold">What we do</div>
              <h2 className="mt-3 text-5xl md:text-6xl uppercase text-cream">Services</h2>
            </div>
            <Link to="/services" className="group inline-flex items-center gap-2 text-sm uppercase tracking-wider font-semibold text-cream hover:text-accent">
              See all services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Link
                key={s.slug}
                to="/services"
                hash={s.slug}
                className="group bg-ink p-6 md:p-8 transition-colors hover:bg-navy"
              >
                <div className="text-xs text-cream/40 font-mono">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 text-2xl uppercase text-cream">{s.title}</h3>
                <p className="mt-2 text-sm text-cream/70">{s.short}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-wider text-accent font-semibold">
                  Details <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* PROJECTS */}
      <ProjectsPreview />

      {/* TESTIMONIAL — cream bordered card */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-4 py-20 md:px-8 md:py-28">
          <div className="border border-border border-t-2 border-t-accent bg-surface p-8 md:p-14 text-center">
            <div className="mb-6 flex justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <blockquote className="text-3xl md:text-4xl uppercase leading-tight font-[var(--font-display)]">
              "Called 7 different roofing places. T3 was the only one that picked up.
              Arrived in 10 minutes. Did great job."
            </blockquote>
            <div className="mt-8 text-sm uppercase tracking-[0.25em] text-muted-foreground">
              Julio Lopez · Yelp review
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND — navy */}
      <CtaBand />

      {/* SERVICE AREA + MAP */}
      <ServiceAreaMap />

      {/* FAQ */}
      <Faq />
    </>
  );
}
