import {
  HeartPulse,
  Baby,
  Sparkles,
  Bone,
  Stethoscope,
  ScanLine,
  type LucideIcon,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type Service = {
  img: string
  title: string
  desc: string
}

const services: Service[] = [
  { img: 'sanad.png', title:"ثادق الجزيرة كير", desc: "Dental Care & Implants" },
  { img: 'hoda.png', title: " دار الهدا", desc: "Heart & Vascular Care" },
  { img: 'sanad.png', title: "سند الجزيرة فرع طويق", desc: "Skin, Hair & Nail Treatments" },
  { img: 'sanad.png', title: "سند الجزيرة فرع المهدية", desc: "Bone & Joint Care" },
  { img: 'khayal.png', title: "دار الخيال", desc: "Child Care & Vaccination" },
  { img: 'sanad.png', title: "سند الجزيرة فرع لبن", desc: "X-Ray, MRI & Ultrasound" },
]

export default function Branches() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-foreground">
            فروعنا
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
خدمات رعاية صحية شاملة لك ولعائلتك.
          </p>
       
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {services.map((service) => (
          <Link href={'/'}
          key={service.title}
            className="group flex flex-col items-center justify-between gap-3 rounded-xl border border-border bg-card p-5 text-center transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
          >

            <span className="flex items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Image src={`/branches/${service.img}`} alt={service.title} width={120} height={80} />
            </span>
            <h3 className="text-sm font-semibold text-foreground">
              {service.title}
            </h3>
          
          </Link>
        ))}
      </div>
    </section>
  )
}
