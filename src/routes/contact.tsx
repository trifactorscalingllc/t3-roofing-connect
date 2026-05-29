import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { SITE, SERVICES } from "@/lib/site";
import { CtaLink } from "@/components/cta-button";
import { PageHero } from "@/components/page-hero";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact T3 · Free Roofing Estimate in Two Rivers, WI" },
      {
        name: "description",
        content:
          "Get a free roofing or construction estimate from T3 Roofing & Construction. Call (920) 304-6859 or send a message.",
      },
      { property: "og:title", content: "Contact T3 Roofing & Construction" },
      { property: "og:description", content: "Free estimates across the Wisconsin Lakeshore. Call (920) 304-6859." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  phone: z.string().trim().min(7, "Please enter a phone number").max(30),
  email: z.string().trim().email("Please enter a valid email").max(255).or(z.literal("")),
  service: z.string().max(80),
  message: z.string().trim().min(5, "Tell us a bit about the project").max(2000),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [usedFallback, setUsedFallback] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        errs[issue.path.join(".")] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    const { name, phone, email, service, message } = parsed.data;
    setSubmitting(true);
    const { error } = await supabase.from("estimate_requests").insert({
      name,
      phone,
      email: email || null,
      service: service || null,
      message,
    });
    setSubmitting(false);

    if (error) {
      // Fallback: open mailto so the message still reaches Tony.
      setUsedFallback(true);
      const body = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\n\n${message}`;
      window.location.href = `${SITE.emailHref}?subject=${encodeURIComponent(
        "New estimate request from " + name,
      )}&body=${encodeURIComponent(body)}`;
    }
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Free Estimate"
        title="Let's talk"
        accent="about your project."
        subtitle="Call directly for the fastest response, or send us a note and we'll get back to you within one business day."
      >
        <CtaLink href={SITE.phoneHref} variant="outlineLight">
          <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
        </CtaLink>
      </PageHero>

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:grid-cols-[1.5fr_1fr] md:gap-16 md:px-8 md:py-24">
          {/* FORM */}
          <div>
            <h2 className="text-3xl md:text-4xl uppercase">Send a message</h2>

            {sent ? (
              <div className="mt-8 flex items-start gap-3 border-l-4 border-accent bg-card p-6">
                <CheckCircle2 className="h-6 w-6 flex-none text-accent" />
                <div>
                  {usedFallback ? (
                    <>
                      <div className="font-semibold uppercase tracking-wider">Your email is ready to send.</div>
                      <p className="mt-1 text-sm text-foreground/70">
                        We opened your email app with the message pre-filled, just hit send.
                        Or call Tony directly at {SITE.phoneDisplay} for the fastest response.
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="font-semibold uppercase tracking-wider">Got it, thanks.</div>
                      <p className="mt-1 text-sm text-foreground/70">
                        Your request is in. We'll reach out within one business day. For the
                        fastest response, call Tony directly at {SITE.phoneDisplay}.
                      </p>
                    </>
                  )}
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-8 space-y-5" noValidate>
                <Field label="Your name" name="name" required error={errors.name} />
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Phone" name="phone" type="tel" required error={errors.phone} />
                  <Field label="Email (optional)" name="email" type="email" error={errors.email} />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-foreground/70 mb-2">
                    Service
                  </label>
                  <select
                    name="service"
                    defaultValue=""
                    className="w-full border border-input bg-background px-3 py-3 text-base focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  >
                    <option value="">Choose one…</option>
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Other">Something else</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-foreground/70 mb-2">
                    Tell us about the project <span className="text-accent">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full border border-input bg-background px-3 py-3 text-base focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="Roof age, what you're seeing, address (if you'd like an on-site look)…"
                  />
                  {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center bg-accent px-6 py-4 text-sm font-bold uppercase tracking-[0.04em] text-white transition-colors hover:bg-accent-hover disabled:opacity-60 sm:w-auto"
                >
                  {submitting ? "Sending…" : "Send Estimate Request"}
                </button>
                <p className="text-xs text-muted-foreground">
                  We respect your privacy. Information is only used to contact you about your project.
                </p>
              </form>
            )}
          </div>

          {/* CONTACT INFO */}
          <aside className="bg-card border-l-4 border-accent p-8">
            <h2 className="text-2xl uppercase">Reach Us</h2>
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 text-accent" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
                  <a href={SITE.phoneHref} className="text-lg font-semibold hover:text-accent">
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 text-accent" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                  <a href={SITE.emailHref} className="hover:text-accent break-all">
                    {SITE.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-accent" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Address</div>
                  <div>
                    {SITE.address.street}<br />
                    {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 text-accent" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Hours</div>
                  <div>Mon–Sat · By appointment<br />Emergency calls anytime</div>
                </div>
              </li>
            </ul>

            <div className="mt-8 aspect-square w-full overflow-hidden border border-border">
              <iframe
                title="T3 Roofing service area map"
                src="https://www.google.com/maps?q=2010+12th+St,+Two+Rivers,+WI+54241&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-wider text-foreground/70 mb-2">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full border border-input bg-background px-3 py-3 text-base focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
      />
      {error && <p className="mt-1 text-sm text-destructive">{error}</p>}
    </div>
  );
}