import { PackageCheck, ShieldCheck, Star, Timer } from "lucide-react";
import { site } from "@/lib/site";

const highlights = [
  { icon: Star, label: `${site.google.rating.value} / 5 w opiniach Google` },
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
      <ul className="mx-auto grid w-fit max-w-6xl gap-x-6 gap-y-3 px-4 py-5 text-sm font-semibold text-gray-800 sm:w-full sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map(({ icon: Icon, label }) => (
          <li
            key={label}
            className="flex items-center gap-2 sm:justify-center sm:text-center"
          >
            <Icon className="size-5 shrink-0 text-brand" aria-hidden="true" />
            {label}
          </li>
        ))}
      </ul>
    </section>
  );
}
