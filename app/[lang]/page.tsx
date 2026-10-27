import { ContactSection } from "@/components/contact-section";
import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { LocationSection } from "@/components/location-section";
import { MechanicSection } from "@/components/mechanic-section";
import { ReviewsSection } from "@/components/reviews-section";
import { ServicesSection } from "@/components/services-section";
import { TrustBar } from "@/components/trust-bar";
import { WhyUsSection } from "@/components/why-us-section";
import { getI18n } from "@/i18n/messages";

export default async function HomePage() {
  const { m } = await getI18n();

  return (
    <>
      <Hero m={m.hero} writeWhatsapp={m.common.writeWhatsapp} />
      <TrustBar />
      <ServicesSection />
      <MechanicSection />
      <WhyUsSection />
      <LocationSection />
      <ContactSection />
      <ReviewsSection />
      <CTASection />
    </>
  );
}
