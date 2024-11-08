"use client";
import Image from "next/image";
import career1 from "@/public/images/career-1.png";
import { motion } from "framer-motion";

export default function CareersIntro() {
  const roles = ["Doctors", "Nurses", "Technicians", "Administrative Staff"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
      animate="visible"
      variants={containerVariants}
      className="py-24"
    >
      <div className="container mx-auto px-4">
        <motion.div variants={containerVariants} className="text-center mb-16">
          <motion.h1
            variants={itemVariants}
            className={` text-5xl font-bold text-headingColor mb-4`}
          >
            Join Our Growing Team
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-pText max-w-3xl mx-auto"
          >
            Shape the future of healthcare in Egypt
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div variants={containerVariants} className="lg:w-1/2">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className={` text-3xl font-bold text-lightGreen mb-6`}>
                Why Choose Us?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Professional Growth",
                    description:
                      "Continuous learning opportunities and career advancement paths",
                  },
                  {
                    title: "Work-Life Balance",
                    description:
                      "Flexible schedules and supportive work environment",
                  },
                  {
                    title: "Innovative Environment",
                    description: "Work with cutting-edge medical technologies",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-blue-100 p-3 rounded-full">
                      <svg
                        className="w-6 h-6 text-lightGreen"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">
                        {item.title}
                      </h3>
                      <p className="text-pText">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:w-1/2">
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={career1}
                  alt="Healthcare professionals"
                  className="rounded-2xl shadow-2xl"
                  width={600}
                  height={400}
                  quality={100}
                  priority
                  placeholder="blur"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-lightGreen text-white p-6 rounded-xl"
              >
                <p className="text-2xl font-bold">200+</p>
                <p className="text-sm">Open Positions</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={containerVariants} className="mt-20 text-center">
          <motion.p
            variants={itemVariants}
            className="text-2xl text-pText mb-8"
          >
            Join over 1,000+ healthcare professionals who are already part of
            our mission
          </motion.p>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-auto-fit-250 gap-8"
          >
            {roles.map((role) => (
              <motion.div
                key={role}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white px-6 py-3 rounded-full shadow-md text-lightGreen font-medium"
              >
                {role}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
