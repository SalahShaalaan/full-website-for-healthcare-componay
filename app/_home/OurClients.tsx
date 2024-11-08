"use client";
import case1 from "@/public/images/case-1.png";
import case2 from "@/public/images/case-2.png";
import case3 from "@/public/images/case-3.png";
import sectionBg from "@/public/our-clients-bg.png";
import Image from "next/image";
import Button from "../_components/Button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function OurClients() {
  const cases = [
    {
      img: case1,
      title: "Medical Center Transformation",
      text: "Revolutionized patient care management system for a leading medical center, reducing wait times by 60% and improving patient satisfaction scores.",
      category: "Healthcare Technology",
    },
    {
      img: case2,
      title: "Digital Health Innovation",
      text: "Implemented AI-driven diagnostic tools for a network of clinics, enabling faster and more accurate patient assessments.",
      category: "Digital Innovation",
    },
    {
      img: case3,
      title: "Healthcare Analytics Platform",
      text: "Developed comprehensive analytics dashboard for hospital networks, improving resource allocation and patient care coordination.",
      category: "Data Analytics",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative py-16 px-6">
      <Image
        src={sectionBg}
        fill
        alt="background image"
        className="absolute w-full h-full object-cover -z-50"
        quality={100}
      />
      <div className="px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="text-lightGreen font-medium tracking-[.2rem] mb-2"
          >
            Success Stories
          </motion.span>
          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold tracking-wider text-headingColor mb-4"
          >
            TRANSFORMING HEALTHCARE DELIVERY
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-pText mb-8"
          >
            Discover how we&apos;ve helped healthcare organizations optimize
            their operations, enhance patient care, and drive innovation through
            technology.
          </motion.p>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button>
              <Link href="/contact-us">Partner With Us</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-auto-fit-250 gap-8"
        >
          {cases.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative group bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-64">
                <Image
                  src={item.img}
                  quality={100}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-lightGreen text-white px-3 py-1 rounded-full text-sm">
                  {item.category}
                </div>
              </div>
              <motion.div
                className="p-6"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-headingColor mb-2">
                  {item.title}
                </h3>
                <p className="text-pText text-sm">{item.text}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-4 text-lightGreen font-medium flex items-center gap-2"
                >
                  <Link href="/services">
                    Learn More <span>→</span>
                  </Link>
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
