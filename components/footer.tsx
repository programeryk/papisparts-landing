import Image from "next/image";
import { navigation, site } from "@/lib/site";
import { CurrentYear } from "./current-year";
import { OpeningHours } from "./opening-hours";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface text-gray-600">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <Image
            src="/logo.png"
            alt={site.name}
            width={570}
            height={132}
            className="h-10 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm">
            Części samochodowe w Drawsku Pomorskim. Doradzimy, dobierzemy,
            zamówimy.
          </p>
        </div>

        <nav aria-label="Stopka">
          <h2 className="mb-3 text-sm font-bold text-ink uppercase">Strona</h2>
          <ul className="space-y-2 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-brand">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-3 text-sm font-bold text-ink uppercase">Kontakt</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={site.phone.href} className="hover:text-brand">
                {site.phone.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-brand">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={site.google.profile}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand"
              >
                Opinie w Google
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-bold text-ink uppercase">Sklep</h2>
          <address className="text-sm not-italic">
            {site.address.street}
            <br />
            {site.address.postalCode} {site.address.city}
          </address>
          <OpeningHours className="mt-3 text-sm" />
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl justify-center px-4 py-5 text-center text-xs">
          <span>
            © <CurrentYear buildYear={new Date().getFullYear()} /> {site.name} •{" "}
            {site.slogan}
          </span>
        </div>
      </div>
    </footer>
  );
}
