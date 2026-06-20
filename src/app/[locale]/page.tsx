import { DoctorsSection } from "@/components/doctors-section";
import { FeatureStrip } from "@/components/feature-strip";
import { HeroSection } from "@/components/hero-section";
import { InsuranceSection } from "@/components/insurance-section";
import { BranchesSection } from "@/components/branches";
  import { DepartmentsSection } from "@/components/departments";

export default async function HomePage({
  params,
}: {
 params: {
  locale: "en" | "ar";
};
}) {
  const { locale } =  params;
  return (
    <div>
      <HeroSection locale={locale} />
      <FeatureStrip  locale={locale}/>
      <BranchesSection locale={locale} />
      <DepartmentsSection locale={locale} />
      <DoctorsSection locale={locale}/>
      {/* <ServicesSection /> */}
      <InsuranceSection locale={locale}/>
    </div>
  );
}
