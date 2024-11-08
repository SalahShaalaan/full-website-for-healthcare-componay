import PageHeader from "../_components/PageHeader";
import careersImg from "@/public/images/carreers.png";
import CareersIntro from "./_components/CareersIntro";
import WhyJoinSection from "./_components/WhyJoinSection";
import BenefitsSection from "./_components/BenefitsSection";
import CareerGrowthSection from "./_components/CareerGrowthSection";

export default function Page() {
  return (
    <main>
      <PageHeader
        title="Careers"
        description="World-Class Healthcare Facilities Across Egypt"
        image={careersImg}
      />
      <div className="container mx-auto">
        <CareersIntro />
        <WhyJoinSection />
        <BenefitsSection />
        <CareerGrowthSection />
      </div>
    </main>
  );
}
