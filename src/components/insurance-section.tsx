import { getDictionary } from "@/i18n/config";
import { ChevronLeft, ChevronRight } from "lucide-react"

const partners = [
  "Bupa",
  "SAICO",
  "medgulf",
  "Tawuniya",
  "Al Rajhi Takaful",
  "Malath",
]

export async function InsuranceSection({ locale }: { locale: "en" | "ar" }) {
    const dict = await getDictionary(locale);
  
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h2 className="text-lg font-bold text-foreground">
        {dict.sections.Insurance.title}
      </h2>

      <div className="mt-5 flex items-center gap-3">
        <button
          aria-label="Previous partners"
          className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:bg-secondary"
        >
          <ChevronLeft className="size-4" aria-hidden="true" />
        </button>

        <div className="grid flex-1 grid-cols-3 items-center gap-4 sm:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex h-16 items-center justify-center rounded-xl border border-border bg-card px-3 text-center text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              {partner}
            </div>
          ))}
        </div>

        <button
          aria-label="Next partners"
          className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:bg-secondary"
        >
          <ChevronRight className="size-4" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
