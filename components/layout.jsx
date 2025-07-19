import { Inter } from "next/font/google";
import Image from "next/image";
import style from "./layout.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "./Footer";
import WhatsappButton from "./WhatsappButton";
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
        <link rel="icon" type="image/png" href="/favicon.png" />
        {/* Optional classic support: */}
        <link rel="icon" href="/favicon.ico" />
        {/* Optional for iOS: */}
        <link rel="apple-touch-icon" href="/favicon.png" />
        {/* (You can also add your OG/Twitter meta tags here later) */}
        <meta property="og:title" content="Papis Parts – części samochodowe" />
        <meta
          property="og:description"
          content="Doradzimy, dobierzemy, zamówimy. Bez przerwy w drodze!"
        />
        <meta property="og:image" content="/og.png" />
        <meta property="og:url" content="https://papisparts.com" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Papis Parts – części samochodowe" />
        <meta
          name="twitter:description"
          content="Doradzimy, dobierzemy, zamówimy. Bez przerwy w drodze!"
        />
        <meta name="twitter:image" content="/og.png" />
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
    </>
  );
}
