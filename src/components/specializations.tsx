import { Card } from "@/components/ui/card"

const SPECIALIZATIONS = [
  "Interventional Cardiology",
  "Preventive Cardiology",
  "Cardiac Imaging",
  "Heart Failure",
  "Arrhythmia Management",
]

export function Specializations() {
  return (
    <Card className="p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-card-foreground">Specializations</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {SPECIALIZATIONS.map((item) => (
          <span
            key={item}
            className="rounded-md border border-border bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </Card>
  )
}
