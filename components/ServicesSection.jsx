import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      title: "Filtry samochodowe",
      description: "Filtry powietrza, oleju, paliwa i kabinowe dla wszystkich marek",
      icon: (
        <svg className="w-8 h-8 text-[#ce160e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
      ),
    },
    {
      title: "Układ hamulcowy",
      description: "Klocki, tarcze, szczęki i przewody hamulcowe",
      icon: (
        <svg className="w-8 h-8 text-[#ce160e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Oleje i płyny",
      description: "Oleje silnikowe, przekładniowe, płyny chłodnicze i hamulcowe",
      icon: (
        <svg className="w-8 h-8 text-[#ce160e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: "Oświetlenie",
      description: "Żarówki, reflektory, lampy i oświetlenie LED",
      icon: (
        <svg className="w-8 h-8 text-[#ce160e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Zawieszenie",
      description: "Amortyzatory, sprężyny, wahacze i elementy zawieszenia",
      icon: (
        <svg className="w-8 h-8 text-[#ce160e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      ),
    },
    {
      title: "Układ napędowy",
      description: "Rozrządy, paski klinowe, sprzęgła i elementy napędu",
      icon: (
        <svg className="w-8 h-8 text-[#ce160e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto mb-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl text-gray-900 text-center mb-6 tracking-tight font-extrabold">
          Nasze usługi
        </h2>
        <p className="text-base text-gray-700 text-center max-w-2xl mx-auto font-medium">
          Oferujemy kompleksowy asortyment części samochodowych dla wszystkich popularnych marek
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 group"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-2 bg-red-50 rounded-lg group-hover:bg-red-100 transition-colors duration-200">
                {service.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <p className="text-gray-600 text-sm font-medium">
          Nie znalazłeś tego czego szukasz?{" "}
          <a
            href="tel:+48888399666"
            className="text-[#ce160e] hover:underline font-semibold"
          >
            Zadzwoń do nas
          </a>{" "}
          lub{" "}
          <a
            href="https://wa.me/48888399666"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ce160e] hover:underline font-semibold"
          >
            napisz na WhatsApp
          </a>
        </p>
      </motion.div>
    </section>
  );
}
