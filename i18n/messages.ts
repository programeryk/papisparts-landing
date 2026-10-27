import { notFound } from "next/navigation";
import { lang } from "next/root-params";
import { isLocale, type Locale } from "./config";
import en from "./messages/en.json";
import pl from "./messages/pl.json";
import uk from "./messages/uk.json";

export type Messages = typeof pl;

export const dictionaries: Record<Locale, Messages> = { pl, en, uk };

export async function getI18n() {
  const locale = await lang();
  if (!isLocale(locale)) notFound();
  return { locale, m: dictionaries[locale] };
}
