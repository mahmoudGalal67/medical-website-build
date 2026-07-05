"use client";

import { motion } from "framer-motion";
import DoctorCard from "./DoctorCard";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function DoctorsSection({
  doctors,
  params,
}: {
  doctors: any[];
  params?: string;
}) {
  console.log("params", params);
  return (
    <section
      className="w-full min-h-screen py-16 px-4 bg-linear-to-br from-primary via-primary to-primary2"
      id="doctors"
    >
 <motion.div
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mb-14 flex flex-col items-center"
>

  <h2 className="text-center text-3xl font-extrabold text-primary2 md:text-5xl">
    قابل <span className="text-primary2">أطبائنا الخبراء</span>
  </h2>

<span className="my-5 h-1 w-16 rounded-full bg-primary2" />
  <p className="mt-1 max-w-2xl text-center text-base leading-8 text-white md:text-lg">
    نخبة من الاستشاريين والأخصائيين يقدمون رعاية طبية متكاملة بأعلى معايير الجودة
    والاحترافية.
  </p>

  <div className="mt-5 flex items-center gap-2">
    <span className="h-2 w-2 rounded-full bg-primary2" />
    <span className="h-2 w-10 rounded-full bg-primary2/40" />
    <span className="h-2 w-2 rounded-full bg-primary2" />
  </div>
</motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: "-100px",
        }}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} i={index} params={params} />
        ))}
      </motion.div>
    </section>
  );
}
