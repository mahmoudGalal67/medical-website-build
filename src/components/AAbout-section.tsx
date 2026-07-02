"use client";

import { useIntersection } from "@/hooks/use-intersection";
import { CheckCircle, ArrowRight } from "lucide-react";

const highlights = [
  "تقنيات ومعدات طب الأسنان المتطورة",
  "أطباء متخصصون حاصلون على شهادة البورد",
  "بيئة معقمة ومريحة",
];

export default function AboutSection() {
  const { ref, isVisible } = useIntersection(0.15);

  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-900 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#dc3433]/30">
              <img
                src="/branches/pages/tweq.jpeg"
                alt="Doctor"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2d004d]/30 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 md:-right-6 -right-3 bg-[#dc3433] text-white rounded-2xl p-5 shadow-xl shadow-[#dc3433]/30">
              <p className="text-3xl font-bold text-white">30+</p>
              <p className="text-xs text-white/80 mt-0.5">
                سنوات من التميز
              </p>
            </div>

            <div className="absolute -top-6 md:-left-6 -left-3 bg-[#dc3433] text-white rounded-2xl p-4 shadow-xl shadow-[#dc3433]/30">
              <p className="text-2xl font-bold">3K+</p>
              <p className="text-xs font-medium mt-0.5">
                خدم المرضى
              </p>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-900 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <span className="text-[#dc3433] text-sm font-semibold uppercase tracking-widest">
              معلومات عنا
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#2d004d] mt-3 mb-5 leading-tight">
              شريكك الموثوق في صحة الأسنان والجمال
            </h2>

            <p className="text-gray-500 leading-relaxed mb-6">
              تُعد عيادة "ستد الجزيرة" مركزاً رائداً في مجال طب الأسنان
              والتجميل، وتلتزم بتقديم رعاية استثنائية باستخدام أحدث التقنيات
              الطبية. ويعمل فريقنا من المتخصصين ذوي الخبرة بتفانٍ لضمان حصول كل
              مريض على علاج مخصص وعالي الجودة، وذلك في أجواء تتسم بالدفء
              والمهنية.
            </p>

            <p className="text-gray-500 leading-relaxed mb-8">
              بدءاً من الفحوصات الروتينية ووصولاً إلى الإجراءات التجميلية
              المعقدة، نقدم مجموعة شاملة من الخدمات المصممة خصيصاً لتلبية
              احتياجاتك الفريدة، ومساعدتك في الحصول على الابتسامة والثقة اللتين
              تستحقهما.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((h) => (
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
              className="inline-flex flex-row-reverse items-center gap-2 bg-[#dc3433] hover:bg-[#c52d2c] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[#dc3433]/30"
            >
              تعرّف على فريقنا
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
