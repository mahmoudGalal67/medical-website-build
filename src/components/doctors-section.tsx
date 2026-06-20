import Image from "next/image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getDictionary } from "@/i18n/config";

type Doctor = {
  id: number;
  name: { en: string; ar: string };
  specialty: { en: string; ar: string };
  rating: number;
  reviews: number;
  image: string;
};

const doctors: Doctor[] = [
  {
    id: 1,
    name: {en: "Dr. Ahmed Al-Shehri", ar: "د. أحمد الشهري"},
    specialty: {en: "Cardiologist", ar: "أخصائي قلب"},
    rating: 4.9,
    reviews: 120,
    image: "/doctors/doctor-1.png",
  },
  {
    id: 2,
    name: {en: "Dr. Sara Al Mutairi", ar: "د. سارة المطيري"},
    specialty: {en: "Dermatologist", ar: "أخصائي جلدية"},
    rating: 4.8,
    reviews: 98,
    image: "/doctors/doctor-2.png",
  },
  {
    id: 3,
    name: {en: "Dr. Mohammed Ali", ar: "د. محمد علي"},
    specialty: {en: "Orthopedic Surgeon", ar: "جراح عظام"},
    rating: 4.9,
    reviews: 110,
    image: "/doctors/doctor-3.png",
  },
  {
    id: 4,
    name: {en: "Dr. Huda Al Enazi", ar: "د. هدى العنازي"},
    specialty: {en: "Pediatrician", ar: "أخصائي طفولة"},
    rating: 4.8,
    reviews: 76,
    image: "/doctors/doctor-4.png",
  },
  {
    id: 5,
    name: {en: "Dr. Faisal Khan", ar: "د. فيصل خان"},
    specialty: {en: "Neurologist", ar: "أخصائي عصبي"},
    rating: 4.7,
    reviews: 64,
    image: "/doctors/doctor-5.png",
  },
  {
    id: 6,
    name: {en: "Dr. Reem Al Otaibi", ar: "د. ريم العطيبة"},
    specialty: {en: "Dentist", ar: "أخصائي أسنان"},
    rating: 4.9,
    reviews: 85,
    image: "/doctors/doctor-6.png",
  },
]

export async function DoctorsSection({ locale }: { locale: "en" | "ar" }) {
  const dict = await getDictionary(locale);
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            {dict.sections.featuresDoctors.title}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {dict.sections.featuresDoctors.description}
          </p>
        </div>
        <a
          href="#"
          className="shrink-0 text-sm font-semibold text-primary hover:underline"
        >
          {dict.Buttons.view}
        </a>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {doctors.map((doctor) => (
          <article
            key={doctor.name[locale]}
            className="overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary">
              <Image
                src={doctor.image}
                alt={`Portrait of ${doctor.name[locale]}`}
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="p-4">
              <h3 className="text-base font-bold text-foreground">
                {doctor.name[locale]}
              </h3>
              <p className="text-sm text-primary">{doctor.specialty[locale] }</p>
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
               {dict.Buttons.book}
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
