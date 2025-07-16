// components/LocationSection.jsx

export default function LocationSection() {
  return (
    <section className="w-full max-w-4xl mx-auto mb-20 px-4">
      <h2 className="text-3xl text-gray-900 text-center mb-6">Lokalizacja</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="flex-1 min-w-[280px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2298.2209148758677!2d15.81248121606998!3d53.53288205088895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4700e3ec24f5c9e1%3A0xc23e4dc3328b1b0b!2s11%20Pu%C5%82ku%20Piechoty%2020A%2C%2078-500%20Drawsko%20Pomorskie!5e0!3m2!1spl!2spl!4v1718302670227!5m2!1spl!2spl"
            width="100%"
            height="320"
            className="rounded-xl border border-gray-200"
            style={{ minHeight: "240px", background: "#f8f9fa" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa Papis Parts"
          ></iframe>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center md:items-start">
          <div className="text-lg font-medium text-gray-900 mb-2 flex items-center gap-2">
            <svg
              className="w-6 h-6 text-[#ce160e]"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21c-.32 0-.62-.15-.81-.41C10.51 19.06 7 14.24 7 10a5 5 0 0 1 10 0c0 4.24-3.51 9.06-4.19 9.59-.19.26-.49.41-.81.41ZM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              />
            </svg>
            11 Pułku Piechoty 20a, 78-500 Drawsko Pomorskie
          </div>
          <a
            href="https://maps.google.com/?q=11+Pułku+Piechoty+20a,+78-500+Drawsko+Pomorskie"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 px-6 py-2 bg-[#ce160e] text-white rounded-md font-semibold text-base hover:bg-[#af110b] transition"
          >
            Zobacz na mapie
          </a>
          <div className="mt-4 text-gray-500 text-base font-bold">
            Parking dostępny pod lokalem.
            <br />
            Godziny otwarcia:{" "}
            <span className="font-semibold text-gray-700">8:00–17:00</span>
          </div>
        </div>
      </div>
    </section>
  );
}
