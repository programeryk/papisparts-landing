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
                  d="M22 16.92v3a2 2 0 01-2.18 2A19.8 19.8 0 013 5.18 2 2 0 015 3h3a2 2 0 012 1.72c.13 1.05.38 2.06.73 3a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.6 6.6l1.27-1.27a2 2 0 012.11-.45c.94.35 1.95.6 3 .73A2 2 0 0122 16.92z"
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
              Godziny pracy online:{" "}
              <span className="font-semibold text-gray-800">24/7</span>
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
