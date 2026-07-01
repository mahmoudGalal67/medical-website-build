"use client";

import { useIntersection } from "@/hooks/use-intersection";
import { Tag, ArrowRight } from "lucide-react";

const offers =[
  {
    title: "تبييض الأسنان",
    subtitle: "تبييض الأسنان بالليزر",
    description:
      "احصل على ابتسامة ناصعة البياض باستخدام أحدث تقنيات تبييض الأسنان بالليزر. نتائج آمنة وفعالة تدوم طويلاً.",
    discount: "خصم 30%",
    price: "ابتداءً من 699 ريال",
    originalPrice: "999 ريال",
    image:
      "https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "الأكثر طلباً",
  },
  {
    title: "عدسات الأسنان",
    subtitle: "باقة ابتسامة هوليوود",
    description:
      "غيّر ابتسامتك مع عدسات الأسنان الخزفية المصممة خصيصاً لك لتمنحك مظهراً طبيعياً وثقة تدوم.",
    discount: "خصم 20%",
    price: "ابتداءً من 2,499 ريال",
    originalPrice: "3,199 ريال",
    image:
      "https://images.pexels.com/photos/3762454/pexels-photo-3762454.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "لفترة محدودة",
  },
  {
    title: "تنظيف الأسنان",
    subtitle: "تنظيف عميق وإزالة الجير وتلميع الأسنان",
    description:
      "جلسة تنظيف احترافية لإزالة الجير والبلاك والتصبغات، مما يمنحك أسناناً أكثر صحة ولمعاناً.",
    discount: "خصم 40%",
    price: "ابتداءً من 299 ريال",
    originalPrice: "499 ريال",
    image:
      "https://images.pexels.com/photos/3845547/pexels-photo-3845547.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "أفضل قيمة",
  },
];

export default function OffersSection() {
  const { ref, isVisible } = useIntersection(0.1);

  return (
    <section id="offers" className="bg-gradient-to-t from-primary/80 to-transparent py-24" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary2 text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
            <Tag size={14} />
            عروض خاصة

          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d004d] mt-2">
            عروض حصرية لك

          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
         استفد من عروضنا المتاحة لفترة محدودة على علاجات الأسنان والتجميل المتميزة.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, i) => (
            <div
              key={offer.title}
              className={`group relative rounded-3xl overflow-hidden bg-gradient-to-t from-primary2/80 to-primary2 shadow-lg hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-500 hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              
                <div className="absolute top-4 right-4 bg-primary/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20">
                  {offer.badge}
                </div>
              </div>

              {/* Content */}
              <div className="bg-gradient-to-br from-primary to-primary2 p-6">
                <p className="text-gray-300 text-xs font-semibold uppercase tracking-wider mb-1">
                  {offer.subtitle}
                </p>
                <h3 className="text-white font-bold text-xl mb-3">
                  {offer.title}
                </h3>
                <p className="text-purple-200/70 text-sm leading-relaxed mb-5">
                  {offer.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-lg">
                      {offer.price}
                    </p>
                    <p className="text-purple-300/60 text-sm line-through">
                      {offer.originalPrice}
                    </p>
                  </div>
                  <button className="flex items-center gap-1.5 bg-primary hover:bg-primary2 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 shadow">
                    <ArrowRight size={14} />
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
