import { DoctorsSection } from "@/components/doctors-section";
import { FeatureStrip } from "@/components/feature-strip";
import { HeroSection } from "@/components/hero-section";
import { InsuranceSection } from "@/components/insurance-section";
import { ServicesSection } from "@/components/services-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureStrip />
      <ServicesSection />
      <DoctorsSection />
      <InsuranceSection />
    </div>
  );
}
