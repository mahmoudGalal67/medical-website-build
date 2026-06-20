import { getDictionary } from "@/i18n/config";
import {
  HeartPulse,
  Baby,
  Sparkles,
  Bone,
  Stethoscope,
  ScanLine,
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: { ar: string; en: string };
  location: { ar: string; en: string };
};

const services: Service[] = [
  { icon: HeartPulse, title: {ar: "دار الهدي", en: "dar al-hoda"}, location: {ar: "حي طويق شارع خديجة بنت خويلد", en: "tawiq district khadija bint khaawil street"} },
  { icon: Baby, title: {ar: "دار الخيال الطبي", en: "dar al-khayal al-tiby"}, location: {ar: "حي طويق شارع بلال بن رباح", en: "tawiq district balal bin rabah street"} },
  {
    icon: Sparkles,
    title: {ar: " الجزيرة كير", en: "El Jazeera Care"},
    location: {ar: "محافظة تادق حي الخالدية طريق الملك فهد", en: "Gynecology, Hair & Nail Treatments"},
  },
  { icon: Bone, title: {ar:  "سند الجزيرة", en: "Sanad el-jazeera"}, location: {ar: "طويق", en: "tawiq"} },
];

export async function BranchesSection({locale}: {locale: "en" | "ar"}) {
    const dict = await getDictionary(locale);
  
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
           {dict.sections.branches.title}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {dict.sections.branches.description}
          </p>
        </div>
        <a
          href="#"
          className="shrink-0 text-sm font-semibold text-primary hover:underline"
        >
          {dict.Buttons.view}
        </a>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {services.map((service) => (
          <div
            key={service.title[locale]}
            className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
          >
            <h3 className="text-sm font-semibold text-foreground">
              {service.title[locale]}
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {service.location[locale]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
