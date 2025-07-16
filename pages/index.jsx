import style from "./index.module.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

let bgimgs = [
  {
    url: "https://i.imgur.com/0PWRQcT.jpeg",
  },
  {
    url: "https://i.imgur.com/xrJfwL5.jpeg",
  },
  {
    url: "https://i.imgur.com/2o7sdAl.jpeg",
  },
];

export default function Home() {
  let [imgIndex, setImgIndex] = useState(0);

  function changeImage(e) {
    const index = bgimgs.findIndex((img) => img.url === e.target.dataset.url);
    setImgIndex(index);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImgIndex((prev) => (prev + 1 >= bgimgs.length ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(intervalId);
  }, [imgIndex]); // <-- dependency on imgIndex!

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${style.main} `}
    >
      {/* Logo above hero */}
      <div className="w-full flex justify-center items-center pt-8 mb-4">
        <Image
          src="/logoblank.png"
          alt="Papis Parts logo"
          width={210}
          height={60}
          priority
          className="object-contain"
        />
      </div>

      <header
        className={`relative flex flex-col items-center justify-between w-full overflow-hidden ${style.header} ${style.background}`}
        style={{
          minHeight: "480px",
          height: "64vh",
          maxHeight: "730px",
          padding: 0,
        }}
      >
        {/* --- Headline + Subheadline AT THE TOP --- */}
        <div className="w-full absolute top-24 flex flex-col items-center pt-12 z-20">
          <h1
            className="text-white text-4xl sm:text-8xl tracking-tight uppercase text-center mb-2"
            style={{
              filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.9))",
            }}
          >
            Bez przerwy w drodze
          </h1>
          <h2
            className="text-white text-xl sm:text-xl tracking-normal font-extrabold text-center mb-0"
            style={{
              filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.9))",
            }}
          >
            Doradzimy, dobierzemy, zamówimy.
          </h2>
        </div>

        {/* --- Carousel Dots at the BOTTOM --- */}
        <div className="w-full absolute bottom-0 flex flex-row justify-center mb-10 z-20">
          <ul className="flex flex-row gap-4">
            {bgimgs.map((img, index) => (
              <motion.button
                className="rounded-full w-3 h-3 border border-white bg-white"
                style={{
                  backgroundColor:
                    img.url === bgimgs[imgIndex].url ? "#ce160e" : "white",
                  opacity: img.url === bgimgs[imgIndex].url ? 1 : 0.6,
                  borderWidth: img.url === bgimgs[imgIndex].url ? 2 : 1,
                  borderColor:
                    img.url === bgimgs[imgIndex].url ? "#ce160e" : "white",
                  boxShadow:
                    img.url === bgimgs[imgIndex].url
                      ? "0 0 0 2px rgba(206,22,14,0.14)"
                      : "",
                }}
                onClick={changeImage}
                data-url={img.url}
                key={img.url}
                aria-label={`Wybierz zdjęcie ${index + 1}`}
                tabIndex={0}
              />
            ))}
          </ul>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* --- BG Image --- */}
        <motion.img
          src={bgimgs[imgIndex].url}
          alt="header image"
          key={bgimgs[imgIndex].url}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, type: "tween", stiffness: 100 }}
        />
      </header>

      {/* --- CONTACT SECTION --- */}
      <section className="w-full max-w-4xl mx-auto mb-24 px-4 mt-24">
        <h2 className="text-3xl text-gray-900 text-center mb-6">
          Kontakt
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left: Placeholder Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://i.imgur.com/ZI9nrA1.jpeg"
              alt="Telefon kontaktowy"
              className="rounded-xl shadow-sm object-cover h-52 w-full max-w-xs"
              style={{ background: "#f6f6f6" }}
            />
          </div>
          {/* Right: Contact Info */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <p className="text-xl font-medium text-gray-800 mb-3 flex items-center gap-3">
              <svg
                className="w-7 h-7 text-[#ce160e]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5.75C3 4.784 3.784 4 4.75 4h14.5A1.75 1.75 0 0 1 21 5.75v12.5A1.75 1.75 0 0 1 19.25 20H4.75A1.75 1.75 0 0 1 3 18.25V5.75Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.5 5.75 12 13.25l8.5-7.5"
                />
              </svg>
              <a
                href="mailto:papisparts@gmail.com"
                className="hover:underline hover:text-[#ce160e]"
              >
                papisparts@gmail.com
              </a>
            </p>
            <p className="text-xl font-medium text-gray-800 mb-3 flex items-center gap-3">
              <svg
                className="w-7 h-7 text-[#ce160e]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.05 7.1a16.88 16.88 0 0 0 14.85 14.85l2.2-2.2a2 2 0 0 0 .5-2.07l-1.05-3.18a2 2 0 0 0-1.92-1.38h-2.02a1 1 0 0 1-.96-.7l-.38-1.15a1 1 0 0 1 .22-.98l2.31-2.31a1 1 0 0 0 .22-.98l-1.05-3.18A2 2 0 0 0 14.54 3l-3.18-1.05a2 2 0 0 0-2.07.5l-2.2 2.2Z"
                />
              </svg>
              <a
                href="tel:+48888399666"
                className="hover:underline hover:text-[#ce160e]"
              >
                888 399 666
              </a>
            </p>
            <p className="text-base text-gray-600 mb-5">
              Godziny pracy:{" "}
              <span className="font-semibold text-gray-800">24/6</span>
            </p>
            <a
              href="https://wa.me/48888399666"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-2 bg-[#ce160e] text-white rounded-md font-semibold text-base hover:bg-[#af110b] transition"
            >
              Napisz na WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* --- WHY US SECTION --- */}
      <section className="w-full max-w-4xl mx-auto mb-20 px-4">
        <h2 className="text-3xl text-gray-900 text-center mb-12 tracking-tight">
          Dlaczego właśnie my?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl text-gray-900 mb-2">
              Ekspresowa wycena
            </h3>
            <p className="text-gray-600 text-base font-bold">
              Nie czekasz godzinami na odpowiedź – działamy błyskawicznie.
            </p>
          </div>
          <div>
            <h3 className="text-xl text-gray-900 mb-2">
              Indywidualne podejście
            </h3>
            <p className="text-gray-600 text-base font-bold">
              Dobieramy części pod Twoje potrzeby, nie wciskamy gotowców.
            </p>
          </div>
          <div>
            <h3 className="text-xl text-gray-900 mb-2">
              Oryginalne i zamienne części
            </h3>
            <p className="text-gray-600 text-base font-bold">
              Szeroki wybór – dla każdego auta, każdej marki.
            </p>
          </div>
          <div>
            <h3 className="text-xl text-gray-900 mb-2">
              Odbiór osobisty i wysyłka
            </h3>
            <p className="text-gray-600 text-base font-bold">
              Wygodnie dla Ciebie – na miejscu lub z dostawą.
            </p>
          </div>
        </div>
      </section>

      {/* --- LOCATION SECTION --- */}
      <section className="w-full max-w-4xl mx-auto mb-20 px-4">
        <h2 className="text-3xl text-gray-900 text-center mb-6">
          Lokalizacja
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="flex-1 min-w-[280px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2298.2209148758677!2d15.81248121606998!3d53.53288205088895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4700e3ec24f5c9e1%3A0xc23e4dc3328b1b0b!2s11%20Pu%C5%82ku%20Piechoty%2020A%2C%2078-500%20Drawsko%20Pomorskie!5e0!3m2!1spl!2spl!4v1718302670227!5m2!1spl!2spl"
              width="100%"
              height="320"
              className="rounded-xl border border-gray-200"
              style={{ minHeight: "240px", background: "#f8f9fa" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Papis Parts"
            ></iframe>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center md:items-start">
            <div className="text-lg font-medium text-gray-900 mb-2 flex items-center gap-2">
              <svg
                className="w-6 h-6 text-[#ce160e]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21c-.32 0-.62-.15-.81-.41C10.51 19.06 7 14.24 7 10a5 5 0 0 1 10 0c0 4.24-3.51 9.06-4.19 9.59-.19.26-.49.41-.81.41ZM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                />
              </svg>
              11 Pułku Piechoty 20a, 78-500 Drawsko Pomorskie
            </div>
            <a
              href="https://maps.google.com/?q=11+Pułku+Piechoty+20a,+78-500+Drawsko+Pomorskie"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 px-6 py-2 bg-[#ce160e] text-white rounded-md font-semibold text-base hover:bg-[#af110b] transition"
            >
              Zobacz na mapie
            </a>
            <div className="mt-4 text-gray-500 text-base font-bold">
              Parking dostępny pod lokalem.
              <br />
              Godziny otwarcia:{" "}
              <span className="font-semibold text-gray-700">8:00–17:00</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
