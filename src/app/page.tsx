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
import ServiceList from "@/components/ServiceList";
import { getClientReviews, getServicesNameAndShortDescription } from "@/utils/sanityActions";
import TestimonialSlider from "@/components/Slider/TestimonialSlider";

export const metadata: Metadata = {
  title: "Caliber6",
  description: "Still in development",
};
export const revalidate = 0; 


export default async function Home() {
  
 
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

  const serviceDataProp = await getServicesNameAndShortDescription();

  const reviewData = await getClientReviews();

  const serviceData1 = serviceDataProp.map((service: any, index: number) => {
    if (index % 2 === 0) {
      return {
        title: service.serviceName,
        href: `/service/${service._id}`,
      };
    }
  });

  const serviceData1WithoutUndefined = serviceData1.filter(
    (service: any) => service !== undefined
  );

  const serviceData2 = serviceDataProp.map((service: any, index: number) => {
    if (index % 2 !== 0) {
      return {
        title: service.serviceName,
        href: `/service/${service._id}`,
      };
    }
  });
  const serviceData2WithoutUndefined = serviceData2.filter(
    (service: any) => service !== undefined
  );

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
      {/* Start Moving Text Section */}
      <MovingText2 reverseDirection={false} data={[...serviceData1WithoutUndefined , ...serviceData2WithoutUndefined]} />
      <Spacing lg="20" md="10" />
      <MovingText2 reverseDirection data={[...serviceData1WithoutUndefined , ...serviceData2WithoutUndefined]} />
      {/* End Moving Text Section */}
      {/* Start Services Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Our core services"
          subtitle="Services"
          variant="cs-style1 text-center"
          btnLink="/services"
        />
        <Spacing lg="70" md="45" />
        <ServiceList serviceDataProp={serviceDataProp} />
      </Div>
      {/* End Services Section */}
      {/* Start Video Block Section */}
      <Spacing lg="130" md="70" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
          Our Expertise: <span> Your Business Potential</span>
        </h2>
        <span
          className="cs-font_20 cs-m0 text-center cs-line_height_4"
          style={{ display: "block", margin: "0 auto", textAlign: "center" }}
        >
          Dive into our expansive suite of consulting services crafted to unlock
          the full potential of your enterprise. Our seasoned team is committed
          to tailoring custom solutions that yield concrete outcomes for your
          distinct business hurdles.
        </span>

        <Spacing lg="70" md="70" />
      </Div>
      {/* End Video Block Section */}
      
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
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Blog Section */}
      <Spacing lg="125" md="55" />
      {reviewData && reviewData.length > 1 && (
        <TestimonialSlider reviewData={reviewData} />
      )}
    </main>
  );
}
