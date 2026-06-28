"use client";

import { useIntersection } from "@/hooks/use-intersection";
import { useCounter } from "@/hooks/use-counter";
import { Users, Star, Award, Clock } from "lucide-react";

function StatCard({
  icon: Icon,
  target,
  suffix,
  label,
  decimal,
  active,
  delay,
}: {
  icon: typeof Users;
  target: number;
  suffix: string;
  label: string;
  decimal?: boolean;
  active: boolean;
  delay: number;
}) {
  const count = useCounter(decimal ? target * 10 : target, 2200, active);
  const display = decimal ? (count / 10).toFixed(1) : count.toLocaleString();

  return (
    <div
      className="flex flex-col items-center text-center group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 rounded-2xl bg-[#c9a227]/15 border border-[#c9a227]/30 flex items-center justify-center mb-4 group-hover:bg-[#c9a227]/25 transition-colors duration-300">
        <Icon size={28} className="text-[#c9a227]" />
      </div>
      <div className="text-4xl font-bold text-white mb-1">
        {display}
        <span className="text-[#c9a227]">{suffix}</span>
      </div>
      <p className="text-purple-200/80 text-sm font-medium">{label}</p>
    </div>
  );
}

const stats = [
  { icon: Users, target: 3000, suffix: "+", label: "Happy Patients", delay: 0 },
  {
    icon: Star,
    target: 48,
    suffix: "",
    label: "Average Rating",
    decimal: true,
    delay: 150,
  },
  { icon: Award, target: 90, suffix: "%", label: "Success Rate", delay: 300 },
  {
    icon: Clock,
    target: 15,
    suffix: "+",
    label: "Years Experience",
    delay: 450,
  },
];

export default function StatsSection() {
  const { ref, isVisible } = useIntersection(0.2);

  return (
    <section
      id="stats"
      ref={ref}
      className="bg-gradient-to-br from-[#3d0066] to-[#2d004d] py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-[#c9a227] text-sm font-semibold uppercase tracking-widest">
            Our Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Numbers That Speak for Themselves
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${stat.delay + 200}ms` }}
            >
              <StatCard {...stat} active={isVisible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
