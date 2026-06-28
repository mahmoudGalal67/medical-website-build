"use client";

import { useIntersection } from "@/hooks/use-intersection";
import {
  Smile,
  Shield,
  Zap,
  Sparkles,
  Heart,
  Activity,
  Stethoscope,
  Eye,
} from "lucide-react";

const services = [
  { icon: Smile, label: "Teeth Whitening", color: "#c9a227" },
  { icon: Shield, label: "Dental Implants", color: "#7c3aed" },
  { icon: Zap, label: "Laser Treatment", color: "#c9a227" },
  { icon: Sparkles, label: "Cosmetic Dentistry", color: "#7c3aed" },
  { icon: Heart, label: "Gum Care", color: "#c9a227" },
  { icon: Activity, label: "Orthodontics", color: "#7c3aed" },
  { icon: Stethoscope, label: "General Checkup", color: "#c9a227" },
  { icon: Eye, label: "Aesthetic Medicine", color: "#7c3aed" },
];

export default function ServicesSection() {
  const { ref, isVisible } = useIntersection(0.15);

  return (
    <section id="services" className="bg-[#f8f0ff] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-[#7c3aed] text-sm font-semibold uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d004d] mt-2">
            Our Services
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Comprehensive dental and aesthetic treatments delivered by our
            expert medical team.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {services.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center gap-3 group cursor-pointer transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
                style={{
                  backgroundColor: `${s.color}18`,
                  border: `1.5px solid ${s.color}35`,
                }}
              >
                <s.icon size={26} style={{ color: s.color }} />
              </div>
              <span className="text-xs font-medium text-[#2d004d] text-center leading-tight">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
