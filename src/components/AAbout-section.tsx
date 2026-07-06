"use client";

import { useEffect, useState } from "react";
import { useIntersection } from "@/hooks/use-intersection";
import { useParams } from "next/navigation";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";

type Lang = "ar" | "en";

const images = [
  "/branches/pages/care.jpeg",
  "/branches/pages/hoda.jpeg",
  "/branches/pages/khayal.jpeg",
  "/branches/pages/lbn.jpeg",
  "/branches/pages/mahdya.jpeg",
  "/branches/pages/tweq.jpeg",
];

const content = {
  ar: {
    kicker: "معلومات عنا",
    title: "شريكك الموثوق في صحة الأسنان والجمال",
    p1:
      'تُعد عيادة "ستد الجزيرة" مركزاً رائداً في مجال طب الأسنان والتجميل، وتلتزم بتقديم رعاية استثنائية باستخدام أحدث التقنيات الطبية. ويعمل فريقنا من المتخصصين ذوي الخبرة بتفانٍ لضمان حصول كل مريض على علاج مخصص وعالي الجودة، وذلك في أجواء تتسم بالدفء والمهنية.',
    p2:
      "بدءاً من الفحوصات الروتينية ووصولاً إلى الإجراءات التجميلية المعقدة، نقدم مجموعة شاملة من الخدمات المصممة خصيصاً لتلبية احتياجاتك الفريدة، ومساعدتك في الحصول على الابتسامة والثقة اللتين تستحقهما.",
    highlights: [
      "تقنيات ومعدات طب الأسنان المتطورة",
      "أطباء متخصصون حاصلون على شهادة البورد",
      "بيئة معقمة ومريحة",
    ],
    cta: "تعرّف على فريقنا",
    badge1Number: "30+",
    badge1Text: "سنوات من التميز",
    badge2Number: "3K+",
    badge2Text: "خدم المرضى",
    imageAlt: "طبيب",
  },
  en: {
    kicker: "About Us",
    title: "Your Trusted Partner in Dental Health & Beauty",
    p1:
      "Sanad Aljazeera Clinic is a leading center in dentistry and cosmetics, committed to providing exceptional care using the latest medical technologies. Our team of experienced specialists works diligently to ensure every patient receives personalized, high-quality treatment, in a warm and professional atmosphere.",
    p2:
      "From routine checkups to complex cosmetic procedures, we offer a comprehensive range of services tailored to your unique needs, helping you achieve the smile and confidence you deserve.",
    highlights: [
      "Advanced dental technologies and equipment",
      "Board-certified specialist doctors",
      "Sterile and comfortable environment",
    ],
    cta: "Meet Our Team",
    badge1Number: "30+",
    badge1Text: "Years of Excellence",
    badge2Number: "3K+",
    badge2Text: "Patients Served",
    imageAlt: "Doctor",
  },
};

export default function AboutSection() {
  const { ref, isVisible } = useIntersection(0.15);
  const params = useParams();
  const locale: Lang = params.locale === "en" ? "en" : "ar";
  const isRTL = locale === "ar";
  const t = content[locale];

  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // تبدأ الصورة تختفي
      setFade(false);

      // بعد انتهاء الـ fade يتم تغيير الصورة ثم إظهارها
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-900 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : isRTL
                ? "opacity-0 -translate-x-12"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#dc3433]/30 h-[480px]">
              <Image
                src={images[currentImage]}
                alt={t.imageAlt}
                fill
                priority
                className={`object-cover transition-opacity duration-500 ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#2d004d]/30 to-transparent" />
            </div>

            {/* Badge 1 */}
            <div
              className={`absolute -bottom-6 bg-[#dc3433] text-white rounded-2xl p-5 shadow-xl shadow-[#dc3433]/30 ${
                isRTL ? "md:-right-6 -right-3" : "md:-left-6 -left-3"
              }`}
            >
              <p className="text-3xl font-bold">{t.badge1Number}</p>
              <p className="text-xs text-white/80 mt-0.5">
                {t.badge1Text}
              </p>
            </div>

            {/* Badge 2 */}
            <div
              className={`absolute -top-6 bg-[#dc3433] text-white rounded-2xl p-4 shadow-xl shadow-[#dc3433]/30 ${
                isRTL ? "md:-left-6 -left-3" : "md:-right-6 -right-3"
              }`}
            >
              <p className="text-2xl font-bold">{t.badge2Number}</p>
              <p className="text-xs font-medium mt-0.5">
                {t.badge2Text}
              </p>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-900 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : isRTL
                ? "opacity-0 translate-x-12"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <span className="text-[#dc3433] text-sm font-semibold uppercase tracking-widest">
              {t.kicker}
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-primary2 mt-3 mb-5 leading-tight">
              {t.title}
            </h2>

            <p className="text-gray-500 leading-relaxed mb-6">{t.p1}</p>

            <p className="text-gray-500 leading-relaxed mb-8">{t.p2}</p>

            <ul className="space-y-3 mb-10">
              {t.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-3 text-gray-700 text-sm font-medium"
                >
                  <CheckCircle
                    size={18}
                    className="text-[#dc3433] flex-shrink-0"
                  />
                  {h}
                </li>
              ))}
            </ul>

            <a
              href="#doctors"
              className={`inline-flex items-center gap-2 bg-[#dc3433] hover:bg-[#c52d2c] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[#dc3433]/30 ${
                isRTL ? "flex-row-reverse" : ""
              }`}
            >
              {t.cta}
              {isRTL ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
