"use client";
import Image from "next/image";
import image3 from "@/public/images/persons-5.png";
import { motion } from "framer-motion";

const comfortFeatures = [
  {
    title: "Luxury Private Rooms",
    description:
      "Spacious rooms with premium amenities, smart controls, and scenic views",
  },
  {
    title: "Gourmet Dining",
    description:
      "Restaurant-quality meals prepared by certified chefs with dietary customization",
  },
  {
    title: "Family Support",
    description:
      "Dedicated family lounges, overnight accommodations, and concierge services",
  },
  {
    title: "Wellness Areas",
    description:
      "Healing gardens, meditation rooms, and therapy spaces for holistic recovery",
  },
];
const PatientComfort = () => {
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
    <section className="py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container mx-auto px-6"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h2
            variants={itemVariants}
            className={` text-4xl font-bold text-headingColor mb-6`}
          >
            Premium Comfort & Care
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-pText max-w-3xl mx-auto"
          >
            Experience healthcare in an environment designed for optimal
            healing, where comfort meets clinical excellence.
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={containerVariants}
            className="order-2 lg:order-1"
          >
            <div className="space-y-8">
              {comfortFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <motion.h3
                    variants={itemVariants}
                    className="text-2xl font-bold mb-4 text-gray-900"
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p
                    variants={itemVariants}
                    className="text-gray-600 text-lg"
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <Image
              src={image3}
              alt="Patient Comfort Features"
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default PatientComfort;
