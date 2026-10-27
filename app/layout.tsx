import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import { FloatingActions } from "@/components/floating-actions";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MotionProvider } from "@/components/motion-provider";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: "Doradzimy, dobierzemy, zamówimy. Bez przerwy w drodze!",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: "Doradzimy, dobierzemy, zamówimy. Bez przerwy w drodze!",
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#ce160e",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AutoPartsStore",
  name: site.name,
  alternateName: site.google.name,
  description: site.description,
  url: site.url,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pl"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${montserrat.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD built from site constants
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <MotionProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingActions />
        </MotionProvider>
      </body>
    </html>
  );
}
