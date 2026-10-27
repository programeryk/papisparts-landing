import { PackageCheck, ShieldCheck, Star, Timer } from "lucide-react";
import { format, formatDecimal } from "@/i18n/format";
import { getI18n } from "@/i18n/messages";
import { site } from "@/lib/site";

export async function TrustBar() {
  const { locale, m } = await getI18n();
  const highlights = [
    {
      icon: Star,
      label: format(m.trustBar.rating, {
        rating: formatDecimal(locale, site.google.rating.value),
      }),
    },
    { icon: Timer, label: m.common.responseTime },
    { icon: ShieldCheck, label: m.trustBar.genuineParts },
    { icon: PackageCheck, label: m.trustBar.pickupDelivery },
  ];

  return (
    <section
      aria-label={m.trustBar.label}
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
