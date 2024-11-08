"use client";
import { motion } from "framer-motion";

export default function ServicesIntro() {
  const stats = [
    { value: "20+", label: "Years of Excellence" },
    { value: "100k+", label: "Patients Served" },
    { value: "500+", label: "Healthcare Professionals" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-4xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl font-bold mb-6 text-headingColor"
      >
        Transforming Healthcare Through Innovation
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-lg text-pText leading-relaxed"
      >
        For over two decades, we have been at the forefront of healthcare
        innovation, dedicated to improving patient outcomes and transforming the
        healthcare experience. Our commitment to excellence, coupled with
        cutting-edge technology and compassionate care, has established us as a
        leading healthcare provider in the region.
      </motion.p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-lg shadow-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 * (index + 1) }}
              className="text-4xl font-bold text-lightGreen mb-2"
            >
              {stat.value}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 * (index + 1) }}
              className="text-pText"
            >
              {stat.label}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
