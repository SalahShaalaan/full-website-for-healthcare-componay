"use client";
import { motion } from "framer-motion";

export default function OurValues() {
  const values = [
    {
      title: "Excellence",
      description:
        "We pursue the highest standards in healthcare delivery and patient care.",
      icon: "🌟",
    },
    {
      title: "Compassion",
      description: "We treat every patient with empathy, dignity, and respect.",
      icon: "❤️",
    },
    {
      title: "Innovation",
      description:
        "We continuously embrace new technologies and methods to improve care.",
      icon: "💡",
    },
    {
      title: "Integrity",
      description:
        "We maintain the highest ethical standards in all our practices.",
      icon: "🤝",
    },
    {
      title: "Collaboration",
      description: "We work together as a team to achieve the best outcomes.",
      icon: "👥",
    },
    {
      title: "Accountability",
      description: "We take responsibility for our actions and results.",
      icon: "✓",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="text-center"
    >
      <motion.h2
        variants={itemVariants}
        className={` text-3xl font-bold mb-6 headingColor`}
      >
        Our Core Values
      </motion.h2>
      <motion.p
        variants={itemVariants}
        className="text-lg text-pText mb-12 max-w-3xl mx-auto leading-relaxed"
      >
        Our values guide every decision we make and every action we take in
        serving our patients and community.
      </motion.p>
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-auto-fit-350 gap-8"
      >
        {values.map((value) => (
          <motion.div
            key={value.title}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="p-6 bg-white rounded-lg shadow-sm"
          >
            <motion.div
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              {value.icon}
            </motion.div>
            <motion.h3
              variants={itemVariants}
              className="text-xl font-semibold mb-3 text-headingColor"
            >
              {value.title}
            </motion.h3>
            <motion.p variants={itemVariants} className="text-pText">
              {value.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
