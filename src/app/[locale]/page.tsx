import HeroSection from "@/components/AAhero-section";
import StatsSection from "@/components/AAStatus-sectionn";
import ServicesSection from "@/components/AAservices-section";
import AboutSection from "@/components/AAbout-section";
import DoctorsSection from "@/components/doctors-section";
import TestimonialsSection from "@/components/AAtestimonials-section";
import OffersSection from "@/components/AAoffers-section";
import EquipmentSection from "@/components/AAequipment-section";
import GallerySection from "@/components/AAgallary-section";
import FooterSection from "@/components/AAfooterSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection  />
      <ServicesSection />
      <AboutSection />
      <DoctorsSection  />
      <TestimonialsSection />
      <OffersSection />
      <EquipmentSection />
      <GallerySection />
      <FooterSection />
    </main>
  );
}