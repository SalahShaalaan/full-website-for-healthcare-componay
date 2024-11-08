"use client";
import React from "react";
import {
  Stethoscope,
  Check,
  Clock,
  Users,
  Award,
  Shield,
  Activity,
} from "lucide-react";
import Button from "@/app/_components/Button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AmenitiesIntro() {
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

  const amenityFeatures = [
    {
      icon: <Stethoscope className="w-6 h-6 text-lightGreen" />,
      title: "Modern Medical Equipment",
      description:
        "Access to cutting-edge diagnostic and treatment technology for optimal patient care.",
      stats: "100+ Advanced Devices",
    },
    {
      icon: <Activity className="w-6 h-6 text-lightGreen" />,
      title: "Specialized Care Units",
      description:
        "Dedicated departments with specialized medical professionals for focused treatment.",
      stats: "15 Specialized Units",
    },
    {
      icon: <Users className="w-6 h-6 text-lightGreen" />,
      title: "Patient Comfort",
      description:
        "Thoughtfully designed spaces promoting healing and comfort during your stay.",
      stats: "200+ Patient Rooms",
    },
    {
      icon: <Clock className="w-6 h-6 text-lightGreen" />,
      title: "24/7 Emergency Care",
      description:
        "Round-the-clock emergency services with rapid response teams.",
      stats: "< 10min Response Time",
    },
    {
      icon: <Award className="w-6 h-6 text-lightGreen" />,
      title: "Expert Medical Staff",
      description:
        "Highly qualified healthcare professionals with extensive experience.",
      stats: "500+ Medical Staff",
    },
    {
      icon: <Shield className="w-6 h-6 text-lightGreen" />,
      title: "Advanced Security",
      description:
        "State-of-the-art security systems ensuring patient safety and privacy.",
      stats: "24/7 Monitoring",
    },
  ];

  const highlights = [
    "Joint Commission Accredited",
    "Award-winning Patient Care",
    "Latest Medical Technology",
    "Patient-Centered Approach",
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <span className="bg-mainGreen text-gray-200 text-sm font-medium px-4 py-1 rounded-full">
              Healthcare Excellence
            </span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className={` text-4xl md:text-5xl font-bold text-headingColor mb-6`}
          >
            World-Class Healthcare Amenities
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-pText max-w-3xl mx-auto leading-relaxed"
          >
            Experience exceptional care with our state-of-the-art facilities and
            comprehensive healthcare services, backed by leading medical
            professionals.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm"
              >
                <Check className="w-4 h-4 text-lightGreen mr-2" />
                <span className="text-sm font-medium text-gray-700">
                  {highlight}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-auto-fit-350 gap-8 mb-16"
        >
          {amenityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-pText mb-4">{feature.description}</p>
              <div className="pt-4 border-t border-gray-100">
                <span className="text-sm font-semibold text-lightGreen">
                  {feature.stats}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-mainGreen rounded-2xl p-12 shadow-xl"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-bold text-white mb-4"
          >
            Experience Our Facilities Firsthand
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Schedule a guided tour of our medical center and discover how
            we&apos;re revolutionizing patient care with cutting-edge technology
            and compassionate service.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button>
                <Link href="/consultation">Schedule a Tour</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button>
                <Link href="/contact-us">Contact Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
