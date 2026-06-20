import { DoctorsSection } from "@/components/doctors-section";
import { FeatureStrip } from "@/components/feature-strip";
import { HeroSection } from "@/components/hero-section";
import { InsuranceSection } from "@/components/insurance-section";
import { BranchesSection } from "@/components/branches";

export default async function HomePage({
  params,
}: any) {
  const { locale } =  params;
  return (
    <div>
      <HeroSection locale={locale} />
      <FeatureStrip  locale={locale}/>
      <BranchesSection locale={locale} />
      <DoctorsSection locale={locale}/>
      {/* <ServicesSection /> */}
      <InsuranceSection locale={locale}/>
    </div>
  );
}
