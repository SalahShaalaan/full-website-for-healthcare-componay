import PageHeader from "../_components/PageHeader";
import amenitiesImg from "@/public/images/amenities.png";
import ComfortSection from "./_components/ComfortSection";
import ContactSection from "./_components/ContactSection";
import FacilitiesSection from "./_components/FacilitiesSection";
import AmenitiesIntro from "./_components/AmenitiesIntro";
export default function Page() {
  return (
    <main>
      <PageHeader
        title="Amenities"
        description="Leading Healthcare Innovation"
        image={amenitiesImg}
      />
      <div className="container mx-auto">
        <AmenitiesIntro />
        <FacilitiesSection />
        <ComfortSection />
        <ContactSection />
      </div>
    </main>
  );
}
