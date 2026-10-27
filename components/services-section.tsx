import {
  BatteryCharging,
  Cog,
  Disc3,
  Droplets,
  Funnel,
  Lightbulb,
  type LucideIcon,
  Wrench,
} from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const services: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Filtry samochodowe",
    description:
      "Filtry powietrza, oleju, paliwa i kabinowe dla wszystkich marek.",
    icon: Funnel,
  },
  {
    title: "Układ hamulcowy",
    description: "Klocki, tarcze, szczęki i przewody hamulcowe.",
    icon: Disc3,
  },
  {
    title: "Oleje i płyny",
    description:
      "Oleje silnikowe, przekładniowe, płyny chłodnicze i hamulcowe.",
    icon: Droplets,
  },
  {
    title: "Oświetlenie",
    description: "Żarówki, reflektory, lampy i oświetlenie LED.",
    icon: Lightbulb,
  },
  {
    title: "Zawieszenie",
    description: "Amortyzatory, sprężyny, wahacze i elementy zawieszenia.",
    icon: Wrench,
  },
  {
    title: "Układ napędowy",
    description: "Rozrządy, paski klinowe, sprzęgła i elementy napędu.",
    icon: Cog,
  },
  {
    title: "Akumulatory",
    description: "Akumulatory do większości marek samochodów.",
    icon: BatteryCharging,
  },
];

export function ServicesSection() {
  return (
    <section
      id="uslugi"
      aria-labelledby="uslugi-title"
      className="mx-auto max-w-6xl px-4 py-24"
    >
      <SectionHeading
        id="uslugi-title"
        title="Nasze usługi"
        lead="Oferujemy kompleksowy asortyment części samochodowych dla wszystkich popularnych marek."
      />

      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ title, description, icon: Icon }, i) => (
          <Reveal
            as="li"
            key={title}
            delay={(i % 4) * 0.08}
            className="group flex flex-col gap-4 rounded-xl border border-transparent bg-white p-6 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-brand/20 hover:shadow-xl"
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
              <Icon className="size-6" aria-hidden="true" />
            </span>
            <div>
              <h3 className="mb-1.5 text-lg font-bold text-ink">{title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {description}
              </p>
            </div>
          </Reveal>
        ))}
        <Reveal
          as="li"
          delay={0.24}
          className="flex flex-col justify-center rounded-xl bg-ink p-6 text-white shadow-sm"
        >
          <h3 className="mb-1.5 text-lg font-bold">Nie ma tego na liście?</h3>
          <p className="text-sm leading-relaxed text-white/75">
            <a
              href={site.phone.href}
              className="font-semibold text-white underline decoration-brand decoration-2 underline-offset-4 hover:text-brand"
            >
              Zadzwoń do nas
            </a>{" "}
            lub{" "}
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white underline decoration-brand decoration-2 underline-offset-4 hover:text-brand"
            >
              napisz na WhatsApp
            </a>{" "}
            – sprowadzimy część pod Twoje auto.
          </p>
        </Reveal>
      </ul>
    </section>
  );
}
