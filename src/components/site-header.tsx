import { Link } from "@tanstack/react-router";
import { Phone, Menu, MapPin, Clock, Facebook } from "lucide-react";
import { useState } from "react";
import { SITE } from "@/lib/site";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LogoLink } from "@/components/logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

function TopBar() {
  return (
    <div className="hidden md:block bg-[var(--ink)] text-cream/80">
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-8 text-xs">
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-accent" />
            {SITE.address.street}, {SITE.address.city}, {SITE.address.state}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-accent" />
            Mon-Sat · 7am-6pm
          </span>
        </div>
        <div className="flex items-center gap-5">
          <span className="text-cream/60">Owner-operated · Licensed &amp; insured</span>
          <a
            href={SITE.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="T3 Roofing on Facebook"
            className="hover:text-accent transition-colors"
          >
            <Facebook className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur">
      <TopBar />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <LogoLink />

        <nav className="hidden md:flex items-center gap-7">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm uppercase tracking-wider font-semibold text-foreground/80 hover:text-accent transition-colors"
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.phoneHref}
            className="hidden lg:inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition-colors"
          >
            <Phone className="h-4 w-4" />
            {SITE.phoneDisplay}
          </a>
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-sm bg-accent px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-accent-foreground hover:bg-primary transition-colors"
          >
            Free Estimate
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="md:hidden inline-flex items-center justify-center rounded-sm border border-border p-2"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-background">
              <nav className="mt-12 flex flex-col gap-1">
                {NAV.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="border-b border-border py-4 text-2xl uppercase tracking-wide font-[var(--font-display)] hover:text-accent"
                    activeProps={{ className: "text-accent" }}
                    activeOptions={{ exact: item.to === "/" }}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={SITE.phoneHref}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-5 py-4 text-base font-bold uppercase tracking-wider text-primary-foreground"
                >
                  <Phone className="h-5 w-5" /> {SITE.phoneDisplay}
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
