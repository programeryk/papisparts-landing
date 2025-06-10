import { Inter } from 'next/font/google'
import Image from 'next/image'
import style from './layout.module.css'
import Link from 'next/link'
import { motion } from "framer-motion";
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Footer from './Footer';
import WhatsappButton from './WhatsappButton';

const inter = Inter({ subsets: ['latin'] })
// export const metadata = {
//   title: 'Papis Parts',
//   description: 'strona części samochodowych',
// }

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const toggleMenu = () => {
      setIsMenuOpen(window.scrollY > 127);
    };
    window.addEventListener('scroll', toggleMenu);
    toggleMenu();
    return () => window.removeEventListener('scroll', toggleMenu);
  }, []);

  const shouldShowMargin = router.pathname !== '/' || isMenuOpen;

  const navItems = [
    {
      name: 'Sklep',
      link: '/store'
    },
    {
      name: 'O nas',
      link: '/about'
    },
    {
      name: 'Kontakt',
      link: '/contact'
    }
  ]

  return (
    <>
      <motion.div
        className={`${style.nav}`}
        style={
          router.pathname === '/' && !isMenuOpen
            ? {
                opacity: 0,
                pointerEvents: 'none',
                position: 'fixed',
                width: '100%',
                top: 0,
              }
            : {
                opacity: 1,
                pointerEvents: 'auto',
                position: 'fixed',
                width: '100%',
                top: 0,
              }
        }
      >
        <Link href='/' >
          <Image
            src="/logoblank.png"
            alt="Papis logo"
            className={`${style.imageLogo}`}
            width={200}
            height={60}
            priority
          />
        </Link>

        <ul className={`flex items-center justify-center`}>
          {navItems.map((item) => (
            <li className={`mx-4`} key={item.link}>
              <Link href={item.link}>
                <p className={`text-xl`}>{item.name}</p>
              </Link>
            </li>
          )
          )}
        </ul>
      </motion.div>
      <main className={`${inter.className} ${shouldShowMargin ? style.mainContentWithNav : ''}`}>{children}</main>
      <Footer />
      <WhatsappButton />
    </>
  )
}
