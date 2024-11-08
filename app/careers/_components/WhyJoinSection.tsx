"use client";
import Image from "next/image";
import career2 from "@/public/images/career-2.png";
import umberella from "@/public/icons/umberlla.png";
import global from "@/public/icons/global.png";
import target from "@/public/icons/target.png";
import fast from "@/public/icons/fast.png";
import { motion } from "framer-motion";

const WhyJoinSection = () => {
  const benefits = [
    {
      icon: umberella,
      title: "Comprehensive Benefits",
      description:
        "Extensive healthcare coverage and insurance options for you and your family",
    },
    {
      icon: global,
      title: "Global Opportunities",
      description:
        "Work with international healthcare experts and gain global exposure",
    },
    {
      icon: target,
      title: "Career Growth",
      description:
        "Clear career progression paths and continuous learning opportunities",
    },
    {
      icon: fast,
      title: "Fast-Track Development",
      description: "Accelerated growth programs for high-potential employees",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="py-16"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={itemVariants}
          className={` text-4xl font-bold text-center mb-12`}
        >
          Why Join Us?
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={career2}
              alt="Team collaboration"
              className="rounded-lg"
              width={500}
              height={400}
              quality={100}
              placeholder="blur"
            />
          </motion.div>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 mb-4 bg-blue-50 rounded-full p-3 flex items-center justify-center"
                >
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </motion.div>
                <motion.h3
                  variants={itemVariants}
                  className="font-semibold mb-2 text-headingColor"
                >
                  {benefit.title}
                </motion.h3>
                <motion.p
                  variants={itemVariants}
                  className="text-pText text-sm"
                >
                  {benefit.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyJoinSection;
