"use client";

import { useIntersection } from "@/hooks/use-intersection";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Layla Hassan",
    role: "Patient — Teeth Whitening",
    text: "I am absolutely thrilled with the results of my teeth whitening treatment. The staff were professional, gentle, and made me feel completely at ease. My smile has never looked better!",
    rating: 5,
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Mohammed Al-Rashid",
    role: "Patient — Dental Implants",
    text: "After losing a tooth in an accident, I was worried about implants. The team at Al Awali walked me through every step. The procedure was painless and the result looks completely natural.",
    rating: 5,
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Sara Al-Anazi",
    role: "Patient — Orthodontics",
    text: "My braces journey was smooth thanks to Dr. Ahmed. The clinic is spotless and modern, and the team always made me feel comfortable. Highly recommend Al Awali to everyone!",
    rating: 5,
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useIntersection(0.15);

  return (
    <section className="bg-gradient-to-br from-[#2d004d] via-[#3d0066] to-[#2d004d] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-[#c9a227] text-sm font-semibold uppercase tracking-widest">
            Patient Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            What Our Patients Say
          </h2>
          <p className="text-purple-200/70 mt-3 max-w-xl mx-auto">
            Real experiences from real patients who trusted us with their
            smiles.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`relative bg-white/8 backdrop-blur-sm border border-white/10 rounded-3xl p-7 hover:bg-white/12 transition-all duration-500 group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <Quote
                size={32}
                className="text-[#c9a227]/30 absolute top-6 right-6 group-hover:text-[#c9a227]/50 transition-colors duration-300"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={15}
                    className="text-[#c9a227] fill-[#c9a227]"
                  />
                ))}
              </div>

              <p className="text-purple-100/85 text-sm leading-relaxed mb-7 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#c9a227]/50">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-purple-300/70 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
