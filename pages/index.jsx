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
    let index = bgimgs.findIndex((img) => img.url === e.target.id); // find index of clicked image
    setImgIndex(index);
    console.log(`this is the image index ${imgIndex}`);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (imgIndex > bgimgs.length - 1) {
        setImgIndex(0);
      } else {
        setImgIndex(imgIndex++);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const links = [
    {
      name: "Sklep",
      href: "/store",
      desc: "Sprawdź czy może znajdziesz coś dla siebie.",
    },
    {
      name: "O nas",
      href: "/about",
      desc: "Wszystko co możesz chcieć o nas wiedzieć.",
    },
    {
      name: "Kontakt",
      href: "/contact",
      desc: "Potrzebujesz pomocy? Skontaktuj się z nami!",
    },
  ];


  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${style.main} `}
    >
      <div className="flex flex-col items-center justify-between h-32">
        <Link href="/">
          <Image
            src="/logoblank.png"
            alt="Papis logo"
            className={style.imageLogo}
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
            {bgimgs.map((img) => {
              return (
                <motion.li
                  className={`rounded-full w-2 h-2 mt-2 bg-red-900 cursor-pointer inline-block mx-2`}
                  style={{
                    backgroundColor: `${
                      img.url === bgimgs[imgIndex].url ? "red" : "white"
                    }`,
                  }}
                  onClick={changeImage}
                  id={img.url}
                  key={img.url}
                ></motion.li>
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
        {links.map((link) => (
          <Link
            href={link.href}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              {link.name}{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{link.desc}</p>
          </Link>
        ))}
      </div>
      <div>
        <ul>
          <li>t</li>
          <li>t</li>
          <li>t</li>
          <li>t</li>
          <li>t</li>
          <li>t</li>
          <li>t</li>
          <li>t</li>
        </ul>
      </div>
    </main>
  );
}
