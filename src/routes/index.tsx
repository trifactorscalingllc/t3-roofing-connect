import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ArrowRight, Star } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site";
import { CtaLink } from "@/components/cta-button";
import {
  HowItWorks,
  StatsBand,
  WhyChooseUs,
  ProjectsPreview,
  ServiceAreaMap,
  Faq,
} from "@/components/home-sections";
import heroRoof from "@/assets/hero-roof.jpg";
import crewOnRoof from "@/assets/crew-on-roof.jpg";

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
      {/* HERO */}
      <section className="relative overflow-hidden bg-background">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:grid-cols-[1.1fr_1fr] md:gap-16 md:px-8 md:py-24 lg:py-32">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-accent font-semibold">
              <span className="h-px w-8 bg-accent" />
              Two Rivers, WI · Owner-Operated
            </div>
            <h1 className="mt-6 text-6xl md:text-7xl lg:text-8xl leading-[0.9] uppercase">
              We pick up.<br />
              <span className="text-accent">We show up.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/75">
              Roofing, siding and construction for the Wisconsin Lakeshore, done
              right the first time. No voicemail tag. No "we'll get back to you next week."
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <CtaLink href={SITE.phoneHref} variant="primary">
                <Phone className="h-4 w-4" />
                Call {SITE.phoneDisplay}
              </CtaLink>
              <CtaLink to="/contact" variant="outline">
                Free Estimate <ArrowRight className="h-4 w-4" />
              </CtaLink>
            </div>
            <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span>5.0 on Yelp · "Did great job!" Julio L.</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 -top-4 hidden h-full w-full border-2 border-accent md:block" />
            <img
              src={heroRoof}
              alt="Newly installed asphalt shingle roof on a Wisconsin home at golden hour"
              width={1280}
              height={1600}
              className="relative aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* TRUST / STATS */}
      <StatsBand />

      {/* SERVICES PREVIEW */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">What we do</div>
              <h2 className="mt-3 text-5xl md:text-6xl uppercase">Services</h2>
            </div>
            <Link to="/services" className="group inline-flex items-center gap-2 text-sm uppercase tracking-wider font-semibold text-foreground hover:text-accent">
              See all services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Link
                key={s.slug}
                to="/services"
                hash={s.slug}
                className="group bg-background p-6 md:p-8 transition-colors hover:bg-card"
              >
                <div className="text-xs text-muted-foreground font-mono">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 text-2xl uppercase">{s.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{s.short}</p>
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

      {/* TESTIMONIAL */}
      <section
        className="relative bg-[var(--ink)] text-cream"
        style={{
          backgroundImage: `linear-gradient(rgba(15,27,45,0.85), rgba(15,27,45,0.95)), url(${crewOnRoof})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-4xl px-4 py-24 md:px-8 md:py-32 text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-accent text-accent" />
            ))}
          </div>
          <blockquote className="text-3xl md:text-5xl uppercase leading-tight font-[var(--font-display)]">
            "Called 7 different roofing places. T3 was the only one that picked up.
            Arrived in 10 minutes. Did great job."
          </blockquote>
          <div className="mt-8 text-sm uppercase tracking-[0.25em] text-cream/60">
            Julio Lopez · Yelp review
          </div>
        </div>
      </section>

      {/* SERVICE AREA + MAP */}
      <ServiceAreaMap />

      {/* ESTIMATE CTA */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="border-l-4 border-accent bg-card p-8 md:p-14">
            <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <h2 className="text-4xl md:text-5xl uppercase leading-[0.95]">Get a free estimate</h2>
                <p className="mt-4 max-w-md text-foreground/75">
                  Tell us about the project. We'll give you a straight answer, usually
                  within 24 hours.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                <CtaLink href={SITE.phoneHref} variant="primary">
                  <Phone className="h-4 w-4" />
                  {SITE.phoneDisplay}
                </CtaLink>
                <CtaLink to="/contact" variant="outline">
                  Send a Message
                </CtaLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Faq />
    </>
  );
}
