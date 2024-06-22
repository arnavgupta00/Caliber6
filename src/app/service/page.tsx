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
import { getClientReviews, getServicesNameAndImage } from "@/utils/sanityActions";
import { Metadata } from "next";

export const revalidate = 0; 

export const metadata: Metadata = {
  applicationName: "Caliber6 ",
  title: {
    default: "Services - Caliber6" ,
    template: "Services - Caliber6",  // Set specific title for Services page
  },
  description: "Learn more about Caliber6 and our mission to empower businesses through strategic digital solutions.",
  openGraph: {
    type: "website",
    siteName: "Caliber6",
    title: {
      default: "Services - Caliber6",  // Specific title for Open Graph
      template: "Services - Caliber6",
    },
    description: "Learn more about Caliber6 and our mission to empower businesses through strategic digital solutions.",
  },
  twitter: {
    card: "summary",
    title: {
      default: "Services - Caliber6",  // Specific title for Twitter
      template: "Services - Caliber6",
    },
    description: "Learn more about Caliber6 and our mission to empower businesses through strategic digital solutions.",
  },
};


export default async function Page() {
  const reviewData = await getClientReviews();

  const serviceData = await getServicesNameAndImage();

  const imageUrlFromAsset = (asset:any) => {

    const url = urlFor(asset).width(500).height(500).url()

    return url;
  }

  //console.log(serviceData);
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between p-0">
      {/* <PageHeading
        title="Services"
        bgSrc="images/service_hero_bg.jpeg"
        pageLinkText="Services"
      /> */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4 p-4 lg:p-0">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Services we can help you with"
                subtitle="What Can We Do"
                btnLink="/service"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                { serviceData.length > 0 && <Div className="col-lg-3 col-sm-6">
                  <Card
                    title={serviceData[0].serviceName}
                    link={"/service/"+serviceData[0]._id}
                    src={imageUrlFromAsset(serviceData[0].serviceImage.asset)}
                    alt={serviceData[0].serviceName + " Image" }
                  />
                  <Spacing lg="0" md="30" />
                </Div>}
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                { serviceData.length > 1 &&<Div className="col-lg-3 col-sm-6">
                  <Card
                   title={serviceData[1].serviceName}
                   link={"/service/"+serviceData[1]._id}
                   src={imageUrlFromAsset(serviceData[1].serviceImage.asset)}
                   alt={serviceData[1].serviceName + " Image" }
                  />
                  <Spacing lg="0" md="30" />
                </Div>}
                {serviceData.length > 2 && <Div className="col-lg-3 col-sm-6">
                  <Card
                    title={serviceData[2].serviceName}
                    link={"/service/"+serviceData[2]._id}
                    src={imageUrlFromAsset(serviceData[2].serviceImage.asset)}
                    alt={serviceData[2].serviceName + " Image" }
                  />
                  <Spacing lg="0" md="30" />
                </Div>}
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                {serviceData.length >3   &&<Div className="col-lg-3 col-sm-6">
                  <Card
                   title={serviceData[3].serviceName}
                   link={"/service/"+serviceData[3]._id}
                   src={imageUrlFromAsset(serviceData[3].serviceImage.asset)}
                   alt={serviceData[3].serviceName + " Image" }
                  />
                  <Spacing lg="0" md="30" />
                </Div>}
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                {serviceData.length >4   && <Div className="col-lg-3 col-sm-6">
                  <Card
                    title={serviceData[4].serviceName}
                    link={"/service/"+serviceData[4]._id}
                    src={imageUrlFromAsset(serviceData[4].serviceImage.asset)}
                    alt={serviceData[4].serviceName + " Image" }
                  />
                  <Spacing lg="0" md="30" />
                </Div>}
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                {serviceData.length >5   &&<Div className="col-lg-3 col-sm-6">
                  <Card
                    title={serviceData[5].serviceName}
                    link={"/service/"+serviceData[5]._id}
                    src={imageUrlFromAsset(serviceData[5].serviceImage.asset)}
                    alt={serviceData[5].serviceName + " Image" }
                  />
                  <Spacing lg="0" md="30" />
                </Div>}
                {serviceData.length >6   &&<Div className="col-lg-3 col-sm-6">
                  <Card
                    title={serviceData[6].serviceName}
                    link={"/service/"+serviceData[6]._id}
                    src={imageUrlFromAsset(serviceData[6].serviceImage.asset)}
                    alt={serviceData[6].serviceName + " Image" }
                  />
                  <Spacing lg="0" md="30" />
                </Div>}
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                {serviceData.length >7   && <Div className="col-lg-3 col-sm-6">
                  <Card
                    title={serviceData[7].serviceName}
                    link={"/service/"+serviceData[7]._id}
                    src={imageUrlFromAsset(serviceData[7].serviceImage.asset)}
                    alt={serviceData[7].serviceName + " Image" }
                  />
                  <Spacing lg="0" md="30" />
                </Div>}
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="container p-4 lg:p-0">
        <SectionHeading
          title="Why are we the best choice for you?"
          subtitle="Our core values"
          btnLink="/service"
        />
        <Spacing lg="85" md="40" />
        <ServicesTable />
      </Div>
      <Spacing lg="125" md="55" />
      <Div className="container row ">
      {reviewData && reviewData.length > 1 && (
        <TestimonialSlider reviewData={reviewData} />
      )}
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
