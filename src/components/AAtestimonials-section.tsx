"use client";

import { useIntersection } from "@/hooks/use-intersection";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Layla Hassan",
    role: "المريض — تبييض الأسنان",
    text: "أنا سعيد للغاية بنتائج علاج تبييض الأسنان؛ فقد كان طاقم العمل محترفاً ولطيفاً، وجعلني أشعر براحة تامة. لم تبدُ ابتسامتي بهذا الروعة من قبل!",
    rating: 5,
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Mohammed Al-Rashid",
    role: "المريض — زراعة الأسنان",
    text: "بعد فقدان أحد أسناني إثر حادث، كنت قلقاً بشأن زراعة الأسنان؛ إلا أن فريق 'سند الجزيرة' رافقني وشرح لي كل خطوة من الخطوات. لقد كان الإجراء خالياً من الألم، وبدت النتيجة طبيعية تماماً.",
    rating: 5,
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Sara Al-Anazi",
    role: "مريض — تقويم الأسنان",
    text: "كانت رحلة تقويم الأسنان سلسة بفضل الدكتور أحمد. تتميز العيادة بنظافة فائقة وتصميم عصري، كما أن فريق العمل كان يحرص دائماً على شعوري بالراحة. أوصي بشدة بعيادة 'سند الجزيرة' للجميع!",
    rating: 5,
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useIntersection(0.15);

  return (
    <section className="bg-gradient-to-br from-primary via-primary to-primary2 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-[#c9a227] text-sm font-semibold uppercase tracking-widest">
            قصص المرضى

          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
           ما يقوله مرضانا

          </h2>
          <p className="text-purple-200/70 mt-3 max-w-xl mx-auto">
           تجارب حقيقية لمرضى حقيقيين وضعوا ثقتهم بنا وبابتساماتهم.

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
                className="text-[#c9a227]/30 absolute top-6 left-6 group-hover:text-[#c9a227]/50 transition-colors duration-300"
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
