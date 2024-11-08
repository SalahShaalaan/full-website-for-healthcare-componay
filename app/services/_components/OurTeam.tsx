"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface OurTeamProps {
  image: StaticImageData;
}

export default function OurTeam({ image }: OurTeamProps) {
  const achievements = [
    { value: "98%", label: "Patient Satisfaction" },
    { value: "200+", label: "Specialized Doctors" },
    { value: "24/7", label: "Available Support" },
    { value: "50+", label: "Medical Specialties" },
  ];

  return (
    <section className="grid grid-cols-auto-fit-250 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={` text-3xl font-bold mb-6 headingColor`}
        >
          Our Team
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4 text-pText"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our healthcare professionals are the backbone of our organization.
            With diverse expertise and a shared commitment to excellence, our
            team brings together:
          </motion.p>
          <motion.ul
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-3 list-disc pl-6"
          >
            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              Board-certified physicians across multiple specialties
            </motion.li>
            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              Experienced nurses and healthcare practitioners
            </motion.li>
            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              Skilled technicians and support staff
            </motion.li>
            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              Dedicated administrative professionals
            </motion.li>
          </motion.ul>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            We invest in continuous professional development and maintain a
            collaborative environment where knowledge sharing and innovation
            thrive. Our team&apos;s commitment to excellence ensures that
            patients receive the highest quality care available.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-6 grid grid-cols-2 gap-4"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 * index }}
                whileHover={{ scale: 1.05 }}
                className="bg-mainGreen p-4 rounded-lg"
              >
                <motion.div className="font-semibold text-lightBg">
                  {achievement.value}
                </motion.div>
                <motion.div className="text-sm text-lightBg">
                  {achievement.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative h-[400px]"
      >
        <Image
          src={image}
          alt="Our Team"
          fill
          className="object-cover rounded-lg"
          quality={100}
          placeholder="blur"
        />
      </motion.div>
    </section>
  );
}
