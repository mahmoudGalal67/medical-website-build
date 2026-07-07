"use client";

import React from "react";
import { useParams } from "next/navigation";
import {
  Sparkles,
  Heart,
  Sun,
  Droplets,
  WandSparkles,
  Scissors,
  ShieldCheck,
  Flower2,
  CheckCircle2,
  Phone,
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
  { icon: Sparkles, ar: "نضارة", en: "Glow" },
  { icon: Heart, ar: "بوتوكس", en: "Botox" },
  { icon: Droplets, ar: "فيلر", en: "Fillers" },
  { icon: Sun, ar: "ليزر", en: "Laser" },
  { icon: WandSparkles, ar: "تقشير", en: "Peeling" },
];

/* ----------------------------------------------------------------
   SERVICES
------------------------------------------------------------------- */
const services = [
  {
    icon: Sparkles,
    title: { ar: "جلسات النضارة", en: "Skin Rejuvenation" },
    desc: { ar: "جلسات متقدمة لاستعادة نضارة البشرة وإشراقها الطبيعي.", en: "Advanced treatments to restore your skin's healthy glow." },
  },
  {
    icon: Heart,
    title: { ar: "حقن البوتوكس", en: "Botox" },
    desc: { ar: "تقليل التجاعيد التعبيرية وإبراز ملامح الوجه بشكل طبيعي.", en: "Reduce expression lines while maintaining a natural appearance." },
  },
  {
    icon: Droplets,
    title: { ar: "حقن الفيلر", en: "Dermal Fillers" },
    desc: { ar: "إبراز الشفاه والخدود وتصحيح فقدان الحجم بأمان.", en: "Restore facial volume and enhance lips and cheeks safely." },
  },
  {
    icon: Sun,
    title: { ar: "إزالة الشعر بالليزر", en: "Laser Hair Removal" },
    desc: { ar: "تقنيات ليزر حديثة لجميع أنواع البشرة.", en: "Modern laser technology suitable for all skin types." },
  },
  {
    icon: WandSparkles,
    title: { ar: "التقشير الكيميائي", en: "Chemical Peeling" },
    desc: { ar: "تحسين ملمس البشرة وتقليل التصبغات وآثار الحبوب.", en: "Improve skin texture while reducing pigmentation and acne marks." },
  },
  {
    icon: Flower2,
    title: { ar: "علاج التصبغات", en: "Pigmentation Treatment" },
    desc: { ar: "خطط علاجية فعالة لتوحيد لون البشرة.", en: "Customized plans to even skin tone." },
  },
  {
    icon: ShieldCheck,
    title: { ar: "علاج حب الشباب", en: "Acne Treatment" },
    desc: { ar: "علاج متكامل للحبوب وآثارها حسب كل حالة.", en: "Comprehensive acne treatment tailored to your skin." },
  },
  {
    icon: Scissors,
    title: { ar: "الميكرونيدلينج", en: "Microneedling" },
    desc: { ar: "تحفيز الكولاجين لتحسين الندبات والمسام.", en: "Stimulates collagen production for smoother skin." },
  },
];

/* ----------------------------------------------------------------
   JOURNEY
------------------------------------------------------------------- */
const journey = [
  {
    ar: { title: "استشارة وفحص البشرة", desc: "تقييم شامل للبشرة وتحديد الاحتياجات العلاجية والتجميلية." },
    en: { title: "Consultation & Skin Analysis", desc: "A complete skin assessment to identify your needs." },
  },
  {
    ar: { title: "خطة علاج مخصصة", desc: "وضع خطة تناسب نوع البشرة وأهدافك التجميلية." },
    en: { title: "Personalized Treatment Plan", desc: "A customized plan designed specifically for your skin." },
  },
  {
    ar: { title: "الجلسة العلاجية", desc: "تنفيذ العلاج بأحدث الأجهزة وعلى يد أطباء متخصصين." },
    en: { title: "Treatment Session", desc: "Treatment performed using modern technology by specialists." },
  },
  {
    ar: { title: "المتابعة والعناية", desc: "متابعة النتائج مع إرشادات للحفاظ على صحة البشرة." },
    en: { title: "Follow-up Care", desc: "Continuous follow-up with aftercare instructions." },
  },
];

