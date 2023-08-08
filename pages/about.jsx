import style from './about.module.css';
import Image from 'next/image';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import { useAnimate, usePresence } from 'framer-motion';

export default function About() {
    const [postcard, animate] = useAnimate();

    const handlePostEnter = () => {
        animate(postcard.current, { opacity: 1, y: 0 });
    }

    const handlePostLeave = () => {
        animate(postcard.current, { opacity: 0, y: 20 })
    }

    const lorem = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit';

    const customers = [{ name: 'firm', desc: lorem }, { name: 'osób', desc: lorem }, { name: 'kogoś tam', desc: lorem }];

    return (
        <div>
            <div className={`${style.title} text-center py-12 pb-24`}>
                <motion.h1 className="text-6xl text-slate-900 font-bold w-max" whileHover={{ fontSize: '61px', color: '#a00000' }} transition={{ type: 'spring', duration: 0.4 }}>O Papisparts</motion.h1>
                <p className={`mt-12 font-bold text-2xl text-slate-500 ${style.desc}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, necessitatibus veritatis reprehenderit voluptatibus, officia praesentium possimus quod, ratione dolorum culpa alias iure et adipisci! Voluptas quas beatae velit quae quia.</p>
            </div>


            <div onMouseEnter={handlePostEnter} onMouseLeave={handlePostLeave}>
                <motion.div whileHover={{ marginTop: '-12px' }} transition={{ type: 'spring', duration: 0.2 }} className={`flex px-96 py-12 pb-32 ${style.layer1} rounded-t-3xl`}>
                    <div>
                        <Image src="/kat.jpg" alt="about1" width={1000} height={1000} />
                    </div>
                    <div className={`text-slate-100 ml-48`}>
                        <h1 className="text-6xl font-bold">Dyrektor zarządzająca</h1>
                        <p className="mt-12 text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, necessitatibus veritatis reprehenderit voluptatibus, officia praesentium possimus quod, ratione dolorum culpa alias iure et adipisci! Voluptas quas beatae velit quae quia.</p>
                    </div>
                </motion.div>
                <div className={`${style.postcard} rounded-t-3xl`} />
                <motion.div className={`${style.postcard1} rounded-t-3xl`} ref={postcard} transition={{ type: 'spring', duration: 0.1, bounce: 0.1 }} />



                <div className={`py-12 px-64 ${style.layer2} text-center rounded-t-3xl`}>
                    <h1 className="text-6xl text-slate-900 font-bold mb-24">Mamy coś dla:</h1>
                    <ul className='grid grid-cols-3'>
                        {customers.map((item) => (
                            <li className={`text-2xl uppercase text-center ${style.list}`} key={item}>
                                <p>{item.name}</p>
                                <div className={`grid ${style.dot} mt-12`}>
                                    <div className="rounded-full w-4 h-4 bg-slate-500"></div>
                                </div>
                                <p className='mt-12 px-4 text-base'>{item.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>



        </div>
    )
}