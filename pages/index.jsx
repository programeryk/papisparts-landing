import style from "./index.module.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

let bgimgs = [
  {
    url: "https://images.unsplash.com/photo-1668532069615-3dfc89a92645?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1983&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1548184274-f1d3776448b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
];
function FeatureCard({ icon, text }) {
  return (
    <div className="flex items-center gap-3 bg-gray-100/70 rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-all">
      <span className="text-2xl">{icon}</span>
      <span className="font-medium text-gray-700">{text}</span>
    </div>
  );
}

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
      <div className="flex flex-col items-center mb-16">
        <Link href="/">
          <Image
            src="/logoblank.png"
            alt="Papis logo"
            width={300}
            height={100}
            priority
          />
        </Link>
      </div>

      <header
        className={`relative flex items-center justify-center bg-neutral-900 ${style.header} ${style.background}`}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className={`${style.papispartsTitle} font-bold mx-6 uppercase`}>
            Bez przerwy w drodze
          </h1>
          <h2 className={`text-neutral-300 text-center w-full mt-2`}>
            Doradzimy, dobierzemy, zamowimy.
          </h2>

          <ul className="ml-12 mr-10">
            {bgimgs.map((img, index) => {
              return (
                <motion.button
                  className="rounded-full w-2 h-2 mt-2 bg-red-900 cursor-pointer inline-block mx-2"
                  style={{
                    backgroundColor:
                      img.url === bgimgs[imgIndex].url ? "#ce160e" : "white",
                  }}
                  onClick={changeImage}
                  data-url={img.url}
                  key={img.url}
                  aria-label={`Wybierz zdjęcie ${index + 1}`}
                  tabIndex={0}
                />
              );
            })}
          </ul>
        </div>
        <motion.img
          src={bgimgs[imgIndex].url}
          alt="header image"
          className={style.headerImg}
          key={bgimgs[imgIndex].url}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        />
        <div className={style.headerRedOverlay}></div>
      </header>
      {/* --- WHY US SECTION --- */}
      <section className="w-full max-w-3xl mx-auto mt-20 mb-12 px-4">
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-lg p-8 flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#ce160e] mb-4 tracking-tight">
            Dlaczego właśnie my?
          </h2>
          <p className="mb-6 text-base sm:text-lg text-gray-800 text-center max-w-xl">
            Papis Parts to{" "}
              <span className="font-semibold text-[#ce160e]">
              lata doświadczenia
            </span>
            , szybka obsługa i najlepsze ceny na rynku. Dobieramy części do
            każdego auta, doradzamy, zamawiamy i zawsze jesteśmy pod telefonem.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <FeatureCard icon="🚗" text="Ekspresowa wycena" />
            <FeatureCard icon="🤝" text="Indywidualne podejście" />
            <FeatureCard icon="🔧" text="Oryginalne i zamienne części" />
            <FeatureCard icon="📦" text="Odbiór osobisty i wysyłka" />
          </div>
        </div>
      </section>

      {/* --- LOCATION SECTION --- */}
      <section className="w-full max-w-3xl mx-auto my-12 px-4">
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-lg p-8 flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#ce160e] mb-4 tracking-tight flex items-center gap-2">
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
                d="M12 21c-.32 0-.62-.15-.81-.41C10.51 19.06 7 14.24 7 10a5 5 0 0 1 10 0c0 4.24-3.51 9.06-4.19 9.59-.19.26-.49.41-.81.41ZM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              />
            </svg>
            Lokalizacja
          </h2>
          <p className="mb-2 text-gray-800 flex items-center gap-2 text-lg">
            <svg
              className="w-5 h-5 text-gray-700"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 0 0 .95.69h4.914c.969 0 1.371 1.24.588 1.81l-3.978 2.89a1 1 0 0 0-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.539 1.118l-3.978-2.89a1 1 0 0 0-1.175 0l-3.978 2.89c-.783.57-1.838-.197-1.539-1.118l1.519-4.674a1 1 0 0 0-.364-1.118l-3.978-2.89c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 0 0 .95-.69l1.519-4.674Z" />
            </svg>
            11 Pułku Piechoty 20a, 78-500 Drawsko Pomorskie
          </p>
          <a
            href="https://maps.google.com/?q=11+Pułku+Piechoty+20a,+78-500+Drawsko+Pomorskie"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-4 mt-2 px-5 py-2 bg-[#ce160e] text-white rounded-full font-medium hover:bg-[#b21e40] transition"
          >
            Zobacz na mapie
          </a>
          <div className="w-full flex justify-center mb-4">
            <div
              className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 w-full"
              style={{ maxWidth: 420, minHeight: 260 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2298.2209148758677!2d15.81248121606998!3d53.53288205088895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4700e3ec24f5c9e1%3A0xc23e4dc3328b1b0b!2s11%20Pu%C5%82ku%20Piechoty%2020A%2C%2078-500%20Drawsko%20Pomorskie!5e0!3m2!1spl!2spl!4v1718302670227!5m2!1spl!2spl"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Papis Parts"
              ></iframe>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Parking dostępny pod lokalem. Zapraszamy!
          </p>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section className="w-full max-w-4xl mx-auto mb-16 px-8 text-center">
        <h2 className="text-2xl font-bold mb-2 text-[#ce160e]">Kontakt</h2>
        <p className="mb-2">
          📱 Telefon:{" "}
          <a href="tel:+48123123123" className="text-blue-700 font-semibold">
            123 123 123
          </a>
        </p>
        <p className="mb-2">
          ✉️ Email:{" "}
          <a
            href="mailto:kontakt@papisparts.pl"
            className="text-blue-700 font-semibold"
          >
            kontakt@papisparts.pl
          </a>
        </p>
        <p className="mb-2">
          🕒 Godziny otwarcia: <b>8:00–18:00 (Pon–Sob)</b>
        </p>
        <div className="flex justify-center mt-4">
          {/* WhatsAppButton if you want it big here */}
        </div>
      </section>
    </main>
  );
}
