import Features from "./_home/Features";
import Hero from "./_components/Hero";
import CTA from "./_home/CTA";
import OurClients from "./_home/OurClients";
import OurTeam from "./_home/OurTeam";
import OurVision from "./_home/OurVision";
import WhatWeDo from "./_home/WhatWeDo";
import WhyChooseUs from "./_home/WhyChooseUs";
import Banner from "./_home/Banner";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <div className="container mx-auto mt-[100px]">
        <Features />
      </div>
      <div className="container mx-auto mt-14">
        <WhatWeDo />
      </div>
      <Banner />
      <div className="container mx-auto mt-14">
        <OurVision />
      </div>
      <OurClients />
      <WhyChooseUs />
      <div className="container mx-auto mt-14">
        <OurTeam />
      </div>
      <CTA />
    </div>
  );
}
