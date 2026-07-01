"use client";

import { useIntersection } from "@/hooks/use-intersection";
import { ShieldCheck } from "lucide-react";

const equipment = [
  {
    name: "جهاز تبييض الأسنان بالليزر",
    description:
      "أحدث تقنيات الليزر لتبييض الأسنان بأمان وفعالية، مع نتائج ملحوظة من أول جلسة.",
    image:
      "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600",
    tag: "الأسنان",
  },
  {
    name: "جهاز الأشعة الرقمية",
    description:
      "تقنية أشعة رقمية منخفضة الإشعاع توفر صوراً عالية الدقة بشكل فوري لتشخيص دقيق وسريع.",
    image:
      "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600",
    tag: "الأشعة",
  },
  {
    name: "جهاز الهيدرافيشل",
    description:
      "نظام متطور للعناية بالبشرة يجمع بين التنظيف العميق والتقشير والترطيب للحصول على بشرة صحية ومشرقة.",
    image:
      "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=600",
    tag: "التجميل",
  },
  {
    name: "جهاز ليزر CO2",
    description:
      "جهاز ليزر متقدم لإعادة نضارة البشرة، وعلاج الندبات، والتجاعيد، وتجديد خلايا الجلد بدقة عالية.",
    image:
      "https://images.pexels.com/photos/4226769/pexels-photo-4226769.jpeg?auto=compress&cs=tinysrgb&w=600",
    tag: "الليزر",
  },
];

export default function EquipmentSection() {
  const { ref, isVisible } = useIntersection(0.1);

  return (
    <section className="bg-gradient-to-br from-primary via-primary to-primary2 py-24" id="equipment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-white text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
            <ShieldCheck size={14} />
           التكنولوجيا الطبية
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary2 mt-2">
            معداتنا المتطورة
          </h2>
          <p className="text-white mt-3 max-w-xl mx-auto">
           نستثمر في أحدث التقنيات الطبية لتقديم علاجات أكثر أماناً وسرعةً وفعاليةً.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipment.map((item, i) => (
            <div
              key={item.name}
              className={`group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-500 hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 bg-primary2/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                  {item.tag}
                </div>
              </div>
              <div className="p-5">
                <div className="w-8 h-1 rounded-full bg-[#c9a227] mb-3" />
                <h3 className="font-bold text-[#2d004d] mb-2">{item.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
