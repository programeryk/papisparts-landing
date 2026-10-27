export const locales = ["pl", "en", "uk"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pl";

export const localeInfo: Record<Locale, { name: string; ogLocale: string }> = {
  pl: { name: "Polski", ogLocale: "pl_PL" },
  en: { name: "English", ogLocale: "en_GB" },
  uk: { name: "Українська", ogLocale: "uk_UA" },
};

export function isLocale(value: string | undefined): value is Locale {
  return locales.some((locale) => locale === value);
}

export function localePath(locale: Locale) {
  return locale === defaultLocale ? "/" : `/${locale}`;
}
