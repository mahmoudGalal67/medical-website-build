"use client";

import { useIntersection } from "@/hooks/use-intersection";
import { Tag, ArrowRight, CheckCircle2 } from "lucide-react";

const offers = [
  {
    title: "باقة الأنيميا وفقر الدم",
    subtitle: "4 تحاليل",
    description: "",
    discount: "45%",
    price: "  250 ريال",
    originalPrice: "450  ريال",
    image: "offer3.jpeg",
    badge: "الأكثر طلباً",
    features: [
      "CBC – صورة الدم",
      "ESR – سرعة ترسيب الدم",
      "IRON – الحديد",
      "Ferritin – مخزون الحديد",
    ],
  },
  {
    title: "باقة مرضى السكري",
    subtitle: "8 تحاليل",
    description: "",
    discount: "25%",
    price: "300 ريال",
    originalPrice: "400 ريال",
    image: "offer10.jpeg",
    badge: "لفترة محدودة",
    features: [
      "FBG – تحليل السكر صائم",
      "PPG – تحليل السكر بعد الأكل",
      "HbA1c – السكر التراكمي",
      "تحليل الإنسولين",
      "الكوليسترول",
      "وظائف الكلى (Creatinine & Urea)",
      "الدهون الثلاثية",
      "تحليل البول",
    ],
  },
  {
    title: "باقة نمو الأطفال",
    subtitle: "9 تحاليل",
    description: "",
    discount: "40%",
    price: " 500  ريال",
    originalPrice: "1000 ريال",
    image: "offer1.jpeg",
    badge: "أفضل قيمة",
    features: [
      "Serum Iron",
      "Calcium",
      "ALP",
      "CBC",
      "Growth Hormone",
      "Calcium in Serum",
      "Vitamin D",
      "Urine Analysis",
      "Stool Examination",
    ],
  },
  {
    title: "باقة هشاشة العظام",
    subtitle: "6 تحاليل",
    description: "",
    discount: "40%",
    price: " 450  ريال",
    originalPrice: "800  ريال",
    image: "offer6.jpeg",
    badge: "أفضل قيمة",
    features: [
      "TSH",
      "Calcium",
      "ALP",
      "Vitamin D",
      "Magnesium",
      "Vitamin B12",
    ],
  },
  {
    title: "باقة سند الجزيرة الفضية",
    subtitle: "11 تحليلاً",
    description: "",
    discount: "40%",
    price: " 300  ريال",
    originalPrice: "600 ريال",
    image: "",
    badge: "أفضل قيمة",
    features: [
      "CBC",
      "ALT / AST",
      "Urea & Creatinine",
      "Uric Acid",
      "Calcium",
      "Glucose",
      "Cholesterol",
      "Triglyceride",
      "H. pylori",
      "CRP",
      "Urine Analysis",
    ],
  },
  {
    title: "باقات إبر التخسيس",
    subtitle: "باقة البداية 5 تحاليل",
    description: "",
    discount: "40%",
    price: " 299 ريال",
    originalPrice: "220 ريال",
    image: "offer5.jpeg",
    badge: "أفضل قيمة",
    features: [
      "تحليل السكر",
      "وظائف الكلى",
      "وظائف الكبد",
      "السكر التراكمي",
      "تحليل الغدة الدرقية",
    ],
  },
  {
    title: "باقة الغدة الدرقية",
    subtitle: "3 تحاليل",
    description: "",
    discount: "40%",
    price: "300 ريال",
    originalPrice: "450 ريال",
    image: "offer7.jpeg",
    badge: "أفضل قيمة",
    features: ["TSH", "FT3", "FT4"],
  },
  {
    title: "باقة سند الجزيرة الذهبية",
    subtitle: "13 تحليلاً",
    description: "",
    discount: "40%",
    price: " 299 ريال",
    originalPrice: "220 ريال",
    image: "",
    badge: "أفضل قيمة",
    features: [
      "Urea & Creatinine",
      "Uric Acid",
      "GOT & GPT",
      "Cholesterol & Triglycerides",
      "Urine Analysis",
      "Stool Analysis",
      "Vitamin D",
      "TSH",
      "CRP",
      "H. pylori Blood",
      "CBC",
      "RBS",
    ],
  },
  {
    title: "باقة ابر التخسيس باقة المتابعة",
    subtitle: "5 تحاليل",
    description: "",
    discount: "40%",
    price: "650 ريال",
    originalPrice: "",
    image: "offer5.jpeg",
    badge: "أفضل قيمة",
    features: [
      "تحليل الدهون",
      "صورة الدم",
      "مخزون الحديد",
      "فيتامين B12",
      "فيتامين د",
      "السكر التراكمي",
      "تحليل الغدة الدرقية",
      "وظائف الكبد",
      "وظائف الكلى",
    ],
  },
  {
    title: "باقة تساقط الشعر",
    subtitle: "6 تحاليل",
    description: "",
    discount: "40%",
    price: " 450  ريال",
    originalPrice: "750  ريال",
    image: "offer12.jpeg",
    badge: "أفضل قيمة",
    features: ["TSH", "Ferritin", "CBC", "Iron", "Ferritin", "Vitamin B12"],
  },
  {
    title: "Calcium",
    subtitle: "",
    description: "",
    discount: "40%",
    price: " 600  ريال",
    originalPrice: "1200 ريال",
    image: "offer11.jpeg",
    badge: "أفضل قيمة",
    features: [],
  },
  {
    title: "باقة الخصوبة للرجال",
    subtitle: "7 تحاليل",
    description: "",
    discount: "40%",
    price: " 500 ريال",
    originalPrice: "1200 ريال",
    image: "offer4.jpeg",
    badge: "أفضل قيمة",
    features: [
      "فحص السائل المنوي",
      "Testosterone Total — هرمون الذكورة",
      "FSH — هرمون الأنوثة",
      "LH — هرمون الأنوثة",
      "Prolactin — هرمون الحليب",
      "TSH — هرمون الغدة",
      "Urine Analysis — تحليل البول",
    ],
  },
  {
    title: "باقة القولون",
    subtitle: "4 تحاليل",
    description: "",
    discount: "40%",
    price: " 300 ريال",
    originalPrice: "600 ريال",
    image: "offer8.jpeg",
    badge: "أفضل قيمة",
    features: [
      "CBC — صورة الدم",
      "H. pylori — جرثومة المعدة في البراز",
      "FBO — الدم الخفي في البراز",
      "Salmonella — السالمونيلا",
    ],
  },
  {
    title: "باقة الروكتان",
    subtitle: "8 تحاليل",
    description: "",
    discount: "40%",
    price: " 200 ريال",
    originalPrice: "",
    image: "offer2.jpeg",
    badge: "أفضل قيمة",
    features: [
      "CBC — صورة الدم",
      "Urea — اليوريا",
      "RBS — السكر في الدم",
      "Triglycerides — الدهون الثلاثية",
      "Cholesterol — الكوليسترول",
      "Creatinine — الكرياتينين",
      "GPT — إنزيم الكبد",
      "GOT — إنزيم الكبد",
    ],
  },
  {
    title: "باقة تساقط الأظافر",
    subtitle: "6 تحاليل",
    description: "",
    discount: "40%",
    price: " 450 ريال",
    originalPrice: "800 ريال",
    image: "offer0.jpeg",
    badge: "أفضل قيمة",
    features: [
      "TSH — الغدة الدرقية",
      "Vitamin B12 — فيتامين ب12",
      "Iron — الحديد",
      "Ferritin — مخزون الحديد",
      "Calcium — الكالسيوم",
      "Magnesium — المغنيسيوم",
    ],
  },
  {
    title: "باقة المدارس",
    subtitle: "4 تحاليل",
    description: "مع كشفية طبيب الأطفال",
    discount: "40%",
    price: " 150 ريال",
    originalPrice: "250 ريال",
    image: "offer9.jpeg",
    badge: "أفضل قيمة",
    features: [
      "Blood Groups — فصيلة الدم",
      "CBC — صورة الدم",
      "Urine Analysis — تحليل البول",
      "Stool Examination — تحليل البراز",
    ],
  },

  {
    title: "باقة فحص الزواج",
    subtitle: "5 تحاليل",
    description:
      "النتائج خلال 3 أيام عمل ، النتائج مرتبطة بمنصة صحتي ، استلامها برسالة نصية",
    discount: "40%",
    price: " 599 ريال",
    originalPrice: "1100 ريال",
    image: "offer4.jpeg",
    badge: "أفضل قيمة",
    features: [
      "Complete Blood Count",
      "Hemoglobin Electrophoresis",
      "HCV Ab",
      "HBs Ag",
      "HIV Combo",
    ],
  },
  {
    title: "باقة الخصوبة للنساء",
    subtitle: "6 تحاليل",
    description: "",
    discount: "40%",
    price: " 600 ريال",
    originalPrice: "1200 ريال",
    image: "offer4.jpeg",
    badge: "أفضل قيمة",
    features: [
      "FSH",
      "LH",
      "Total Test — هرمون الذكورة",
      "Prolactin — هرمون الحليب",
      "TSH — هرمون الغدة",
      "Vaginal Swab C/S — مسحة المهبل",
      "Urine Analysis — تحليل البول",
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
                  src={`/offers/${offer.image}`}
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
              <div className="relative md:p-7 p-3 py-5">
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

                    <h4 className="text-lg font-extrabold text-primary">
                      {offer.price}
                    </h4>
                  </div>
                </div>
                <button className="group/button w-full  flex items-center justify-center mt-5 sm:gap-2 gap-1 rounded-2xl bg-gradient-to-r from-primary to-primary2 px-3 py-3 sm:text-lg text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <ArrowRight className="sm:block hidden transition-transform group-hover/button:-translate-x-1" />
                  احجز الآن
                </button>
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
