import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { localeInfo, localePath, locales } from "@/i18n/config";
import { dictionaries } from "@/i18n/messages";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-inter",
});

const { notFound } = dictionaries.pl;

export const metadata: Metadata = {
  title: `404 – ${notFound.title}`,
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="pl" className={inter.variable}>
      <body className="grid min-h-svh place-items-center bg-surface px-4">
        <main className="text-center">
          <p className="font-display text-7xl font-black text-brand">404</p>
          <h1 className="mt-4 text-2xl font-extrabold text-ink">
            {notFound.title}
          </h1>
          <ul className="mt-8 flex flex-col gap-3">
            {locales.map((locale) => (
              <li key={locale} lang={locale}>
                <a
                  href={localePath(locale)}
                  hrefLang={locale}
                  className="font-semibold text-gray-700 underline decoration-brand decoration-2 underline-offset-4 hover:text-brand"
                >
                  {dictionaries[locale].notFound.back}
                </a>{" "}
                <span className="text-sm text-gray-400">
                  ({localeInfo[locale].name})
                </span>
              </li>
            ))}
          </ul>
        </main>
      </body>
    </html>
  );
}
