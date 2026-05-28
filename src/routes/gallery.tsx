import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { CtaLink } from "@/components/cta-button";
import { PROJECTS } from "@/lib/projects";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Project Gallery | T3 Roofing & Construction" },
      {
        name: "description",
        content: "Recent roofing, siding, and construction projects across the Wisconsin Lakeshore.",
      },
      { property: "og:title", content: "Gallery | T3 Roofing & Construction" },
      { property: "og:description", content: "See recent T3 roofing and construction projects on the WI Lakeshore." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 pt-20 pb-12 md:px-8 md:pt-28">
          <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Recent work</div>
          <h1 className="mt-4 text-6xl md:text-7xl uppercase leading-[0.9]">Project Gallery</h1>
          <p className="mt-6 max-w-2xl text-foreground/75">
            A selection of recent work across the Lakeshore. More project photos
            available on request.
          </p>
        </div>
      </section>

      <section className="bg-background pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid auto-rows-[200px] grid-cols-1 gap-3 md:grid-cols-3 md:auto-rows-[240px]">
            {PROJECTS.map((p, i) => (
              <figure
                key={i}
                className={`group relative overflow-hidden bg-card ${p.span}`}
              >
                <img
                  src={p.src}
                  alt={p.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-[var(--ink)]/90 via-[var(--ink)]/30 to-transparent p-4 text-cream">
                  <span className="text-sm font-semibold uppercase tracking-wider">{p.label}</span>
                  <span className="rounded-sm bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                    {p.tag}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--ink)] text-cream">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-16 md:flex-row md:items-center md:justify-between md:px-8">
          <h2 className="text-3xl md:text-4xl uppercase">Want yours on this wall?</h2>
          <CtaLink href={SITE.phoneHref} variant="outlineLight">
            <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
          </CtaLink>
        </div>
      </section>
    </>
  );
}