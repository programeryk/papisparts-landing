import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="w-full max-w-4xl mx-auto mb-24 px-4 mt-24">
      <h2 className="text-3xl text-gray-900 text-center mb-6">Kontakt</h2>
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* --- LEFT: Image + Info, Stacked --- */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-5">
          {/* Image on top */}
          <img
            src="https://i.imgur.com/ttqtiQc.jpeg"
            alt="Telefon kontaktowy"
            className="rounded-xl shadow-sm object-cover h-52 w-full max-w-xs"
            style={{ background: "#f6f6f6" }}
          />
          {/* Contact info below */}
          <div className="flex flex-col items-center md:items-start w-full">
            <p className="text-xl font-medium text-gray-800 mb-3 flex items-center gap-3">
              <svg
                className="w-7 h-7 text-[#ce160e]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5.75C3 4.784 3.784 4 4.75 4h14.5A1.75 1.75 0 0 1 21 5.75v12.5A1.75 1.75 0 0 1 19.25 20H4.75A1.75 1.75 0 0 1 3 18.25V5.75Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.5 5.75 12 13.25l8.5-7.5"
                />
              </svg>
              <a
                href="mailto:papisparts@gmail.com"
                className="hover:underline hover:text-[#ce160e]"
              >
                papisparts@gmail.com
              </a>
            </p>
            <p className="text-xl font-medium text-gray-800 mb-3 flex items-center gap-3">
              <svg
                className="w-7 h-7 text-[#ce160e]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.05 7.1a16.88 16.88 0 0 0 14.85 14.85l2.2-2.2a2 2 0 0 0 .5-2.07l-1.05-3.18a2 2 0 0 0-1.92-1.38h-2.02a1 1 0 0 1-.96-.7l-.38-1.15a1 1 0 0 1 .22-.98l2.31-2.31a1 1 0 0 0 .22-.98l-1.05-3.18A2 2 0 0 0 14.54 3l-3.18-1.05a2 2 0 0 0-2.07.5l-2.2 2.2Z"
                />
              </svg>
              <a
                href="tel:+48888399666"
                className="hover:underline hover:text-[#ce160e]"
              >
                888 399 666
              </a>
            </p>
            <p className="text-base text-gray-600 mb-5">
              Godziny pracy:{" "}
              <span className="font-semibold text-gray-800">24/6</span>
            </p>
            <a
              href="https://wa.me/48888399666"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-2 bg-[#ce160e] text-white rounded-md font-semibold text-base hover:bg-[#af110b] transition"
            >
              Napisz na WhatsApp
            </a>
          </div>
        </div>
        {/* --- RIGHT: FORM --- */}
        <div className="w-full md:w-1/2 flex justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
