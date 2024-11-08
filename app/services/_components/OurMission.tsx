"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface OurMissionProps {
  image: StaticImageData;
}

export default function OurMission({ image }: OurMissionProps) {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <section className="grid grid-cols-auto-fit-250 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative h-[400px]"
      >
        <Image
          src={image}
          alt="Our Mission"
          fill
          className="object-cover rounded-lg"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={` text-3xl font-bold mb-6 text-headingColor`}
        >
          Our Mission
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={listVariants}
          className="space-y-4 text-pText"
        >
          <motion.p variants={itemVariants}>
            Our mission is to deliver exceptional healthcare services that
            enhance the quality of life for our patients and communities. We
            strive to:
          </motion.p>
          <motion.ul
            variants={listVariants}
            className="space-y-3 list-disc pl-6"
          >
            <motion.li
              variants={itemVariants}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Provide patient-centered care that prioritizes individual needs
              and outcomes
            </motion.li>
            <motion.li
              variants={itemVariants}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Embrace innovative medical technologies and treatments
            </motion.li>
            <motion.li
              variants={itemVariants}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Foster a collaborative healthcare environment
            </motion.li>
            <motion.li
              variants={itemVariants}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Maintain the highest standards of medical excellence
            </motion.li>
            <motion.li
              variants={itemVariants}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Ensure accessibility to quality healthcare services
            </motion.li>
          </motion.ul>
          <motion.p variants={itemVariants} className="text-pText">
            We believe in a future where advanced healthcare is accessible to
            all, and we work tirelessly to make this vision a reality through
            continuous improvement and innovation.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
