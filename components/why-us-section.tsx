import {
  type LucideIcon,
  ShieldCheck,
  Timer,
  Truck,
  UserCheck,
} from "lucide-react";
import { getI18n, type Messages } from "@/i18n/messages";
import { Reveal } from "./reveal";

const reasons = [
  { key: "quickQuote", icon: Timer },
  { key: "personal", icon: UserCheck },
  { key: "genuine", icon: ShieldCheck },
  { key: "pickup", icon: Truck },
] as const satisfies readonly {
  key: keyof Messages["whyUs"]["items"];
  icon: LucideIcon;
}[];

export async function WhyUsSection() {
  const { m } = await getI18n();

  return (
    <section
      id="dlaczego-my"
      aria-labelledby="dlaczego-my-title"
      className="bg-white"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 lg:grid-cols-[5fr_7fr]">
        <Reveal>
          <h2
            id="dlaczego-my-title"
            className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            {m.whyUs.title}
          </h2>
          <span className="mt-4 block h-1 w-12 rounded-full bg-brand" />
          <h3 className="mt-6 text-lg font-bold text-ink">
            {m.whyUs.partsTitle}
          </h3>
          <p className="mt-2 leading-relaxed font-medium text-gray-700">
            {m.whyUs.partsText}
          </p>
        </Reveal>

        <ul className="grid gap-5 sm:grid-cols-2">
          {reasons.map(({ key, icon: Icon }, i) => (
            <Reveal
              as="li"
              key={key}
              delay={i * 0.1}
              className="group rounded-xl border border-line bg-surface p-6 transition-[border-color,box-shadow] duration-300 hover:border-brand/30 hover:shadow-lg"
            >
              <Icon
                className="mb-4 size-8 text-brand transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              />
              <h3 className="mb-1.5 text-lg font-extrabold text-ink">
                {m.whyUs.items[key].title}
              </h3>
              <p className="text-sm font-medium text-gray-600">
                {m.whyUs.items[key].description}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
