import HeroSection from "@/components/AAhero-section";
import StatsSection from "@/components/AAStatus-sectionn";
import ServicesSection from "@/components/AAservices-section";
import Branches from "@/components/Branches-section";
import AboutSection from "@/components/AAbout-section";
import DoctorsSection from "@/components/doctors-section";
import TestimonialsSection from "@/components/AAtestimonials-section";
import OffersSection from "@/components/AAoffers-section";
import EquipmentSection from "@/components/AAequipment-section";
import GallerySection from "@/components/AAgallary-section";
import FooterSection from "@/components/AAfooterSection";

export default function Home() {
  const doctors = Array.from({ length: 18 }, () => "" as String);

  return (
    <main className="min-h-screen">
      <HeroSection />

      <StatsSection />
      <Branches />
      <ServicesSection />
      <AboutSection />
      <DoctorsSection doctors={doctors} params={"main"} />
      <TestimonialsSection />
      <OffersSection />
      <EquipmentSection />
      <GallerySection />
    </main>
  );
}
