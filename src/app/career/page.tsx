import JobAccordion from "@/components/Accordion/jobPosting";
import Accordion from "@/components/Accordion/jobPosting";
import Card from "@/components/Card";
import Cta from "@/components/Cta";
import Div from "@/components/Div";
import PageHeading from "@/components/PageHeading";
import PricingTableList from "@/components/PricingTable/PricingTableList";
import ServicesTable from "@/components/PricingTable/ServicesTable";
import SectionHeading from "@/components/SectionHeading";
import TestimonialSlider from "@/components/Slider/TestimonialSlider";
import Spacing from "@/components/Spacing";
import { urlFor } from "@/utils/configSanity";
import {
  getCareers,
  getClientReviews,
  getJobs,
  getServicesNameAndImage,
} from "@/utils/sanityActions";
import { Metadata } from "next";

export const revalidate = 0;


export const metadata: Metadata = {
  applicationName: "Caliber6",
  title: {
    default: "Careers - Caliber6",
    template: "Careers - Caliber6",  // Set specific title for Careers page
  },
  description: "Learn more about Caliber6 and our mission to empower businesses through strategic digital solutions.",
  openGraph: {
    type: "website",
    siteName: "Caliber6",
    title: {
      default: "Careers - Caliber6",  // Specific title for Open Graph
      template: "Careers - Caliber6",
    },
    description: "Learn more about Caliber6 and our mission to empower businesses through strategic digital solutions.",
  },
  twitter: {
    card: "summary",
    title: {
      default: "Careers - Caliber6",  // Specific title for Twitter
      template: "Careers - Caliber6",
    },
    description: "Learn more about Caliber6 and our mission to empower businesses through strategic digital solutions.",
  },
};

