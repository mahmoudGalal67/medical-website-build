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
  title: string;
  desc: string;
};

const services: Service[] = [
  { icon: HeartPulse, title: "Branch 1", desc: "Heart & Vascular Care" },
  { icon: Baby, title: "Branch 2", desc: "Child Care & Vaccination" },
  {
    icon: Sparkles,
    title: "Branch 3",
    desc: "Skin, Hair & Nail Treatments",
  },
  { icon: Bone, title: "Branch 4", desc: "Bone & Joint Care" },
  { icon: Stethoscope, title: "Branch 5", desc: "Dental Care & Implants" },
  { icon: ScanLine, title: "Branch 6", desc: "X-Ray, MRI & Ultrasound" },
];

export function ServicesSection1() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Sanad Al Jazeera Group branches
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Comprehensive healthcare services for you and your family at 6
            places.
          </p>
        </div>
        <a
          href="#"
          className="shrink-0 text-sm font-semibold text-primary hover:underline"
        >
          View All
        </a>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
          >
            <h3 className="text-sm font-semibold text-foreground">
              {service.title}
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
