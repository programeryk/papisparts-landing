import { Inter } from 'next/font/google'
import Image from 'next/image'
import style from './layout.module.css'
import Link from 'next/link'
import { motion } from "framer-motion";
import { useState } from 'react'
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

  const toggleMenu = () => {
    if (window.scrollY > 127) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', toggleMenu);

  }

  return (
    <>
      <motion.div className={`${style.nav} ${router.pathname === '/' && !isMenuOpen ? style.navHidden : ''}`}
        style={router.pathname === '/' ? {position: 'fixed'} : {}}>
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
      </motion.div>
      <main className={inter.className}>{children}</main>
      <Footer />
      <WhatsappButton />
    </>
  )
}