export default async function Page() {

  const careerData = await getCareers();

  const jobData = await getJobs();

  const imageUrlFromAsset = (asset: any) => {
    const url = urlFor(asset).width(500).height(500).url();

    return url;
  };

  //console.log(jobData);
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between p-0">
      <PageHeading
        title="Careers"
        bgSrc="images/service_hero_bg.jpeg"
        pageLinkText="Careers"
      />
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4 p-4 lg:p-0">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Explore Exciting Opportunities"
                subtitle="Join us in contributing your talent toward
innovation and propelling enterprises
into the digital forefront."
                btnLink="/career"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                {careerData.length > 0 && (
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title={careerData[0].careerName}
                      link="/career"
                      src={imageUrlFromAsset(careerData[0].careerImage.asset)}
                      alt={careerData[0].careerName + " Image"}
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                )}
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                {careerData.length > 1 && (
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title={careerData[1].careerName}
                      link="/career"
                      src={imageUrlFromAsset(careerData[1].careerImage.asset)}
                      alt={careerData[1].careerName + " Image"}
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                )}
                {careerData.length > 2 && (
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title={careerData[2].careerName}
                      link="/career"
                      src={imageUrlFromAsset(careerData[2].careerImage.asset)}
                      alt={careerData[2].careerName + " Image"}
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                )}
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                {careerData.length > 3 && (
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title={careerData[3].careerName}
                      link="/career"
                      src={imageUrlFromAsset(careerData[3].careerImage.asset)}
                      alt={careerData[3].careerName + " Image"}
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                )}
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                {careerData.length > 4 && (
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title={careerData[4].careerName}
                      link="/career"
                      src={imageUrlFromAsset(careerData[4].careerImage.asset)}
                      alt={careerData[4].careerName + " Image"}
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                )}
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                {careerData.length > 5 && (
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title={careerData[5].careerName}
                      link="/career"
                      src={imageUrlFromAsset(careerData[5].careerImage.asset)}
                      alt={careerData[5].careerName + " Image"}
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                )}
                {careerData.length > 6 && (
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title={careerData[6].careerName}
                      link="/career"
                      src={imageUrlFromAsset(careerData[6].careerImage.asset)}
                      alt={careerData[6].careerName + " Image"}
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                )}
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                {careerData.length > 7 && (
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title={careerData[7].careerName}
                      link="/career"
                      src={imageUrlFromAsset(careerData[7].careerImage.asset)}
                      alt={careerData[7].careerName + " Image"}
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                )}
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="130" md="70" />

      <Div className="container p-4 lg:p-0">
        <Div className="row align-items-center cs-column_reverse_lg">
          <Div className="col-lg-5">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <img
                src="/images/about_img_5.jpeg"
                alt="About"
                className="cs-w100 cs-radius_5"
              />
            </Div>
          </Div>
          <Div className="col-lg-6 offset-lg-1">
            <SectionHeading
              subtitle="At Caliber6, we're always seeking talented individuals
who are passionate about making a difference. Explore
our diverse range of career opportunities and join a team
committed to driving innovation and excellence in
everything we do."
              title="Discover Your Future"
              //btnText="Learn More"
              btnLink="/about"
            />
            <Spacing lg="0" md="40" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="130" md="70" />

      <Div className="container p-4 lg:p-0  lg:pr-24">
        <Div
          className="row align-items-center cs-column_reverse_lg"
          style={{ flexDirection: "row-reverse", justifyContent: "center" }}
        >
          <Div className="col-lg-5">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <img
                src="/images/about_img_5.jpeg"
                alt="About"
                className="cs-w100 cs-radius_5"
              />
            </Div>
          </Div>
          <Div
            className="col-lg-6 offset-lg-1 lg:pr-24 "
            style={{
              alignItems: "start",
              textAlign: "left",
              alignSelf: "start",
              marginTop: "15%",
            }}
          >
            <SectionHeading
              subtitle="Join us at Caliber6 and be part of a dynamic team
dedicated to transforming businesses and driving
success. Explore our career opportunities and unleash
your potential in an environment that values creativity,
collaboration, and continuous growth."
              title="Where Passion Meets Purpose"
              //btnText="Learn More"
              btnLink="/about"
            />
            <Spacing lg="0" md="40" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />

      {/* {careerData[0].jobPostings && (
        <Div className="col-lg-6 offset-xl-1">
          <Accordion faqs={careerData.jobPostings} />
        </Div>

      )} */}

      <Div className="container p-4 lg:p-0">
        <h2 className="cs-font_50 cs-m0 text-left cs-line_height_4">
          Job Openings
        </h2>
        <span
          className="cs-font_20 cs-m0 text-left cs-line_height_4"
          style={{
            display: "block",
            margin: "0 auto",
            marginTop: "20px",
            textAlign: "left",
          }}
        >
          Join us at Caliber6 and be part of a dynamic team dedicated to
          transforming businesses and driving success. Explore our career
          opportunities and unleash your potential in an environment that values
          creativity, collaboration, and continuous growth.
        </span>

        <Spacing lg="70" md="70" />
      </Div>
      <Spacing lg="130" md="70" />
      <Div className="container p-4 lg:p-0 w-full">
        {careerData.length > 0 &&
          careerData.map((career: any, index: any) => {
            const jobPostingRelatedToCareerList = jobData.filter(
              (job: any) => job.jobCareer._ref === career._id
            );

            return (
              <Div key={index} className="col-lg-12 offset-xl-0 ">
                {jobPostingRelatedToCareerList.length > 0 && (
                  <Div className="container mt-4">
                    <Div className="row">
                      <Div className="col-xl-5 col-lg-6">
                        <SectionHeading
                          title={career.careerName}
                          subtitle="Job Post's"
                          btnLink="/career"
                        />
                        <Spacing lg="90" md="45" />
                      </Div>
                      <Div className="col-lg-6 offset-xl-1">
                        <JobAccordion faqs={jobPostingRelatedToCareerList} />
                      </Div>
                    </Div>
                  </Div>
                )}
              </Div>
            );
          })}
      </Div>

      <Spacing lg="150" md="80" />

      
      <Div className="container p-4 lg:p-0">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </main>
  );
}
