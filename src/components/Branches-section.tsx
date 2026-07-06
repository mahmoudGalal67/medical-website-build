"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

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
    heading: "فروع مجموعة سند الجزيرة الطبية",
    subheading:
      "اختر أقرب فرع إليك وتمتع بخدمات طبية متكاملة بأحدث التقنيات وعلى يد نخبة من الأطباء والاستشاريين.",
    badge: "فرع",
  },
  en: {
    heading: "Sanad Aljazeera Medical Group Branches",
    subheading:
      "Choose the nearest branch to you and enjoy comprehensive medical services with the latest technologies and a team of top doctors and consultants.",
    badge: "Branch",
  },
};

export default function Branches() {
  const params = useParams();
  const locale: Lang = params.locale === "en" ? "en" : "ar";
  const isRTL = locale === "ar";
  const t = uiText[locale];

  return (
    <section className="relative overflow-hidden pt-20 py-24" id="branches">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-rose-50 via-white to-white" />

      <div className="absolute -top-40 left-0 -z-10 h-96 w-96 rounded-full bg-primary2/10 blur-[150px]" />

      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-primary2/10 blur-[150px]" />

      <div className="mx-auto max-w-8xl lg:px-4 px-2">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold text-primary2 [text-shadow:0_2px_8px_rgba(122,31,61,.15)]">
            {t.heading}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500 leading-8">
            {t.subheading}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-18 flex justify-center">
          <div className="grid grid-cols-2 lg:gap-7 gap-3 md:grid-cols-3 xl:grid-cols-6">
            {branches.map((branch, index) => (
              <motion.div
                key={branch.title.ar}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className={`${branch.mobileOrder} ${branch.order}`}
              >
                <Link
                  href={`/${locale}/${branch.href}`}
                  className="
                  group
                  relative
                  flex
                  h-[270px]
                  md:w-44
                  w-40
                  flex-col
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white/90
                  p-5
                  text-center
                  backdrop-blur
                  shadow-[0_8px_25px_rgba(0,0,0,.08)]
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:scale-105
                  hover:border-primary2
                  hover:shadow-[0_20px_45px_rgba(122,31,61,.18)]
                  "
                >
                  {/* Badge */}
                  <span
                    className={`absolute top-4 z-10 rounded-full bg-primary2 px-3 py-1 text-[11px] font-semibold text-white shadow ${
                      isRTL ? "right-4" : "left-4"
                    }`}
                  >
                    {t.badge}
                  </span>

                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary2/15 blur-3xl" />

                    <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#dc3433]/15 blur-3xl" />
                  </div>

                  {/* Image */}
                  <div
                    className="
                    relative
                    flex
                    h-32
                    items-center
                    justify-center
                    rounded-2xl
                    bg-slate-50
                    transition-all
                    duration-500
                    group-hover:bg-[#FAF4F6]
                  "
                  >
                    <Image
                      src={`/branches/${branch.img}`}
                      alt={branch.title[locale]}
                      width={160}
                      height={110}
                      className="
                        object-contain
                        transition-all
                        duration-500
                        group-hover:scale-110
                      "
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                    mt-5
                    flex-1
                    text-[15px]
                    font-bold
                    leading-6
                    text-slate-800
                    transition-all
                    duration-300
                    group-hover:text-primary2
                    "
                  >
                    {branch.title[locale]}
                  </h3>

                  {/* Animated Line */}
                  <div
                    className="
                    mx-auto
                    h-1
                    w-0
                    rounded-full
                    bg-gradient-to-r
                    from-primary2
                    via-primary2
                    to-[#B3476B]
                    transition-all
                    duration-500
                    group-hover:w-20
                    "
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
