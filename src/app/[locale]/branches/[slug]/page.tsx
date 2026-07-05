import { Heart, ShieldPlus, CheckCircle2, Building2 } from "lucide-react";
import BranchHeroSlider from "@/components/BranchHeroSlider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";

import DoctorsSection from "@/components/doctors-section";
import TestimonialsSection from "@/components/AAtestimonials-section";

type Lang = "ar" | "en";

const branches = [
  {
    id: "1",
    slug: "care",
    title: { ar: "مجمع الجزيره كير الطبي", en: "Aljazeera Care Medical Complex" },
    desc: {
      ar: "رعاية متقدمة   على يد أخصائيين يتمتعون بخبرة دولية، وباستخدام تقنيات تشخيصية حديثة وخطط علاجية تتمحور حول المريض.",
      en: "Advanced care delivered by specialists with international experience, using modern diagnostic technologies and patient-centered treatment plans.",
    },
    logo: "/branches/pages/care.png",
    doctors: 2,
    address: {
      ar: "محافظة ثادق، حي الخالدية، طريق الملك فهد",
      en: "Thadiq Governorate, Al Khalidiyah District, King Fahd Road",
    },
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5301159142036!2d45.8607969!3d25.2863875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2bc1037acc120b%3A0x133471c5b9890ee5!2z2YXYrNmF2Lkg2KfZhNis2LLYqNix2Kkg2YPZitixINin2YTYt9io2Yo!5e0!3m2!1sar!2seg!4v1783178785468!5m2!1sar!2seg'
  },
  {
    id: "2",
    slug: "tweq",
    title: { ar: "مجمع سند الجزيرة فرع طويق", en: "Sanad Aljazeera - Tuwaiq Branch" },
    desc: {
      ar: "رعاية متقدمة   على يد أخصائيين يتمتعون بخبرة دولية، وباستخدام تقنيات تشخيصية حديثة وخطط علاجية تتمحور حول المريض.",
      en: "Advanced care delivered by specialists with international experience, using modern diagnostic technologies and patient-centered treatment plans.",
    },
    logo: "/branches/pages/tweq.jpeg",
    doctors: 10,
    address: {
      ar: "شارع خديجة بنت خويلد، أمام القرية الشعبية",
      en: "Khadijah bint Khuwaylid Street, opposite Al Qariah Al Shaabiya",
    },
    location: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3628.1568057331287!2d46.580284075362044!3d24.58378407811085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDM1JzAxLjYiTiA0NsKwMzQnNTguMyJF!5e0!3m2!1sen!2seg!4v1783178414958!5m2!1sen!2seg'
  },
  {
    id: "3",
    slug: "khayal",
    title: { ar: "مجمع دار الخيال الطبي", en: "Dar Al Khayal Medical Center" },
    desc: {
      ar: "رعاية متقدمة   على يد أخصائيين يتمتعون بخبرة دولية، وباستخدام تقنيات تشخيصية حديثة وخطط علاجية تتمحور حول المريض.",
      en: "Advanced care delivered by specialists with international experience, using modern diagnostic technologies and patient-centered treatment plans.",
    },
    logo: "/branches/pages/khayal.jpeg",
    doctors: 8,
    address: { ar: "طويق، شارع خديجة بنت خويلد", en: "Tuwaiq, Khadijah bint Khuwaylid Street" },
    location: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3628.2607342403053!2d46.54438397536189!3d24.58019637811336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDM0JzQ4LjciTiA0NsKwMzInNDkuMSJF!5e0!3m2!1sen!2seg!4v1783178657254!5m2!1sen!2seg'
  },
  {
    id: "4",
    slug: "hoda",
    title: { ar: "مجمع دار الهدا الطبي", en: "Dar Al Hoda Medical Center" },
    desc: {
      ar: "رعاية متقدمة   على يد أخصائيين يتمتعون بخبرة دولية، وباستخدام تقنيات تشخيصية حديثة وخطط علاجية تتمحور حول المريض.",
      en: "Advanced care delivered by specialists with international experience, using modern diagnostic technologies and patient-centered treatment plans.",
    },
    logo: "/branches/pages/hoda.jpeg",
    doctors: 3,
    address: { ar: "حي طويق، شارع بلال بن رباح", en: "Tuwaiq District, Bilal bin Rabah Street" },
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.118019090726!2d46.567173399999994!3d24.585122899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f19a44c021647%3A0x45da4f842e337a88!2z2YXYrNmF2Lkg2K_Yp9ixINin2YTZh9iv2KfYoSDZhNi32Kgg2YjYqtmC2YjZitmFINin2YTYp9iz2YbYp9mG!5e0!3m2!1sen!2seg!4v1783178746436!5m2!1sen!2seg'
  },
  {
    id: "5",
    slug: "mahdya",
    title: { ar: "مجمع سند الجزيرة فرع المهدية", en: "Sanad Aljazeera - Al Mahdiyah Branch" },
    desc: {
      ar: "رعاية متقدمة   على يد أخصائيين يتمتعون بخبرة دولية، وباستخدام تقنيات تشخيصية حديثة وخطط علاجية تتمحور حول المريض.",
      en: "Advanced care delivered by specialists with international experience, using modern diagnostic technologies and patient-centered treatment plans.",
    },
    logo: "/branches/pages/mahdya.jpeg",
    doctors: 5,
    address: { ar: "شارع تقي الدين", en: "Taqi Al Din Street" },
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.099288896348!2d46.5224044!3d24.6547105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1f8b044d182d%3A0xa69f981c49107343!2z2YXYrNmF2Lkg2LnZitin2K_Yp9iqINiz2YbYryDYp9mE2KzYstmK2LHYqSDYp9mE2LfYqNmK!5e0!3m2!1sen!2seg!4v1783178718485!5m2!1sen!2seg'
  },
  {
    id: "6",
    slug: "lbn",
    title: { ar: "مجمع سند الجزيرة فرع لبن", en: "Sanad Aljazeera - Laban Branch" },
    desc: {
      ar: "رعاية متقدمة   على يد أخصائيين يتمتعون بخبرة دولية، وباستخدام تقنيات تشخيصية حديثة وخطط علاجية تتمحور حول المريض.",
      en: "Advanced care delivered by specialists with international experience, using modern diagnostic technologies and patient-centered treatment plans.",
    },
    logo: "/branches/pages/lbn.jpeg",
    doctors: 6,
    address: { ar: "حي لبن شارع عسير", en: "Laban neighborhood, Asir Street" },
    location: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3627.0748994759865!2d46.5330276753632!3d24.62110327808628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDM3JzE2LjAiTiA0NsKwMzInMDguMiJF!5e0!3m2!1sen!2seg!4v1783178687747!5m2!1sen!2seg'
  },
];

