import { CalendarCheck, UserSearch, ShieldCheck, Gift } from "lucide-react"

const features = [
  {
    icon: CalendarCheck,
    title: "Book Appointment",
    desc: "Quick & easy booking",
  },
  {
    icon: UserSearch,
    title: "Find a Doctor",
    desc: "Search by specialty",
  },
  {
    icon: ShieldCheck,
    title: "Verify Insurance",
    desc: "Check your coverage",
  },
  {
    icon: Gift,
    title: "Health Packages",
    desc: "Best offers for you",
  },
]

export function FeatureStrip() {
  return (
    <section className="relative z-10 mx-auto -mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-lg lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center gap-2 bg-card px-4 py-6 text-center transition-colors hover:bg-secondary"
          >
            <feature.icon className="size-7 text-primary" aria-hidden="true" />
            <h3 className="text-sm font-semibold text-foreground">
              {feature.title}
            </h3>
            <p className="text-xs text-muted-foreground">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
