"use client";
import Image from "next/image";
import image2 from "@/public/images/persons-4.png";
import {
  Building2,
  HeartPulse,
  Stethoscope,
  Activity,
  Microscope,
  BedDouble,
} from "lucide-react";
import { motion } from "framer-motion";

const facilities = [
  {
    icon: Building2,
    title: "Advanced Infrastructure",
    description: "Cutting-edge medical equipment and modern facilities",
  },
  {
    icon: HeartPulse,
    title: "Critical Care Units",
    description: "Specialized ICU and CCU with 24/7 monitoring",
  },
  {
    icon: Microscope,
    title: "Diagnostic Center",
    description: "Latest diagnostic and imaging technologies",
  },
  {
    icon: Stethoscope,
    title: "Specialty Departments",
    description: "Expert care across medical specialties",
  },
  {
    icon: BedDouble,
    title: "Private Suites",
    description: "Luxurious rooms for comfortable recovery",
  },
  {
    icon: Activity,
    title: "Rehabilitation Center",
    description: "Modern equipment for physical therapy and rehabilitation",
  },
];

const MedicalFacilities = () => {
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
    <section className="py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container mx-auto px-6"
      >
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full">
              <Image
                src={image2}
                alt="Advanced Medical Equipment"
                className="rounded-2xl shadow-xl object-cover"
                width={400}
                quality={100}
                placeholder="blur"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"
              />
            </div>
          </motion.div>
          <motion.div variants={containerVariants} className="lg:w-1/2">
            <motion.h2
              variants={itemVariants}
              className={` text-4xl font-bold text-headingColor mb-8`}
            >
              State-of-the-Art Medical Facilities
            </motion.h2>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {facilities.map((facility, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <facility.icon className="w-10 h-10 text-lightGreen mb-4" />
                  <h3 className="text-xl text-headingColor font-semibold mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-pText">{facility.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default MedicalFacilities;
