import Image from "next/image";
import { Button } from "@/components/ui/button";

type DoctorCardProps = {
  locale: "en" | "ar";
  doctor: {
    name: { en: string; ar: string };
    specialty: { en: string; ar: string };
    image: string;
  };
  button: string;
};
 


export default function DoctorCard({
  locale,
  doctor,
  button,
}: DoctorCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-[#5A2B85] shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
      {/* Top */}
{/* Top */}
<div className="member-media">
    <div className="member-image">
        <Image
            src={doctor.image}
            alt={doctor.name[locale]}
            width={320}
            height={420}
            className="doctor-image"
        />
    </div>
</div>

      {/* Bottom */}
     <div className="bg-[#69328F] px-8 py-8 text-center">
        <h3 className="text-2xl font-bold text-[#D6A52A]">
          {doctor.name[locale]}
        </h3>

        <p className="mt-3 text-lg leading-8 text-white">
          {doctor.specialty[locale]}
        </p>

        <p className="mt-4 font-semibold text-[#D6A52A]">
          {locale === "ar"
            ? "خبرة 14 عاماً في النساء والولادة"
            : "14 Years Experience"}
        </p>

      

        <Button className="mt-6 w-full bg-[#D6A52A] text-white hover:bg-[#BF8F18]">
          {button}
        </Button>
      </div>
    </article>
  );
}