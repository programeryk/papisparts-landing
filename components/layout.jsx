import { Inter } from 'next/font/google'
import Image from 'next/image'
import style from './layout.module.css'
import Link from 'next/link'
import { motion } from "framer-motion";
import { useState } from 'react'
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Papis Parts',
  description: 'strona części samochodowych',
}

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
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
      <motion.div className={`${style.nav}`}
        style={router.pathname === '/' ? { opacity: isMenuOpen ? 100 : 0, position: 'fixed' } : {}}>
        <Link href='/' >
          <Image
            src="/logoblank.png"
            alt="Papis logo"
            className={style.imageLogo}
            width={200}
            height={60}
            style={{ marginTop: 10 }}
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

      <div className='flex flex-col items-center justify-between h-32'>
        <Link href='/' >
          <Image
            src="/logoblank.png"
            alt="Papis logo"
            className={style.imageLogo}
            style={router.pathname === '/' ? {visibility: 'visible', marginTop: -50 } : {visibility: 'hidden' ,marginTop: -50 }}
            width={300}
            height={100}
            priority
          />
        </Link>
      </div>



      <main className={inter.className}>{children}</main>
    </>
  )
}
