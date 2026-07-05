"use client";
import { useIntersection } from "@/hooks/use-intersection";
import { useParams } from "next/navigation";
import { Camera } from "lucide-react";

type Lang = "ar" | "en";

const photos = [
  {
    src: "gallary3.jpeg",
    alt: { ar: "فريق الأطباء", en: "Doctors Team" },
    span: "sm:col-span-3 sm:row-span-2 col-span-2 sm:row-span-1",
  },
  {
    src: "gallary1.jpeg",
    alt: { ar: "استشارة طبية", en: "Medical Consultation" },
  },
  {
    src: "gallary2.jpeg",
    alt: { ar: "الأجهزة الطبية", en: "Medical Equipment" },
  },
  {
    src: "gallary4.jpeg",
    alt: { ar: "داخل العيادة", en: "Inside the Clinic" },
  },
  {
    src: "gallary5.jpeg",
    alt: { ar: "غرفة العلاج", en: "Treatment Room" },
  },
  {
    src: "gallary6.jpeg",
    alt: { ar: "الأجهزة الطبية", en: "Medical Equipment" },
  },
  {
    src: "gallary7.jpeg",
    alt: { ar: "جلسة تجميل", en: "Cosmetic Session" },
  },
];

const uiText = {
  ar: {
    kicker: "معرض الصور",
    heading: "داخل عيادتنا",
    subheading: "لمحة عن مرافقنا العصرية، وفريقنا الخبير، ومرضانا السعداء.",
  },
  en: {
    kicker: "Photo Gallery",
    heading: "Inside Our Clinic",
    subheading: "A glimpse of our modern facilities, expert team, and happy patients.",
  },
};

export default function GallerySection() {
  const { ref, isVisible } = useIntersection(0.1);
  const params = useParams();
  const locale: Lang = params.locale === "en" ? "en" : "ar";
  const t = uiText[locale];

  return (
    <section id="gallery" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
            <Camera size={14} />
            {t.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary2 mt-2">
            {t.heading}
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            {t.subheading}
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[270px]">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 ${
                photo.span ?? ""
              } ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <img
                src={`/gallary/${photo.src}`}
                alt={photo.alt[locale]}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary2/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-3 left-3 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 transform">
                {photo.alt[locale]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
