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
  getClientReviews,
  getServicesNameAndImage,
} from "@/utils/sanityActions";

export const revalidate = 0;

export default async function Page() {
  const reviewData = await getClientReviews();

  const serviceData = await getServicesNameAndImage();

  const imageUrlFromAsset = (asset: any) => {
    const url = urlFor(asset).width(500).height(500).url();

    return url;
  };

  console.log(serviceData);
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between p-0">
      <PageHeading
        title="Careers"
        bgSrc="images/service_hero_bg.jpeg"
        pageLinkText="Careers"
      />
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4 pl-24 pr-24">
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
                {serviceData.length > 0 && (
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title={serviceData[0].serviceName}
                      link={"/service/" + serviceData[0]._id}
                      src={imageUrlFromAsset(serviceData[0].serviceImage.asset)}
                      alt={serviceData[0].serviceName + " Image"}
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                )}
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                {serviceData.length > 1 && (
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title={serviceData[1].serviceName}
                      link={"/service/" + serviceData[1]._id}
                      src={imageUrlFromAsset(serviceData[1].serviceImage.asset)}
                      alt={serviceData[1].serviceName + " Image"}
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                )}
                {serviceData.length > 2 && (
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title={serviceData[2].serviceName}
                      link={"/service/" + serviceData[2]._id}
                      src={imageUrlFromAsset(serviceData[2].serviceImage.asset)}
                      alt={serviceData[2].serviceName + " Image"}
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                )}
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                {serviceData.length > 3 && (
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title={serviceData[3].serviceName}
                      link={"/service/" + serviceData[3]._id}
                      src={imageUrlFromAsset(serviceData[3].serviceImage.asset)}
                      alt={serviceData[3].serviceName + " Image"}
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                )}
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                {serviceData.length > 4 && (
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title={serviceData[4].serviceName}
                      link={"/service/" + serviceData[4]._id}
                      src={imageUrlFromAsset(serviceData[4].serviceImage.asset)}
                      alt={serviceData[4].serviceName + " Image"}
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                )}
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                {serviceData.length > 5 && (
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title={serviceData[5].serviceName}
                      link={"/service/" + serviceData[5]._id}
                      src={imageUrlFromAsset(serviceData[5].serviceImage.asset)}
                      alt={serviceData[5].serviceName + " Image"}
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                )}
                {serviceData.length > 6 && (
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title={serviceData[6].serviceName}
                      link={"/service/" + serviceData[6]._id}
                      src={imageUrlFromAsset(serviceData[6].serviceImage.asset)}
                      alt={serviceData[6].serviceName + " Image"}
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                )}
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                {serviceData.length > 7 && (
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title={serviceData[7].serviceName}
                      link={"/service/" + serviceData[7]._id}
                      src={imageUrlFromAsset(serviceData[7].serviceImage.asset)}
                      alt={serviceData[7].serviceName + " Image"}
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

      <Div className="container pl-24 pr-24">
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

      <Div className="container  pr-24">
        <Div
          className="row align-items-center cs-column_reverse_lg"
          style={{ flexDirection: "row-reverse" , justifyContent:"center"}}
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
            className="col-lg-6 offset-lg-1 pr-24 "
            style={{
              alignItems: "start",
              textAlign: "left",
              alignSelf: "start",
              marginTop:"15%"
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
      <Div className="container pl-24 pr-24">
        <SectionHeading
          title="Why are we the best choice for you?"
          subtitle="Our core values"
          btnLink="/service"
        />
        <Spacing lg="85" md="40" />
        <ServicesTable />
      </Div>
      <Spacing lg="125" md="55" />
      <Div className="container pl-24 ">
        {reviewData && reviewData.length > 1 && (
          <TestimonialSlider reviewData={reviewData} />
        )}
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="container pl-24 pr-24">
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