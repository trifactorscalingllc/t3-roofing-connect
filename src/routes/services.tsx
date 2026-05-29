import { createFileRoute } from "@tanstack/react-router";
import { Phone, Check } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site";
import { CtaLink } from "@/components/cta-button";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Roofing, Siding & Construction Services | T3 Roofing" },
      {
        name: "description",
        content:
          "Asphalt shingle roofs, tear-offs, re-roofs, repairs, siding, flooring, insulation and new construction across the WI Lakeshore.",
      },
      { property: "og:title", content: "Services | T3 Roofing & Construction" },
      { property: "og:description", content: "Full-service roofing and construction on the Wisconsin Lakeshore." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Roofs, Walls,"
        accent="Everything Between."
        subtitle="From a single repair to a full new build, T3 handles the work end to end. Below is what we do most."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-24">
          <div className="grid gap-px bg-border md:grid-cols-2">
            {SERVICES.map((s, i) => (
              <article
                key={s.slug}
                id={s.slug}
                className="bg-background p-8 md:p-12 scroll-mt-24"
              >
                <div className="flex items-baseline gap-4">
                  <div className="text-xs text-muted-foreground font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h2 className="text-3xl md:text-4xl uppercase">{s.title}</h2>
                </div>
                <p className="mt-4 text-foreground/80">{s.long}</p>
                <a
                  href={SITE.phoneHref}
                  className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-wider font-bold text-accent hover:text-primary"
                >
                  <Phone className="h-4 w-4" /> Call for estimate
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card border-y border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-16 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <h2 className="text-3xl md:text-4xl uppercase">Don't see it listed?</h2>
            <p className="mt-2 text-foreground/70 max-w-xl">
              If it has to do with a roof, a wall, or a structure on the Lakeshore, pick up
              the phone. We'll tell you straight whether we can do it.
            </p>
          </div>
          <CtaLink href={SITE.phoneHref} variant="primary">
            <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
          </CtaLink>
        </div>
      </section>
    </>
  );
}