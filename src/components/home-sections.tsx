import { Link } from "@tanstack/react-router";
import {
  Phone,
  PhoneCall,
  Clock,
  ClipboardCheck,
  CalendarCheck,
  Hammer,
  ShieldCheck,
  HardHat,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { SITE } from "@/lib/site";
import { PROJECTS } from "@/lib/projects";
import { CtaLink } from "@/components/cta-button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ----------------------------------------------------------------- How it works */

const STEPS = [
  {
    icon: Phone,
    title: "Call or request an estimate",
    body: "Reach a real person at " + SITE.phoneDisplay + ", or send the form. No phone tree, no call center.",
  },
  {
    icon: ClipboardCheck,
    title: "Free on-site inspection",
    body: "We come look at the actual roof, usually within the week. Same day for active leaks.",
  },
  {
    icon: CalendarCheck,
    title: "Straight quote & schedule",
    body: "An honest, written quote and a real start date. No pressure, no mystery line items.",
  },
  {
    icon: Hammer,
    title: "We build it & clean up",
    body: "Tony runs the job start to finish, then we sweep the property with a magnet for stray nails.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
            Simple & straight
          </div>
          <h2 className="mt-3 text-5xl md:text-6xl uppercase">How it works</h2>
        </div>

        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <div key={s.title} className="relative bg-background p-8">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-primary text-cream font-[var(--font-display)] text-2xl leading-none">
                  {i + 1}
                </span>
                <s.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mt-5 text-2xl uppercase leading-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CtaLink href={SITE.phoneHref} variant="primary">
            <Phone className="h-4 w-4" /> Request a free estimate
          </CtaLink>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------- Stats band */

const STATS = [
  { stat: "5.0", label: "Rating on Yelp & Birdeye" },
  { stat: "10 min", label: "On-site on a recent Two Rivers call (per Yelp)" },
  { stat: "100%", label: "Owner-operated, local to Two Rivers" },
  { stat: "Free", label: "Estimates, every time" },
];

export function StatsBand() {
  return (
    <section className="bg-[var(--ink)] text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 md:grid-cols-4 md:px-8">
        {STATS.map((s) => (
          <div key={s.label} className="border-l-2 border-accent pl-6">
            <div className="text-5xl md:text-6xl text-accent font-[var(--font-display)] leading-none">
              {s.stat}
            </div>
            <div className="mt-3 text-sm uppercase tracking-wider text-cream/80">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Why choose us */

const REASONS = [
  {
    icon: PhoneCall,
    title: "We answer the phone",
    body: "A real person from Two Rivers picks up. Not voicemail, not a call center three states away.",
  },
  {
    icon: Clock,
    title: "We show up fast",
    body: "Most calls get an on-site visit the same week. Active leaks and storm damage, the same day when we can.",
  },
  {
    icon: HardHat,
    title: "Owner-operated",
    body: "Tony runs every job personally. The name on the truck is the name on your estimate.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed, insured & clean",
    body: "Licensed and insured work, and we leave your yard cleaner than we found it.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
              Why T3
            </div>
            <h2 className="mt-3 text-5xl md:text-6xl uppercase">Why choose us</h2>
          </div>
          <p className="max-w-md text-foreground/70">
            The Lakeshore deserved a roofer who answers and shows up. That is the
            whole reason T3 exists.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r, i) => (
            <div key={r.title} className="bg-background p-7 border-t-2 border-accent">
              <div className="flex items-center justify-between">
                <r.icon className="h-8 w-8 text-accent" />
                <span className="font-[var(--font-display)] text-3xl text-muted-foreground/40">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-2xl uppercase leading-tight">{r.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Projects preview */

export function ProjectsPreview() {
  const tiles = PROJECTS.slice(0, 6);
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
              Recent work
            </div>
            <h2 className="mt-3 text-5xl md:text-6xl uppercase">Our projects</h2>
          </div>
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-2 text-sm uppercase tracking-wider font-semibold text-foreground hover:text-accent"
          >
            See full gallery
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3">
          {tiles.map((p, i) => (
            <figure
              key={i}
              className="group relative aspect-[4/3] overflow-hidden bg-card"
            >
              <img
                src={p.src}
                alt={p.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-[var(--ink)]/90 via-[var(--ink)]/20 to-transparent p-4 text-cream">
                <span className="text-xs font-semibold uppercase tracking-wider">
                  {p.label}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Service area map */

export function ServiceAreaMap() {
  return (
    <section className="bg-[var(--ink)] text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:grid-cols-2 md:gap-16 md:px-8 md:py-28">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
            Where we work
          </div>
          <h2 className="mt-3 text-5xl md:text-6xl uppercase">The Lakeshore</h2>
          <p className="mt-6 max-w-md text-cream/75">
            Based in Two Rivers and serving Manitowoc County and the Lake Michigan
            shoreline communities.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
            {SITE.serviceArea.map((c) => (
              <li key={c} className="flex items-center gap-2 text-cream/90">
                <MapPin className="h-4 w-4 text-accent" /> {c}, WI
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <CtaLink href={SITE.phoneHref} variant="outlineLight">
              <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
            </CtaLink>
          </div>
        </div>
        <div className="min-h-[320px] overflow-hidden border border-cream/15">
          <iframe
            title="T3 Roofing service area, Two Rivers WI"
            src="https://www.google.com/maps?q=Two+Rivers,+WI+54241&output=embed"
            className="h-full min-h-[320px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------------------- FAQ */

const FAQS = [
  {
    q: "Do you offer free estimates?",
    a: "Yes, always. Call " + SITE.phoneDisplay + " or send the form and we'll usually get on-site to look at the roof within the week.",
  },
  {
    q: "What areas do you serve?",
    a: "Two Rivers and the surrounding Lakeshore: Manitowoc, Mishicot, Kewaunee, Cleveland, Newton and the nearby Manitowoc County communities.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. T3 is owner-operated, licensed and insured, so your home and our crew are covered on every job.",
  },
  {
    q: "How fast can you come out?",
    a: "Most calls get an on-site visit the same week. For active leaks or fresh storm damage we get out the same day whenever we can.",
  },
  {
    q: "What roofing do you install?",
    a: "Asphalt three-tab and architectural shingles, full tear-offs down to the deck, with ice & water shield on eaves and valleys built for Wisconsin's freeze-thaw winters.",
  },
  {
    q: "Do you do more than roofing?",
    a: "Yes. Siding, flooring, insulation, repairs and complete new construction. If it has to do with a roof, a wall or a structure, ask us.",
  },
];

export function Faq() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-4 py-20 md:px-8 md:py-28">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
            Good to know
          </div>
          <h2 className="mt-3 text-5xl md:text-6xl uppercase">
            Frequently asked questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12 w-full">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-lg font-semibold uppercase tracking-wide hover:text-accent">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-foreground/75">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
