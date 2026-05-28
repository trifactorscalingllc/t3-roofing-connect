import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--ink)] text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="text-5xl font-[var(--font-display)] leading-none">T3</div>
          <div className="mt-2 text-xs uppercase tracking-[0.25em] text-cream/60">
            Roofing &amp; Construction
          </div>
          <p className="mt-6 max-w-sm text-cream/80">
            Owner-operated by {SITE.owner}. Serving the Wisconsin Lakeshore with
            roofing, siding and construction work done the right way.
          </p>
        </div>

        <div>
          <h4 className="text-cream text-sm uppercase tracking-wider mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm text-cream/80">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-accent" />
              <a href={SITE.phoneHref} className="hover:text-accent">{SITE.phoneDisplay}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-accent" />
              <a href={SITE.emailHref} className="hover:text-accent break-all">{SITE.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-accent" />
              <span>{SITE.address.street}<br />{SITE.address.city}, {SITE.address.state} {SITE.address.zip}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-cream text-sm uppercase tracking-wider mb-4">Site</h4>
          <ul className="space-y-2 text-sm text-cream/80">
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-accent">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Free Estimate</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-cream/50 md:flex-row md:items-center md:justify-between md:px-8">
          <div>© {new Date().getFullYear()} T3 Roofing &amp; Construction. All rights reserved.</div>
          <div>Two Rivers, Wisconsin · Licensed &amp; insured</div>
        </div>
      </div>
    </footer>
  );
}