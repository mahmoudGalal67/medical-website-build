import { Award, Users, Building2, Smile, Clock, type LucideIcon } from "lucide-react"

type Stat = {
  icon: LucideIcon
  value: string
  label: { ar: string; en: string }
}

const stats: Stat[] = [
  { icon: Award, value: "15+", label: {ar: "سنوات من التميز", en: "Years of Excellence"} },
  { icon: Users, value: "50+", label: {ar: "أخصائيين", en: "Specialists"} },
  { icon: Building2, value: "20+", label: {ar: "قسم", en: "Departments"} },
  { icon: Smile, value: "100,000+", label: {ar: "مرضى سعداء", en: "Happy Patients"} },
  { icon: Clock, value: "24/7", label: {ar: "رعاية طوارئ", en: "Emergency Care"} },
]

export function StatsBar({ locale }: { locale: "en" | "ar" }) {
  return (
    <section className="bg-navy text-navy-foreground">
      <div className="bg-primary2 mx-auto grid max-w-7xl rounded-xl grid-cols-2 gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6 lg:grid-cols-5 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label[locale]} className="flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg">
              <stat.icon className="size-5 text-white" aria-hidden="true" />
            </span>
            <div className="leading-tight">
              <p className="text-white text-xl font-extrabold">{stat.value}</p>
              <p className="text-white  text-xs text-navy-foreground/70">{stat.label[locale]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
