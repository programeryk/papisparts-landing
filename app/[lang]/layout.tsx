import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import { FloatingActions } from "@/components/floating-actions";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MotionProvider } from "@/components/motion-provider";
import { defaultLocale, localeInfo, localePath, locales } from "@/i18n/config";
import { getI18n } from "@/i18n/messages";
import { site } from "@/lib/site";
import "../globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["800", "900"],
  variable: "--font-montserrat",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const { locale, m } = await getI18n();
  const path = localePath(locale);

  return {
    metadataBase: new URL(site.url),
    title: m.meta.title,
    description: m.meta.description,
    alternates: {
      canonical: path,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, localePath(l)])),
        "x-default": localePath(defaultLocale),
      },
    },
    openGraph: {
      type: "website",
      locale: localeInfo[locale].ogLocale,
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => localeInfo[l].ogLocale),
      url: path,
      siteName: site.name,
      title: m.meta.title,
      description: m.meta.ogDescription,
      images: [
        { url: "/og.png", width: 1200, height: 630, alt: m.meta.ogImageAlt },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: m.meta.title,
      description: m.meta.ogDescription,
      images: ["/og.png"],
    },
    formatDetection: { telephone: false },
  };
}

export const viewport: Viewport = {
  themeColor: "#ce160e",
};

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const { locale, m } = await getI18n();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoPartsStore",
    name: site.name,
    alternateName: site.google.name,
    description: m.meta.description,
    url: new URL(localePath(locale), site.url).href,
    logo: `${site.url}/logo.png`,
    image: `${site.url}/images/hero-shop-interior.jpg`,
    telephone: site.phone.e164,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressCountry: "PL",
    },
    hasMap: site.maps.link,
    sameAs: [site.google.profile],
    openingHoursSpecification: site.openingHours.map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: entry.dayOfWeek,
      opens: entry.opens,
      closes: entry.closes,
    })),
    areaServed: site.address.city,
  };

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${montserrat.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD built from site constants and our own dictionaries
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <MotionProvider>
          <Header locale={locale} nav={m.nav} m={m.header} />
          <main>{children}</main>
          <Footer />
          <FloatingActions m={{ ...m.floating, ...m.common }} />
        </MotionProvider>
      </body>
    </html>
  );
}
