import type { MetadataRoute } from "next";
import { defaultLocale, localePath, locales } from "@/i18n/config";
import { site } from "@/lib/site";

const absolute = (path: string) => new URL(path, site.url).href;

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    ...Object.fromEntries(locales.map((l) => [l, absolute(localePath(l))])),
    "x-default": absolute(localePath(defaultLocale)),
  };

  return locales.map((locale) => ({
    url: absolute(localePath(locale)),
    changeFrequency: "monthly",
    priority: locale === defaultLocale ? 1 : 0.8,
    alternates: { languages },
  }));
}
