"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { motion, type Variants } from "framer-motion";

type Lang = "ar" | "en";

type Branch = {
  img: string;
  title: { ar: string; en: string };
  href: string;
  mobileOrder: string;
  order: string;
};

const branches: Branch[] = [
  {
    img: "sanad.png",
    title: { ar: "مجمع سند الجزيرة - فرع طويق", en: "Sanad Aljazeera - Tuwaiq Branch" },
    href: "branches/tweq",
    mobileOrder: "order-1",
    order: "md:order-1",
  },
  {
    img: "sanad.png",
    title: { ar: "مجمع سند الجزيرة - فرع المهدية", en: "Sanad Aljazeera - Al Mahdiyah Branch" },
    href: "branches/mahdya",
    mobileOrder: "order-3",
    order: "md:order-2",
  },
  {
    img: "sanad.png",
    title: { ar: "مجمع سند الجزيرة - فرع لبن", en: "Sanad Aljazeera - Laban Branch" },
    href: "branches/lbn",
    mobileOrder: "order-5",
    order: "md:order-3",
  },
  {
    img: "carelogo.png",
    title: { ar: "مجمع الجزيرة كير الطبي", en: "Aljazeera Care Medical Complex" },
    href: "branches/carelogo",
    mobileOrder: "order-2",
    order: "md:order-4",
  },
  {
    img: "hoda.png",
    title: { ar: "مجمع دار الهدا الطبي", en: "Dar Al Hoda Medical Center" },
    href: "branches/hoda",
    mobileOrder: "order-4",
    order: "md:order-5",
  },
  {
    img: "khayalLogo.png",
    title: { ar: "مجمع دار الخيال الطبي", en: "Dar Al Khayal Medical Center" },
    href: "branches/khayalLogo",
    mobileOrder: "order-6",
    order: "md:order-6",
  },
];

const uiText = {
  ar: {
    badge: "رعاية طبية متميزة",
    heading: "مجموعة سند الجزيرة الطبية",
    description:
      "صحتك وصحة عائلتك في ايد أمينة في مجموعة سند الجزيرة الطبية رعاية متكاملة بوجود نخبة من الاطباء في ستة فروع متخصصة بالاضافة الي قسم الاشعة والمختبر",
    callButton: "اتصل بنا الان",
    whatsappButton: "حجز موعد واتساب",
  },
  en: {
    badge: "Distinguished Medical Care",
    heading: "Sanad Aljazeera Medical Group",
    description:
      "Your health and your family's health are in trustworthy hands at Sanad Aljazeera Medical Group. Comprehensive care with top doctors across six specialized branches, plus radiology and laboratory departments.",
    callButton: "Call Us Now",
    whatsappButton: "Book via WhatsApp",
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.8,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const params = useParams();
  const locale: Lang = params.locale === "en" ? "en" : "ar";
  const isRTL = locale === "ar";
  const t = uiText[locale];

  const images = [
    "/branches/pages/tweq.jpeg",
    "/gallary/gallary1.jpeg",
    "/gallary/gallary2.jpeg",
    "/gallary/gallary3.jpeg",
    "/gallary/gallary4.jpeg",
    "/gallary/gallary5.jpeg",
    "/gallary/gallary6.jpeg",
    "/gallary/gallary7.jpeg"
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToBranches = () => {
    document.getElementById("branches")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="hero"
      dir={isRTL ? "rtl" : "ltr"}
      className="relative py-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
              current === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              className="w-full h-full object-cover scale-100 animate-slow-zoom"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-primary/70" />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-[#c9a227]/20 opacity-60 hidden lg:block" />
      <div className="absolute top-32 right-32 w-40 h-40 rounded-full border border-[#c9a227]/10 hidden lg:block" />
      <div className="absolute bottom-32 left-16 w-32 h-32 rounded-full bg-[#c9a227]/10 blur-xl hidden lg:block" />

      {/* Content */}
      <div className={`relative text-center z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 ${isRTL ? "lg:text-left" : "lg:text-right"}`}>
        <div
          className={`transition-all duration-1000 flex justify-center ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span
            className="inline-block bg-[#dc3433]/20 border border-[#dc3433]/40 text-[#dc3433] text-md font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
            style={{ transitionDelay: "200ms" }}
          >
            {t.badge}
          </span>
        </div>

        <h1
          className={`text-4xl sm:text-5xl text-center lg:text-5xl font-bold text-primary2 leading-tight mb-6 transition-all duration-1000 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {t.heading}

          <br />
          <span className="text-white/90 text-2xl sm:text-4xl lg:text-4xl font-light"></span>
        </h1>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={loaded ? "visible" : "hidden"}
          className="mt-16 grid grid-cols-2  md:grid-cols-3 xl:grid-cols-6 gap-5"
        >
          {branches.map((branch) => (
            <motion.div
              key={branch.title.ar}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              className={`${branch.mobileOrder} ${branch.order} bg-white border border-white/20 rounded-2xl p-3 flex flex-col items-center justify-center shadow-xl hover:border-[#dc3433]/60 transition-all`}
            >
              <img
                src={`/branches/${branch.img}`}
                alt={branch.title[locale]}
                className="w-32 h-32 md:w-36 md:h-36 object-contain mb-4"
              />

              <span className="text-primary font-semibold text-center">
                {branch.title[locale]}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <p
          className={`text-white/75 text-center sm:text-md lg:px-[20%] mx-auto lg:mx-0 my-10 leading-relaxed transition-all duration-1000 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {t.description}
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="tel:+966500000000"
            className="inline-flex cursor-pointer items-center justify-center gap-2 bg-[#dc3433] hover:bg-[#c52d2c] text-white font-semibold px-12 py-3.5 rounded-lg transition-all duration-300 shadow-lg shadow-[#dc3433]/30 hover:shadow-[#dc3433]/50 hover:-translate-y-0.5"
          >
            {t.callButton}
          </a>

          <a
            href="https://wa.me/966500000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:bg-[#dc3433] text-white hover:text-white font-semibold px-12 py-3.5 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            {t.whatsappButton}
          </a>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="w-full h-[180px] md:block hidden"
        >
          <path
            fill="#47A9B8"
            d="M0,0 C300,170 1140,170 1440,0 L1440,180 L0,180 Z"
          />
        </svg>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToBranches}
        className="absolute bottom-8 left-1/2 cursor-pointer -translate-x-1/2 text-white/60 hover:text-[#dc3433] transition-colors duration-200 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
