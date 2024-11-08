"use client";

import teamMember1 from "@/public/images/team-1.png";
import teamMember2 from "@/public/images/team-2.png";
import teamMember3 from "@/public/images/team-3.png";
import MemberCard from "../_components/MemberCard";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Nutrition Specialist",
    image: teamMember1,
    description:
      "Specialized in creating personalized nutrition plans and helping clients achieve their health goals.",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    headerColor: "bg-lightGreen",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Diet Planner",
    image: teamMember2,
    description:
      "Expert in developing sustainable diet plans tailored to individual needs and lifestyle.",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    headerColor: "bg-mainGreen",
  },
  {
    id: 3,
    name: "Jane Doe",
    role: "Doctor",
    image: teamMember3,
    description:
      "Board-certified physician specializing in nutritional medicine and preventive healthcare.",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    headerColor: "bg-lightBg",
  },
];

const OurTeam = () => {
  return (
    <section className="py-16">
      <div className="px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={` text-5xl font-bold text-headingColor mb-4`}
          >
            Meet Our Expert Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-pText max-w-2xl mx-auto"
          >
            Our dedicated team of health professionals is committed to helping
            you achieve your wellness goals through personalized nutrition and
            expert medical guidance.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-auto-fit-350 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
            >
              <MemberCard member={member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
