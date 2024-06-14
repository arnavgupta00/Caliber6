import Image from "next/image";
import Div from "@/components/Div";
import Hero from "@/components/Hero/Hero";
import FunFact2 from "@/components/FunFact/FunFact2";
import SectionHeading from "@/components/SectionHeading";
import Spacing from "@/components/Spacing";
import MovingText2 from "@/components/MovingText/MovingText2";
import VideoModal from "@/components/VideoModal";
import PostSlider from "@/components/Slider/PostSlider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Caliber6",
  description: "Still in development",
};

export default function Home() {
  const serviceData1 = [
    {
      title: "Systems Integration",
      href: "/service/service-details",
    },
    {
      title: "Enterprise Migrations",
      href: "/service/service-details",
    },
    {
      title: "Automation & AI",
      href: "/service/service-details",
    },
  ];
  const serviceData2 = [
    {
      title: "Staffing & Recruiting",
      href: "/service/service-details",
    },
    {
      title: "Enterprise Migrations",
      href: "/service/service-details",
    },
    {
      title: "Systems Integration",
      href: "/service/service-details",
    },
  ];
  const heroSocialLinks = [
    {
      name: "Linkedin",
      links: "https://www.linkedin.com/company/caliber6/",
    },
    {
      name: "Twitter",
      links: "https://twitter.com/calibersix",
    },
  ];
  const funfaceData = [
    {
      title: "Thriving Partnerships",
      factNumber: "100+",
      description:
        "We work with over 100 cutting-edge technologies to tailor solutions that meet the unique needs of each client. From machine learning solutions, to CRMs, ERPs, and more, we focus on ensuring that we harness only the best to drive innovation and deliver unparalleled results for your organizaton.",
    },
    {
      title: "Return on Investment",
      factNumber: "3x",
      description:
        "Companies investing in AI and automation solutions have experienced an average ROI of 300% within the first 12-24 months. By leveraging advanced technologies, we help you achieve unprecedented levels of productivity and innovation, positioning your business for long-term success and competitiveness.",
    },

    {
      title: "Employee Satisfaction",
      factNumber: "40%",
      description:
        "Employee and workplace satisfaction rates have surged by over 40% in organizations adopting AI and automation, indicating the positive impact of streamlined processes and reduced repetitive workloads.",
    },
  ];
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between p-0">
      {/* Start Hero Section */}
      <Hero
        title={`Empowering Businesses Through Strategic <br /> <span>Digital Solutions</span>`}
        subtitle="By leveraging the synergy between people and technology, we unlock new digital possibilities, create measurable outcomes, and empower you to achieve groundbreaking success and shape your organization's future."
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        phoneNumber="+1(646)494-6771"
        email="info@caliber6.com"
      />

      {/* End Hero Section */}
      <Div className="container flex flex-row justify-center items-center">
        <FunFact2
          data={funfaceData}
          variant="cs-type1"
          bgUrl="/images/funfact_shape_bg.svg"
        />
      </Div>
      {/* Start Services Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="What we provide"
          subtitle="Services"
          variant="cs-style1 text-center"
          btnLink="/services"
        />
        <Spacing lg="65" md="45" />
      </Div>
      {/* End Services Section */}
      {/* Start Moving Text Section */}
      <MovingText2 reverseDirection={false} data={serviceData1} />
      <Spacing lg="20" md="10" />
      <MovingText2 reverseDirection data={serviceData2} />
      {/* End Moving Text Section */}
      {/* Start About Section */}
      <Div className="cs-shape_wrap_4 pl-24 pr-24">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-5 col-xl-4">
              <SectionHeading
                title="Elevate your business with our expertise, driving measurable outcomes and sustainable growth."
                subtitle="Why Choose Us"
                btnText="Learn More"
                btnLink="/about"
              />
              <Spacing lg="45" md="45" />
            </Div>
            <Div className="col-lg-7 offset-xl-1">
              <Div className="cs-half_screen">
                <VideoModal
                  videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
                  bgUrl="/images/video_bg.jpeg"
                  variant="cs-style1 cs-size1"
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End About Section */}
      {/* Start Blog Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4 w-full">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4 ">
              <SectionHeading
                title="Explore recent publication"
                subtitle="Our Blog"
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            {/* <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div> */}
          </Div>
        </Div>
      </Div>
      {/* End Blog Section */}
    </main>
  );
}