/* ----------------------------------------------------------------
   WHY CHOOSE US
------------------------------------------------------------------- */
const whyChooseUs = {
  ar: [
    "أطباء جلدية وتجميل بخبرة عالية.",
    "أحدث أجهزة الليزر والتجميل.",
    "خطط علاجية تناسب كل حالة.",
    "نتائج طبيعية وآمنة.",
  ],
  en: [
    "Experienced dermatology specialists.",
    "Latest laser & aesthetic technologies.",
    "Personalized treatment plans.",
    "Safe treatments with natural-looking results.",
  ],
};

/* ----------------------------------------------------------------
   TEAM
------------------------------------------------------------------- */
const team = [
  { role: { ar: "استشاري الجلدية", en: "Dermatology Consultant" } },
  { role: { ar: "أخصائي الليزر", en: "Laser Specialist" } },
  { role: { ar: "أخصائية التجميل غير الجراحي", en: "Non-Surgical Aesthetic Specialist" } },
  { role: { ar: "أخصائي علاج البشرة", en: "Skin Care Specialist" } },
];

/* ----------------------------------------------------------------
   FAQ
------------------------------------------------------------------- */
const faq = [
      {
        q: { ar: "أسباب تساقط الشعر عند النساء والرجال.", en: "Causes of hair loss in men and women." },
        a: {
          ar: "تشمل الوراثة، اختلال الهرمونات، نقص الحديد أو فيتامين د، التوتر النفسي، وبعض الأمراض المزمنة مثل قصور الغدة الدرقية. يساعد تحديد السبب عبر التحاليل في اختيار العلاج الأنسب.",
          en: "Causes include genetics, hormonal imbalance, iron or vitamin D deficiency, psychological stress, and chronic conditions like hypothyroidism. Lab tests help identify the cause and guide the right treatment.",
        },
      },
      {
        q: { ar: "علاج حب الشباب وآثاره.", en: "Treating acne and its scars." },
        a: {
          ar: "يشمل العلاج كريمات موضعية، أدوية فموية في الحالات الشديدة، وجلسات تقشير أو ليزر لعلاج الآثار المتبقية بعد التئام الحبوب. يُفضل استشارة طبيب جلدية لتحديد الخطة حسب شدة الحالة.",
          en: "Treatment includes topical creams, oral medication for severe cases, and peeling or laser sessions to treat residual scars. A dermatologist should tailor the plan based on severity.",
        },
      },
      {
        q: { ar: "الأكزيما: الأسباب والعلاج.", en: "Eczema: causes and treatment." },
        a: {
          ar: "ترتبط الأكزيما غالبًا بالحساسية والعامل الوراثي وجفاف البشرة، وتزداد مع التوتر أو تغير الطقس. يعتمد العلاج على مرطبات مكثفة، كريمات كورتيزون موضعية عند الحاجة، وتجنب المهيّجات المعروفة.",
          en: "Eczema is often linked to allergies, genetics, and dry skin, worsening with stress or weather changes. Treatment relies on intensive moisturizing, topical cortisone creams when needed, and avoiding known triggers.",
        },
      },
      {
        q: { ar: "التصبغات الجلدية وكيفية الوقاية منها.", en: "Skin pigmentation and how to prevent it." },
        a: {
          ar: "تنتج غالبًا عن التعرض للشمس، التغيرات الهرمونية، أو التهابات الجلد السابقة. تشمل الوقاية استخدام واقي الشمس يوميًا، وتجنب التعرض المباشر لأشعة الشمس في أوقات الذروة، مع كريمات موضعية لتفتيح التصبغات الموجودة.",
          en: "It's often caused by sun exposure, hormonal changes, or prior skin inflammation. Prevention includes daily sunscreen, avoiding peak sun hours, and topical creams to lighten existing pigmentation.",
        },
      },
      {
        q: { ar: "الفرق بين البوتوكس والفيلر.", en: "The difference between Botox and fillers." },
        a: {
          ar: "البوتوكس يعمل على إرخاء العضلات لتقليل خطوط التعبير كخطوط الجبهة والعين، بينما الفيلر يُستخدم لملء الفراغات وإضافة حجم كالخدود والشفاه. كلاهما إجراء تجميلي مؤقت يحتاج لتكرار دوري.",
          en: "Botox relaxes muscles to reduce expression lines like forehead and eye wrinkles, while filler adds volume to fill areas like cheeks and lips. Both are temporary cosmetic procedures requiring periodic repetition.",
        },
      },
];

