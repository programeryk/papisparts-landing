import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#f1f4f6] text-gray-600 py-6 px-4 border-t border-[#d7dadf]">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 text-center">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <span className="text-sm">
            © {year} Papis Parts • Twoja droga do niezawodności
          </span>
          <div className="flex gap-4">
            <a
              href="/privacy"
              className="hover:text-[#ce160e] underline text-xs"
            >
              Polityka prywatności
            </a>
            <a href="/terms" className="hover:text-[#ce160e] underline text-xs">
              Regulamin
            </a>
          </div>
        </div>
        <div className="flex gap-3 mt-2 md:mt-0">
          <a href="mailto:papisparts@gmail.com" aria-label="Email">
            {/* ...SVG... */}
          </a>
          <a
            href="https://wa.me/48888399666"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            {/* ...SVG... */}
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 mt-2">
        <span className="w-4 h-px bg-gray-300 rounded"></span>
        <span className="text-xs text-gray-400">
          Zarządzane przez{" "}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold bg-gradient-to-r from-[#4be085] to-[#4182fa] bg-clip-text text-transparent underline transition"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textDecorationColor: "#30b166ff", 
              textDecorationThickness: "1px", 
            }}
          >
            Vesna
          </a>
        </span>
        <span className="w-4 h-px bg-gray-300 rounded"></span>
      </div>
    </footer>
  );
}
