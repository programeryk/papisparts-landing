export default function WhyUsSection() {
  return (
    <section className="w-full max-w-5xl mx-auto mb-20 px-4">
      <h2 className="text-3xl text-gray-900 text-center mb-12 tracking-tight font-extrabold">
        Dlaczego właśnie my?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[
          {
            title: "Ekspresowa wycena",
            desc: "Nie czekasz godzinami na odpowiedź – działamy błyskawicznie.",
            icon: (
              <svg
                className="w-8 h-8 text-[#ce160e]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            ),
          },
          {
            title: "Indywidualne podejście",
            desc: "Dobieramy części pod Twoje potrzeby, nie wciskamy gotowców.",
            icon: (
              <svg
                className="w-8 h-8 text-[#ce160e]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 12c2.28 0 4-1.72 4-4s-1.72-4-4-4-4 1.72-4 4 1.72 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                />
              </svg>
            ),
          },
          {
            title: "Oryginalne i zamienne części",
            desc: "Szeroki wybór – dla każdego auta, każdej marki.",
            icon: (
              <svg
                className="w-8 h-8 text-[#ce160e]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <rect x="3" y="6" width="18" height="13" rx="2" />
                <path d="M16 10l-4 4-4-4" />
              </svg>
            ),
          },
          {
            title: "Odbiór osobisty i wysyłka",
            desc: "Wygodnie dla Ciebie – na miejscu lub z dostawą.",
            icon: (
              <svg
                className="w-8 h-8 text-[#ce160e]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <rect x="1" y="7" width="22" height="13" rx="2" />
                <path d="M5 19V7M19 19V7" />
              </svg>
            ),
          },
        ].map(({ title, desc, icon }, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-xl group"
          >
            <div className="mb-3 transition-transform group-hover:scale-110">
              {icon}
            </div>
            <h3 className="text-lg font-extrabold text-gray-900 mb-1">
              {title}
            </h3>
            <p className="text-gray-600 text-sm font-medium">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
