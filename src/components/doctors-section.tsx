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




export default function DoctorsSection({doctors, params}: {doctors: any[], params?: string}) {
  console.log('params', params)
  return (
    <section
      className="w-full min-h-screen py-16 px-4 bg-linear-to-br from-primary via-primary to-primary2"
      id="doctors"
    >
<motion.h2
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="text-3xl text-primary2 text-center mb-12"
>
  قابل أطبائنا الخبراء
</motion.h2>

     <motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
>
  {doctors.map((doctor, index) => (
    <DoctorCard
     key={index} i={index} params={params} />
  ))}
</motion.div>
    </section>
  );
}

