import style from "./index.module.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LocationSection from "../components/LocationSection";
import WhyUsSection from "../components/WhyUsSection";
import ContactSection from "../components/ContactSection";
import ReviewsSection from "../components/ReviewsSection";
import { useSwipeable } from "react-swipeable";

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

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setImgIndex((prev) => (prev + 1 >= bgimgs.length ? 0 : prev + 1)),
    onSwipedRight: () =>
      setImgIndex((prev) => (prev - 1 < 0 ? bgimgs.length - 1 : prev - 1)),
    trackMouse: true, // makes mouse dragging on desktop work too
  });

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
        {...handlers}
        className={`relative flex flex-col items-center justify-between w-full overflow-hidden ${style.header} ${style.background}`}
        style={{
          minHeight: "480px",
          height: "64vh",
          maxHeight: "730px",
          padding: 0,
        }}
      >
        {/* --- Headline + Subheadline AT THE TOP --- */}
        <div className="w-full absolute top-36 flex flex-col items-center pt-12 z-20">
          <h1 className="text-white text-5xl sm:text-8xl tracking-tight uppercase text-center mb-2">
            Bez przerwy w drodze
          </h1>
          <h2 className="text-white text-base sm:text-xl tracking-normal font-semibold text-center mb-0">
            Doradzimy, dobierzemy, zamówimy.
          </h2>
        </div>

        {/* --- Carousel Dots at the BOTTOM --- */}
        <div className="w-full absolute bottom-0 flex flex-row justify-center mb-10 z-20">
          <ul className="flex flex-row gap-4">
            {bgimgs.map((img, index) => (
              <motion.button
                className="rounded-full w-2 h-2 border border-white bg-white"
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
          className="absolute inset-0 w-full h-full object-cover z-0"
          draggable={false}
        />
      </header>

      <div className="w-full bg-white border-b border-[#d7dadf] py-2 px-4 text-center text-md font-medium flex items-center justify-center gap-2 z-40">
        <span role="img" aria-label="car">
          🚘
        </span>
        Powiedz nam czego potrzebujesz, a my zajmiemy się resztą.
      </div>

      <ContactSection />
      <WhyUsSection />
      <LocationSection />
      <ReviewsSection />
    </main>
  );
}
