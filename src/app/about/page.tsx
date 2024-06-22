import Cta from "@/components/Cta";
import Div from "@/components/Div";
import FunFact from "@/components/FunFact";
import PageHeading from "@/components/PageHeading";
import Portfolio2 from "@/components/Portfolio/Portfolio2";
import Portfolio3 from "@/components/Portfolio/Portfolio3";
import PricingTableList from "@/components/PricingTable/PricingTableList";
import SectionHeading from "@/components/SectionHeading";
import Spacing from "@/components/Spacing";
import { Metadata } from "next";

export const metadata: Metadata = {
  applicationName: "Caliber6",
  title: {
    default: "About Us - Caliber6",
    template: "About Us - Caliber6",  // Set specific title for About Us page
  },
  description: "Learn more about Caliber6 and our mission to empower businesses through strategic digital solutions.",
  openGraph: {
    type: "website",
    siteName: "Caliber6",
    title: {
      default: "About Us - Caliber6",  // Specific title for Open Graph
      template: "About Us - Caliber6",
    },
    description: "Learn more about Caliber6 and our mission to empower businesses through strategic digital solutions.",
  },
  twitter: {
    card: "summary",
    title: {
      default: "About Us - Caliber6",  // Specific title for Twitter
      template: "About Us - Caliber6",
    },
    description: "Learn more about Caliber6 and our mission to empower businesses through strategic digital solutions.",
  },
};

