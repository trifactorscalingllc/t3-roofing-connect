## T3 Roofing & Construction — Marketing Site

A multi-route marketing site for Tony Elvetici's Two Rivers, WI roofing & construction business. Leans into the differentiator from the Yelp review: **the roofer who actually picks up the phone**. Phone CTA `(920) 600-1297` is sticky and present on every screen.

### Design system

- **Palette (Steel Blue Lakeshore):**
  - `--background` `#f1ede4` (warm off-white)
  - `--foreground` `#0f1b2d` (deep navy)
  - `--primary` `#1e3a5f` (steel navy)
  - `--accent` `#3b82a8` (lake blue) — used sparingly for highlights, links, focus rings
  - Dark sections use `#0f1b2d` background with cream type for hero + footer
- **Typography:** Bebas Neue (display, condensed, all-caps headlines) + Barlow (body, 400/500/600). Installed via `@fontsource/bebas-neue` and `@fontsource/barlow`, imported in `src/main.tsx`, wired into Tailwind via `src/styles.css` `@theme` font tokens.
- **Voice:** short, declarative, blue-collar. No marketing fluff. "We answer. We show up. We get on the roof."
- **Components:** customize shadcn Button with `cta` variant (chunky, square-ish corners ~6px radius, navy bg, cream text, accent ring on hover) and `phone` variant (outline cream on dark hero).

### Routes

| File | URL | Purpose |
|---|---|---|
| `src/routes/__root.tsx` | — | Shell: header (logo, nav, phone), sticky mobile phone CTA bar, footer |
| `src/routes/index.tsx` | `/` | Hero (split, copy left + roof photo right), Services preview, Why T3, Reviews, Service area, Estimate CTA |
| `src/routes/services.tsx` | `/services` | All 8 services as cards with short descriptions |
| `src/routes/gallery.tsx` | `/gallery` | Project photo grid (placeholder cards until real photos provided) |
| `src/routes/about.tsx` | `/about` | Owner-operated story, Tony Elvetici, Lakeshore WI, why responsiveness matters |
| `src/routes/contact.tsx` | `/contact` | Estimate form, phone, email, address, embedded service-area map |

Each route gets its own `head()` with unique title, description, og:title, og:description; canonicals only on leaves.

### Page contents

**Home (`/`)**
- Hero (asymmetric split): left column has eyebrow "Two Rivers, WI · Owner-Operated", H1 "WE PICK UP. WE SHOW UP." subhead "Roofing, siding, and construction for the Lakeshore — the way it should be done." Two CTAs: `Call (920) 600-1297` (primary) and `Free Estimate` (outline). Right column has hero roof photo (placeholder asset → replace when client supplies).
- Services strip: 8 service cards in a 4×2 grid (Asphalt Shingles, Tear-offs, Re-roofs, Roof Repairs, New Construction, Siding, Flooring, Insulation). Each is a `Link` to `/services#<slug>`.
- Why T3 band (dark navy): three pillars — Answer the phone · Show up fast · 5-star local. Lifted from Julio Lopez review angle.
- Featured testimonial: full-bleed Julio Lopez quote in Bebas.
- Service area teaser: "Two Rivers · Manitowoc · Mishicot · Kewaunee · Cleveland" with link to /contact.
- Estimate CTA footer band.

**Services (`/services`)**
- Intro paragraph + 8 anchored sections, each with icon (Lucide: home, hammer, wrench, layers, etc.), short description, "Call for estimate" inline CTA.

**Gallery (`/gallery`)**
- Responsive masonry-ish grid using `aspect-ratio` cards. Each card has a placeholder image with a "before/after" badge. Note in code marking these as `TODO: replace with client-supplied project photos`.

**About (`/about`)**
- Short narrative about Tony, the business, Two Rivers roots. Stats row (Years on the Lakeshore / Roofs replaced / Star rating).

**Contact (`/contact`)**
- Two-column: form (Name, Phone, Email, Service interest, Message) on the left; phone, email, address card + Google Maps embed on the right. Form is presentational only (no backend) — submit handler opens `tel:` or pre-fills `mailto:` for now; note in plan that wiring it to email/DB needs Lovable Cloud later.

### Header & footer (in `__root.tsx`)
- Header: T3 wordmark (text logo for now — Bebas, "T3" big, "ROOFING & CONSTRUCTION" small caps below), nav links, prominent phone button on right. Mobile: hamburger sheet + persistent bottom phone bar.
- Footer: address, phone, email, hours placeholder, service area list, copyright.

### Assets

- No real photos yet. Generate 4–6 stock-style placeholder images via `imagegen` for hero, services, gallery (asphalt shingle roof closeup, crew on roof, Wisconsin lakeshore home exterior, before/after roof). All saved under `src/assets/` and imported as ES6 imports. Each tagged in code with a TODO comment to swap for real client photos.
- Logo: simple typographic mark for now.

### Out of scope (call out to user)

- No working contact form backend — needs Lovable Cloud (email/db). Form will validate + show success state only.
- No CMS for gallery — photos are hardcoded imports until client provides real ones.
- No analytics / no booking integration.

### Build order

1. Install fonts (`@fontsource/bebas-neue`, `@fontsource/barlow`), wire into `src/styles.css` `@theme` and update color tokens to Steel Blue Lakeshore palette in oklch.
2. Build shared header + footer in `__root.tsx` + sticky mobile phone bar.
3. Generate placeholder hero + service imagery.
4. Build `/` with all sections.
5. Build `/services`, `/about`, `/contact`, `/gallery` route files with unique `head()` meta each.
6. Add shadcn button `cta` variant and any small component polish.
7. QA: check every route's title/description, every phone link uses `tel:+19206001297`, every email uses `mailto:`, responsive at 375px / 768px / 1280px.
