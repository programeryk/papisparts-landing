import style from './about.module.css';
import Image from 'next/image';
import { motion } from "framer-motion";
import { useAnimate } from 'framer-motion';
import Link from "next/link";


export default function About() {
    const [postcard, animate] = useAnimate();

    const handlePostEnter = () => {
        animate(postcard.current, { y: 0, opacity: 1 });
    }

    const handlePostLeave = () => {
        animate(postcard.current, { y: 50, opacity: 0 })
    }

    const lorem = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit';

    const customers = [{ name: 'firm', desc: 'Współpracujemy z wieloma hurtowniami motoryzacyjnymi, oraz wyspecjalizowanymi firmami w zakresie regeneracji podzespołów.' },
    { name: 'osób prywatnych', desc: 'Jesteś osobą prywatną? Przyjdź - pomożemy ci!' },
    { name: 'przedsiębiorców', desc: 'Zapraszamy do współpracy na atrakcyjnych warunkach, oferujemy rabaty i dogodne warunki płatności.' },
    { name: 'Jednostek budżetowych', desc: `Udział w przetargach nie jest nam obcy. ` }];

    return (
        <main className={`${style.main}`}>
            <div className={`${style.title} text-center py-12 pb-24 px-12`}>
                <motion.h1 className="text-5xl text-slate-900 font-bold w-max" whileHover={{ fontSize: '52px', color: '#a00000' }} transition={{ type: 'spring', duration: 0.4 }}>O Papisparts</motion.h1>
                <p className={`mt-12 font-bold text-2xl text-slate-500 ${style.desc}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, necessitatibus veritatis reprehenderit voluptatibus, officia praesentium possimus quod, ratione dolorum culpa alias iure et adipisci! Voluptas quas beatae velit quae quia.</p>
            </div>

            <div className={`${style.postcards}`}>
                <motion.div className={`${style.postcard1} rounded-t-3xl`} ref={postcard} />
                <div className={`${style.postcard} rounded-t-3xl`} />
                <motion.div whileHover={{ y: 20, width: '1550px' }}
                    onMouseEnter={handlePostEnter} onMouseLeave={handlePostLeave}
                    transition={{ type: 'spring', duration: 0.3 }}
                    className={`md:flex md:px-48 ${style.layer1} rounded-t-3xl p-12`}>
                    <Image src="/kat.jpg" alt="about1" className='bg-blue-900' width={300} height={300} />
                    <div className={`text-slate-100 md:ml-48`}>
                        <h1 className="md:text-6xl text-5xl font-bold text-center mt-12">Dyrektor zarządzająca</h1>
                        <p className="mt-12 text-xl text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, necessitatibus veritatis reprehenderit voluptatibus, officia praesentium possimus quod, ratione dolorum culpa alias iure et adipisci! Voluptas quas beatae velit quae quia.</p>
                    </div>
                </motion.div>
            </div>






            <div className={`py-12 md:px-64 ${style.layer2} text-center rounded-t-3xl`}>
                <h1 className="text-6xl text-slate-900 font-bold mb-24 mt-12">Mamy coś dla:</h1>
                <ul className='grid md:grid-cols-4'>
                    {customers.map((item) => (
                        <li className={`text-2xl text-center ${style.list}`} key={customers.indexOf(item)}>
                            <p className='uppercase font-bold text-slate-700'>{item.name}</p>
                            <div className={`grid ${style.dot} mt-12`}>
                                <div className="rounded-full w-4 h-4 bg-slate-500"></div>
                            </div>
                            <p className='mt-12 px-4 text-base text-slate-600 text-xl mb-12'>{item.desc}{customers.indexOf(item) == 3 ? <Link href='/contact' className={`${style.link}`}>Zaproś nas.</Link> : <></>}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}