"use client";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import DoctorCard from "./DoctorCard";

type Lang = "ar" | "en";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const uiText = {
  ar: {
    headingStart: "قابل",
    headingHighlight: "أطبائنا الخبراء",
    description:
      "نخبة من الاستشاريين والأخصائيين يقدمون رعاية طبية متكاملة بأعلى معايير الجودة والاحترافية",
  },
  en: {
    headingStart: "Meet",
    headingHighlight: "Our Expert Doctors",
    description:
      "A team of top consultants and specialists providing comprehensive medical care with the highest standards of quality and professionalism.",
  },
};

export default function DoctorsSection({
  doctors,
  params,
}: {
  doctors: any[];
  params?: string;
}) {
  const routeParams = useParams();
  const locale: Lang = routeParams.locale === "en" ? "en" : "ar";
  const t = uiText[locale];

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
          {t.headingStart} <span className="text-primary2">{t.headingHighlight}</span>
        </h2>
        <span className="my-5 h-1 w-16 rounded-full bg-primary2" />
        <p className="mt-1 max-w-2xl text-center text-base leading-8 text-white md:text-lg">
          {t.description}
        </p>
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
          <DoctorCard key={index} i={index} params={params} locale={locale} />
        ))}
      </motion.div>
    </section>
  );
}
