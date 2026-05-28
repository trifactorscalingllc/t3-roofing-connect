import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function MobilePhoneBar() {
  return (
    <a
      href={SITE.phoneHref}
      className="md:hidden fixed bottom-0 inset-x-0 z-50 flex items-center justify-center gap-2 bg-primary px-4 py-4 text-base font-bold uppercase tracking-wider text-primary-foreground shadow-[0_-4px_20px_rgba(0,0,0,0.15)]"
    >
      <Phone className="h-5 w-5" />
      Call {SITE.phoneDisplay}
    </a>
  );
}