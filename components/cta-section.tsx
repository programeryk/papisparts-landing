import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { ButtonLink } from "./button-link";
import { WhatsAppIcon } from "./icons";
import { Reveal } from "./reveal";

export function CTASection() {
  return (
    <section
      aria-labelledby="cta-title"
      className="relative isolate overflow-hidden bg-gradient-to-br from-brand to-brand-dark"
    >
      <div
        className="absolute -top-24 -right-24 -z-10 size-96 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />
      <Reveal className="mx-auto max-w-4xl px-4 py-20 text-center text-white">
        <h2
          id="cta-title"
          className="font-display text-3xl font-extrabold tracking-tight md:text-5xl"
        >
          Potrzebujesz części samochodowych?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90 md:text-xl">
          Skontaktuj się z nami już teraz i otrzymaj profesjonalną poradę oraz
          szybką wycenę.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href={site.phone.href} variant="light" size="lg">
            <Phone className="size-5" aria-hidden="true" />
            Zadzwoń teraz
          </ButtonLink>
          <ButtonLink href={site.whatsapp} external variant="outline" size="lg">
            <WhatsAppIcon className="size-5" />
            WhatsApp
          </ButtonLink>
        </div>
        <p className="mt-6 text-sm text-white/75">
          {site.responseTime} • Darmowa konsultacja
        </p>
      </Reveal>
    </section>
  );
}
