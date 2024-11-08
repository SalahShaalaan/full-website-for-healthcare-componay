"use client";
import {
  Phone,
  Calendar,
  Shield,
  ChevronRight,
  Play,
  X,
  ChevronLeft,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import avatar1 from "@/public/icons/avatar.png";
import avatar2 from "@/public/icons/avatar-2.png";
import avatar3 from "@/public/icons/avatar-3.png";
import Image from "next/image";
export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const features = [
    {
      icon: <Calendar className="h-6 w-6 text-indigo-400" />,
      title: "24/7 Care",
      description:
        "Round-the-clock medical support whenever you need it, with instant access to healthcare professionals.",
      gradient: "from-indigo-500/20 to-sky-400/20",
    },
    {
      icon: <Shield className="h-6 w-6 text-sky-400" />,
      title: "Certified Experts",
      description:
        "Top medical professionals at your service, bringing years of expertise to your care.",
      gradient: "from-sky-500/20 to-emerald-400/20",
    },
    {
      icon: <Phone className="h-6 w-6 text-emerald-400" />,
      title: "Easy Access",
      description:
        "Quick and convenient appointment scheduling through our modern digital platform.",
      gradient: "from-emerald-500/20 to-indigo-400/20",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Patient",
      image: avatar1,
      quote:
        "The care I received was exceptional. The doctors were attentive and the whole experience was seamless.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Regular Patient",
      image: avatar2,
      quote:
        "24/7 access to healthcare professionals has been a game-changer for managing my health.",
      rating: 5,
    },
    {
      name: "Emma Williams",
      role: "Patient",
      image: avatar3,
      quote:
        "The digital platform makes scheduling appointments so convenient. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 overflow-hidden"
    >
      <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        <div className="flex justify-center my-16">
          <div className="hover:scale-105 transition-all duration-500 cursor-pointer">
            <div className="flex items-center gap-3 px-8 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 hover:bg-white/10 transition-all duration-300">
              <Shield className="w-5 h-5 text-sky-400 animate-pulse" />
              <p className="text-sm font-medium text-white">
                Trusted by{" "}
                <span className="text-sky-400 font-bold">100,000+</span>{" "}
                Patients Worldwide
              </p>
            </div>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto space-y-10 mb-24">
          <h1 className="text-6xl lg:text-8xl font-bold leading-tight tracking-tight">
            <span className="text-white drop-shadow-2xl">Your Health,</span>
            <span className="block mt-3 bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent animate-gradient">
              Our Priority
            </span>
          </h1>

          <p className="text-xl text-indigo-100/80 max-w-2xl mx-auto leading-relaxed font-light">
            Experience world-class healthcare with cutting-edge technology and
            compassionate care. Your journey to better health starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Link href="/consultation">
              <button className="px-8 py-4 w-60 bg-lightGreen rounded-full text-white font-semibold shadow-teal-500/20 hover:shadow-teal-500/40 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Book Consultation
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            <button
              onClick={() => setIsVideoOpen(true)}
              className="px-8 py-4 w-60 bg-white/5 backdrop-blur-xl rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 border border-white/10 hover:border-white/20"
            >
              <Play className="w-4 h-4" />
              Watch Video Tour
            </button>
          </div>
        </div>

        <div className="grid grid-cols-auto-fit-250 gap-8 mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="hover:scale-105 transition-all duration-500"
            >
              <div
                className={`h-full p-8 rounded-2xl bg-gradient-to-br ${feature.gradient} backdrop-blur-xl border border-white/10 hover:border-white/20 shadow-lg hover:shadow-2xl shadow-indigo-500/5 hover:shadow-indigo-500/10 transition-all duration-300`}
              >
                <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-indigo-100/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="max-w-4xl mx-auto mt-24 px-4"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          What Our Patients Say
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-white font-semibold">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-indigo-100/70">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>
              <p className="text-indigo-100/80 italic">
                <q>{testimonials[currentTestimonial].quote}</q>
              </p>
              <div className="flex justify-center gap-4 mt-8">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video"
            >
              <iframe
                className="w-full h-full rounded-2xl shadow-2xl"
                src="https://www.youtube.com/embed/Qkr9NrfNow"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-sky-400 transition-colors"
              >
                <X className="w-8 h-8" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
