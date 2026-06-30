"use client";

import { useIntersection } from "@/hooks/use-intersection";
import Image from "next/image";
import Link from "next/link";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronLeft,
} from "lucide-react";

import {
  FaInstagram,
  FaTiktok,
  FaSnapchat
} from "react-icons/fa6";
const footerLinks = {
  الخدمات: [
    "عيادة الأسنان",
    "الجلدية والتجميل",
    "النساء والولادة",
    "الليزر",
  ],

  "روابط سريعة": [
    "من نحن",
    "الأطباء",
    "الفروع",
    "العروض",
    "احجز موعد",
    "تواصل معنا",
  ],
};

export default function FooterSection() {
  const { ref, isVisible } = useIntersection(0.1);

  return (
    <footer
      id="contact"
      dir="rtl"
      className="relative overflow-hidden bg-[#171717]"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#7A1F3D]/15 via-transparent to-[#367F8B]/10" />

      <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-[#7A1F3D]/10 blur-[150px]" />

      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#367F8B]/10 blur-[150px]" />

      {/* CTA */}

      <div className="relative z-10 px-4 pt-14">

        <div
          ref={ref}
          className={`mx-auto max-w-7xl rounded-[36px] bg-gradient-to-r from-[#7A1F3D] to-[#367F8B] p-10 shadow-2xl transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div className="text-center lg:text-right">

              <h2 className="text-3xl font-extrabold text-white">
                احجز موعدك الآن مع نخبة الأطباء
              </h2>

              <p className="mt-3 max-w-xl text-white/90 leading-8">
                نوفر رعاية صحية متكاملة بأحدث التقنيات الطبية داخل جميع
                فروع مجموعة سند الجزيرة الطبية.
              </p>

            </div>

            <a
              href="tel:+966500000000"
              className="rounded-full bg-white px-8 py-4 font-bold text-[#7A1F3D] transition-all duration-300 hover:scale-105 hover:bg-[#7A1F3D] hover:text-white"
            >
              اتصل بنا الآن
            </a>

          </div>
        </div>

      </div>

      {/* Main Footer */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo */}

          <div>

            {/* استبدلي اللوجو بالمسار الصحيح */}
            <Image
              src="/Logo.png"
              alt="مجموعة سند الجزيرة الطبية"
              width={180}
              height={70}
            />

            <p className="mt-6 leading-8 text-gray-300">
              مجموعة سند الجزيرة الطبية تقدم خدمات صحية متكاملة بأحدث
              التقنيات وعلى يد نخبة من الأطباء والاستشاريين، لنمنحكم
              تجربة علاجية آمنة ومتميزة.
            </p>

            {/* Social */}

            <div className="mt-8 flex gap-3">

              <a
                href="https://www.instagram.com/sanad_aljazeera"
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#7A1F3D]"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://www.tiktok.com/@sanad_aljazeera"
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#7A1F3D]"
              >
                <FaTiktok size={18} />
              </a>

              <a
                href="https://snapchat.com/t/kGMdQePz"
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#7A1F3D]"
              >
                <FaSnapchat size={18} />
              </a>

            </div>

          </div>

          {/* Links */}

          {Object.entries(footerLinks).map(([title, links]) => (

            <div key={title}>

              <h3 className="mb-6 text-xl font-bold text-white">
                {title}
              </h3>

              <ul className="space-y-4">

                {links.map((item) => (

                  <li key={item}>

                    <Link
                      href="#"
                      className="group flex items-center gap-2 text-gray-300 transition hover:text-white"
                    >
                      <ChevronLeft className="h-4 w-4 text-[#B3476B] transition group-hover:-translate-x-1" />

                      {item}

                    </Link>

                  </li>

                ))}

              </ul>

            </div>

          ))}          {/* Contact */}

          <div>
            <h3 className="mb-6 text-xl font-bold text-white">
              معلومات التواصل
            </h3>

            <ul className="space-y-5">

              <li className="flex items-start gap-3 text-gray-300">
                <MapPin
                  className="mt-1 text-[#B3476B]"
                  size={18}
                />

                <span className="leading-7">
                  المملكة العربية السعودية
                  <br />
                  الرياض
                </span>
              </li>

              <li className="flex items-center gap-3 text-gray-300">
                <Phone
                  className="text-[#B3476B]"
                  size={18}
                />

                <a
                  href="tel:+966500000000"
                  className="transition hover:text-white"
                >
                  +966 50 000 0000
                </a>
              </li>

              <li className="flex items-center gap-3 text-gray-300">
                <Mail
                  className="text-[#B3476B]"
                  size={18}
                />

                <a
                  href="mailto:info@sanadaljazeera.com"
                  className="transition hover:text-white"
                >
                  info@sanadaljazeera.com
                </a>
              </li>

              <li className="flex items-start gap-3 text-gray-300">
                <Clock
                  className="mt-1 text-[#B3476B]"
                  size={18}
                />

                <span className="leading-7">
                  السبت - الخميس
                  <br />
                  9:00 صباحًا - 10:00 مساءً
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
            © 2026 مجموعة سند الجزيرة الطبية. جميع الحقوق محفوظة.
          </p>

          <div className="flex items-center gap-6">

            <a
              href="#"
              className="text-sm text-gray-400 transition hover:text-white"
            >
              سياسة الخصوصية
            </a>

            <a
              href="#"
              className="text-sm text-gray-400 transition hover:text-white"
            >
              الشروط والأحكام
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}
