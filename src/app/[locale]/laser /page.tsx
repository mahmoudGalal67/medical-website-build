"use client";

import React from "react";
import { useParams } from "next/navigation";
import {
  Sun,
  Sparkles,
  Zap,
  Flame,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Eye,
  Smile,
  Activity
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Lang = "ar" | "en";

/* ----------------------------------------------------------------
   Arc coordinates
------------------------------------------------------------------- */
const arcPoints = [
  { left: 13, top: 54 },
  { left: 31, top: 66 },
  { left: 50, top: 70 },
  { left: 69, top: 66 },
  { left: 87, top: 54 },
];

/* ----------------------------------------------------------------
   HERO SERVICES
------------------------------------------------------------------- */
const heroServices = [
  { icon: Sun, ar: "إزالة الشعر", en: "Hair Removal" },
  { icon: Zap, ar: "تفتيح", en: "Brightening" },
  { icon: Sparkles, ar: "كربونـي", en: "Carbon Laser" },
  { icon: Flame, ar: "تقشير بارد", en: "Cold Peeling" },
  { icon: Activity, ar: "تجديد الخلايا", en: "Rejuvenation" },
];

/* ----------------------------------------------------------------
   SERVICES
------------------------------------------------------------------- */
const services = [
  {
    icon: Sun,
    title: { ar: "إزالة الشعر بالليزر", en: "Laser Hair Removal" },
    desc: { ar: "جلسات آمنة وفعالة لإزالة الشعر باستخدام أحدث أجهزة التبريد المناسبة لجميع أنواع البشرة.", en: "Safe and effective hair removal sessions using top-tier cooling systems for all skin types." },
  },
  {
    icon: Sparkles,
    title: { ar: "الليزر الكربوني", en: "Carbon Laser" },
    desc: { ar: "تفتيح البشرة وتنظيف المسام العميقة وإعادة النضارة الفورية للوجه والرقبة.", en: "Brightens the skin, deep-cleans pores, and provides an instant glow to the face and neck." },
  },
  {
    icon: Zap,
    title: { ar: "علاج التصبغات والوحمات", en: "Pigmentation & Birthmarks" },
    desc: { ar: "استهداف التصبغات الداكنة وآثار الشمس بدقة لتوحيد لون الجلد بأمان.", en: "Precisely targets dark spots and sun damage to safely even out skin tone." },
  },
  {
    icon: Flame,
    title: { ar: "الفراكشنال ليزر", en: "Fractional CO2 Laser" },
    desc: { ar: "تقنية متقدمة لإخفاء ندبات حب الشباب، تضييق المسام، وشد التجاعيد الدقيقة.", en: "Advanced technology to reduce acne scars, tighten large pores, and smooth fine lines." },
  },
  {
    icon: Eye,
    title: { ar: "تشقير الشعر الوبري", en: "Bleaching Fine Hair" },
    desc: { ar: "التعامل مع الشعيرات الخفيفة والوبرية التي لا يمكن إزالتها بالليزر التقليدي.", en: "Safely bleaches fine and vellus hair that traditional lasers cannot target." },
  },
  {
    icon: ShieldCheck,
    title: { ar: "تفتيح المناطق الحساسة", en: "Intimate Area Brightening" },
    desc: { ar: "بروتوكولات ليزر مخصصة لتفتيح وتوحيد لون المناطق الحساسة برعاية تامة.", en: "Specialized laser protocols designed to safely lighten and even out delicate areas." },
  },
  {
    icon: Smile,
    title: { ar: "توريد الشفايف", en: "Lip Laser Blushing" },
    desc: { ar: "جلسات سريعة لاستعادة اللون الوردي الطبيعي للشفايف وإزالة التصبغ.", en: "Quick laser sessions to restore the natural pinkish tint of the lips and remove darkness." },
  },
  {
    icon: Activity,
    title: { ar: "إزالة التاتو والوشم", en: "Tattoo Removal" },
    desc: { ar: "تفتيت جزيئات الحبر بأحدث تقنيات الـ Q-Switched دون ترك ندبات.", en: "Breaking down ink particles using modern Q-Switched laser without leaving scars." },
  },
];

/* ----------------------------------------------------------------
   JOURNEY
------------------------------------------------------------------- */
const journey = [
  {
    ar: { title: "معاينة وتحديد نوع البشرة", desc: "فحص سماكة ولون الشعر ونوع البشرة لتحديد درجات الطاقة المناسبة." },
    en: { title: "Skin & Hair Analysis", desc: "Checking hair thickness and skin type to adjust the perfect energy parameters." },
  },
  {
    ar: { title: "تحضير و حماية", desc: "تنظيف المنطقة المستهدفة وارتداء النظارات المخصصة لحماية العين." },
    en: { title: "Preparation & Safety", desc: "Cleaning the targeted area and putting on protective eyewear for safety." },
  },
  {
    ar: { title: "تطبيق نبضات الليزر", desc: "تمرير الجهاز بسلاسة مع تقنية التبريد الذكي لمنع الإحساس بالحرارة." },
    en: { title: "Laser Application", desc: "Smoothly passing the device with dynamic cooling technology to prevent heat." },
  },
  {
    ar: { title: "العناية والترطيب", desc: "وضع كريمات مهدئة ومرطبة لحماية البشرة بعد الجلسة مباشرة." },
    en: { title: "Post-Care Moisturizing", desc: "Applying soothing creams to fully protect and calm the skin right after." },
  },
];

/* ----------------------------------------------------------------
   WHY CHOOSE US
------------------------------------------------------------------- */
const whyChooseUs = {
  ar: [
    "أحدث أجهزة ليزر عالمية (جنتل برو، دكا، وغيرها).",
    "أنظمة تبريد ذكية وفائقة لضمان جلسة بدون ألم.",
    "فريق تمريض وأطباء متخصصين في تحديد الجرعات بأمان.",
    "التزام تام بأعلى معايير التعقيم والسلامة الوقائية.",
  ],
  en: [
    "Latest international laser technologies.",
    "Advanced cooling systems for a pain-free experience.",
    "Certified medical staff specializing in precise laser doses.",
    "Strict commitment to sterilization and hygiene protocols.",
  ],
};

/* ----------------------------------------------------------------
   TEAM
------------------------------------------------------------------- */
const team = [
  { role: { ar: "أخصائي ليزر وتجميل", en: "Laser & Aesthetic Specialist" } },
  { role: { ar: "تمريض ليزر مؤهل", en: "Certified Laser Technician" } },
  { role: { ar: "استشاري جلدية وعلاج بالليزر", en: "Dermatology & Laser Consultant" } },
  { role: { ar: "أخصائي عناية بالبشرة", en: "Advanced Dermal Therapist" } },
];

/* ----------------------------------------------------------------
   FAQ
------------------------------------------------------------------- */
const faq = [
  {
    q: { ar: "كم عدد الجلسات التي أحتاجها لإزالة الشعر؟", en: "How many sessions are needed for hair removal?" },
    a: { ar: "يتراوح المتوسط بين 6 إلى 8 جلسات، وتختلف حسب طبيعة الهرمونات، سمك الشعر، ومنطقة الجسم.", en: "On average 6 to 8 sessions, depending on hormonal factors, hair thickness, and body area." },
  },
  {
    q: { ar: "ما هي النصائح قبل جلسة الليزر؟", en: "What are the tips before a laser session?" },
    a: { ar: "يجب تجنب إزالة الشعر من الجذور (كالواكس) قبل الجلسة بشهر، والاعتماد فقط على الحلاقة (الشفرة)، مع تجنب التان تماماً.", en: "Avoid plucking or waxing for a month before; only shave. Completely avoid tanning or sunbeds." },
  },
  {
    q: { ar: "هل الليزر يسبب اسمرار البشرة؟", en: "Does laser cause skin darkening?" },
    a: { ar: "بالعكس، الليزر يساعد في تفتيح التصبغات، طالما تم الالتزام بالتعليمات واستخدام كريم الترطيب والواقي الشمسي.", en: "No, laser actually helps with hyperpigmentation, as long as you follow post-care guidelines and wear sunscreen." },
  },
  {
    q: { ar: "متى يمكنني العودة للمكياج بعد الفراكشنال ليزر؟", en: "When can I apply makeup after Fractional Laser?" },
    a: { ar: "يفضل الانتظار من 5 إلى 7 أيام حتى تلتئم البشرة تماماً وتتساقط القشور البسيطة.", en: "It is best to wait 5 to 7 days until the skin fully heals and micro-crusts flake off naturally." },
  },
];

/* ----------------------------------------------------------------
   UI TEXT
------------------------------------------------------------------- */
const uiText = {
  ar: {
    eyebrow: "قسم الليزر المتقدم",
    heroTitle: "تقنيات",
    heroTitleHighlight: "ليزر عالمية لبشرتك",
    heroDesc: "تخلصي من الشعر الزائد واستعيدي نضارة بشرتك وتوحد لونها بأحدث تقنيات الليزر العالمية، تحت إشراف طاقم طبي متخصص يضمن لك الراحة والأمان.",
    bookNow: "احجزي جلستك",
    whatsapp: "تواصل واتساب",
    servicesTitle: "خدمات عيادة الليزر",
    servicesSubtitle: "حلول ليزر متطورة وتجميلية متكاملة للوجه والجسم.",
    journeyTitle: "خطوات جلستك",
    journeySubtitle: "رحلة مريحة وآمنة تبدأ من الفحص وتستمر حتى الرعاية البعدية.",
    whyTitle: "لماذا عيادة الليزر لدينا؟",
    teamTitle: "خبراء العلاج بالليزر",
    teamSubtitle: "طاقم طبي وتمريضي محترف ومدرب على أعلى الأجهزة العالمية.",
    faqTitle: "الأسئلة الشائعة عن الليزر",
    ctaTitle: "استمتعي بنعومة ونضارة دائمة",
    ctaSubtitle: "احجزي موعدك الآن واستفيدي من عروض الليزر الحصرية.",
    ctaButton: "احجزي الآن",
  },
  en: {
    eyebrow: "Advanced Laser Department",
    heroTitle: "World-Class",
    heroTitleHighlight: "Laser Technologies",
    heroDesc: "Say goodbye to unwanted hair and restore your skin’s clarity with our advanced laser solutions, guided by specialists prioritizing your comfort.",
    bookNow: "Book Your Session",
    whatsapp: "WhatsApp",
    servicesTitle: "Laser Clinic Services",
    servicesSubtitle: "Advanced medical and aesthetic laser treatments for face and body.",
    journeyTitle: "Your Session Steps",
    journeySubtitle: "A safe, smooth, and comfortable experience from consultation to aftercare.",
    whyTitle: "Why Choose Our Laser Clinic?",
    teamTitle: "Laser Specialists",
    teamSubtitle: "Professional medical and nursing staff trained on leading laser technologies.",
    faqTitle: "Frequently Asked Questions",
    ctaTitle: "Experience Flawless, Silky Skin",
    ctaSubtitle: "Book your appointment today and discover our exclusive laser packages.",
    ctaButton: "Book Now",
  },
};

export default function LaserPage() {
  const params = useParams();
  const locale: Lang = params.locale === "en" ? "en" : "ar";
  const isRTL = locale === "ar";
  const t = uiText[locale];

  return (
    <div className="min-h-screen bg-white text-gray-900" dir={isRTL ? "rtl" : "ltr"}>
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-transparent to-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Hero Left Content */}
          <div className="space-y-6 text-center lg:text-start">
            <span className="inline-block rounded-full bg-primary2/10 px-4 py-1.5 text-sm font-semibold text-primary2">
              {t.eyebrow}
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              {t.heroTitle}{" "}
              <span className="bg-gradient-to-r from-primary2 to-primary bg-clip-text text-transparent block sm:inline">
                {t.heroTitleHighlight}
              </span>
            </h1>
            <p className="mx-auto lg:mx-0 max-w-xl text-lg text-gray-600 leading-relaxed">
              {t.heroDesc}
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#contact"
                className="rounded-full bg-primary2 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-primary hover:scale-105"
              >
                {t.bookNow}
              </a>
              <a
                href="https://wa.me/966500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-8 py-4 font-bold text-gray-700 shadow-sm transition hover:bg-gray-50"
              >
                <Phone size={18} className="text-green-500" />
                {t.whatsapp}
              </a>
            </div>
          </div>

          {/* Hero Right Graphic */}
          <div className="relative mx-auto h-[320px] w-full max-w-[500px] rounded-[2rem] bg-gradient-to-br from-primary2/10 to-primary/5 p-8 lg:h-[400px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-44 w-44 rounded-full bg-gradient-to-tr from-primary2 to-primary flex items-center justify-center text-white shadow-xl animate-pulse">
                <Sun size={48} />
              </div>
            </div>

            {/* Arc Services Layout */}
            {heroServices.map((item, idx) => {
              const IconComponent = item.icon;
              const coords = arcPoints[idx] || { left: 50, top: 50 };
              return (
                <div
                  key={idx}
                  style={{ left: `${coords.left}%`, top: `${coords.top}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 bg-white p-3 rounded-2xl shadow-md transition-all duration-300 hover:scale-110"
                >
                  <div className="rounded-xl bg-primary2/10 p-2 text-primary2">
                    <IconComponent size={20} />
                  </div>
                  <span className="text-xs font-bold text-gray-700">
                    {locale === "ar" ? item.ar : item.en}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="py-20 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-extrabold sm:text-4xl text-gray-900">{t.servicesTitle}</h2>
            <p className="text-gray-600">{t.servicesSubtitle}</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, idx) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-5 inline-block rounded-2xl bg-primary2/10 p-3 text-primary2 transition-colors group-hover:bg-primary2 group-hover:text-white">
                    <ServiceIcon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title[locale]}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.desc[locale]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. JOURNEY SECTION */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-extrabold sm:text-4xl text-gray-900">{t.journeyTitle}</h2>
            <p className="text-gray-600">{t.journeySubtitle}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {journey.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center p-6 bg-white rounded-2xl">
                <div className="absolute top-0 font-black text-6xl text-gray-100/70 select-none z-0">
                  0{idx + 1}
                </div>
                <div className="relative z-10 mt-6 space-y-2">
                  <h3 className="text-lg font-bold text-gray-900">
                    {step[locale].title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step[locale].desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US & TEAM SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 grid gap-12 lg:grid-cols-2">
          
          {/* Why Choose Us */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">{t.whyTitle}</h2>
            <ul className="space-y-4">
              {whyChooseUs[locale].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary2 mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Team Roles */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">{t.teamTitle}</h2>
            <p className="text-gray-600 mb-8">{t.teamSubtitle}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {team.map((member, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary2" />
                  <span className="font-semibold text-gray-800">{member.role[locale]}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">{t.faqTitle}</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faq.map((item, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`} className="border border-gray-200 bg-white rounded-2xl px-4 overflow-hidden">
                <AccordionTrigger className="text-start font-bold text-gray-900 hover:no-underline py-4">
                  {item.q[locale]}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  {item.a[locale]}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="bg-primary rounded-[40px] p-12 text-white text-center">
          <h2 className="md:text-5xl text-3xl font-bold">{t.ctaTitle}</h2>
          <p className="mt-4 text-white/80 text-lg">{t.ctaSubtitle}</p>
          <a
            href="tel:+966500000000"
            className="inline-block bg-white text-primary px-10 py-4 rounded-xl mt-8 font-semibold hover:-translate-y-0.5 transition-transform duration-300"
          >
            {t.ctaButton}
          </a>
        </div>
      </section>
    </div>
  );
}
