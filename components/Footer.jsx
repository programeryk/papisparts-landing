import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#e7eaeb] text-center text-sm text-gray-700 py-4 mt-10">
      Papis Parts &copy; {year} • Twoja droga do niezawodności
    </footer>
  );
}
