"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import {
  Tag,
  ArrowRight,
  ArrowLeft,
  Phone,
} from "lucide-react";

type Lang = "ar" | "en";

type LabOffer = {
  title: { ar: string; en: string };
  category: { ar: string; en: string };
  testsCount: { ar: string; en: string };
  tests: { ar: string[]; en: string[] };
  price: { ar: string; en: string };
  originalPrice?: { ar: string; en: string };
  note?: { ar: string; en: string };
  badge?: { ar: string; en: string };
  categoryKey: string; // stable key used for filtering, independent of language
};

// صورة حقيقية لكل فئة (Unsplash License - استخدام مجاني وتجاري بدون الحاجة لنسب)
const categoryImages: Record<string, string> = {
  general: "https://images.unsplash.com/photo-1697192156499-d85cfe1452c0?auto=format&fit=crop&w=800&q=80",
  kids: "https://images.unsplash.com/photo-1758691462268-fbe66c4f3e28?auto=format&fit=crop&w=800&q=80",
  fertility: "https://images.unsplash.com/photo-1763713512968-fef8805cc6cf?auto=format&fit=crop&w=800&q=80",
  skin: "https://images.unsplash.com/photo-1761718209794-e0588aafbcc4?auto=format&fit=crop&w=800&q=80",
  marriage: "https://images.unsplash.com/photo-1745031627343-257db003de1e?auto=format&fit=crop&w=800&q=80",
  weightloss: "https://images.unsplash.com/photo-1594264242877-3c384fc6444c?auto=format&fit=crop&w=800&q=80",
  bundles: "https://images.unsplash.com/photo-1631556763178-b96af5e9993e?auto=format&fit=crop&w=800&q=80",
};

const categories: { key: string; ar: string; en: string }[] = [
  { key: "all", ar: "الكل", en: "All" },
  { key: "general", ar: "صحة عامة", en: "General Health" },
  { key: "kids", ar: "أطفال", en: "Children" },
  { key: "fertility", ar: "خصوبة", en: "Fertility" },
  { key: "skin", ar: "جلدية وتجميل", en: "Dermatology & Cosmetic" },
  { key: "marriage", ar: "فحص الزواج", en: "Pre-Marital Checkup" },
  { key: "weightloss", ar: "تخسيس", en: "Weight Loss" },
  { key: "bundles", ar: "باقات شاملة", en: "Comprehensive Bundles" },
];

const uiText = {
  ar: {
    kicker: "عروض خاصة",
    heading: "جميع عروض باقات المختبر",
    subheading:
      "باقات تحاليل شاملة بأسعار مخفضة لجميع الفروع، تشمل أهم الفحوصات الطبية اللازمة لصحتك وصحة أسرتك.",
    bookNow: "احجز الآن",
    payment: "يتوفر الدفع عبر Tabby",
  },
  en: {
    kicker: "Special Offers",
    heading: "All Lab Package Offers",
    subheading:
      "Comprehensive test packages at discounted prices, available at all branches, covering the most essential medical tests for you and your family.",
    bookNow: "Book Now",
    payment: "Payment available via Tabby",
  },
};

