"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

function BranchHero({ branch }: any) {
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const imageVariant: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      x: 80,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Decorations */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary2/10 blur-3xl"
      />

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span
              variants={item}
              className="inline-block bg-blue-100 text-primary px-4 py-2 rounded-full text-sm font-medium"
            >
              {branch?.title}
            </motion.span>

            <motion.h1
              variants={item}
              className="lg:text-6xl text-4xl font-bold text-primary2 mt-6 leading-tight"
            >
              عناية
              <span className="text-primary block">
                مميزة باحدث الاساليب الطبية
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 text-lg text-slate-600 leading-8"
            >
              {branch?.description}
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4 mt-8">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-4 rounded-xl font-medium shadow-lg"
              >
                حجز موعد
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{ scale: 0.95 }}
                className="border border-primary text-primary px-8 py-4 rounded-xl font-medium"
              >
                التواصل مع الفرع
              </motion.button>
            </motion.div>

            <motion.div
              variants={container}
              className="grid grid-cols-3 gap-6 mt-12"
            >
              {[
                { number: "15+", text: "متخصصون" },
                { number: "20K+", text: "مرضى" },
                { number: "98%", text: "رضا" },
              ].map((stat) => (
                <motion.div
                  key={stat.text}
                  variants={item}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                  }}
                  className="rounded-2xl bg-slate-50 p-5 text-center shadow-sm"
                >
                  <h3 className="font-bold text-3xl text-primary">
                    {stat.number}
                  </h3>

                  <p className="text-slate-500 mt-2">{stat.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="bg-blue-100 rounded-[40px] p-6 shadow-2xl"
            >
              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.4,
                }}
              >
                <Image
                  src={branch?.logo || ""}
                  alt=""
                  width={700}
                  height={700}
                  className="rounded-3xl object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              animate={{
                y: [0, -8, 0],
              }}
              className="absolute -left-6 bottom-10 bg-white rounded-2xl shadow-xl p-5"
            >
              <div className="text-primary font-bold text-2xl">⭐ 4.9</div>

              <p className="text-slate-500 text-sm">تقييم المرضى</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default BranchHero;
