"use client";
import { Phone, Mail, MapPin } from "lucide-react";
import { useContactForm } from "./useContactForm";
import { AppointmentForm } from "./AppointmentForm";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: Phone,
    title: "Emergency Contact",
    lines: ["Emergency: 911", "Hospital: (555) 123-4567"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["appointments@hospital.com", "info@hospital.com"],
  },
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["123 Medical Center Blvd", "Healthcare City, ST 12345"],
  },
];

const ContactSection = () => {
  const { formData, isLoading, submitStatus, handleInputChange, handleSubmit } =
    useContactForm();

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
    <section className="py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container mx-auto px-6"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-headingColor mb-6"
            >
              Schedule Your Visit
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-pText">
              Let us help you plan your visit to our medical facility
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all"
              >
                <motion.div
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                >
                  <info.icon className="w-12 h-12 text-lightGreen mx-auto mb-6" />
                </motion.div>
                <motion.h3
                  variants={itemVariants}
                  className="text-2xl font-semibold mb-4"
                >
                  {info.title}
                </motion.h3>
                {info.lines.map((line, i) => (
                  <motion.p
                    key={i}
                    variants={itemVariants}
                    className="text-pText"
                  >
                    {line}
                  </motion.p>
                ))}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AppointmentForm
              formData={formData}
              isLoading={isLoading}
              submitStatus={submitStatus}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
