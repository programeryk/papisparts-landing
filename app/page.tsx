import { ContactSection } from "@/components/contact-section";
import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { LocationSection } from "@/components/location-section";
import { ReviewsSection } from "@/components/reviews-section";
import { ServicesSection } from "@/components/services-section";
import { TrustBar } from "@/components/trust-bar";
import { WhyUsSection } from "@/components/why-us-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesSection />
      <WhyUsSection />
      <ReviewsSection />
      <ContactSection />
      <LocationSection />
      <CTASection />
    </>
  );
}
