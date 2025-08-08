import { motion } from "framer-motion";

export default function ReviewsSection() {
  return (
    <section className="w-full max-w-3xl mx-auto mb-20 px-4">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl text-gray-900 text-center mb-6 font-extrabold"
      >
        Co mówią o nas klienci?
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-stretch justify-center gap-6"
      >
        {/* Arkadiusz T. */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center w-full md:w-1/3 min-h-[220px]"
        >
          <div className="flex items-center mb-2">
            <span className="w-10 h-10 rounded-full bg-[#ce160e] flex items-center justify-center text-white font-bold text-lg mr-2">
              A
            </span>
            <span className="font-semibold text-lg">Arkadiusz Tuszyński</span>
          </div>
          <div className="flex gap-1 justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-[#FFD600]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.286 3.973c.3.921-.755 1.688-1.539 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.286-3.973a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.973z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-700 text-base font-medium">
            Polecam sklep i warsztat, szybka i profesjonalna obsługa!
          </p>
        </motion.div>

        {/* Paulina Cichon */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center w-full md:w-1/3 min-h-[220px]"
        >
          <div className="flex items-center mb-2">
            <span className="w-10 h-10 rounded-full bg-[#dfb3a6] flex items-center justify-center text-white font-bold text-lg mr-2">
              P
            </span>
            <span className="font-semibold text-lg">Paulina Cichon</span>
          </div>
          <div className="flex gap-1 justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-[#FFD600]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.286 3.973c.3.921-.755 1.688-1.539 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.286-3.973a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.973z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-700 text-base font-medium">Polecam!</p>
        </motion.div>

        {/* Tomasz Wachoński */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center w-full md:w-1/3 min-h-[220px]"
        >
          <div className="flex items-center mb-2">
            <span className="w-10 h-10 rounded-full bg-[#b7b7b7] flex items-center justify-center text-white font-bold text-lg mr-2">
              P
            </span>
            <span className="font-semibold text-lg">Tomasz Wachoński</span>
          </div>
          <div className="flex gap-1 justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-[#FFD600]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.286 3.973c.3.921-.755 1.688-1.539 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.286-3.973a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.973z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-700 text-base font-medium">Polecam.</p>
        </motion.div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-4 text-center text-xs text-gray-500"
      >
        <span className="inline-flex items-center gap-1">
          <svg
            className="w-5 h-5 text-[#4285f4]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <text x="12" y="16" fontSize="11" fill="#fff" textAnchor="middle">
              G
            </text>
          </svg>
          4.7 / 5.0 na podstawie 15 opinii Google
        </span>
      </motion.div>
    </section>
  );
}
