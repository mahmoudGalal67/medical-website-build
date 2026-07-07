"use client";

import React from "react";
import { useParams } from "next/navigation";
import {
  Baby,
  HeartHandshake,
  Stethoscope,
  HeartPulse,
  CalendarDays,
  ShieldCheck,
  Sparkles,
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
  { icon: Baby, ar: "الحمل", en: "Pregnancy" },
  { icon: Stethoscope, ar: "السونار", en: "Ultrasound" },
  { icon: HeartPulse, ar: "المتابعة", en: "Follow-up" },
  { icon: HeartHandshake, ar: "الولادة", en: "Delivery" },
  { icon: Sparkles, ar: "صحة المرأة", en: "Women's Care" },
];

/* ----------------------------------------------------------------
   SERVICES
------------------------------------------------------------------- */
const services = [
  {
    icon: Baby,
    title: { ar: "متابعة الحمل", en: "Pregnancy Follow-up" },
    desc: { ar: "متابعة الأم والجنين طوال فترة الحمل لضمان حمل صحي وآمن.", en: "Comprehensive pregnancy care for both mother and baby." },
  },
  {
    icon: Stethoscope,
    title: { ar: "السونار", en: "Ultrasound" },
    desc: { ar: "فحوصات سونار حديثة لمتابعة نمو الجنين وتشخيص الحالات.", en: "Advanced ultrasound scans for pregnancy monitoring." },
  },
  {
    icon: HeartPulse,
    title: { ar: "أمراض النساء", en: "Gynecology" },
    desc: { ar: "تشخيص وعلاج مختلف أمراض النساء بأحدث الأساليب.", en: "Diagnosis and treatment of common gynecological conditions." },
  },
  {
    icon: CalendarDays,
    title: { ar: "اضطرابات الدورة الشهرية", en: "Menstrual Disorders" },
    desc: { ar: "تشخيص وعلاج اضطرابات الدورة وتأخرها وآلامها.", en: "Treatment for irregular, delayed, or painful periods." },
  },
  {
    icon: HeartHandshake,
    title: { ar: "تنظيم الأسرة", en: "Family Planning" },
    desc: { ar: "استشارات وخيارات تنظيم الأسرة المناسبة لكل حالة.", en: "Personalized family planning consultations." },
  },
  {
    icon: Flower2,
    title: { ar: "علاج تأخر الإنجاب", en: "Infertility Treatment" },
    desc: { ar: "تقييم شامل ووضع خطة علاج مناسبة لزيادة فرص الحمل.", en: "Comprehensive fertility assessment and treatment plans." },
  },
  {
    icon: ShieldCheck,
    title: { ar: "الكشف المبكر", en: "Early Screening" },
    desc: { ar: "فحوصات دورية للكشف المبكر عن أمراض النساء وسرطان عنق الرحم.", en: "Routine screening for women's health and cervical cancer." },
  },
  {
    icon: Sparkles,
    title: { ar: "رعاية ما بعد الولادة", en: "Postpartum Care" },
    desc: { ar: "متابعة صحة الأم بعد الولادة لضمان التعافي الكامل.", en: "Post-delivery care to ensure a healthy recovery." },
  },
];

/* ----------------------------------------------------------------
   JOURNEY
------------------------------------------------------------------- */
const journey = [
  {
    ar: { title: "الاستشارة والفحص", desc: "مراجعة التاريخ الطبي وإجراء الفحص السريري اللازم." },
    en: { title: "Consultation & Examination", desc: "Reviewing your medical history and performing a complete examination." },
  },
  {
    ar: { title: "التشخيص", desc: "إجراء الفحوصات والسونار للوصول إلى تشخيص دقيق." },
    en: { title: "Diagnosis", desc: "Using ultrasound and diagnostic tests to accurately identify your condition." },
  },
  {
    ar: { title: "الخطة العلاجية", desc: "وضع خطة علاج أو متابعة حمل تناسب حالتك الصحية." },
    en: { title: "Treatment Plan", desc: "Creating a personalized treatment or pregnancy follow-up plan." },
  },
  {
    ar: { title: "المتابعة المستمرة", desc: "متابعة دورية لضمان أفضل النتائج وصحة الأم والجنين." },
    en: { title: "Continuous Follow-up", desc: "Regular visits to ensure the best outcomes for mother and baby." },
  },
];

