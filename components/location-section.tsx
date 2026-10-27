import { Clock, MapPin, Navigation, SquareParking } from "lucide-react";
import { site } from "@/lib/site";
import { ButtonLink } from "./button-link";
import { OpeningHours } from "./opening-hours";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function LocationSection() {
  return (
    <section
      id="lokalizacja"
      aria-labelledby="lokalizacja-title"
      className="mx-auto max-w-6xl px-4 py-24"
    >
      <SectionHeading id="lokalizacja-title" title="Lokalizacja" />

      <div className="grid items-stretch gap-8 lg:grid-cols-[3fr_2fr]">
        <Reveal className="overflow-hidden rounded-xl border border-line bg-white shadow-sm">
          <iframe
            src={site.maps.embed}
            title={`Mapa dojazdu – ${site.name}`}
            className="h-80 w-full lg:h-full lg:min-h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>

        <Reveal
          delay={0.15}
          className="flex flex-col justify-center gap-5 rounded-xl bg-white p-8 shadow-sm"
        >
          <address className="flex items-start gap-3 text-lg font-semibold text-ink not-italic">
            <MapPin
              className="mt-0.5 size-6 shrink-0 text-brand"
              aria-hidden="true"
            />
            <span>
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}
            </span>
          </address>
          <div className="flex items-start gap-3 text-gray-600">
            <Clock
              className="mt-0.5 size-6 shrink-0 text-brand"
              aria-hidden="true"
            />
            <div>
              <h3 className="mb-1 font-semibold text-gray-800">
                Godziny otwarcia
              </h3>
              <OpeningHours />
            </div>
          </div>
          <p className="flex items-center gap-3 text-gray-600">
            <SquareParking
              className="size-6 shrink-0 text-brand"
              aria-hidden="true"
            />
            Parking dostępny pod lokalem.
          </p>
          <ButtonLink
            href={site.maps.link}
            external
            className="mt-2 self-start"
          >
            <Navigation className="size-4" aria-hidden="true" />
            Wyznacz trasę
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
