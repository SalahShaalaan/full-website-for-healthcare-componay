"use client";
import Image from "next/image";
import banner from "@/public/images/banner.png";
import Link from "next/link";
import Button from "../_components/Button";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <div className="relative rounded-2xl">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={banner}
          alt="Business Consultancy Banner"
          fill
          priority
          className="object-cover"
          quality={100}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="min-h-[400px] flex flex-col md:flex-row items-center justify-center gap-8 px-4 py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-white capitalize max-w-2xl text-center md:text-left"
          >
            Need Professional Business Consultancy?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button>
              <Link href="/contact-us">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
