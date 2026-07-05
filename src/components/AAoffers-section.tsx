"use client";

import Link from "next/link";
import { useIntersection } from "@/hooks/use-intersection";
import { Tag, ArrowRight, Phone } from "lucide-react";

type LabOffer = {
  title: string;
  category: string;
  testsCount: string;
  tests: string[];
  price: string;
  originalPrice?: string;
  note?: string;
  badge?: string;
};

// صورة حقيقية لكل فئة (Unsplash License - استخدام مجاني وتجاري بدون الحاجة لنسب)
const categoryImages: Record<string, string> = {
  "صحة عامة":
    "https://images.unsplash.com/photo-1697192156499-d85cfe1452c0?auto=format&fit=crop&w=800&q=80",
  "أطفال":
    "https://images.unsplash.com/photo-1758691462268-fbe66c4f3e28?auto=format&fit=crop&w=800&q=80",
  "خصوبة":
    "https://images.unsplash.com/photo-1763713512968-fef8805cc6cf?auto=format&fit=crop&w=800&q=80",
  "جلدية وتجميل":
    "https://images.unsplash.com/photo-1761718209794-e0588aafbcc4?auto=format&fit=crop&w=800&q=80",
  "فحص الزواج":
    "https://images.unsplash.com/photo-1745031627343-257db003de1e?auto=format&fit=crop&w=800&q=80",
  "تخسيس":
    "https://images.unsplash.com/photo-1594264242877-3c384fc6444c?auto=format&fit=crop&w=800&q=80",
  "باقات شاملة":
    "https://images.unsplash.com/photo-1631556763178-b96af5e9993e?auto=format&fit=crop&w=800&q=80",
};

// 3 عروض مختارة للعرض في الصفحة الرئيسية فقط
// باقي العروض موجودة في صفحة /offers
const featuredOffers: LabOffer[] = [
  {
    title: "باقة نمو الأطفال",
    category: "أطفال",
    testsCount: "9 تحاليل",
    tests: [
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
    price: "500 ريال",
    originalPrice: "1,000 ريال",
    badge: "الأكثر طلباً",
  },
  {
    title: "باقة فحص الزواج",
    category: "فحص الزواج",
    testsCount: "5 تحاليل",
    tests: [
      "Complete Blood Count",
      "Hemoglobin Electrophoresis",
      "HCV Ab",
      "HBs Ag",
      "HIV Combo",
    ],
    price: "599 ريال للشخص الواحد",
    note: "1,100 ريال للشخصين — النتائج خلال 3 أيام عمل، ومرتبطة بمنصة صحتي",
    badge: "لفترة محدودة",
  },
  {
    title: "باقة سند الجزيرة الفضية",
    category: "باقات شاملة",
    testsCount: "11 تحليلاً",
    tests: [
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
    price: "300 ريال",
    originalPrice: "600 ريال",
    badge: "أفضل قيمة",
  },
];

export default function LabOffersSection() {
  const { ref, isVisible } = useIntersection(0.1);

  return (
    <section
      id="lab-offers"
      className="bg-gradient-to-t from-primary/80 to-transparent py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <div
          className={`text-center mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary2 text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
            <Tag size={14} />
            عروض خاصة
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d004d] mt-2">
            عروض باقات المختبر
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            باقات تحاليل شاملة بأسعار مخفضة لجميع الفروع، تشمل أهم الفحوصات
            الطبية اللازمة لصحتك وصحة أسرتك.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredOffers.map((offer, i) => (
            <div
              key={offer.title}
              className={`group relative rounded-3xl overflow-hidden bg-gradient-to-t from-primary2/80 to-primary2 shadow-lg hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-500 hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Header: real photo background */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={categoryImages[offer.category]}
                  alt={offer.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* تدرج غامق أسفل الصورة لضمان وضوح النص */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary2 via-primary2/40 to-black/10" />

                <div className="absolute inset-x-0 bottom-0 text-center px-4 pb-3">
                  <h3 className="text-white font-bold text-lg drop-shadow">{offer.title}</h3>
                  <span className="inline-block mt-1 text-xs text-white/90 bg-white/10 px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm">
                    {offer.testsCount}
                  </span>
                </div>
                {offer.badge && (
                  <div className="absolute top-3 right-3 bg-primary/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20">
                    {offer.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="bg-gradient-to-br from-primary to-primary2 p-6">
                <ul className="flex flex-wrap gap-1.5 mb-5">
                  {offer.tests.map((test) => (
                    <li
                      key={test}
                      className="text-purple-200/80 text-xs bg-white/5 border border-white/10 rounded-full px-2.5 py-1"
                    >
                      {test}
                    </li>
                  ))}
                </ul>

                {offer.note && (
                  <p className="text-purple-200/60 text-xs leading-relaxed mb-4">
                    {offer.note}
                  </p>
                )}

                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-white font-bold text-lg">
                      {offer.price}
                    </p>
                    {offer.originalPrice && (
                      <p className="text-purple-300/60 text-sm line-through">
                        {offer.originalPrice}
                      </p>
                    )}
                  </div>
                  <button className="flex items-center gap-1.5 bg-primary hover:bg-primary2 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 shadow">
                    <ArrowRight size={14} />
                    احجز الآن
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* زر المزيد */}
        <div
          className={`mt-12 flex justify-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            href="/offers"
            className="flex items-center gap-2 bg-primary hover:bg-primary2 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            المزيد
            <ArrowRight size={16} />
          </Link>
        </div>


      </div>
    </section>
  );
}
