import {
  Sparkles,
  Sun,
  Award,
  Anchor,
  Activity,
  Layers,
  Scissors,
  Baby,
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
   Smile-arc coordinates (signature hero element).
   Precomputed points along a quadratic Bézier curve
   P0(50,150) → P1(400,300) → P2(750,150) inside a 800x320 viewBox.
   Values below are (left%, top%) for each service badge.
------------------------------------------------------------------- */
const arcPoints = [
  { left: 13, top: 54 },
  { left: 31, top: 66 },
  { left: 50, top: 70 },
  { left: 69, top: 66 },
  { left: 87, top: 54 },
];

const heroServices = [
  { icon: Sparkles, ar: "تنظيف", en: "Cleaning" },
  { icon: Sun, ar: "تبييض", en: "Whitening" },
  { icon: Award, ar: "تقويم", en: "Braces" },
  { icon: Anchor, ar: "زراعة", en: "Implants" },
  { icon: Activity, ar: "علاج عصب", en: "Root Canal" },
];

const services = [
  {
    icon: Sparkles,
    title: { ar: "تنظيف وتلميع الأسنان", en: "Cleaning & Polishing" },
    desc: {
      ar: "إزالة الجير والترسبات والحفاظ على صحة اللثة بجلسات دورية.",
      en: "Removing tartar and buildup while maintaining healthy gums with regular sessions.",
    },
  },
  {
    icon: Layers,
    title: { ar: "حشوات تجميلية", en: "Cosmetic Fillings" },
    desc: {
      ar: "حشوات بلون الأسنان الطبيعي لعلاج التسوس دون التأثير على المظهر.",
      en: "Tooth-colored fillings that treat decay without affecting your smile's look.",
    },
  },
  {
    icon: Award,
    title: { ar: "تقويم الأسنان", en: "Orthodontics" },
    desc: {
      ar: "تقويم معدني أو شفاف حسب حالة الأسنان والفكين لكل عمر.",
      en: "Metal or clear aligners tailored to your teeth and jaw at any age.",
    },
  },
  {
    icon: Sun,
    title: { ar: "تبييض الأسنان", en: "Teeth Whitening" },
    desc: {
      ar: "جلسات تبييض آمنة بإشراف طبي لنتيجة أكثر إشراقًا.",
      en: "Safe, doctor-supervised whitening sessions for a brighter smile.",
    },
  },
  {
    icon: Anchor,
    title: { ar: "زراعة الأسنان", en: "Dental Implants" },
    desc: {
      ar: "تعويض الأسنان المفقودة بزرعات ثابتة تشبه الأسنان الطبيعية.",
      en: "Replacing missing teeth with fixed implants that feel natural.",
    },
  },
  {
    icon: Activity,
    title: { ar: "علاج العصب", en: "Root Canal Treatment" },
    desc: {
      ar: "علاج التهابات لُب السن للحفاظ على السن بدل خلعه.",
      en: "Treating infected pulp to save the tooth instead of extracting it.",
    },
  },
  {
    icon: Scissors,
    title: { ar: "الجراحة والخلع", en: "Oral Surgery & Extraction" },
    desc: {
      ar: "خلع جراحي وضرس العقل بأحدث وسائل التخدير الموضعي.",
      en: "Surgical extractions and wisdom teeth with the latest local anesthesia methods.",
    },
  },
  {
    icon: Baby,
    title: { ar: "أسنان الأطفال", en: "Pediatric Dentistry" },
    desc: {
      ar: "رعاية لطيفة ومتخصصة لأسنان الأطفال في بيئة مريحة لهم.",
      en: "Gentle, specialized care for children's teeth in a kid-friendly environment.",
    },
  },
];

const journey = [
  {
    ar: { title: "الكشف والتصوير", desc: "فحص شامل وأشعة رقمية لتحديد الحالة بدقة." },
    en: { title: "Exam & Imaging", desc: "A full check-up with digital X-rays to assess your case precisely." },
  },
  {
    ar: { title: "خطة علاج مخصصة", desc: "نشرح لك الخيارات والتكلفة قبل البدء في أي إجراء." },
    en: { title: "Personalized Plan", desc: "We walk you through options and cost before any procedure begins." },
  },
  {
    ar: { title: "الجلسة العلاجية", desc: "تنفيذ العلاج بأحدث الأجهزة وأعلى معايير التعقيم." },
    en: { title: "Treatment Session", desc: "Treatment delivered with modern equipment and strict sterilization." },
  },
  {
    ar: { title: "المتابعة الدورية", desc: "زيارات متابعة للاطمئنان على نتيجة العلاج طويل المدى." },
    en: { title: "Ongoing Follow-up", desc: "Regular check-ins to ensure lasting results." },
  },
];

const whyChooseUs = {
  ar: [
    "أطباء أسنان معتمدون بخبرة محلية ودولية",
    "أجهزة تصوير رقمية وتعقيم بمعايير عالمية",
    "خطة علاج وتكلفة واضحة قبل أي إجراء",
    "بيئة مريحة تناسب الأطفال والكبار",
  ],
  en: [
    "Certified dentists with local and international experience",
    "Digital imaging and world-standard sterilization",
    "Clear treatment plan and cost before any procedure",
    "A comfortable environment for kids and adults alike",
  ],
};

const team = [
  { role: { ar: "استشاري تقويم الأسنان", en: "Orthodontics Consultant" } },
  { role: { ar: "أخصائية علاج عصب وحشوات تجميلية", en: "Endodontics & Cosmetic Fillings Specialist" } },
  { role: { ar: "أخصائي جراحة الفم والزراعة", en: "Oral Surgery & Implants Specialist" } },
  { role: { ar: "أخصائية طب أسنان الأطفال", en: "Pediatric Dentistry Specialist" } },
];

const faq = [
      {
        q: { ar: "أسباب حساسية الأسنان.", en: "Causes of tooth sensitivity." },
        a: {
          ar: "تحدث غالبًا بسبب تآكل طبقة المينا، تراجع اللثة، تسوس الأسنان، أو استخدام معجون أسنان خشن. تقليل الأطعمة الحمضية واستخدام معجون مخصص للأسنان الحساسة يساعد في تخفيفها.",
          en: "It's often caused by enamel erosion, gum recession, cavities, or using an abrasive toothpaste. Reducing acidic foods and using sensitivity toothpaste helps relieve it.",
        },
      },
      {
        q: { ar: "متى تحتاج إلى سحب العصب؟", en: "When do you need a root canal?" },
        a: {
          ar: "يُلجأ لسحب العصب عند وصول التسوس أو الالتهاب إلى لُب السن مسببًا ألمًا شديدًا مستمرًا أو تورمًا وخراجًا. يهدف العلاج للحفاظ على السن بدل خلعه بعد إزالة الأنسجة الملتهبة.",
          en: "A root canal is needed when decay or infection reaches the tooth's pulp, causing severe persistent pain, swelling, or an abscess. It aims to save the tooth instead of extracting it, after removing the inflamed tissue.",
        },
      },
      {
        q: { ar: "طرق الوقاية من تسوس الأسنان.", en: "Ways to prevent tooth decay." },
        a: {
          ar: "تشمل تنظيف الأسنان مرتين يوميًا بمعجون يحتوي على الفلورايد، استخدام الخيط الطبي، تقليل السكريات، والمتابعة الدورية مع طبيب الأسنان كل 6 أشهر للكشف المبكر.",
          en: "These include brushing twice daily with fluoride toothpaste, flossing, reducing sugar intake, and regular dental check-ups every 6 months for early detection.",
        },
      },
      {
        q: { ar: "تقويم الأسنان: الأنواع والمميزات.", en: "Braces: types and features." },
        a: {
          ar: "تتنوع بين التقويم المعدني التقليدي الأكثر فعالية للحالات المعقدة، والتقويم الشفاف الأقل ظهورًا والمناسب للحالات البسيطة والمتوسطة. يحدد طبيب التقويم النوع الأنسب حسب حالة الأسنان والفكين.",
          en: "Options range from traditional metal braces, most effective for complex cases, to clear aligners, less visible and suited to mild-to-moderate cases. An orthodontist determines the best fit based on the teeth and jaw condition.",
        },
      },
];

const uiText = {
  ar: {
    eyebrow: "عيادة الأسنان",
    heroTitle: "ابتسامتك",
    heroTitleHighlight: "تستاهل عناية",
    heroDesc:
      "من التنظيف الدوري إلى زراعة الأسنان، فريقنا يقدم رعاية أسنان متكاملة لكل أفراد العائلة في بيئة مريحة ومجهزة بأحدث التقنيات.",
    bookNow: "احجز الكشف الآن",
    whatsapp: "تواصل واتساب",
    servicesTitle: "خدماتنا",
    servicesSubtitle: "كل ما تحتاجه لعناية كاملة بابتسامتك تحت سقف واحد",
    journeyTitle: "رحلتك معنا",
    journeySubtitle: "أربع خطوات بسيطة من أول زيارة لحد نتيجة تفتخر بيها",
    whyTitle: "ليه تختار عيادتنا",
    teamTitle: "فريق أسنان متكامل",
    teamSubtitle: "تخصصات مختلفة تحت إشراف واحد لتغطية كل احتياجاتك",
    faqTitle: "أسئلة شائعة عن الأسنان",
    ctaTitle: "جاهز لابتسامة جديدة؟",
    ctaSubtitle: "احجز موعدك الأول واحنا هنكمل الباقي.",
    ctaButton: "احجز موعدك",
  },
  en: {
    eyebrow: "Dental Clinic",
    heroTitle: "Your smile",
    heroTitleHighlight: "deserves care",
    heroDesc:
      "From routine cleanings to dental implants, our team provides complete dental care for the whole family in a comfortable, modern setting.",
    bookNow: "Book a Check-up",
    whatsapp: "Chat on WhatsApp",
    servicesTitle: "Our Services",
    servicesSubtitle: "Everything your smile needs, under one roof",
    journeyTitle: "Your Journey With Us",
    journeySubtitle: "Four simple steps from your first visit to a result you're proud of",
    whyTitle: "Why Choose Our Clinic",
    teamTitle: "A Complete Dental Team",
    teamSubtitle: "Different specialties under one roof to cover all your needs",
    faqTitle: "Common Dental Questions",
    ctaTitle: "Ready for a New Smile?",
    ctaSubtitle: "Book your first visit and we'll take care of the rest.",
    ctaButton: "Book Your Visit",
  },
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function DentalPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale: Lang = rawLocale === "en" ? "en" : "ar";
  const isRTL = locale === "ar";
  const t = uiText[locale];

  return (
    <div className="bg-white" dir={isRTL ? "rtl" : "ltr"}>
      {/* HERO — signature smile-arc */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F0FBF9] to-white pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-[#dc3433]/10 text-[#dc3433] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              {t.eyebrow}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary2 leading-tight">
              {t.heroTitle}{" "}
              <span className="text-primary">{t.heroTitleHighlight}</span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-8 max-w-xl mx-auto">
              {t.heroDesc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="tel:+966500000000"
                className="inline-flex items-center justify-center gap-2 bg-[#dc3433] hover:bg-[#c52d2c] text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#dc3433]/30 hover:-translate-y-0.5"
              >
                <Phone size={18} />
                {t.bookNow}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary/30 hover:bg-primary hover:text-white hover:border-primary text-primary2 font-semibold px-10 py-4 rounded-xl transition-all duration-300"
              >
                {t.whatsapp}
              </a>
            </div>
          </div>

          {/* The smile-arc itself */}
          <div className="relative mt-16 mx-auto max-w-4xl h-[220px] sm:h-[280px]">
            <svg
              viewBox="0 0 800 320"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full"
            >
              <path
                d="M 50 150 Q 400 300 750 150"
                fill="none"
                stroke="#47A9B8"
                strokeOpacity="0.35"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>

            {heroServices.map((service, idx) => {
              const Icon = service.icon;
              const pos = arcPoints[idx];
              return (
                <div
                  key={service.ar}
                  className="absolute flex flex-col items-center gap-2 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${pos.left}%`, top: `${pos.top}%` }}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-lg shadow-slate-200 border border-slate-100 flex items-center justify-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                    <Icon size={24} className="text-[#dc3433]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-primary2 whitespace-nowrap">
                    {locale === "ar" ? service.ar : service.en}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-4xl font-bold text-primary2">{t.servicesTitle}</h2>
          <p className="mt-4 text-slate-600">{t.servicesSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title.ar}
                className={`group bg-white border border-slate-100 rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  idx % 2 === 0 ? "hover:-rotate-1" : "hover:rotate-1"
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#47A9B8]/10 flex items-center justify-center mb-5 group-hover:bg-[#dc3433]/10 transition-colors duration-300">
                  <Icon size={22} className="text-primary group-hover:text-[#dc3433] transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-primary2 text-lg mb-2">
                  {service.title[locale]}
                </h3>
                <p className="text-sm text-slate-600 leading-6">{service.desc[locale]}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* JOURNEY — real sequential steps */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-4xl font-bold text-primary2">{t.journeyTitle}</h2>
            <p className="mt-4 text-slate-600">{t.journeySubtitle}</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-primary/20" />
            {journey.map((step, idx) => (
              <div key={idx} className="relative text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center mx-auto mb-5 relative z-10">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-primary2 text-lg mb-2">
                  {step[locale].title}
                </h3>
                <p className="text-sm text-slate-600 leading-6">{step[locale].desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE + TEAM */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-primary2 mb-8">{t.whyTitle}</h2>
            <div className="space-y-6">
              {whyChooseUs[locale].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-primary2 mb-2">{t.teamTitle}</h2>
            <p className="text-slate-600 mb-8">{t.teamSubtitle}</p>
            <div className="grid grid-cols-2 gap-4">
              {team.map((member) => (
                <div
                  key={member.role.ar}
                  className="bg-slate-50 rounded-2xl p-5 border border-slate-100"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Sparkles size={18} className="text-primary" />
                  </div>
                  <p className="font-semibold text-primary2 text-sm leading-6">
                    {member.role[locale]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-primary2 text-center mb-12">
              {t.faqTitle}
            </h2>

            <div className="bg-white rounded-[32px] border border-slate-100 shadow-lg overflow-hidden">
              <Accordion type="single" collapsible className="w-full">
                {faq.map((item, index) => (
                  <AccordionItem
                    key={item.q.ar}
                    value={`dental-faq-${index}`}
                    className="border-b last:border-b-0 px-2"
                  >
                    <AccordionTrigger className="px-6 text-left text-base md:text-lg font-semibold hover:no-underline">
                      <span className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
                        {item.q[locale]}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 text-slate-600 leading-7">
                      {item.a[locale]}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
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