/* ----------------------------------------------------------------
   WHY CHOOSE US
------------------------------------------------------------------- */
const whyChooseUs = {
  ar: [
    "استشاريات وأخصائيات بخبرة عالية.",
    "أجهزة سونار وتشخيص حديثة.",
    "متابعة دقيقة للحمل حتى الولادة.",
    "خصوصية وراحة تامة للمراجعات.",
  ],
  en: [
    "Experienced gynecology consultants.",
    "Modern ultrasound and diagnostic equipment.",
    "Comprehensive pregnancy follow-up.",
    "Comfortable and private environment.",
  ],
};

/* ----------------------------------------------------------------
   TEAM
------------------------------------------------------------------- */
const team = [
  { role: { ar: "استشارية نساء وولادة", en: "Obstetrics & Gynecology Consultant" } },
  { role: { ar: "أخصائية متابعة الحمل", en: "Pregnancy Care Specialist" } },
  { role: { ar: "أخصائية السونار", en: "Ultrasound Specialist" } },
  { role: { ar: "أخصائية أمراض النساء", en: "Gynecology Specialist" } },
];

/* ----------------------------------------------------------------
   FAQ
------------------------------------------------------------------- */
const faq = [
      {
        q: { ar: "أعراض تكيس المبايض.", en: "Symptoms of polycystic ovary syndrome (PCOS)." },
        a: {
          ar: "تشمل عدم انتظام الدورة الشهرية، زيادة نمو الشعر، حب الشباب، وزيادة الوزن، وأحيانًا صعوبة في الحمل. يُشخَّص بالفحص السريري والموجات الصوتية وتحليل الهرمونات.",
          en: "Symptoms include irregular periods, excess hair growth, acne, weight gain, and sometimes difficulty conceiving. Diagnosis involves a clinical exam, ultrasound, and hormone testing.",
        },
      },
      {
        q: { ar: "تأخر الحمل: متى يجب زيارة الطبيب؟", en: "Delayed pregnancy: when should you see a doctor?" },
        a: {
          ar: "يُنصح بمراجعة طبيب النساء إذا لم يحدث حمل بعد سنة من المحاولة المنتظمة للأزواج أقل من 35 عامًا، أو بعد 6 أشهر لمن تجاوزت 35 عامًا، لتقييم الأسباب المحتملة لدى الطرفين.",
          en: "It's advisable to see a gynecologist if pregnancy hasn't occurred after a year of regular attempts for couples under 35, or after 6 months for those over 35, to evaluate potential causes for both partners.",
        },
      },
      {
        q: { ar: "متابعة الحمل شهرًا بشهر.", en: "Monthly pregnancy monitoring." },
        a: {
          ar: "تشمل المتابعة فحوصات دورية للدم والضغط والوزن، وموجات صوتية لمتابعة نمو الجنين في مراحل محددة، بالإضافة لفحص السكري والفحص التفصيلي للتأكد من سلامة الأعضاء غالبًا بين الأسبوعين 18-22.",
          en: "Monitoring includes regular blood, blood pressure, and weight checks, scheduled ultrasounds to track fetal growth, a glucose test, and a detailed anomaly scan usually between weeks 18–22.",
        },
      },
      {
        q: { ar: "علامات الحمل المبكرة.", en: "Early signs of pregnancy." },
        a: {
          ar: "من أبرزها تأخر الدورة الشهرية، الغثيان الصباحي، تورم وحساسية الثديين، التعب الشديد، وكثرة التبول. تأكيد الحمل يكون بتحليل الدم أو الاختبار المنزلي متبوعًا بالموجات الصوتية.",
          en: "Key signs include a missed period, morning nausea, breast tenderness and swelling, extreme fatigue, and frequent urination. Confirmation is via a blood test or home test, followed by an ultrasound.",
        },
      },
      {
        q: { ar: "أفضل الفحوصات الدورية للمرأة.", en: "The best routine health checks for women." },
        a: {
          ar: "تشمل فحص عنق الرحم (باب سميرة) بشكل دوري، فحص الثدي السريري والماموجرام حسب العمر، تحليل فيتامين د والحديد، وفحص هرمونات الغدة الدرقية، بالإضافة لمتابعة صحة العظام مع التقدم بالعمر.",
          en: "These include regular Pap smears, clinical breast exams and mammograms based on age, vitamin D and iron testing, thyroid hormone checks, and bone health monitoring as women age.",
        },
      },
      {
        q: { ar: "اضطرابات الدورة الشهرية وأسبابها.", en: "Menstrual cycle disorders and their causes." },
        a: {
          ar: "قد تنتج عن اختلال الهرمونات، تكيس المبايض، التوتر النفسي، تغير الوزن الملحوظ، أو مشاكل في الرحم مثل الأورام الليفية. عدم الانتظام المستمر يستدعي الفحص لتحديد السبب والعلاج المناسب.",
          en: "These may result from hormonal imbalance, PCOS, psychological stress, significant weight changes, or uterine issues like fibroids. Persistent irregularity warrants evaluation to determine the cause and treatment.",
        },
      },
];

