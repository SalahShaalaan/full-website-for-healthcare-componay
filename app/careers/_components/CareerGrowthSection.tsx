"use client";
import Image from "next/image";
import career3 from "@/public/images/career-3.png";
import { motion } from "framer-motion";
import { BookOpen, Users, Target, Globe } from "lucide-react";

const CareerGrowthSection = () => {
  const opportunities = [
    {
      icon: BookOpen,
      title: "Professional Development",
      description: "Access to continuous learning programs and certifications",
    },
    {
      icon: Users,
      title: "Leadership Programs",
      description: "Structured pathways to develop your leadership skills",
    },
    {
      icon: Target,
      title: "Mentorship",
      description: "Learn from experienced healthcare professionals",
    },
    {
      icon: Globe,
      title: "Global Exposure",
      description: "Opportunities to work on international projects",
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
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
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div variants={containerVariants} className="lg:w-1/2">
            <motion.h2
              variants={itemVariants}
              className={` text-3xl font-bold mb-8`}
            >
              Grow Your Career With Us
            </motion.h2>
            <motion.div variants={containerVariants} className="space-y-6">
              {opportunities.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="group bg-white p-6 rounded-xl border-l-4 border-lightGreen hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                      <item.icon className="w-6 h-6 text-lightGreen" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="lg:w-1/2"
          >
            <Image
              src={career3}
              alt="Career growth"
              className="rounded-lg shadow-xl"
              width={600}
              height={400}
              quality={100}
              placeholder="blur"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CareerGrowthSection;
