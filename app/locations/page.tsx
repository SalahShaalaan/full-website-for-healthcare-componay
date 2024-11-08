"use client";
import PageHeader from "../_components/PageHeader";
import locationImg from "@/public/images/locations.png";
import { healthcareCenters } from "../data/healthcareCenters";
import LocationCard from "./_components/LocationCard";
import ContactSection from "./_components/ContactSection";
import LocationMap from "./_components/LocationMap";

export default function Page() {
  return (
    <main className="">
      <PageHeader
        title="Our Medical Centers"
        description="World-Class Healthcare Facilities Across Egypt"
        image={locationImg}
      />

      <div className="container mx-auto mt-12">
        <LocationMap centers={healthcareCenters} />
      </div>

      <div className="container mx-auto mt-16 grid lg:grid-cols-3 gap-8">
        {healthcareCenters.map((center) => (
          <LocationCard key={center.id} {...center} />
        ))}
      </div>

      <div className="mt-16">
        <ContactSection />
      </div>
    </main>
  );
}