/* ----------------------------------------------------------------
   UI TEXT
------------------------------------------------------------------- */
const uiText = {
  ar: {
    eyebrow: "عيادة النساء والولادة",
    heroTitle: "رعاية",
    heroTitleHighlight: "متكاملة لكل مرحلة",
    heroDesc: "نقدم خدمات النساء والولادة بأحدث الأجهزة الطبية مع متابعة دقيقة للحمل وتشخيص وعلاج أمراض النساء في بيئة آمنة ومريحة.",
    bookNow: "احجزي موعدك",
    whatsapp: "تواصل واتساب",
    servicesTitle: "خدماتنا",
    servicesSubtitle: "رعاية متكاملة لصحة المرأة قبل الحمل وأثناءه وبعد الولادة.",
    journeyTitle: "رحلتك معنا",
    journeySubtitle: "نهتم بك في كل خطوة حتى تحصلي على أفضل رعاية طبية.",
    whyTitle: "لماذا تختاريننا",
    teamTitle: "فريق النساء والولادة",
    teamSubtitle: "خبرات طبية متخصصة تقدم أفضل مستويات الرعاية.",
    faqTitle: "الأسئلة الشائعة",
    ctaTitle: "ابدئي رحلتك الصحية اليوم",
    ctaSubtitle: "احجزي موعدك مع نخبة من أطباء النساء والولادة.",
    ctaButton: "احجزي الآن",
  },
  en: {
    eyebrow: "Obstetrics & Gynecology",
    heroTitle: "Complete",
    heroTitleHighlight: "Women's Care",
    heroDesc: "Providing comprehensive obstetrics and gynecology services with advanced medical technology and experienced specialists.",
    bookNow: "Book Appointment",
    whatsapp: "WhatsApp",
    servicesTitle: "Our Services",
    servicesSubtitle: "Comprehensive care for women before, during, and after pregnancy.",
    journeyTitle: "Your Journey",
    journeySubtitle: "Professional care every step of the way.",
    whyTitle: "Why Choose Us",
    teamTitle: "Our Women's Health Team",
    teamSubtitle: "Experienced specialists dedicated to your health.",
    faqTitle: "Frequently Asked Questions",
    ctaTitle: "Take the First Step Toward Better Care",
    ctaSubtitle: "Book your appointment with our women's health specialists today.",
    ctaButton: "Book Now",
  },
};

export default function GynecologyPage() {
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
                <Baby size={48} />
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
