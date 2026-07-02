"use client";

import { useIntersection } from "@/hooks/use-intersection";
import { Camera } from "lucide-react";

const photos = [
  {
    src: "https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "داخل العيادة",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.pexels.com/photos/3881449/pexels-photo-3881449.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "استشارة طبية",
  },
  {
    src: "https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "علاج الأسنان",
  },
  {
    src: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "فريق الأطباء",
  },
  {
    src: "https://images.pexels.com/photos/3845547/pexels-photo-3845547.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "غرفة العلاج",
  },
  {
    src: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "الأجهزة الطبية",
  },
  {
    src: "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "جلسة تجميل",
  },
  {
    src: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "مريض سعيد",
  },
  {
    src: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "مريض راضٍ عن الخدمة",
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 ${
                photo.span ?? ""
              } ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <img
                src={photo.src}
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
