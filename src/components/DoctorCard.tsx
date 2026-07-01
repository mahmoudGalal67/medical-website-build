import Image from "next/image";
import { motion } from "framer-motion";

export default function DoctorCard({
  i,
  params,
}: {
  i: number;
  params?: string;
}) {
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
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -10,
        transition: { duration: 0.25 },
      }}
      className="group overflow-hidden rounded-3xl shadow-xl bg-gradient-to-r from-primary2 to-primary"
    >
      <div className="overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.45 }}
        >
          <Image
            src={`/doctors/${params}/${i + 1}.jpeg`}
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
