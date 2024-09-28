import { CtaAndFooter } from "@/components/cta-and-footer";
import { HowItWorksSectionComponent } from "@/components/how-it-works-section";
import { KeyPointsSectionComponent } from "@/components/key-points-section";
import { LandingPageComponent } from "@/components/landing-page";
import { ServicesSectionComponent } from "@/components/services-section";
import { TestimonialSectionComponent } from "@/components/testimonial-section";

export default function Home() {
  return (
    <>
      <LandingPageComponent />
      <ServicesSectionComponent />
      <KeyPointsSectionComponent />
      <HowItWorksSectionComponent />
      <TestimonialSectionComponent />
      <CtaAndFooter />
    </>
  );
}
