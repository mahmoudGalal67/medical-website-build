import Image from "next/image";
import { ChevronDown, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingCard } from "./BookingCard";
import { getDictionary } from "@/i18n/config";

const avatars = [
  "/images/doctor-1.png",
  "/images/doctor-2.png",
  "/images/doctor-3.png",
  "/images/doctor-4.png",
];

export async function HeroSection({locale}: {locale: 'en' | 'ar'}) {
  
   const dict = await getDictionary(locale);
 
  return (
    <section className="relative overflow-hidden bg-secondary  max-w-7xl mx-auto" >
      {/* Background image on the right */}
      <div className={`${locale === 'ar' ? 'absolute inset-y-0 xl:left-[45%] left-0' : 'absolute inset-y-0 xl:right-[15%] right-0'} hidden w-1/2 lg:block`}>
        <Image
          src="/images/hero-doctor.png"
          alt="Smiling doctor with a stethoscope"
          fill
          priority
          className={`${locale === 'ar' ? 'object-right' : 'object-left'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/30 to-transparent" />
      </div>

      <div className="relative mx-auto  grid gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-32 lg:px-8">
        {/* Left: copy */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground text-balance sm:text-5xl">
          {dict.HomePage.title}
          <br />
          {dict.HomePage.title2}
          </h1>
          <p className="mt-4 max-w-md text-base text-muted-foreground leading-relaxed">
            {dict.HomePage.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button size="lg" className="rounded-sm px-7">
              {dict.Buttons.book}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-sm border-primary px-7 text-primary hover:bg-primary hover:text-primary-foreground"
            >
              {dict.Buttons.findDoctor}
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-3">
              {avatars.map((src) => (
                <span
                  key={src}
                  className="relative size-9 overflow-hidden rounded-full border-2 border-card"
                >
                  <Image src={src} alt="" fill className="object-cover" />
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              {locale === "en" ? "Trusted by" : "مُوثوق من قبل"}{" "}
              <span className="font-bold text-foreground">100,000+</span>
              <br />
              <span className="font-bold text-foreground">
                {locale === "en" ? "Patients" : "مرضى"}
              </span>
            </p>
          </div>
        </div>

        {/* Right: booking card */}
        <div className="flex xl:justify-end justify-center">
          <BookingCard dict={dict} />
        </div>
      </div>
    </section>
  );
}

function SelectField({
  label,
  icon = "chevron",
}: {
  label: string;
  icon?: "chevron" | "calendar";
}) {
  return (
    <button className="flex w-full items-center justify-between rounded-lg border border-border bg-card px-4 py-3 text-left text-sm text-muted-foreground transition-colors hover:border-primary/50">
      {label}
      {icon === "chevron" ? (
        <ChevronDown
          className="size-4 text-muted-foreground"
          aria-hidden="true"
        />
      ) : (
        <Calendar className="size-4 text-muted-foreground" aria-hidden="true" />
      )}
    </button>
  );
}
