"use client";

import Image from "next/image";
import vector from "@/public/vector.png";
import gradIcon from "@/public/icons/What We Do Section icons/grad.png";
import certificateIcon from "@/public/icons/What We Do Section icons/certificate.png";
import calendarIcon from "@/public/icons/What We Do Section icons/calender.png";
import micIcon from "@/public/icons/What We Do Section icons/mic.png";
import teamIcon from "@/public/icons/What We Do Section icons/team.png";
import videoCallIcon from "@/public/icons/What We Do Section icons/video-call.png";
import { motion } from "framer-motion";

export default function WhatWeDo() {
  const whatWeDo = [
    {
      icon: gradIcon,
      title: "Talent Search",
      description:
        "We know how to search for the best talent. We use the latest profiling tools as part of our service, which will help you develop the right job profile.",
    },
    {
      icon: micIcon,
      title: "Megaphone",
      description:
        "We know how to search for the best talent. We use the latest profiling tools as part of our service, which will help you develop the right job profile.",
    },
    {
      icon: videoCallIcon,
      title: "Video call free",
      description:
        "We know how to search for the best talent. We use the latest profiling tools as part of our service, which will help you develop the right job profile.",
    },
    {
      icon: calendarIcon,
      title: "Calendar",
      description:
        "We know how to search for the best talent. We use the latest profiling tools as part of our service, which will help you develop the right job profile.",
    },
    {
      icon: certificateIcon,
      title: "Certificate",
      description:
        "We know how to search for the best talent. We use the latest profiling tools as part of our service, which will help you develop the right job profile.",
    },
    {
      icon: teamIcon,
      title: "Team Building",
      description:
        "We know how to search for the best talent. We use the latest profiling tools as part of our service, which will help you develop the right job profile.",
    },
  ];

  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src={vector}
          alt="section background"
          width={900}
          height={900}
          quality={100}
          className="w-auto h-auto"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative text-center mb-12"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={` tracking-[.3rem] text-[#185D6F]`}
        >
          Key to success
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={` text-headingColor text-5xl font-semibold tracking-tight mt-3`}
        >
          What We Do
        </motion.h1>
      </motion.div>

      <div className="relative grid grid-cols-auto-fit-450">
        {whatWeDo.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            className="p-8 bg-opacity-90 rounded-lg shadow-sm transition-transform duration-300 hover:transform hover:scale-105"
          >
            <div className="p-4 border-b sm:border-r">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <Image
                  src={item.icon}
                  alt="icon"
                  width={40}
                  height={40}
                  className="w-auto h-auto"
                />
              </div>
              <h6 className="mb-2 font-semibold text-lg leading-5 tracking-wide">
                {item.title}
              </h6>
              <p className="text-sm text-pText tracking-wide leading-8">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
