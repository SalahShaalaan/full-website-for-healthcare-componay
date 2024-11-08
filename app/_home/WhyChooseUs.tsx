"use client";
import image1 from "@/public/images/persons-4.png";
import image2 from "@/public/images/persons-5.png";
import image3 from "@/public/images/persons-6.png";
import imagesBackground from "@/public/shape.png";
import Image from "next/image";
import { useState } from "react";
export default function WhyChooseUs() {
  interface AccordionItem {
    id: string;
    title: string;
    description: string;
  }

  const accordionData: AccordionItem[] = [
    {
      id: "01",
      title: "What makes our services unique?",
      description:
        "Our team combines years of expertise with innovative approaches to deliver exceptional results. We prioritize client satisfaction and maintain transparent communication throughout our engagement.",
    },
    {
      id: "02",
      title: "How do we ensure quality?",
      description:
        "We follow rigorous quality control processes and implement industry best practices. Our dedicated team conducts thorough reviews and testing at every stage of development.",
    },
    {
      id: "03",
      title: "What support do we provide?",
      description:
        "We offer comprehensive support including 24/7 technical assistance, regular maintenance, and continuous optimization to ensure your solution remains effective and up-to-date.",
    },
  ];

  const [openAccordion, setOpenAccordion] = useState("01");

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? "" : id);
  };

  return (
    <section className="bg-gradient-to-b from-[#121621] to-[#1a1f2d] py-16 px-4">
      <div className="container mx-auto grid grid-cols-auto-fit-250 gap-16 items-center">
        <div className="space-y-10">
          <div className="space-y-4">
            <span className="text-lightGreen font-medium px-4 py-2 bg-blue-500/10 rounded-full text-base tracking-[3px] inline-block">
              Why Choose Us
            </span>
            <h1 className="text-4xl font-bold text-white leading-tight">
              We Provide the Best{" "}
              <span className="text-[#25758A]">Solutions</span> for Your
              Business
            </h1>
          </div>

          <div className="space-y-3">
            {accordionData.map((item) => (
              <div
                key={item.id}
                className="border border-gray-700 rounded-xl overflow-hidden bg-[#1a1f2d]/50 backdrop-blur-sm"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-[#1e2334] transition-colors duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-lightGreen font-semibold min-w-[32px] text-sm">
                      {item.id}
                    </span>
                    <span className="font-medium text-gray-100 text-lg">
                      {item.title}
                    </span>
                  </div>
                  <span
                    className={`transform transition-transform duration-300 text-lightGreen ${
                      openAccordion === item.id ? "rotate-180" : ""
                    }`}
                  >
                    &#x25B2;
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openAccordion === item.id ? "max-h-48" : "max-h-0"
                  }`}
                >
                  <div className="p-5 bg-white">
                    <p className="text-pText text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[450px] w-full max-w-lg mx-auto">
          <div className="absolute inset-0 z-0 rotate-12 scale-95">
            <Image
              src={imagesBackground}
              alt="Background Shape"
              fill
              className="object-contain opacity-15"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="relative z-10 w-full h-full">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-40 hover:-translate-y-[52%] transition-all duration-300">
              <Image
                src={image1}
                alt="Team Member 1"
                className="rounded-2xl object-cover shadow-2xl ring-4 ring-blue-500/20 w-auto h-auto"
                fill
                quality={95}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="absolute top-8 right-4 w-40 h-36 transform rotate-6 hover:-rotate-0 hover:-translate-y-2 transition-all duration-300">
              <Image
                src={image2}
                alt="Team Member 2"
                className="rounded-2xl object-cover shadow-xl ring-2 ring-blue-500/20 "
                fill
                quality={95}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="absolute bottom-12 left-4 w-40 h-36 transform -rotate-6 hover:rotate-0 hover:-translate-y-2 transition-all duration-300">
              <Image
                src={image3}
                alt="Team Member 3"
                className="rounded-2xl object-cover shadow-xl ring-2 ring-blue-500/20"
                fill
                quality={95}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
