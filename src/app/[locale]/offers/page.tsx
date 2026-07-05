"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Tag,
  ArrowRight,
  Phone,
} from "lucide-react";

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

const categories = [
  "الكل",
  "صحة عامة",
  "أطفال",
  "خصوبة",
  "جلدية وتجميل",
  "فحص الزواج",
  "تخسيس",
  "باقات شاملة",
];

const offers: LabOffer[] = [
  {
    title: "باقة الأنيميا وفقر الدم",
    category: "صحة عامة",
    testsCount: "4 تحاليل",
    tests: ["CBC - صورة الدم", "ESR - سرعة ترسيب الدم", "IRON - الحديد", "Ferritin - مخزون الحديد"],
    price: "250 ريال",
    originalPrice: "450 ريال",
  },
  {
    title: "باقة مرضى السكري",
    category: "صحة عامة",
    testsCount: "8 تحاليل",
    tests: [
      "FBG - تحليل السكر صائم",
      "PPG - تحليل السكر بعد الأكل",
      "HbA1c - السكر التراكمي",
      "تحليل الإنسولين",
      "الكوليسترول",
      "وظائف الكلى (Creatinine & Urea)",
      "الدهون الثلاثية",
      "تحليل البول",
    ],
    price: "300 ريال",
    originalPrice: "400 ريال",
  },
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
  {
    title: "باقة هشاشة العظام",
    category: "صحة عامة",
    testsCount: "6 تحاليل",
    tests: ["TSH", "Calcium", "ALP", "Vitamin D", "Magnesium", "Vitamin B12"],
    price: "450 ريال",
    originalPrice: "800 ريال",
  },
  {
    title: "باقة الغدة الدرقية",
    category: "صحة عامة",
    testsCount: "3 تحاليل",
    tests: ["TSH", "FT3", "FT4"],
    price: "300 ريال",
    originalPrice: "450 ريال",
  },
  {
    title: "باقة إبر التخسيس - باقة البداية",
    category: "تخسيس",
    testsCount: "5 تحاليل",
    tests: [
      "تحليل السكر",
      "وظائف الكلى",
      "وظائف الكبد",
      "السكر التراكمي",
      "تحليل الغدة الدرقية",
    ],
    price: "300 ريال",
  },
  {
    title: "باقة إبر التخسيس - باقة المتابعة",
    category: "تخسيس",
    testsCount: "9 تحاليل",
    tests: [
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
    price: "650 ريال",
  },
  {
    title: "باقة سند الجزيرة الذهبية",
    category: "باقات شاملة",
    testsCount: "13 تحليلاً",
    tests: [
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
    price: "600 ريال",
    originalPrice: "1,200 ريال",
    badge: "الأكثر طلباً",
  },
  {
    title: "باقة تساقط الشعر",
    category: "جلدية وتجميل",
    testsCount: "6 تحاليل",
    tests: ["TSH", "Ferritin", "CBC", "Iron", "Vitamin B12"],
    price: "450 ريال",
    originalPrice: "750 ريال",
  },
  {
    title: "باقة القولون",
    category: "صحة عامة",
    testsCount: "4 تحاليل",
    tests: [
      "CBC - صورة الدم",
      "H. pylori - جرثومة المعدة في البراز",
      "FBO - الدم الخفي في البراز",
      "Salmonella - السالمونيلا",
    ],
    price: "300 ريال",
    originalPrice: "600 ريال",
  },
  {
    title: "باقة الخصوبة للرجال",
    category: "خصوبة",
    testsCount: "7 تحاليل",
    tests: [
      "فحص السائل المنوي",
      "Testosterone Total - هرمون الذكورة",
      "FSH - هرمون الأنوثة",
      "LH - هرمون الأنوثة",
      "Prolactin - هرمون الحليب",
      "TSH - هرمون الغدة",
      "Urine Analysis - تحليل البول",
    ],
    price: "500 ريال",
    originalPrice: "1,200 ريال",
  },
  {
    title: "باقة تساقط الأظافر",
    category: "جلدية وتجميل",
    testsCount: "6 تحاليل",
    tests: [
      "TSH - الغدة الدرقية",
      "Vitamin B12 - فيتامين ب12",
      "Iron - الحديد",
      "Ferritin - مخزون الحديد",
      "Calcium - الكالسيوم",
      "Magnesium - المغنيسيوم",
    ],
    price: "450 ريال",
    originalPrice: "800 ريال",
  },
  {
    title: "باقة الروكتان",
    category: "جلدية وتجميل",
    testsCount: "8 تحاليل",
    tests: [
      "CBC - صورة الدم",
      "Urea - اليوريا",
      "RBS - السكر في الدم",
      "Triglycerides - الدهون الثلاثية",
      "Cholesterol - الكوليسترول",
      "Creatinine - الكرياتينين",
      "GPT - إنزيم الكبد",
      "GOT - إنزيم الكبد",
    ],
    price: "200 ريال",
  },
  {
    title: "باقة الخصوبة للنساء",
    category: "خصوبة",
    testsCount: "6 تحاليل",
    tests: [
      "FSH",
      "LH",
      "Total Test - هرمون الذكورة",
      "Prolactin - هرمون الحليب",
      "TSH - هرمون الغدة",
      "Vaginal Swab C/S - مسحة المهبل",
      "Urine Analysis - تحليل البول",
    ],
    price: "600 ريال",
    originalPrice: "1,200 ريال",
  },
  {
    title: "باقة المدارس",
    category: "أطفال",
    testsCount: "4 تحاليل",
    tests: [
      "Blood Groups - فصيلة الدم",
      "CBC - صورة الدم",
      "Urine Analysis - تحليل البول",
      "Stool Examination - تحليل البراز",
    ],
    note: "مع كشفية طبيب الأطفال",
    price: "150 ريال",
    originalPrice: "250 ريال",
  },
];

export default function AllOffersPage() {
  const [activeCategory, setActiveCategory] = useState("الكل");

  const filteredOffers =
    activeCategory === "الكل"
      ? offers
      : offers.filter((offer) => offer.category === activeCategory);

  return (
    <section className="bg-gradient-to-t from-primary/80 to-transparent py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">


        <div className="text-center mb-10">
          <span className="text-primary2 text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
            <Tag size={14} />
            عروض خاصة
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d004d] mt-2">
            جميع عروض باقات المختبر
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            باقات تحاليل شاملة بأسعار مخفضة لجميع الفروع، تشمل أهم الفحوصات
            الطبية اللازمة لصحتك وصحة أسرتك.
          </p>
        </div>

        {/* Tabs / Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-white border-primary shadow-md"
                  : "bg-white text-primary2 border-primary2/20 hover:border-primary2/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOffers.map((offer) => {
            const imageUrl = categoryImages[offer.category];
            return (
            <div
              key={offer.title}
              className="group relative rounded-3xl overflow-hidden bg-gradient-to-t from-primary2/80 to-primary2 shadow-lg hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Header: real photo background */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={imageUrl}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
