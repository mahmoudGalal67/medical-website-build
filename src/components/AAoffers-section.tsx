"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useIntersection } from "@/hooks/use-intersection";
import { Tag, ArrowRight, ArrowLeft, Phone } from "lucide-react";

type Lang = "ar" | "en";

type LabOffer = {
  title: { ar: string; en: string };
  categoryKey: string;
  testsCount: { ar: string; en: string };
  tests: { ar: string[]; en: string[] };
  price: { ar: string; en: string };
  originalPrice?: { ar: string; en: string };
  note?: { ar: string; en: string };
  badge?: { ar: string; en: string };
};

// صورة حقيقية لكل فئة (Unsplash License - استخدام مجاني وتجاري بدون الحاجة لنسب)
const categoryImages: Record<string, string> = {
  kids: "https://images.unsplash.com/photo-1758691462268-fbe66c4f3e28?auto=format&fit=crop&w=800&q=80",
  marriage: "https://images.unsplash.com/photo-1745031627343-257db003de1e?auto=format&fit=crop&w=800&q=80",
  bundles: "https://images.unsplash.com/photo-1631556763178-b96af5e9993e?auto=format&fit=crop&w=800&q=80",
};

const uiText = {
  ar: {
    kicker: "عروض خاصة",
    heading: "عروض باقات المختبر",
    subheading:
      "باقات تحاليل شاملة بأسعار مخفضة لجميع الفروع، تشمل أهم الفحوصات الطبية اللازمة لصحتك وصحة أسرتك.",
    bookNow: "احجز الآن",
    more: "المزيد",
  },
  en: {
    kicker: "Special Offers",
    heading: "Lab Package Offers",
    subheading:
      "Comprehensive test packages at discounted prices, available at all branches, covering the most essential medical tests for you and your family.",
    bookNow: "Book Now",
    more: "More",
  },
};

// 3 عروض مختارة للعرض في الصفحة الرئيسية فقط
// باقي العروض موجودة في صفحة /offers
const featuredOffers: LabOffer[] = [
  {
    title: { ar: "باقة نمو الأطفال", en: "Children's Growth Package" },
    categoryKey: "kids",
    testsCount: { ar: "9 تحاليل", en: "9 Tests" },
    tests: {
      ar: [
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
      en: [
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
    price: { ar: "500 ريال", en: "SAR 500" },
    originalPrice: { ar: "1,000 ريال", en: "SAR 1,000" },
    badge: { ar: "الأكثر طلباً", en: "Most Popular" },
  },
  {
    title: { ar: "باقة فحص الزواج", en: "Pre-Marital Checkup Package" },
    categoryKey: "marriage",
    testsCount: { ar: "5 تحاليل", en: "5 Tests" },
    tests: {
      ar: ["Complete Blood Count", "Hemoglobin Electrophoresis", "HCV Ab", "HBs Ag", "HIV Combo"],
      en: ["Complete Blood Count", "Hemoglobin Electrophoresis", "HCV Ab", "HBs Ag", "HIV Combo"],
    },
    price: { ar: "599 ريال للشخص الواحد", en: "SAR 599 per person" },
    note: {
      ar: "1,100 ريال للشخصين — النتائج خلال 3 أيام عمل، ومرتبطة بمنصة صحتي",
      en: "SAR 1,100 for two people — results within 3 business days, linked to the Sehhaty platform",
    },
    badge: { ar: "لفترة محدودة", en: "Limited Time" },
  },
  {
    title: { ar: "باقة سند الجزيرة الفضية", en: "Sanad Aljazeera Silver Package" },
    categoryKey: "bundles",
    testsCount: { ar: "11 تحليلاً", en: "11 Tests" },
    tests: {
      ar: [
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
      en: [
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
    price: { ar: "300 ريال", en: "SAR 300" },
    originalPrice: { ar: "600 ريال", en: "SAR 600" },
    badge: { ar: "أفضل قيمة", en: "Best Value" },
  },
];

export default function LabOffersSection() {
  const { ref, isVisible } = useIntersection(0.1);
  const params = useParams();
  const locale: Lang = params.locale === "en" ? "en" : "ar";
  const isRTL = locale === "ar";
  const t = uiText[locale];

  return (
    <section
      id="offers"
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
            {t.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d004d] mt-2">
            {t.heading}
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            {t.subheading}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredOffers.map((offer, i) => (
            <div
              key={offer.title.ar}
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
                  src={categoryImages[offer.categoryKey]}
                  alt={isRTL ? offer.title.ar : offer.title.en}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* تدرج غامق أسفل الصورة لضمان وضوح النص */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary2 via-primary2/40 to-black/10" />

                <div className="absolute inset-x-0 bottom-0 text-center px-4 pb-3">
                  <h3 className="text-white font-bold text-lg drop-shadow">
                    {isRTL ? offer.title.ar : offer.title.en}
                  </h3>
                  <span className="inline-block mt-1 text-xs text-white/90 bg-white/10 px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm">
                    {isRTL ? offer.testsCount.ar : offer.testsCount.en}
                  </span>
                </div>
                {offer.badge && (
                  <div className="absolute top-3 right-3 bg-primary/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20">
                    {isRTL ? offer.badge.ar : offer.badge.en}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="bg-gradient-to-br from-primary to-primary2 p-6">
                <ul className="flex flex-wrap gap-1.5 mb-5">
                  {(isRTL ? offer.tests.ar : offer.tests.en).map((test) => (
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
                    {isRTL ? offer.note.ar : offer.note.en}
                  </p>
                )}

                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-white font-bold text-lg">
                      {isRTL ? offer.price.ar : offer.price.en}
                    </p>
                    {offer.originalPrice && (
                      <p className="text-purple-300/60 text-sm line-through">
                        {isRTL ? offer.originalPrice.ar : offer.originalPrice.en}
                      </p>
                    )}
                  </div>
                  <button className="flex items-center gap-1.5 bg-primary hover:bg-primary2 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 shadow">
                    {isRTL ? <ArrowRight size={14} /> : <ArrowLeft size={14} />}
                    {t.bookNow}
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
            href={`/${locale}/offers`}
            className="flex items-center gap-2 bg-primary hover:bg-primary2 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {t.more}
            {isRTL ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
          </Link>
        </div>


      </div>
    </section>
  );
}
