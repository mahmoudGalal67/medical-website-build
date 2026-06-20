import { CalendarCheck, UserSearch, ShieldCheck, Gift } from "lucide-react"

const features = [
  {
    icon: CalendarCheck,
    title: {ar: "احجز موعدك", en: "Book Appointment"},
    desc:{ar: "احجز موعدك مع طبيبك المفضل", en: "Book your appointment with your preferred doctor"},
  },
  {
    icon: UserSearch,
    title: {ar: "ابحث عن طبيب", en: "Find a Doctor"},
    desc: {ar: "ابحث عن طبيب", en: "Search by specialty"},
  },
  {
    icon: ShieldCheck,
    title: {ar: "تحقق من التأمين", en: "Verify Insurance"},
    desc: {ar: "تحقق من تأمينك", en: "Check your coverage"},
  },
  {
    icon: Gift,
    title: {ar: "حزم الصحة", en: "Health Packages"},
    desc: {ar: "أفضل العروض لك", en: "Best offers for you"},
  },
]

export function FeatureStrip({locale}: {locale: "en" | "ar"}) {
  return (
    <section className="relative z-10 mx-auto -mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-lg lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title[locale]}
            className="flex flex-col items-center gap-2 bg-card px-4 py-6 text-center transition-colors hover:bg-secondary"
          >
            <feature.icon className="size-7 text-primary" aria-hidden="true" />
            <h3 className="text-sm font-semibold text-foreground">
              {feature.title[locale]}
            </h3>
            <p className="text-xs text-muted-foreground">{feature.desc[locale]}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
