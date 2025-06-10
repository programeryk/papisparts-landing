import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "../components/WhatsAppButton";

const bgimgs = [
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

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % bgimgs.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="relative overflow-hidden text-gray-900">
      <section className="relative flex h-[500px] md:h-[600px] flex-col items-center justify-center text-center">
        <Image
          src={bgimgs[index].url}
          fill
          priority
          alt="hero"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/40" />
        <h1 className="z-10 text-5xl font-bold md:text-7xl">
          Bez przerwy w drodze
        </h1>
        <div className="z-10 mt-6 flex space-x-2">
          {bgimgs.map((img, i) => (
            <button
              key={img.url}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full ${i === index ? "bg-red-600" : "bg-white/50"}`}
            />
          ))}
        </div>
      </section>

      <section id="about" className="bg-gray-100 px-6 py-20 text-center">
        <h2 className="mb-4 text-4xl font-bold">O nas</h2>
        <p className="mx-auto max-w-2xl text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          necessitatibus veritatis reprehenderit voluptatibus, officia
          praesentium possimus quod.
        </p>
      </section>

      <section id="products" className="px-6 py-20 text-center">
        <h2 className="mb-8 text-4xl font-bold">Produkty</h2>
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg border border-gray-200 p-6 transition hover:bg-gray-100"
            >
              <h3 className="mb-2 text-2xl font-semibold">{link.name}</h3>
              <p className="text-gray-600">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-gray-100 px-6 py-20 text-center">
        <h2 className="mb-4 text-4xl font-bold">Kontakt</h2>
        <p className="mb-6 text-gray-700">
          Masz pytania? Skontaktuj się z nami!
        </p>
        <Link
          href="/contact"
          className="font-semibold text-red-600 hover:underline"
        >
          Przejdź do kontaktu
        </Link>
      </section>

      <WhatsAppButton />
    </main>
  );
}
