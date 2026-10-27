import { ExternalLink, Quote, Star } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const reviews = [
  {
    author: "Arkadiusz Tuszyński",
    text: "Polecam sklep i warsztat, szybka i profesjonalna obsługa!",
    avatar: "bg-brand",
  },
  { author: "Paulina Cichon", text: "Polecam!", avatar: "bg-[#dfb3a6]" },
  { author: "Tomasz Wachoński", text: "Polecam.", avatar: "bg-gray-400" },
] as const;

function Stars() {
  return (
    <span className="flex gap-0.5 text-star">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} className="size-5 fill-current" aria-hidden="true" />
      ))}
    </span>
  );
}

export function ReviewsSection() {
  return (
    <section
      id="opinie"
      aria-labelledby="opinie-title"
      className="mx-auto max-w-6xl px-4 py-24"
    >
      <SectionHeading id="opinie-title" title="Co mówią o nas klienci?" />

      <ul className="grid gap-5 md:grid-cols-3">
        {reviews.map(({ author, text, avatar }, i) => (
          <Reveal
            as="li"
            key={author}
            delay={i * 0.1}
            className="relative flex flex-col rounded-xl bg-white p-6 shadow-sm"
          >
            <figure className="flex h-full flex-col">
              <Quote
                className="absolute top-5 right-5 size-8 text-brand/15"
                aria-hidden="true"
              />
              <Stars />
              <span className="sr-only">Ocena 5 na 5</span>
              <blockquote className="mt-4 flex-1 text-base font-medium text-gray-700">
                „{text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  className={`grid size-10 place-items-center rounded-full text-lg font-bold text-white ${avatar}`}
                  aria-hidden="true"
                >
                  {author.charAt(0)}
                </span>
                <span className="font-semibold text-ink">{author}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.3} className="mt-10 flex justify-center">
        <a
          href={site.google.profile}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:border-brand/40 hover:text-brand"
        >
          <Star className="size-4 fill-star text-star" aria-hidden="true" />
          {site.google.rating.value} / 5 na podstawie {site.google.rating.count}{" "}
          opinii Google
          <ExternalLink className="size-4" aria-hidden="true" />
        </a>
      </Reveal>
    </section>
  );
}
