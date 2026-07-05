"use client";

import { useIntersection } from "@/hooks/use-intersection";
import Image from "next/image";

const clinics = [
  { img: "/clinics/clinic4.webp", label: "الأسنان", color: "#dc3433" },
  { img: "/clinics/clinic2.webp", label: "الليزر", color: "#367F8B" },
  { img: "/clinics/clinic3.webp", label: "النساء والولادة", color: "#dc3433" },
  { img: "/clinics/clinic1.webp", label: "الجلدية", color: "#367F8B" },
];

export default function ServicesSection() {
  const { ref, isVisible } = useIntersection(0.15);

  return (
    <section id="services" className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-[#fcfafb] to-[#f7f2f4]" />

      <div className="absolute -top-40 left-0 -z-10 h-96 w-96 rounded-full bg-primary2/10 blur-[150px]" />

      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-[#367F8B]/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6" ref={ref}>
        {/* Header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="mt-3 text-4xl font-extrabold text-primary2">
            خدماتنا
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500 leading-8">
            نقدم مجموعة متكاملة من الخدمات الطبية والتجميلية بأحدث الأجهزة وعلى
            يد نخبة من الأطباء والاستشاريين.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {clinics.map((service, i) => (
            <div
              key={service.label}
              className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-8 text-center backdrop-blur shadow-[0_8px_25px_rgba(0,0,0,.08)] transition-all duration-500 hover:-translate-y-3 hover:border-primary2 hover:shadow-[0_20px_45px_rgba(122,31,61,.18)] ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: `${i * 120}ms`,
              }}
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary2/10 blur-3xl" />

                <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#367F8B]/10 blur-3xl" />
              </div>

              {/* Icon */}
              <div
                className="relative mx-auto flex h-36 w-36 items-center justify-center rounded-3xl transition-all duration-500 group-hover:scale-110"
                style={{
                  backgroundColor: `${service.color}10`,
                  border: `1.5px solid ${service.color}25`,
                }}
              >
                <Image
                  src={service.img}
                  alt={service.label}
                  width={110}
                  height={110}
                  className="object-contain transition-all duration-500 group-hover:scale-110"
                />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold text-slate-800 transition-colors duration-300 group-hover:text-primary2">
                {service.label}
              </h3>

              {/* Line */}
              <div className="mx-auto mt-4 h-1 w-0 rounded-full bg-gradient-to-r from-primary2 to-[#367F8B] transition-all duration-500 group-hover:w-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
