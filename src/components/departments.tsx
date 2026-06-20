import Link from "next/link";


import {
  CirclePile,
  UsersRound,
  Globe,
  RefreshCcw,
  type LucideIcon,
} from "lucide-react";
import { getDictionary } from "@/i18n/config";

type Service = {
  icon: LucideIcon;
  title: { ar: string; en: string };
  desc: { ar: string; en: string };
};

const services: Service[] = [
  { icon: CirclePile, title: {ar: "العلاج بالليزر", en: "Laser treatment"}, desc: {ar: "العلاج بالليزر", en: "Laser & Vascular Care"} },
  {
    icon: UsersRound,
    title: {ar: "طب الأسنان", en: "Dentistry"},
    desc: {ar: "طب الأسنان", en: "Dental Care & Implants"},
  },
  {
    icon: Globe,
    title: {ar: "النساء والتوليد", en: "Gynecology"},
    desc: {ar: "النساء والتوليد", en: "Gynecology, Hair & Nail Treatments"},
  },
  { icon: RefreshCcw, title: {ar: "الجلدية", en: "Dermatology"}, desc: {ar: "عظام ومفاصل", en: "Bone & Joint Care"} },
];

export async function DepartmentsSection({locale}: {locale: "en" | "ar"}) {
      const dict = await getDictionary(locale);
  
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            {dict.sections.departments.title}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {dict.sections.departments.description}
          </p>
        </div>
        <Link
          href={`/${locale}/Departements`}
          className="shrink-0 text-sm font-semibold text-primary hover:underline"
        >
          {dict.Buttons.view}
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {services.map((service) => (
          <Link
            key={service.title[locale]}
            href={`/${locale}/Departements/${service.title[locale].toLowerCase().replace(/\s+/g, '-')}`}
            className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
          >
            <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <service.icon className="size-6" aria-hidden="true" />
            </span>
            <h3 className="text-sm font-semibold text-foreground">
              {service.title[locale]}
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {service.desc[locale]}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
