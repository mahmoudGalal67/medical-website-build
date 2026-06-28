"use client";

import { useIntersection } from "@/hooks/use-intersection";

import Image from "next/image";

const clinics = [
  { img: '/clinics/clinic4.webp', label: "الاسنان", color: "#002125" },
  { img: '/clinics/clinic2.webp', label: "الليزر", color: "#002125" },
  { img: '/clinics/clinic3.webp', label: "النسا", color: "#367F8B" },
  { img: '/clinics/clinic1.webp', label: "الجلدية", color: "#367F8B" },
];

export default function ServicesSection() {
  const { ref, isVisible } = useIntersection(0.15);

  return (
    <section id="services" className="bg-primary/20 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
      ما نقدمه

          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-2">
            خدماتنا
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
           عيادات شاملة للعناية والتجميل يقدمها فريقنا الطبي الخبير.

          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
          {clinics.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center  gap-3 group  transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="w-38 h-38 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
                style={{
                  backgroundColor: `${s.color}18`,
                  border: `1.5px solid ${s.color}35`,
                }}
              >
                <Image src={s.img} width={120} height={120} style={{ color: s.color }} alt={s.label}/>
              </div>
              <span className="text-md font-medium text-primary text-center leading-tight">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
