"use client";
import Image from "next/image";
import home from "@/public/icons/home.png";
import car from "@/public/icons/car.png";
import life from "@/public/icons/heart.png";
import business from "@/public/icons/business.png";
import health from "@/public/icons/health.png";
import travel from "@/public/icons/plane.png";
import retire from "@/public/icons/retire.png";
import pet from "@/public/icons/pet.png";
import water from "@/public/icons/water.png";
import { motion } from "framer-motion";

const BenefitsSection = () => {
  const benefits = [
    { icon: health, title: "Health Insurance" },
    { icon: life, title: "Life Insurance" },
    { icon: car, title: "Company Car" },
    { icon: home, title: "Housing Allowance" },
    { icon: business, title: "Business Travel" },
    { icon: travel, title: "Travel Insurance" },
    { icon: retire, title: "Retirement Plan" },
    { icon: pet, title: "Pet Insurance" },
    { icon: water, title: "Wellness Program" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
      className="py-24"
    >
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className={` text-4xl font-bold text-headingColor mb-6 leading-tight`}
          >
            Comprehensive Benefits Package
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-pText leading-relaxed"
          >
            We offer a competitive benefits package designed to support your
            professional and personal well-being.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="flex flex-col items-center p-8 bg-white rounded-xl
                border border-gray-100 hover:border-lightGreen 
                shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0.5, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-16 h-16 mb-6 p-3 bg-blue-50 rounded-full"
              >
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </motion.div>
              <motion.h3
                variants={itemVariants}
                className="text-xl font-semibold text-headingColor mb-2"
              >
                {benefit.title}
              </motion.h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BenefitsSection;
