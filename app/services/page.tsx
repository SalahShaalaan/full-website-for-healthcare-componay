import servicesImg from "@/public/images/service.png";
import meetingImg from "@/public/images/meeting.png";
import customerImg from "@/public/images/customer.png";
import ServicesIntro from "./_components/ServicesIntro";
import OurMission from "./_components/OurMission";
import OurTeam from "./_components/OurTeam";
import OurValues from "./_components/OurValues";
import PageHeader from "../_components/PageHeader";

export default function Page() {
  return (
    <main>
      <PageHeader
        title="Services"
        description="Leading Healthcare Innovation"
        image={servicesImg}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        <ServicesIntro />
        <OurMission image={meetingImg} />
        <OurValues />
        <OurTeam image={customerImg} />
      </div>
    </main>
  );
}
