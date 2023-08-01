import style from './about.module.css';
import Image from 'next/image';

export default function About() {
    return (
        <div>
            <div className={`py-24 ${style.spacer} ${style.layer1} ${style.title} text-center`}>
                <h1 className="text-6xl text-slate-900 font-bold">O nas</h1>
                <p className="mt-12 font-bold text-2xl m-24 text-slate-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, necessitatibus veritatis reprehenderit voluptatibus, officia praesentium possimus quod, ratione dolorum culpa alias iure et adipisci! Voluptas quas beatae velit quae quia.</p>

            </div>
            <div className={`flex px-96 pb-96 ${style.color}`}>
                <div>
                    <Image src="/kat.jpg" alt="about1" width={1000} height={1000} />
                </div>
                <div className={`text-slate-100 ml-48`}>
                    <h1 className="text-4xl font-bold">Dyrektor zarządzająca</h1>
                    <p className="mt-12">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, necessitatibus veritatis reprehenderit voluptatibus, officia praesentium possimus quod, ratione dolorum culpa alias iure et adipisci! Voluptas quas beatae velit quae quia.</p>
                </div>
            </div>

        </div>

    )
}