/* ----------------------------------------------------------------
   UI TEXT
------------------------------------------------------------------- */
const uiText = {
  ar: {
    eyebrow: "الجلدية والتجميل",
    heroTitle: "بشرة",
    heroTitleHighlight: "أكثر صحة وإشراقًا",
    heroDesc: "نوفر أحدث حلول الجلدية والتجميل للحفاظ على صحة بشرتك وإبراز جمالك الطبيعي بأيدي نخبة من الأطباء.",
    bookNow: "احجز استشارتك",
    whatsapp: "تواصل واتساب",
    servicesTitle: "خدماتنا",
    servicesSubtitle: "مجموعة متكاملة من خدمات الجلدية والعناية بالبشرة والتجميل.",
    journeyTitle: "رحلتك معنا",
    journeySubtitle: "خطوات بسيطة للوصول إلى بشرة صحية ومتألقة.",
    whyTitle: "لماذا تختار عيادتنا؟",
    teamTitle: "فريق الجلدية والتجميل",
    teamSubtitle: "خبرات متنوعة تقدم أفضل الحلول العلاجية والتجميلية.",
    faqTitle: "الأسئلة الشائعة",
    ctaTitle: "ابدأ رحلتك نحو بشرة أجمل",
    ctaSubtitle: "احجز موعدك اليوم واستمتع برعاية احترافية.",
    ctaButton: "احجز الآن",
  },
  en: {
    eyebrow: "Dermatology & Cosmetics",
    heroTitle: "Healthy",
    heroTitleHighlight: "Beautiful Skin",
    heroDesc: "Advanced dermatology and aesthetic treatments designed to enhance your natural beauty.",
    bookNow: "Book Consultation",
    whatsapp: "WhatsApp",
    servicesTitle: "Our Services",
    servicesSubtitle: "Comprehensive dermatology and aesthetic treatments under one roof.",
    journeyTitle: "Your Journey",
    journeySubtitle: "Simple steps toward healthier, glowing skin.",
    whyTitle: "Why Choose Us",
    teamTitle: "Dermatology Team",
    teamSubtitle: "Experienced specialists using the latest technology.",
    faqTitle: "Frequently Asked Questions",
    ctaTitle: "Ready for Healthier Skin?",
    ctaSubtitle: "Book your appointment today and let our experts take care of you.",
    ctaButton: "Book Now",
  },
};

export default function DermatologyPage() {
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

          {/* Hero Right Graphic (Dynamic Arc Layout) */}
          <div className="relative mx-auto h-[320px] w-full max-w-[500px] rounded-[2rem] bg-gradient-to-br from-primary2/10 to-primary/5 p-8 lg:h-[400px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-44 w-44 rounded-full bg-gradient-to-tr from-primary2 to-primary flex items-center justify-center text-white shadow-xl animate-pulse">
                <Sparkles size={48} />
              </div>
            </div>

            {/* Render items dynamically inside the simulated arc coordinates */}
            {heroServices.map((item, idx) => {
              const IconComponent = item.icon;
              const coords = arcPoints[idx] || { left: 50, top: 50 };
              return (
                <div
                  key={idx}
                  style={{ left: `${coords.left}%`, top: `${coords.top}%` }}
                  className="absolute -translate-x-1/12 -translate-y-1/12 flex flex-col items-center gap-1 bg-white p-3 rounded-2xl shadow-md transition-all duration-300 hover:scale-110"
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

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
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
          
          {/* Why Choose Us Box */}
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

          {/* Team Roles Box */}
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
