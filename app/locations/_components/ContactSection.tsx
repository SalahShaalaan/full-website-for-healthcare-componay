"use client";
import Button from "@/app/_components/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Ambulance, Clock, HeartPulse } from "lucide-react";

export default function ContactSection() {
  const emergencyServices = [
    {
      icon: Phone,
      title: "24/7 Emergency Line",
      description: "Immediate response for urgent medical needs",
    },
    {
      icon: Ambulance,
      title: "Rapid Response Team",
      description: "Advanced life support ambulance service",
    },
    {
      icon: Clock,
      title: "Quick Care Center",
      description: "Fast-track treatment for minor emergencies",
    },
    {
      icon: HeartPulse,
      title: "Critical Care Unit",
      description: "Specialized emergency medical care",
    },
  ];

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
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-lightGreen my-14 p-10"
    >
      <motion.h2
        variants={itemVariants}
        className="text-3xl font-bold text-gray-100 mb-6 text-center"
      >
        Emergency Medical Services
      </motion.h2>

      <motion.div variants={containerVariants} className="max-w-4xl mx-auto">
        <motion.p
          variants={itemVariants}
          className="text-center text-gray-200 text-lg mb-8"
        >
          Our medical professionals are available 24/7 to provide immediate,
          high-quality healthcare services when you need them most.
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
        >
          {emergencyServices.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center"
            >
              <service.icon className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-200 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="flex flex-col sm:flex-row justify-center gap-4 items-center"
        >
          <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
            <Button>
              <Link href="/consultation" className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Schedule an Appointment
              </Link>
            </Button>
          </motion.div>
          <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
            <Button>
              <Link href="contact-us" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Emergency Contact
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
