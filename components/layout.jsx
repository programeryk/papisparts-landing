import { Inter } from "next/font/google";
import Image from "next/image";
import style from "./layout.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "./Footer";
import WhatsappButton from "./WhatsappButton";
import ScrollToTop from "./ScrollToTop";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
// export const metadata = {
//   title: 'Papis Parts',
//   description: 'strona części samochodowych',
// }

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const toggleMenu = () => {
      if (window.scrollY > 95) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", toggleMenu);
    return () => window.removeEventListener("scroll", toggleMenu); // cleanup
  }, []);

  return (
    <>
      <Head>
        <title>Papis Parts Drawko Pomorskie – Części Samochodowe</title>
        <meta
          name="description"
          content="Najlepsze części samochodowe w Drawsku Pomorskim. Doradzamy, dostarczamy, zamieniamy. Sklep Papis Parts."
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta
          property="og:description"
          content="Doradzimy, dobierzemy, zamówimy. Bez przerwy w drodze!"
        />
        <meta
          property="og:title"
          content="Papis Parts – części samochodowe Drawsko Pomorskie"
        />
        <meta property="og:image" content="/og.png" />
        <meta property="og:url" content="https://papisparts.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Papis Parts – części samochodowe Drawsko Pomorskie"
        />
        <meta
          name="twitter:description"
          content="Doradzimy, dobierzemy, zamówimy. Bez przerwy w drodze!"
        />
        <meta name="twitter:image" content="/og.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="canonical" href="https://www.papisparts.com/" />
      </Head>
      <motion.div
        className={`${style.nav} ${
          router.pathname === "/" && !isMenuOpen ? style.navHidden : ""
        }`}
        style={router.pathname === "/" ? { position: "fixed" } : {}}
      >
        <Link href="/">
          <Image
            src="/logoblank.png"
            alt="Papis logo"
            className={`${style.imageLogo}`}
            width={200}
            height={60}
            priority
          />
        </Link>
      </motion.div>
      <main className={inter.className}>{children}</main>
      <Footer />
      <WhatsappButton />
      <ScrollToTop />
    </>
  );
}
