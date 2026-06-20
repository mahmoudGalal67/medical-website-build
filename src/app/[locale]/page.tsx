import { DoctorsSection } from "@/components/doctors-section";
import { FeatureStrip } from "@/components/feature-strip";
import { HeroSection } from "@/components/hero-section";
import { InsuranceSection } from "@/components/insurance-section";
import { BranchesSection } from "@/components/branches";
  // import { DepartmentsSection } from "@/components/departments";

export default async  function HomePage({
  params,
}: {
  params: Promise<{
    locale: string;
  }>;
}) {
  const { locale } = await  params;
    const lang = locale === "ar" ? "ar" : "en";
  return (
    <div>
      <HeroSection locale={lang} />
      <FeatureStrip  locale={lang}/>
      <BranchesSection locale={lang} />
      {/* <DepartmentsSection locale={locale} /> */}
      <DoctorsSection locale={lang}/>
      {/* <ServicesSection /> */}
      <InsuranceSection locale={lang}/>
    </div>
  );
}
