import { CircleCheck, Phone, Wrench } from "lucide-react";
import { getI18n } from "@/i18n/messages";
import { site, whatsappLink } from "@/lib/site";
import { ButtonLink } from "./button-link";
import { WhatsAppIcon } from "./icons";
import { Reveal } from "./reveal";

export async function MechanicSection() {
  const { m } = await getI18n();

  return (
    <section
      id="mechanik"
      aria-labelledby="mechanik-title"
      className="relative isolate overflow-hidden bg-ink text-white"
    >
      <div
        className="absolute -bottom-32 -left-32 -z-10 size-96 rounded-full bg-brand/25 blur-3xl"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 lg:grid-cols-[3fr_2fr]">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-1.5 text-xs font-bold tracking-[0.14em] uppercase">
            <Wrench className="size-4" aria-hidden="true" />
            {m.mechanic.badge}
          </span>
          <h2
            id="mechanik-title"
            className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-5xl"
          >
            {m.mechanic.title}
          </h2>
          <p className="mt-5 max-w-xl text-lg text-white/80">
            {m.mechanic.text}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={site.phone.href} size="lg">
              <Phone className="size-5" aria-hidden="true" />
              {m.mechanic.call}
            </ButtonLink>
            <ButtonLink
              href={whatsappLink(m.mechanic.whatsappMessage)}
              external
              variant="outline"
              size="lg"
            >
              <WhatsAppIcon className="size-5" />
              {m.common.writeWhatsapp}
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
            {m.mechanic.points.map((point) => (
              <li key={point} className="flex items-start gap-3 font-medium">
                <CircleCheck
                  className="mt-0.5 size-5 shrink-0 text-brand"
                  aria-hidden="true"
                />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
