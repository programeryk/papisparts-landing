import { ShieldCheck, Timer, Truck, UserCheck } from "lucide-react";
import { Reveal } from "./reveal";

const reasons = [
  {
    title: "Ekspresowa wycena",
    description: "Nie czekasz godzinami na odpowiedź – działamy błyskawicznie.",
    icon: Timer,
  },
  {
    title: "Indywidualne podejście",
    description:
      "Dobieramy części samochodowe pod Twoje potrzeby, nie wciskamy gotowców.",
    icon: UserCheck,
  },
  {
    title: "Oryginalne i zamienne części",
    description: "Szeroki wybór – dla każdego auta, każdej marki.",
    icon: ShieldCheck,
  },
  {
    title: "Odbiór osobisty i wysyłka",
    description: "Wygodnie dla Ciebie – na miejscu lub z dostawą.",
    icon: Truck,
  },
] as const;

export function WhyUsSection() {
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
            Dlaczego właśnie my?
          </h2>
          <span className="mt-4 block h-1 w-12 rounded-full bg-brand" />
          <h3 className="mt-6 text-lg font-bold text-ink">
            Jakie mamy części?
          </h3>
          <p className="mt-2 leading-relaxed font-medium text-gray-700">
            Prowadzimy sprzedaż części samochodowych do większości marek:
            filtry, klocki i tarcze hamulcowe, oleje silnikowe, płyny
            eksploatacyjne, żarówki, elementy zawieszenia, rozrządy, akumulatory
            i wiele więcej. Oferujemy części oryginalne i zamienniki najwyższej
            jakości – do samochodów m.in. BMW, Audi, Volkswagen, Toyota. Sklep
            motoryzacyjny, odbiór osobisty w Drawsku Pomorskim.
          </p>
        </Reveal>

        <ul className="grid gap-5 sm:grid-cols-2">
          {reasons.map(({ title, description, icon: Icon }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={i * 0.1}
              className="group rounded-xl border border-line bg-surface p-6 transition-[border-color,box-shadow] duration-300 hover:border-brand/30 hover:shadow-lg"
            >
              <Icon
                className="mb-4 size-8 text-brand transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              />
              <h3 className="mb-1.5 text-lg font-extrabold text-ink">
                {title}
              </h3>
              <p className="text-sm font-medium text-gray-600">{description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