const servicesText = {
  ar: [
    " العيادات الطبية.",
    " الأسنان",
    " الجلدية والتجميل.",
    " المختبر ",
    "الخدمات المساندة.",
    " الأشعه",
  ],
  en: [
    "Medical Clinics",
    "Dental",
    "Dermatology & Cosmetics",
    "Laboratory",
    "Support Services",
    "Radiology",
  ],
};

const aboutFeaturesText = {
  ar: ["التشخيص المتقدم", "جراحة القلب", "التصوير بالرنين المغناطيسي للقلب", "الرعاية الطارئة"],
  en: ["Advanced Diagnostics", "Cardiac Surgery", "Cardiac MRI Imaging", "Emergency Care"],
};

const whyChooseUsText = {
  ar: [
    "أطباء قلب ذوو خبرة",
    "معدات حديثة",
    "قبول التأمين",
    "خدمات طوارئ على مدار الساعة",
    "سرعة تحديد المواعيد",
    "تشخيصات متطورة",
  ],
  en: [
    "Experienced Cardiologists",
    "Modern Equipment",
    "Insurance Accepted",
    "24/7 Emergency Services",
    "Fast Appointment Scheduling",
    "Advanced Diagnostics",
  ],
};

const uiText = {
  ar: {
    heroTitle: "عناية",
    heroTitleHighlight: "مميزة باحدث الاساليب الطبية",
    bookAppointment: "راسلنا واتساب",
    ourLocation: "موقعنا",
    stats: { specialists: "متخصصون", patients: "مرضى", satisfaction: "إشباع" },
    aboutTitle: "عن الفرع",
    aboutP1: "يوفر فرعنا رعاية شاملة باستخدام تقنيات تشخيصية وعلاجية متطورة.",
    aboutP2: "نركز على الوقاية وإعادة التأهيل على المدى الطويل.",
    servicesTitle: "العلاجات والخدمات",
    whyChooseTitle: "لماذا تختارنا",
    facilitiesTitle: "مرافق عالمية المستوى",
    facilitiesDesc: "مُجهَّز بأحدث التقنيات للتشخيص والعلاج الدقيق.",
    faqTitle: "الأسئلة الشائعة",
    faqSubtitle: "اعثر على إجابات للأسئلة الأكثر شيوعاً حول قسم أمراض القلب لدينا.",
    faq: [
      {
        q: "ما هي الحالات التي تعالجها؟",
        a: "نقوم بتشخيص وعلاج مجموعة واسعة من أمراض القلب والأوعية الدموية، بما في ذلك مرض الشريان التاجي، وفشل القلب، واضطرابات نظم القلب، وارتفاع ضغط الدم، وعيوب القلب الخلقية، وأمراض صمامات القلب.",
      },
      {
        q: "هل تقبلون التأمين؟",
        a: "نعم، نحن نتعاون مع معظم شركات التأمين الكبرى. يرجى التواصل مع فريق الدعم لدينا أو الاطلاع على قسم التأمين للحصول على قائمة كاملة بالخطط المقبولة.",
      },
      {
        q: "كيف أحجز موعداً؟",
        a: "يمكنك حجز موعد عبر الإنترنت من خلال نظام الحجز لدينا، أو عن طريق الاتصال بمكتب الاستقبال، أو بزيارة المستشفى مباشرةً.",
      },
      {
        q: "هل يمكنني الحصول على استشارة عبر الإنترنت؟",
        a: "نعم، يقدم العديد من المتخصصين لدينا استشارات عبر الطب الاتصالي لزيارات المتابعة وبعض التقييمات الطبية المحددة.",
      },
    ],
    ctaTitle: "هل تحتاج إلى استشارة طبية؟",
    ctaSubtitle: "احجز موعدك مع أخصائيينا اليوم.",
    ctaButton: "راسلنا واتساب",
    mapTitle: "موقعنا",
    mapTitleFooter: "موقعنا",
  },
  en: {
    heroTitle: "Distinguished",
    heroTitleHighlight: "Care with the Latest Medical Methods",
    bookAppointment: "Book Appointment",
    ourLocation: "Our Location",
    stats: { specialists: "Specialists", patients: "Patients", satisfaction: "Satisfaction" },
    aboutTitle: "About the Branch",
    aboutP1: "Our branch provides comprehensive care using advanced diagnostic and treatment technologies.",
    aboutP2: "We focus on prevention and long-term rehabilitation.",
    servicesTitle: "Treatments & Services",
    whyChooseTitle: "Why Choose Us",
    facilitiesTitle: "World-Class Facilities",
    facilitiesDesc: "Equipped with the latest technologies for precise diagnosis and treatment.",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Find answers to the most common questions about our cardiology department.",
    faq: [
      {
        q: "What conditions do you treat?",
        a: "We diagnose and treat a wide range of cardiovascular diseases, including coronary artery disease, heart failure, arrhythmias, high blood pressure, congenital heart defects, and heart valve diseases.",
      },
      {
        q: "Do you accept insurance?",
        a: "Yes, we work with most major insurance providers. Please contact our support team or check the insurance section for a full list of accepted plans.",
      },
      {
        q: "How do I book an appointment?",
        a: "You can book an appointment online through our booking system, by calling the reception desk, or by visiting the hospital directly.",
      },
      {
        q: "Can I get an online consultation?",
        a: "Yes, many of our specialists offer telemedicine consultations for follow-up visits and certain specific medical evaluations.",
      },
    ],
    ctaTitle: "Need a Medical Consultation?",
    ctaSubtitle: "Book your appointment with our specialists today.",
    ctaButton: "Book Appointment",
    mapTitle: "Our Location",
    mapTitleFooter: "Our Location",
  },
};

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { slug, locale: rawLocale } = await params;
  const locale: Lang = rawLocale === "en" ? "en" : "ar";
  const isRTL = locale === "ar";

  const branch = branches.find((p) => p.slug == slug);
  const t = uiText[locale];
  const services = servicesText[locale];
  const aboutFeatures = aboutFeaturesText[locale];
  const whyChooseUs = whyChooseUsText[locale];

  const doctors = Array.from({ length: branch?.doctors || 0 }, () => "");

  return (
    <div className="bg-slate-50" dir={isRTL ? "rtl" : "ltr"}>
      {/* HERO */}

      <section className="relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="bg-blue-100 text-primary px-4 py-2 rounded-full text-sm font-medium">
                {branch?.title[locale]}
              </span>

              <h1 className=" lg:text-6xl text-4xl font-bold text-primary2 mt-6 leading-tight">
                {t.heroTitle}
                <span className="text-primary block">
                  {t.heroTitleHighlight}
                </span>
              </h1>

              <p className="mt-6 text-lg text-slate-600 leading-8"></p>

              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="tel:+966500000000"
                  className="bg-primary text-white px-8 py-4 rounded-xl font-medium flex items-center justify-center"
                >
                  {t.bookAppointment}
                </a>

                <a
                  href="#location"
                  className="border px-8 py-4 rounded-xl font-medium flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"

                >
                  {t.ourLocation}
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <h3 className="font-bold text-3xl text-primary">15+</h3>
                  <p className="text-slate-500">{t.stats.specialists}</p>
                </div>

                <div>
                  <h3 className="font-bold text-3xl text-primary">20K+</h3>
                  <p className="text-slate-500">{t.stats.patients}</p>
                </div>

                <div>
                  <h3 className="font-bold text-3xl text-primary">98%</h3>
                  <p className="text-slate-500">{t.stats.satisfaction}</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-blue-100 rounded-[40px] p-6">
                <BranchHeroSlider cover={branch?.logo || ""} />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl text-primary2 font-bold mb-6">{t.aboutTitle}</h2>

            <p className="text-slate-600 leading-8">
              {t.aboutP1}
            </p>

            <p className="text-slate-600 leading-8 mt-4">
              {t.aboutP2}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {aboutFeatures.map((item) => (
              <div key={item} className="bg-white p-6 rounded-2xl shadow-sm">
                <Heart className="text-primary mb-4" />
                <h3 className="font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-primary2 font-bold text-center mb-12">
            {t.servicesTitle}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service}
                className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition"
              >
                <ShieldPlus className="text-primary mb-4" />

                <h3 className="font-semibold">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTORS */}

      <DoctorsSection doctors={doctors} params={branch?.slug} />

      {/* WHY CHOOSE */}

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl text-primary2 font-bold mb-8">
                {t.whyChooseTitle}
              </h2>

              <div className="space-y-6">
                {whyChooseUs.map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <CheckCircle2 className="text-green-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl p-10">
              <Building2 className="h-12 w-12 text-primary" />

              <h3 className="font-bold text-primary2 text-2xl mt-6">
                {t.facilitiesTitle}
              </h3>

              <p className="text-slate-600 mt-4 leading-8">
                {t.facilitiesDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <TestimonialsSection />
      {/* FAQ */}

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary2">
              {t.faqTitle}
            </h2>

            <p className="mt-4 text-slate-600">
              {t.faqSubtitle}
            </p>
          </div>

          <div className="bg-white rounded-[32px] border border-slate-100 shadow-lg overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              {t.faq.map((item, index) => (
                <AccordionItem
                  key={item.q}
                  value={`item-${index + 1}`}
                  className="border-b last:border-b-0 px-2 "
                >
                  <AccordionTrigger className="px-6 text-left text-lg font-semibold hover:no-underline">
                    <span className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
                      {item.q}
                    </span>
                  </AccordionTrigger>

                  <AccordionContent className="px-6 text-slate-600 leading-7">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="container mx-auto px-4 pb-20">
        <div className="bg-primary rounded-[40px] p-12 text-white text-center">
          <h2 className="md:text-5xl text-3xl font-bold">
            {t.ctaTitle}
          </h2>

          <p className="mt-4 text-blue-100 text-lg">
            {t.ctaSubtitle}
          </p>

          <button className="bg-white text-primary px-10 py-4 rounded-xl mt-8 font-semibold">
            {t.ctaButton}
          </button>
        </div>
      </section>

      {/* Google Map */}
      <section id="location" className="pb-24 my-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl text-primary2 font-bold">{t.mapTitleFooter}</h2>
            <p className="mt-4 text-lg font-semibold" style={{ color: "#dc3433" }}>
              {branch?.address[locale]}
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <iframe
              className="h-[450px] w-full border-0"
              src={branch?.location}
              title="Google Map"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}
