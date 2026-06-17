import { DoctorsSection } from "@/components/doctors-section";
import { FeatureStrip } from "@/components/feature-strip";
import { HeroSection } from "@/components/hero-section";
import { InsuranceSection } from "@/components/insurance-section";
import { ServicesSection } from "@/components/services-section";
import { SiteHeader } from "@/components/site-header";
import { StatsBar } from "@/components/stats-bar";

export default function Home() {
  return (
      <main className="min-h-screen bg-background ">
   <div className="max-w-7xl mx-auto border-x-1 ">
      <SiteHeader />
      <HeroSection />
      <FeatureStrip />
      <ServicesSection />
      <DoctorsSection />
      <InsuranceSection />
      <StatsBar />
      </div>
    </main>
  );
}
