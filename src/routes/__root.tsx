import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import "@fontsource/bebas-neue/400.css";
import "@fontsource/barlow/400.css";
import "@fontsource/barlow/500.css";
import "@fontsource/barlow/600.css";
import "@fontsource/barlow/700.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobilePhoneBar } from "@/components/mobile-phone-bar";
import { SITE, SERVICES } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl text-foreground">404</h1>
        <h2 className="mt-4 text-2xl uppercase tracking-wide">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Looks like that page slid off the roof.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-sm bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-accent"
          >
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "T3 Roofing & Construction — Two Rivers, WI" },
      {
        name: "description",
        content:
          "Owner-operated roofing, siding & construction on the Wisconsin Lakeshore. We answer the phone and we show up. Call (920) 304-6859.",
      },
      { name: "author", content: "T3 Roofing & Construction" },
      { property: "og:site_name", content: "T3 Roofing & Construction" },
      { property: "og:title", content: "T3 Roofing & Construction — Two Rivers, WI" },
      {
        property: "og:description",
        content:
          "Owner-operated roofing, siding & construction on the Wisconsin Lakeshore. We answer the phone and we show up.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/favicon.svg" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RoofingContractor",
          "@id": "https://t3roofing.com/#business",
          name: "T3 Roofing & Construction",
          description:
            "Owner-operated roofing, siding and construction serving Two Rivers and the Wisconsin Lakeshore. The roofer who actually answers the phone.",
          telephone: SITE.phoneHref.replace("tel:", ""),
          email: SITE.email,
          founder: SITE.owner,
          image: "/favicon.svg",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: SITE.address.street,
            addressLocality: SITE.address.city,
            addressRegion: SITE.address.state,
            postalCode: SITE.address.zip,
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: SITE.geo.lat,
            longitude: SITE.geo.lng,
          },
          areaServed: SITE.serviceArea.map((city) => ({
            "@type": "City",
            name: `${city}, WI`,
          })),
          sameAs: [SITE.social.facebook, SITE.social.yelp],
          makesOffer: SERVICES.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title },
          })),
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "07:00",
            closes: "18:00",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 pb-16 md:pb-0">
          <Outlet />
        </main>
        <SiteFooter />
        <MobilePhoneBar />
      </div>
    </QueryClientProvider>
  );
}
