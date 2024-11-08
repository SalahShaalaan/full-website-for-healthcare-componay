"use client";

import Image from "next/image";
import image1 from "@/public/images/about-1.png";
import image2 from "@/public/images/about-2.png";
import image3 from "@/public/images/about-3.png";
import visionIcon1 from "@/public/icons/vision-1.png";
import visionIcon2 from "@/public/icons/vision-2.png";
import { motion } from "framer-motion";

const OurVision = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative h-[600px] w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute top-0 left-0 w-[65%] h-[70%] rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src={image1}
                  alt="Vision Main"
                  className="object-cover w-full h-full"
                  placeholder="blur"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute top-[25%] right-0 w-[45%] h-[45%] rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src={image2}
                  alt="Vision Secondary"
                  className="object-cover w-full h-full"
                  placeholder="blur"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute bottom-0 left-[20%] w-[55%] h-[35%] rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src={image3}
                  alt="Vision Tertiary"
                  className="object-cover w-full h-full"
                  placeholder="blur"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lightGreen font-semibold text-sm uppercase tracking-[.2rem]"
            >
              Our Vision
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl lg:text-5xl font-bold text-headingColor mt-4 mb-6"
            >
              Transforming Ideas Into Digital Reality
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pl-6 border-l-4 border-lightGreen mb-12"
            >
              <p className="text-pText leading-relaxed">
                We are dedicated to pushing the boundaries of digital
                innovation, creating solutions that not only meet today&apos;s
                needs but anticipate tomorrow&apos;s challenges. Our vision
                extends beyond conventional thinking to embrace new
                possibilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-auto-fit-450 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 mb-4 bg-lightGreen rounded-lg p-2 flex items-center justify-center">
                  <Image
                    src={visionIcon1}
                    alt="Innovation Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Strategic Innovation
                </h3>
                <p className="text-gray-600">
                  Crafting cutting-edge solutions that drive business growth and
                  technological advancement.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 mb-4 bg-lightGreen rounded-lg p-2 flex items-center justify-center">
                  <Image
                    src={visionIcon2}
                    alt="Excellence Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Digital Excellence
                </h3>
                <p className="text-gray-600">
                  Delivering exceptional digital experiences through precision
                  and innovative thinking.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
