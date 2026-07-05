"use client";

import { useIntersection } from "@/hooks/use-intersection";
import { Camera } from "lucide-react";

const photos = [
  {
    src: "gallary3.jpeg",
    alt: "فريق الأطباء",

    span: "sm:col-span-3 sm:row-span-2 col-span-2 sm:row-span-1",
  },
  {
    src: "gallary1.jpeg",

    alt: "استشارة طبية",
  },
  {
    src: "gallary2.jpeg",
    alt: "الأجهزة الطبية",
  },
  {
    src: "gallary4.jpeg",

    alt: "داخل العيادة",
  },
  {
    src: "gallary5.jpeg",

    alt: "غرفة العلاج",
  },
  {
    src: "gallary6.jpeg",

    alt: "الأجهزة الطبية",
  },
  {
    src: "gallary7.jpeg",

    alt: "جلسة تجميل",
  },
];

export default function GallerySection() {
  const { ref, isVisible } = useIntersection(0.1);

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
            معرض الصور
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary2 mt-2">
            داخل عيادتنا
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            لمحة عن مرافقنا العصرية، وفريقنا الخبير، ومرضانا السعداء.
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
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary2/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-3 left-3 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 transform">
                {photo.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
