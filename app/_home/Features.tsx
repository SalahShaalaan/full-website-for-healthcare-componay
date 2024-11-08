"use client";
import persons from "@/public/images/persons.png";
import persons2 from "@/public/images/persons-1.png";
import persons3 from "@/public/images/persons-6.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
            <div className="col-span-4">
              <Image
                className="rounded-xl"
                src={persons}
                alt="Healthcare Technology"
                quality={100}
                width={500}
                height={500}
                placeholder="blur"
              />
            </div>

            <div className="col-span-3">
              <Image
                className="rounded-xl"
                src={persons2}
                alt="Patient Care"
                quality={100}
                width={500}
                height={500}
                placeholder="blur"
              />
            </div>

            <div className="col-span-5">
              <Image
                className="rounded-xl"
                src={persons3}
                alt="Medical Team Collaboration"
                quality={100}
                width={500}
                height={500}
                placeholder="blur"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5"
        >
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="font-bold text-3xl lg:text-4xl text-headingColor"
              >
                Advanced Healthcare Solutions for Better Patient Care
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-pText"
              >
                Empowering healthcare professionals with innovative tools to
                enhance patient care, streamline workflows, and improve medical
                outcomes.
              </motion.p>
            </div>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-2 sm:space-y-4"
            >
              <li className="flex gap-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-lightGreen">
                  <svg
                    className="shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div className="text-pText">
                  <span className="text-sm sm:text-base">
                    <span className="font-bold">Smart Diagnostics</span> –
                    AI-powered medical analysis
                  </span>
                </div>
              </li>

              <li className="flex gap-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-lightGreen">
                  <svg
                    className="shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div className="text-pText">
                  <span className="text-sm sm:text-base">
                    Secure Electronic Health Records (EHR) Management
                  </span>
                </div>
              </li>

              <li className="flex gap-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-lightGreen">
                  <svg
                    className="shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div className="text-pText">
                  <span className="text-sm sm:text-base">
                    Real-time{" "}
                    <span className="font-bold">Patient Monitoring</span>{" "}
                    Systems
                  </span>
                </div>
              </li>
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
