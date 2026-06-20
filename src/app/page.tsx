import { DoctorsSection } from "@/components/doctors-section";
import { FeatureStrip } from "@/components/feature-strip";
import { HeroSection } from "@/components/hero-section";
import { InsuranceSection } from "@/components/insurance-section";
import { ServicesSection } from "@/components/services-section";
import { ServicesSection1 } from "@/components/services-section1";
import { ServicesSection2 } from "@/components/services-section2";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureStrip />
      <ServicesSection1 />
      <ServicesSection2 />
      <DoctorsSection />
      <ServicesSection />
      <InsuranceSection />
    </div>
  );
}
