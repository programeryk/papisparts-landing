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
import { getI18n, type Messages } from "@/i18n/messages";
import { site, whatsappLink } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const services = [
  { key: "filters", icon: Funnel },
  { key: "brakes", icon: Disc3 },
  { key: "fluids", icon: Droplets },
  { key: "lighting", icon: Lightbulb },
  { key: "suspension", icon: Wrench },
  { key: "drivetrain", icon: Cog },
  { key: "batteries", icon: BatteryCharging },
] as const satisfies readonly {
  key: keyof Messages["services"]["items"];
  icon: LucideIcon;
}[];

export async function ServicesSection() {
  const { m } = await getI18n();
  const { notListed } = m.services;

  return (
    <section
      id="uslugi"
      aria-labelledby="uslugi-title"
      className="mx-auto max-w-6xl px-4 py-24"
    >
      <SectionHeading
        id="uslugi-title"
        title={m.services.title}
        lead={m.services.lead}
      />

      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ key, icon: Icon }, i) => (
          <Reveal
            as="li"
            key={key}
            delay={(i % 4) * 0.08}
            className="group flex flex-col gap-4 rounded-xl border border-transparent bg-white p-6 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-brand/20 hover:shadow-xl"
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
              <Icon className="size-6" aria-hidden="true" />
            </span>
            <div>
              <h3 className="mb-1.5 text-lg font-bold text-ink">
                {m.services.items[key].title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {m.services.items[key].description}
              </p>
            </div>
          </Reveal>
        ))}
        <Reveal
          as="li"
          delay={0.24}
          className="flex flex-col justify-center rounded-xl bg-ink p-6 text-white shadow-sm"
        >
          <h3 className="mb-1.5 text-lg font-bold">{notListed.title}</h3>
          <p className="text-sm leading-relaxed text-white/75">
            <a
              href={site.phone.href}
              className="font-semibold text-white underline decoration-brand decoration-2 underline-offset-4 hover:text-brand"
            >
              {notListed.callUs}
            </a>{" "}
            {notListed.or}{" "}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white underline decoration-brand decoration-2 underline-offset-4 hover:text-brand"
            >
              {notListed.writeWhatsapp}
            </a>{" "}
            {notListed.rest}
          </p>
        </Reveal>
      </ul>
    </section>
  );
}