export default function Page() {
  const portfolioData = [
    {
      title: "The Beginning",
      subtitle:
        "Founded with a vision to revolutionize the digital landscape, we embarked on our journey to empower businesses with transformative technology solutions.",
      btnText: "See Details",
      btnLink: "/portfolio/portfolio-details",
      imageUrl: "/images/portfolio_35.jpeg",
      category: "January 2015",
    },
    {
      title: "Growing",
      subtitle:
        "As we were growing, so were the technologies we were working with. We witnessed the emergence of groundbreaking technologies and as the digital landscape evolved, we remained at the forefront, leveraging digital advancements in our offerings to continue innovating and driving tangible results for our clients. The focus and drive to remain at the forefront of the industry and increase offerings for our clients just continued.",
      btnText: "See Details",
      btnLink: "/portfolio/portfolio-details",
      imageUrl: "/images/portfolio_36.jpeg",
      category: "June 2018",
    },
    {
      title: "Partnerships",
      subtitle:
        "With a firm commitment to staying ahead of the curve, we expanded our expertise to encompass emerging trends such as blockchain, Internet of Things (IoT), and business process automation guided by AI. Guided by our passion for innovation, we forged strategic partnerships and honed our capabilities to address the ever evolving needs of the market.",
      btnText: "See Details",
      btnLink: "/portfolio/portfolio-details",
      imageUrl: "/images/portfolio_37.jpeg",
      category: "December 2021",
    },
    {
      title: "Staffing and Beyond",
      subtitle:
        "In the midst of unprecedented global challenges we have continued to leverage our deep industry knowledge to solve for our clients. Streamlining business processes is at the core of mitigating multiple risks and global dependencies at any organization. In response to increasing client demands for specialized talent acquisition in advanced technology roles, we have expanded our services to include specialized recruitment solutions. Leveraging our deep industry knowledge and technical prowess, we have addressed the limitations of traditional recruiting companies, ensuring our clients have access to top-tier talent to fuel their digital transformation journey.",
      btnText: "See Details",
      btnLink: "/portfolio/portfolio-details",
      imageUrl: "/images/portfolio_38.jpeg",
      category: "January 2024",
    },
  ];
  const funfaceData = [
    {
      title: "Years of Industry-Leading Experience",
      factNumber: "10",
      plus: true,
    },
    {
      title: "or More Reduction in Operating Costs",
      factNumber: "20%",
      plus: false,
    },
    {
      title: "Thriving Partnerships",
      factNumber: "100",
      plus: true,
    },
    {
      title: "Return on Investments",
      factNumber: "3x",
      plus: false,
    },
  ];
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between p-0">
      <PageHeading
        title="About Us"
        bgSrc="images/about_hero_bg.jpeg"
        pageLinkText="About Us"
      />
      {/* End Page Heading Section */}
      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container p-4 lg:p-0 lg:pl-24 lg:pr-24">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="Your trusted partner for business"
              subtitle="About Calibersix"
              btnLink="/about"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Since its inception in 2015, Caliber6 has been synonymous with
                innovation and excellence, consistently delivering
                transformative solutions that empower businesses to thrive in an
                ever-evolving digital landscape.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src="/images/about_img_1.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          {/* <Div className="col-lg-7">
              <img
                src="/images/about_img_2.jpeg"
                alt="About"
                className="w-100 cs-radius_15"
              />
              <Spacing lg="25" md="25" />
            </Div>
            <Div className="col-lg-5">
              <img
                src="/images/about_img_3.jpeg"
                alt="About"
                className="w-100 cs-radius_15"
              />
              <Spacing lg="25" md="25" />
            </Div> */}
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}
      <Div className="container p-4 lg:p-0 lg:pl-24 lg:pr-24">
        <FunFact
          title="Key Achievements"
          subtitle="10 years of excellence, 100+ partnerships, 20% cost reductions, and 3x ROI. Let's elevate your business together."
          data={funfaceData}
        />
      </Div>
      {/* End Fun Fact Section */}
      {/* Start Why Choose Section */}
      <Spacing lg="100" md="80" />
      <Div className="container p-4 lg:p-0 lg:pl-24 lg:pr-24">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  src="/images/about_img_4.jpeg"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading
              title="Highly experienced people with us"
              subtitle="Why Choose Us"
              btnLink="/about"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                We're your dedicated partners in your organization's success.
                With expertise and innovation at our core, we're committed to
                delivering tailored solutions that drive tangible results for
                your business.
              </p>
              <Spacing lg="15" md="15" />
              {/* <p className="cs-m0">
                  This is the main factor that sets us apart from our
                  competition and allows us to deliver a specialist business
                  consultancy service. Our team applies its wide-ranging
                  experience to determining.
                </p> */}
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Section */}
      {/* Start Portfolio Section */}
      <Spacing lg="150" md="80" />
      {portfolioData.map((item, index) =>
        index % 2 === 0 ? (
          <Div key={index}>
            <Portfolio2
              title={item.title}
              subtitle={item.subtitle}
              btnText={item.btnText}
              btnLink={item.btnLink}
              imageUrl={item.imageUrl}
              category={item.category}
            />
            <Spacing lg="100" md="70" />
          </Div>
        ) : (
          <Div key={index}>
            <Portfolio3
              title={item.title}
              subtitle={item.subtitle}
              btnText={item.btnText}
              btnLink={item.btnLink}
              imageUrl={item.imageUrl}
              category={item.category}
            />
            <Spacing lg="130" md="70" />
          </Div>
        )
      )}
      {/* End Portfolio Section */}
      {/* Start Pricing Section */}
      <Div className="container p-4 lg:p-0 lg:pl-20 lg:pr-20">
        <SectionHeading title="Our Core Values" subtitle="" btnLink="/about" />
        <Spacing lg="50" md="40" />
        <PricingTableList />
      </Div>
      {/* <Spacing lg="125" md="55" /> */}
      <Spacing lg="130" md="70" />

        <Div className="container text-left lg:text-center p-4">
          <Div className="row col-lg-10 offset-lg-1">
            <h2 className="cs-font_38 cs-m0">
              Streamline Your Business to Achieve Success
            </h2>
            <Spacing lg="60" md="45" />
            <p className="cs-m0">
              Through in-depth analysis and strategic planning, we identify
              areas for improvement and implement tailored solutions designed to
              streamline operations and enhance overall performance. Our
              approach is rooted in proven methodologies and industry best
              practices, ensuring that every optimization initiative is based on
              factual data and measurable outcomes. By partnering with Caliber6
              to streamline your business processes, you can expect to see
              tangible improvements in efficiency, cost reduction, and
              scalability. Our focus on eliminating inefficiencies and
              automating routine tasks enables you to reallocate resources more
              effectively, freeing up time and resources for strategic
              initiatives. With streamlined operations in place, you'll have the
              agility to adapt to market changes and capitalize on new
              opportunities, positioning your business for long-term success.
              Let us help you unlock the full potential of your business and
              achieve your goals through streamlined processes and optimized
              workflows.
            </p>
          </Div>
        </Div>
        {/* Start CTA Section */}
        <Spacing lg="120" md="80" />
        <Div className="container p-4 lg:p-0  lg:pl-24 lg:pr-24">
          <Cta
            title="Let’s disscuse make <br />something <i>cool</i> together"
            btnText="Apply For Meeting"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
        {/* End CTA Section */}
    </main>
  );
}
