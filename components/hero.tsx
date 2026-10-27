"use client";

import { Phone } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { ButtonLink } from "./button-link";
import { WhatsAppIcon } from "./icons";

const slides = [
  {
    src: "/images/hero-shop-interior.jpg",
    alt: "Wnętrze sklepu Papis Parts – plakat Denso i zegar w kształcie koła",
  },
  {
    src: "/images/hero-shop-shelves.jpg",
    alt: "Półki z chemią samochodową i wycieraczkami w sklepie Papis Parts",
  },
  {
    src: "/images/hero-parts-ready.jpg",
    alt: "Części Bosch i Meyle przygotowane do odbioru",
  },
] as const;

const AUTOPLAY_MS = 6000;
const SWIPE_THRESHOLD_PX = 50;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
});

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const swipeStartX = useRef<number | null>(null);

  const show = (next: number) =>
    setIndex((next + slides.length) % slides.length);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = window.setInterval(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, reduceMotion]);

  return (
    <section
      id="top"
      aria-roledescription="karuzela"
      aria-label="Papis Parts – sklep motoryzacyjny"
      className="relative isolate flex h-[72svh] max-h-[760px] min-h-[520px] touch-pan-y select-none items-center overflow-hidden bg-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onPointerDown={(event) => {
        swipeStartX.current = event.clientX;
      }}
      onPointerUp={(event) => {
        if (swipeStartX.current === null) return;
        const delta = event.clientX - swipeStartX.current;
        swipeStartX.current = null;
        if (Math.abs(delta) >= SWIPE_THRESHOLD_PX) {
          show(delta < 0 ? index + 1 : index - 1);
        }
      }}
    >
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={i === index ? slide.alt : ""}
          aria-hidden={i !== index}
          fill
          sizes="100vw"
          preload={i === 0}
          draggable={false}
          className={`-z-20 object-cover transition-opacity duration-700 ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/75 via-black/55 to-black/80" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1 bg-brand" />

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 text-center text-white">
        <motion.p
          {...fadeUp(0.1)}
          className="mb-5 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] whitespace-nowrap backdrop-blur-sm sm:text-sm sm:tracking-[0.2em]"
        >
          Sklep motoryzacyjny · {site.address.city}
        </motion.p>
        <motion.h1
          {...fadeUp(0.25)}
          className="font-display text-5xl font-black uppercase leading-[0.95] tracking-tight text-balance sm:text-7xl lg:text-8xl"
        >
          Bez przerwy w drodze
        </motion.h1>
        <motion.p
          {...fadeUp(0.4)}
          className="mt-5 text-lg font-semibold text-white/90 sm:text-xl"
        >
          Doradzimy, dobierzemy, zamówimy.
        </motion.p>
        <motion.div
          {...fadeUp(0.55)}
          className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
        >
          <ButtonLink
            href={site.phone.href}
            size="lg"
            className="w-full sm:w-auto"
          >
            <Phone className="size-5" aria-hidden="true" />
            Zadzwoń: {site.phone.display}
          </ButtonLink>
          <ButtonLink
            href={site.whatsapp}
            external
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
          >
            <WhatsAppIcon className="size-5" />
            Napisz na WhatsApp
          </ButtonLink>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-8 flex justify-center gap-3">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => show(i)}
            aria-label={`Zdjęcie ${i + 1} z ${slides.length}`}
            aria-current={i === index}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-brand" : "w-2.5 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
