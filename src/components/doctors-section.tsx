"use client";

import Image from "next/image";

import { motion } from "framer-motion";

interface Doctor {
  id: number;
  name: string;
  title: string;
  specialty: string;
  clinic: string;
  image: string;
}

const doctors: Doctor[] = Array.from({ length: 18 }, () => ({} as Doctor));

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const easeCurve: [number, number, number, number] = [0.22, 1, 0.36, 1];



const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  transition: {
  duration: 0.6,
  ease: easeCurve,
}
  },
};

function DoctorCard({ doctor, i }: { doctor: Doctor; i: number }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -10,
        transition: { duration: 0.25 },
      }}
      className="group overflow-hidden rounded-3xl shadow-xl bg-white"
    >
      <div className="overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.45 }}
        >
          <Image
            src={`/doctors/main/${i + 1}.jpeg`}
            alt={`Doctor ${i + 1}`}
            width={400}
            height={600}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function DoctorsSection() {
  return (
    <section
      className="w-full min-h-screen py-16 px-4"
      style={{ background: "#A6DAE3" }}
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
    <DoctorCard key={index} doctor={doctor} i={index} />
  ))}
</motion.div>
    </section>
  );
}

