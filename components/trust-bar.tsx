import { PackageCheck, ShieldCheck, Star, Timer } from "lucide-react";
import { site } from "@/lib/site";

const highlights = [
  { icon: Star, label: `${site.rating.value} / 5 w opiniach Google` },
  { icon: Timer, label: site.responseTime },
  { icon: ShieldCheck, label: "Części oryginalne i zamienniki" },
  { icon: PackageCheck, label: "Odbiór osobisty i wysyłka" },
] as const;

export function TrustBar() {
  return (
    <section
      aria-label="Dlaczego warto"
      className="border-b border-line bg-white"
    >
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-3 px-4 py-5 text-sm font-semibold text-gray-800 lg:grid-cols-4">
        {highlights.map(({ icon: Icon, label }) => (
          <li
            key={label}
            className="flex items-center justify-center gap-2 text-center"
          >
            <Icon className="size-5 shrink-0 text-brand" aria-hidden="true" />
            {label}
          </li>
        ))}
      </ul>
    </section>
  );
}
