"use client";
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Clock,
  Users,
  Award,
  Star,
  Activity,
  CheckCircle2,
} from "lucide-react";
import { HealthcareCenter } from "@/app/types/location";
import { motion } from "framer-motion";
import { useState } from "react";

export default function LocationCard(props: HealthcareCenter) {
  const [isActive, setIsActive] = useState(false);
  const { name, city, address, phone, email, hours, specialties } = props;

  const stats = [
    { icon: Users, value: "50+", label: "Medical Staff" },
    { icon: Award, value: "15+", label: "Years of Service" },
    { icon: CheckCircle2, value: "24/7", label: "Emergency" },
  ];

  const contactInfo = [
    { Icon: Building2, value: city, label: "City" },
    { Icon: MapPin, value: address, label: "Location" },
    { Icon: Phone, value: phone, label: "Contact" },
    { Icon: Mail, value: email, label: "Email" },
    { Icon: Clock, value: hours, label: "Hours" },
  ];

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

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      whileHover={{ y: -10 }}
      className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300
        ${isActive ? "ring-2 ring-lightGreen shadow-lightGreen/20" : ""}
        backdrop-blur-sm`}
    >
      <motion.div
        variants={itemVariants}
        className="relative border-b border-gray-100 pb-6 mb-6"
      >
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute -top-2 -right-2 bg-lightGreen text-white text-xs px-2 py-1 rounded-full"
          >
            Active Location
          </motion.div>
        )}

        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-headingColor mb-1">
              {name}
            </h3>
            <span className="text-sm text-gray-500">Healthcare Center</span>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsActive(!isActive)}
            className={`cursor-pointer p-3 rounded-full transition-all duration-300 
              ${
                isActive
                  ? "bg-lightGreen shadow-lg shadow-lightGreen/30"
                  : "bg-blue-50"
              }`}
          >
            <Star
              className={`w-5 h-5 transition-colors duration-300 
                ${isActive ? "text-white fill-white" : "text-lightGreen"}`}
            />
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-3 gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`text-center p-3 rounded-lg transition-colors duration-300
                ${isActive ? "bg-blue-50" : "bg-gray-50"}`}
            >
              <stat.icon
                className={`w-5 h-5 mx-auto mb-2 transition-colors duration-300
                ${isActive ? "text-lightGreen" : "text-gray-600"}`}
              />
              <div className="text-lg font-bold text-headingColor">
                {stat.value}
              </div>
              <div className="text-xs text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div variants={containerVariants} className="space-y-4">
        {contactInfo.map(({ Icon, value, label }, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-center gap-3 group"
          >
            <div
              className={`p-2.5 rounded-lg transition-all duration-300
              ${
                isActive
                  ? "bg-lightGreen/10 group-hover:bg-lightGreen/20"
                  : "bg-blue-50 group-hover:bg-blue-100"
              }`}
            >
              <Icon className="h-5 w-5 text-lightGreen" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-600">{label}</span>
              <span className="text-gray-800 font-medium">{value}</span>
            </div>
          </motion.div>
        ))}

        <motion.div
          variants={itemVariants}
          className="mt-6 pt-6 border-t border-gray-100"
        >
          <div className="flex items-center gap-2 mb-3">
            <Activity className="w-5 h-5 text-lightGreen" />
            <h4 className="font-semibold text-headingColor">
              Medical Specialties
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className={`px-3 py-1 rounded-full text-sm transition-colors duration-300
                  ${
                    isActive
                      ? "bg-lightGreen text-white shadow-sm shadow-lightGreen/30"
                      : "bg-gray-100 text-gray-700"
                  }`}
              >
                {specialty}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
