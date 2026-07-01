"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Branch = {
  img: string;
  title: string;
  href: string;
  mobileOrder: string; 
  order: string;  
};

const branches: Branch[] = [
  {
    img: "sanad.png",
    title: "سند الجزيرة - فرع طويق",
    href: "/branches/tweq",
    mobileOrder: "order-1",
    order: "md:order-1",
  },
  {
    img: "sanad.png",
    title: "سند الجزيرة - فرع المهدية",
    href: "/branches/mahdya",
    mobileOrder: "order-3",
    order: "md:order-2",
  },
  {
    img: "sanad.png",
    title: "سند الجزيرة - فرع لبن",
    href: "/branches/lbn",
    mobileOrder: "order-5",
    order: "md:order-3",
  },
  {
    img: "carelogo.jpeg",
    title: "مجمع الجزيرة كير الطبي",
    href: "/branches/care",
    mobileOrder: "order-2",
    order: "md:order-4",
  },
  {
    img: "hoda.png",
    title: "دار الهدا الطبي",
    href: "/branches/hoda",
    mobileOrder: "order-4",
    order: "md:order-5",
  },
  {
    img: "khayalLogo.jpeg",
    title: "دار الخيال الطبي",
    href: "/branches/khayal",
    mobileOrder: "order-6",
    order: "md:order-6",
  },
];

export default function Branches() {
  return (
    <section className="relative overflow-hidden pt-20 py-24" id="branches">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-rose-50 via-white to-white" />

      <div className="absolute -top-40 left-0 -z-10 h-96 w-96 rounded-full bg-[#7A1F3D]/10 blur-[150px]" />

      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-[#B3476B]/10 blur-[150px]" />

      <div className="mx-auto max-w-8xl lg:px-4 px-2">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold text-[#7A1F3D] [text-shadow:0_2px_8px_rgba(122,31,61,.15)]">
            فروع مجموعة سند الجزيرة الطبية
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500 leading-8">
            اختر أقرب فرع إليك وتمتع بخدمات طبية متكاملة بأحدث التقنيات وعلى يد
            نخبة من الأطباء والاستشاريين.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-18 flex justify-center">
          <div className="grid grid-cols-2 lg:gap-7 gap-3 md:grid-cols-3 xl:grid-cols-6">
            {branches.map((branch, index) => (
              <motion.div
                key={branch.title}
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
                  href={branch.href}
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
                  hover:border-[#7A1F3D]
                  hover:shadow-[0_20px_45px_rgba(122,31,61,.18)]
                  "
                >
                  {/* Badge */}
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-[#7A1F3D] px-3 py-1 text-[11px] font-semibold text-white shadow">
                    فرع
                  </span>

                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#7A1F3D]/15 blur-3xl" />

                    <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#B3476B]/15 blur-3xl" />
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
                      alt={branch.title}
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
                    group-hover:text-[#7A1F3D]
                    "
                  >
                    {branch.title}
                  </h3>

                  {/* Animated Line */}
                  <div
                    className="
                    mx-auto
                    h-1
                    w-0
                    rounded-full
                    bg-gradient-to-r
                    from-[#7A1F3D]
                    via-[#8B1E3F]
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
