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
        className={`relative flex items-center justify-center bg-slate-900 ${style.header} ${style.background}`}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className={`${style.papispartsTitle} font-bold mx-6`}>
            Bez przerwy w drodze
          </h1>

          <ul className="ml-12 mr-10">
            {bgimgs.map((img, index) => {
              return (
                <motion.button
                  className="rounded-full w-2 h-2 mt-2 bg-red-900 cursor-pointer inline-block mx-2"
                  style={{
                    backgroundColor:
                      img.url === bgimgs[imgIndex].url ? "#c72450" : "white",
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
      </header>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left mt-12">

      </div>
      <div style={{ height: "120px" }} />
    </main>
  );
}
