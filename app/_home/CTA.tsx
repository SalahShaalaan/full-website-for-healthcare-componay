"use client";
import Link from "next/link";
import Button from "../_components/Button";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <div className="relative w-full h-96 my-14">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/banner-1.png')`,
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={` text-3xl md:text-4xl font-bold text-white mb-8 text-center`}
        >
          Let&apos;s discuss about how we can help
          <br /> make your business better
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button>
            <Link href="/contact-us" className="tracking-wide">
              Let &apos;s work together
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
