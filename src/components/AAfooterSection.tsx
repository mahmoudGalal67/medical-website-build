"use client";

import { useIntersection } from "@/hooks/use-intersection";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import { Phone, Mail, MapPin, Clock, ChevronLeft } from "lucide-react";

import { FaInstagram, FaTiktok, FaSnapchat } from "react-icons/fa6";

type Lang = "ar" | "en";

const content = {
  ar: {
    ctaTitle: "احجز موعدك الآن مع نخبة الأطباء",
    ctaDesc:
      "نوفر رعاية صحية متكاملة بأحدث التقنيات الطبية داخل جميع فروع مجموعة سند الجزيرة الطبية.",
    ctaButton: "اتصل بنا الآن",
    logoAlt: "مجموعة سند الجزيرة الطبية",
    aboutText:
      "مجموعة سند الجزيرة الطبية تقدم خدمات صحية متكاملة بأحدث التقنيات وعلى يد نخبة من الأطباء والاستشاريين، لنمنحكم تجربة علاجية آمنة ومتميزة.",
    servicesTitle: "الخدمات",
    services: ["عيادة الأسنان", "الجلدية والتجميل", "النساء والولادة", "الليزر"],
    quickLinksTitle: "روابط سريعة",
    links: [
      { name: "من نحن", href: "#about" },
      { name: "الأطباء", href: "#doctors" },
      { name: "الفروع", href: "#branches" },
      { name: "العروض", href: "#offers" },
      { name: "احجز موعد", href: "#contact" },
    ],
    contactTitle: "معلومات التواصل",
    address: (
      <>
        المملكة العربية السعودية
        <br />
        الرياض - حي طويق - شارع خديجة بنت خويلد بجوار القرية الشعبيه
      </>
    ),
    emergency: "طوارئ على مدار الساعة (24/7)",
    copyright: "© 2026 مجموعة سند الجزيرة الطبية. جميع الحقوق محفوظة.",
    privacyPolicy: "سياسة الخصوصية",
    termsAndConditions: "الشروط والأحكام",
  },
  en: {
    ctaTitle: "Book Your Appointment Now with Top Doctors",
    ctaDesc:
      "We provide comprehensive healthcare with the latest medical technologies across all branches of Sanad Aljazeera Medical Group.",
    ctaButton: "Call Us Now",
    logoAlt: "Sanad Aljazeera Medical Group",
    aboutText:
      "Sanad Aljazeera Medical Group provides comprehensive healthcare services with the latest technologies and a team of top doctors and consultants, giving you a safe and exceptional treatment experience.",
    servicesTitle: "Services",
    services: ["Dental Clinic", "Dermatology & Cosmetics", "Gynecology & Obstetrics", "Laser"],
    quickLinksTitle: "Quick Links",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Doctors", href: "#doctors" },
      { name: "Branches", href: "#branches" },
      { name: "Offers", href: "#offers" },
      { name: "Book Appointment", href: "#contact" },
    ],
    contactTitle: "Contact Information",
    address: (
      <>
        Kingdom of Saudi Arabia
        <br />
        Riyadh - Tuwaiq District - Khadijah bint Khuwaylid Street, next to Al Qariah Al Shaabiya
      </>
    ),
    emergency: "24/7 Emergency Services",
    copyright: "© 2026 Sanad Aljazeera Medical Group. All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsAndConditions: "Terms and Conditions",
  },
};

export default function FooterSection() {
  const { ref, isVisible } = useIntersection(0.1);
  const params = useParams();
  const locale: Lang = params.locale === "en" ? "en" : "ar";
  const isRTL = locale === "ar";
  const t = content[locale];

  return (
    <footer
      id="contact"
      dir={isRTL ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[#171717]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary2/15 via-transparent to-[#367F8B]/10" />
      <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-primary2/10 blur-[150px]" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#367F8B]/10 blur-[150px]" />

      {/* CTA */}
      <div className="relative z-10 px-4 pt-14">
        <div
          ref={ref}
          className={`mx-auto max-w-7xl rounded-[36px] bg-gradient-to-r from-primary2 to-primary p-10 shadow-2xl transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className={`text-center ${isRTL ? "lg:text-right" : "lg:text-left"}`}>
              <h2 className="text-3xl font-extrabold text-white">
                {t.ctaTitle}
              </h2>

              <p className="mt-3 max-w-xl leading-8 text-white/90">
                {t.ctaDesc}
              </p>
            </div>

            <a
              href="tel:+966500000000"
              className="rounded-full bg-white px-8 py-4 font-bold text-primary2 transition-all duration-300 hover:scale-105 hover:bg-primary2 hover:text-white"
            >
              {t.ctaButton}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <Image
              src="/logo.png"
              alt={t.logoAlt}
              width={180}
              height={70}
            />

            <p className="mt-6 leading-8 text-gray-300">
              {t.aboutText}
            </p>

            <div className="mt-8 flex gap-3">
              <a
                href="https://www.instagram.com/sanad_aljazeera"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary2"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://www.tiktok.com/@sanad_aljazeera"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary2"
              >
                <FaTiktok size={18} />
              </a>

              <a
                href="https://snapchat.com/t/kGMdQePz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary2"
              >
                <FaSnapchat size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white">{t.servicesTitle}</h3>

            <ul className="space-y-4">
              {t.services.map((item) => (
                <li key={item}>
                  <button className="group flex items-center gap-2 text-gray-300 transition hover:text-white">
                    <ChevronLeft className="h-4 w-4 text-primary2 transition group-hover:-translate-x-1 rtl:group-hover:translate-x-1 ltr:rotate-180" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white">{t.quickLinksTitle}</h3>

            <ul className="space-y-4">
              {t.links.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      const id = link.href.replace("#", "");
                      document.getElementById(id)?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                    className="group flex cursor-pointer items-center gap-2 text-gray-300 transition hover:text-white"
                  >
                    <ChevronLeft className="h-4 w-4 text-primary2 transition group-hover:-translate-x-1 rtl:group-hover:translate-x-1 ltr:rotate-180" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white">
              {t.contactTitle}
            </h3>

            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="mt-1 text-primary2" size={18} />
                <span className="leading-7">
                  {t.address}
                </span>
              </li>

              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="text-primary2" size={18} />
                <a href="tel:+966500000000" className="hover:text-white">
                  +966 50 000 0000
                </a>
              </li>

              <li className="flex items-center gap-3 text-gray-300">
                <Mail className="text-primary2" size={18} />
                <a
                  href="mailto:info@sanadaljazeera.com"
                  className="hover:text-white"
                >
                  info@sanadaljazeera.com
                </a>
              </li>

              <li className="flex items-start gap-3 text-gray-300">
                <Clock className="mt-1 text-primary2" size={18} />
                <span className="leading-7">
                  {t.emergency}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-center md:flex-row">
          <p className="text-sm text-gray-400">
            {t.copyright}
          </p>

          <div className="flex items-center gap-6">
            <Link
              href={`/${locale}/privacy`}
              className="text-sm text-gray-400 transition hover:text-white"
            >
              {t.privacyPolicy}
            </Link>

            <Link
              href={`/${locale}/privacy`}
              className="text-sm text-gray-400 transition hover:text-white"
            >
              {t.termsAndConditions}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
