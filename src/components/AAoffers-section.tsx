"use client";

import { useIntersection } from "@/hooks/use-intersection";
import { Tag, ArrowRight, CheckCircle2 } from "lucide-react";

const offers = [
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
    features: [
      "استشارة مجانية",
      "جلسة خلال 60 دقيقة",
      "نتائج فورية",
      "متابعة بعد العلاج",
    ],
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
    features: [
      "استشارة مجانية",
      "جلسة خلال 60 دقيقة",
      "نتائج فورية",
      "متابعة بعد العلاج",
    ],
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
    features: [
      "استشارة مجانية",
      "جلسة خلال 60 دقيقة",
      "نتائج فورية",
      "متابعة بعد العلاج",
    ],
  },
];

export default function OffersSection() {
  const { ref, isVisible } = useIntersection(0.1);

  return (
    <section
      id="offers"
      className="bg-gradient-to-t from-primary/80 to-transparent py-24"
    >
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
            استفد من عروضنا المتاحة لفترة محدودة على علاجات الأسنان والتجميل
            المتميزة.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, i) => (
            <div
              key={offer.title}
              className={`group relative overflow-hidden rounded-[28px] bg-white transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(0,0,0,.15)] ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-primary/10 via-transparent to-primary2/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Badge */}
                <div className="absolute right-5 top-5 rounded-full bg-primary px-4 py-2 text-xs font-bold text-white shadow-xl">
                  {offer.badge}
                </div>

                {/* Discount */}
                <div className="absolute left-5 top-5 rounded-2xl bg-red-500 px-4 py-2 text-sm font-bold text-white shadow-lg">
                  خصم {offer.discount}
                </div>

                {/* Title */}
                <div className="absolute bottom-5 right-5 left-5">
                  <p className="text-sm text-white/80">{offer.subtitle}</p>

                  <h3 className="mt-1 text-2xl font-bold text-white">
                    {offer.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-7">
                <p className="leading-7 text-gray-600">{offer.description}</p>

                {/* Features */}
                <div className="mt-6 space-y-3">
                  {offer.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-xl bg-gray-50 px-3 py-2 transition-all hover:bg-primary/5"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-green-500 flex-shrink-0"
                      />

                      <span className="text-sm font-medium text-gray-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400 line-through">
                      {offer.originalPrice}
                    </p>

                    <h4 className="text-3xl font-extrabold text-primary">
                      {offer.price}
                    </h4>
                  </div>

                  <button className="group/button flex items-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-primary2 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    احجز الآن
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover/button:-translate-x-1"
                    />
                  </button>
                </div>
              </div>

              {/* Decorative circles */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-primary2/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