const offers: LabOffer[] = [
  {
    title: { ar: "باقة الأنيميا وفقر الدم", en: "Anemia Package" },
    category: { ar: "صحة عامة", en: "General Health" },
    categoryKey: "general",
    testsCount: { ar: "4 تحاليل", en: "4 Tests" },
    tests: {
      ar: ["CBC - صورة الدم", "ESR - سرعة ترسيب الدم", "IRON - الحديد", "Ferritin - مخزون الحديد"],
      en: ["CBC - Complete Blood Count", "ESR", "Iron", "Ferritin"],
    },
    price: { ar: "250 ريال", en: "SAR 250" },
    originalPrice: { ar: "450 ريال", en: "SAR 450" },
  },
  {
    title: { ar: "باقة مرضى السكري", en: "Diabetes Package" },
    category: { ar: "صحة عامة", en: "General Health" },
    categoryKey: "general",
    testsCount: { ar: "8 تحاليل", en: "8 Tests" },
    tests: {
      ar: [
        "FBG - تحليل السكر صائم",
        "PPG - تحليل السكر بعد الأكل",
        "HbA1c - السكر التراكمي",
        "تحليل الإنسولين",
        "الكوليسترول",
        "وظائف الكلى (Creatinine & Urea)",
        "الدهون الثلاثية",
        "تحليل البول",
      ],
      en: [
        "FBG - Fasting Blood Glucose",
        "PPG - Post-Prandial Glucose",
        "HbA1c",
        "Insulin",
        "Cholesterol",
        "Kidney Function (Creatinine & Urea)",
        "Triglycerides",
        "Urine Analysis",
      ],
    },
    price: { ar: "300 ريال", en: "SAR 300" },
    originalPrice: { ar: "400 ريال", en: "SAR 400" },
  },
  {
    title: { ar: "باقة نمو الأطفال", en: "Children's Growth Package" },
    category: { ar: "أطفال", en: "Children" },
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
    category: { ar: "فحص الزواج", en: "Pre-Marital Checkup" },
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
    category: { ar: "باقات شاملة", en: "Comprehensive Bundles" },
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
  {
    title: { ar: "باقة هشاشة العظام", en: "Osteoporosis Package" },
    category: { ar: "صحة عامة", en: "General Health" },
    categoryKey: "general",
    testsCount: { ar: "6 تحاليل", en: "6 Tests" },
    tests: {
      ar: ["TSH", "Calcium", "ALP", "Vitamin D", "Magnesium", "Vitamin B12"],
      en: ["TSH", "Calcium", "ALP", "Vitamin D", "Magnesium", "Vitamin B12"],
    },
    price: { ar: "450 ريال", en: "SAR 450" },
    originalPrice: { ar: "800 ريال", en: "SAR 800" },
  },
  {
    title: { ar: "باقة الغدة الدرقية", en: "Thyroid Package" },
    category: { ar: "صحة عامة", en: "General Health" },
    categoryKey: "general",
    testsCount: { ar: "3 تحاليل", en: "3 Tests" },
    tests: { ar: ["TSH", "FT3", "FT4"], en: ["TSH", "FT3", "FT4"] },
    price: { ar: "300 ريال", en: "SAR 300" },
    originalPrice: { ar: "450 ريال", en: "SAR 450" },
  },
  {
    title: { ar: "باقة إبر التخسيس - باقة البداية", en: "Weight Loss Injections - Starter Package" },
    category: { ar: "تخسيس", en: "Weight Loss" },
    categoryKey: "weightloss",
    testsCount: { ar: "5 تحاليل", en: "5 Tests" },
    tests: {
      ar: ["تحليل السكر", "وظائف الكلى", "وظائف الكبد", "السكر التراكمي", "تحليل الغدة الدرقية"],
      en: ["Blood Glucose", "Kidney Function", "Liver Function", "HbA1c", "Thyroid Function"],
    },
    price: { ar: "300 ريال", en: "SAR 300" },
  },
  {
    title: { ar: "باقة إبر التخسيس - باقة المتابعة", en: "Weight Loss Injections - Follow-up Package" },
    category: { ar: "تخسيس", en: "Weight Loss" },
    categoryKey: "weightloss",
    testsCount: { ar: "9 تحاليل", en: "9 Tests" },
    tests: {
      ar: [
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
      en: [
        "Lipid Profile",
        "CBC",
        "Ferritin",
        "Vitamin B12",
        "Vitamin D",
        "HbA1c",
        "Thyroid Function",
        "Liver Function",
        "Kidney Function",
      ],
    },
    price: { ar: "650 ريال", en: "SAR 650" },
  },
  {
    title: { ar: "باقة سند الجزيرة الذهبية", en: "Sanad Aljazeera Gold Package" },
    category: { ar: "باقات شاملة", en: "Comprehensive Bundles" },
    categoryKey: "bundles",
    testsCount: { ar: "13 تحليلاً", en: "13 Tests" },
    tests: {
      ar: [
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
        "Calcium",
      ],
      en: [
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
        "Calcium",
      ],
    },
    price: { ar: "600 ريال", en: "SAR 600" },
    originalPrice: { ar: "1,200 ريال", en: "SAR 1,200" },
    badge: { ar: "الأكثر طلباً", en: "Most Popular" },
  },
  {
    title: { ar: "باقة تساقط الشعر", en: "Hair Loss Package" },
    category: { ar: "جلدية وتجميل", en: "Dermatology & Cosmetic" },
    categoryKey: "skin",
    testsCount: { ar: "6 تحاليل", en: "6 Tests" },
    tests: {
      ar: ["TSH", "Ferritin", "CBC", "Iron", "Vitamin B12"],
      en: ["TSH", "Ferritin", "CBC", "Iron", "Vitamin B12"],
    },
    price: { ar: "450 ريال", en: "SAR 450" },
    originalPrice: { ar: "750 ريال", en: "SAR 750" },
  },
  {
    title: { ar: "باقة القولون", en: "Colon Package" },
    category: { ar: "صحة عامة", en: "General Health" },
    categoryKey: "general",
    testsCount: { ar: "4 تحاليل", en: "4 Tests" },
    tests: {
      ar: [
        "CBC - صورة الدم",
        "H. pylori - جرثومة المعدة في البراز",
        "FBO - الدم الخفي في البراز",
        "Salmonella - السالمونيلا",
      ],
      en: [
        "CBC",
        "H. pylori (Stool)",
        "FOB - Fecal Occult Blood",
        "Salmonella",
      ],
    },
    price: { ar: "300 ريال", en: "SAR 300" },
    originalPrice: { ar: "600 ريال", en: "SAR 600" },
  },
  {
    title: { ar: "باقة الخصوبة للرجال", en: "Men's Fertility Package" },
    category: { ar: "خصوبة", en: "Fertility" },
    categoryKey: "fertility",
    testsCount: { ar: "7 تحاليل", en: "7 Tests" },
    tests: {
      ar: [
        "فحص السائل المنوي",
        "Testosterone Total - هرمون الذكورة",
        "FSH - هرمون الأنوثة",
        "LH - هرمون الأنوثة",
        "Prolactin - هرمون الحليب",
        "TSH - هرمون الغدة",
        "Urine Analysis - تحليل البول",
      ],
      en: [
        "Semen Analysis",
        "Testosterone Total",
        "FSH",
        "LH",
        "Prolactin",
        "TSH",
        "Urine Analysis",
      ],
    },
    price: { ar: "500 ريال", en: "SAR 500" },
    originalPrice: { ar: "1,200 ريال", en: "SAR 1,200" },
  },
  {
    title: { ar: "باقة تساقط الأظافر", en: "Nail Health Package" },
    category: { ar: "جلدية وتجميل", en: "Dermatology & Cosmetic" },
    categoryKey: "skin",
    testsCount: { ar: "6 تحاليل", en: "6 Tests" },
    tests: {
      ar: ["TSH - الغدة الدرقية", "Vitamin B12 - فيتامين ب12", "Iron - الحديد", "Ferritin - مخزون الحديد", "Calcium - الكالسيوم", "Magnesium - المغنيسيوم"],
      en: ["TSH", "Vitamin B12", "Iron", "Ferritin", "Calcium", "Magnesium"],
    },
    price: { ar: "450 ريال", en: "SAR 450" },
    originalPrice: { ar: "800 ريال", en: "SAR 800" },
  },
  {
    title: { ar: "باقة الروكتان", en: "Roaccutane Package" },
    category: { ar: "جلدية وتجميل", en: "Dermatology & Cosmetic" },
    categoryKey: "skin",
    testsCount: { ar: "8 تحاليل", en: "8 Tests" },
    tests: {
      ar: [
        "CBC - صورة الدم",
        "Urea - اليوريا",
        "RBS - السكر في الدم",
        "Triglycerides - الدهون الثلاثية",
        "Cholesterol - الكوليسترول",
        "Creatinine - الكرياتينين",
        "GPT - إنزيم الكبد",
        "GOT - إنزيم الكبد",
      ],
      en: [
        "CBC",
        "Urea",
        "RBS - Blood Sugar",
        "Triglycerides",
        "Cholesterol",
        "Creatinine",
        "GPT - Liver Enzyme",
        "GOT - Liver Enzyme",
      ],
    },
    price: { ar: "200 ريال", en: "SAR 200" },
  },
  {
    title: { ar: "باقة الخصوبة للنساء", en: "Women's Fertility Package" },
    category: { ar: "خصوبة", en: "Fertility" },
    categoryKey: "fertility",
    testsCount: { ar: "6 تحاليل", en: "6 Tests" },
    tests: {
      ar: [
        "FSH",
        "LH",
        "Total Test - هرمون الذكورة",
        "Prolactin - هرمون الحليب",
        "TSH - هرمون الغدة",
        "Vaginal Swab C/S - مسحة المهبل",
        "Urine Analysis - تحليل البول",
      ],
      en: [
        "FSH",
        "LH",
        "Total Testosterone",
        "Prolactin",
        "TSH",
        "Vaginal Swab C/S",
        "Urine Analysis",
      ],
    },
    price: { ar: "600 ريال", en: "SAR 600" },
    originalPrice: { ar: "1,200 ريال", en: "SAR 1,200" },
  },
  {
    title: { ar: "باقة المدارس", en: "School Checkup Package" },
    category: { ar: "أطفال", en: "Children" },
    categoryKey: "kids",
    testsCount: { ar: "4 تحاليل", en: "4 Tests" },
    tests: {
      ar: ["Blood Groups - فصيلة الدم", "CBC - صورة الدم", "Urine Analysis - تحليل البول", "Stool Examination - تحليل البراز"],
      en: ["Blood Groups", "CBC", "Urine Analysis", "Stool Examination"],
    },
    note: { ar: "مع كشفية طبيب الأطفال", en: "Includes a pediatrician consultation" },
    price: { ar: "150 ريال", en: "SAR 150" },
    originalPrice: { ar: "250 ريال", en: "SAR 250" },
  },
];

export default function AllOffersPage() {
  // اللغة بتتحدد من الـ route (نفس المصدر اللي بيستخدمه زر اللغة في الهيدر)
  // مفيش حاجة محلية بتتخزن هنا، عشان التبديل من الهيدر يبقى شغال هنا أوتوماتيك
  const params = useParams();
  const lang: Lang = params.locale === "en" ? "en" : "ar";

  const [activeCategory, setActiveCategory] = useState("all");

  const t = uiText[lang];
  const isRTL = lang === "ar";

  const filteredOffers =
    activeCategory === "all"
      ? offers
      : offers.filter((offer) => offer.categoryKey === activeCategory);

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="bg-gradient-to-t from-primary/80 to-transparent py-24 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-10">
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

        {/* Tabs / Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-primary text-white border-primary shadow-md"
                  : "bg-white text-primary2 border-primary2/20 hover:border-primary2/50"
              }`}
            >
              {isRTL ? cat.ar : cat.en}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOffers.map((offer) => {
            const imageUrl = categoryImages[offer.categoryKey];
            return (
              <div
                key={offer.title.ar}
                className="group relative rounded-3xl overflow-hidden bg-gradient-to-t from-primary2/80 to-primary2 shadow-lg hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Header: real photo background */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={isRTL ? offer.title.ar : offer.title.en}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
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
            );
          })}
        </div>

        {/* Contact footer */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <a
            href="tel:0555076023"
            className="flex items-center gap-2 text-primary2 font-semibold hover:text-primary transition-colors"
          >
            <Phone size={16} />
            0555076023
          </a>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a
            href="https://instagram.com/Sanad_aljazeera"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary2 font-semibold hover:text-primary transition-colors"
          >
            Sanad_aljazeera
          </a>
          <span className="hidden sm:inline text-gray-300">|</span>
          <span className="text-gray-500 text-sm">{t.payment}</span>
        </div>
      </div>
    </section>
  );
}
