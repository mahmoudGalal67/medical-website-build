import Image from "next/image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

type Doctor = {
  name: string
  specialty: string
  experience: string
  rating: string
  reviews: string
  image: string
}

const doctors: Doctor[] = [
  {
    name: "Dr. Ahmed Al Harbi",
    specialty: "Cardiologist",
    experience: "15+ Years Exp.",
    rating: "4.9",
    reviews: "120",
    image: "/images/doctor-1.png",
  },
  {
    name: "Dr. Sara Al Mutairi",
    specialty: "Dermatologist",
    experience: "10+ Years Exp.",
    rating: "4.6",
    reviews: "98",
    image: "/images/doctor-2.png",
  },
  {
    name: "Dr. Mohammed Ali",
    specialty: "Orthopedic Surgeon",
    experience: "12+ Years Exp.",
    rating: "4.9",
    reviews: "110",
    image: "/images/doctor-3.png",
  },
  {
    name: "Dr. Huda Al Enazi",
    specialty: "Pediatrician",
    experience: "8+ Years Exp.",
    rating: "4.8",
    reviews: "76",
    image: "/images/doctor-4.png",
  },
]

export function DoctorsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Featured Doctors
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Our experienced doctors are here to provide you the best care.
          </p>
        </div>
        <a
          href="#"
          className="shrink-0 text-sm font-semibold text-primary hover:underline"
        >
          View All Doctors
        </a>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {doctors.map((doctor) => (
          <article
            key={doctor.name}
            className="overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary">
              <Image
                src={doctor.image}
                alt={`Portrait of ${doctor.name}`}
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="p-4">
              <h3 className="text-base font-bold text-foreground">
                {doctor.name}
              </h3>
              <p className="text-sm text-primary">{doctor.specialty}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {doctor.experience}
              </p>
              <div className="mt-2 flex items-center gap-1 text-xs">
                <Star
                  className="size-3.5 fill-star text-star"
                  aria-hidden="true"
                />
                <span className="font-semibold text-foreground">
                  {doctor.rating}
                </span>
                <span className="text-muted-foreground">
                  ({doctor.reviews})
                </span>
              </div>
              <Button
                variant="outline"
                className="mt-4 w-full rounded-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Book Now
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
