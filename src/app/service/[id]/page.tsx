import Button from "@/components/Button";
import Cta from "@/components/Cta";
import Div from "@/components/Div";
import PageHeading from "@/components/PageHeading";
import SectionHeading from "@/components/SectionHeading";
import TestimonialSlider from "@/components/Slider/TestimonialSlider";
import Spacing from "@/components/Spacing";
import IconBox from "@/components/IconBox";
import Accordion from "@/components/Accordion";
import { getServiceByID, getServicesNameAndId } from "@/utils/sanityActions";
import { urlFor } from "@/utils/configSanity";

export const revalidate = 0; 


export default async function Page({ params }: { params: { id: string } }) {
  const serviceDetails = await getServiceByID(params.id);

  const allServices = await getServicesNameAndId();

  const imageUrlFromAsset = (asset: any) => {
    const url = urlFor(asset).width(536).height(576).url();

    return url;
  };

  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between p-0">
      <PageHeading
        title="Service Details"
        bgSrc="/images/service_hero_bg.jpeg"
        pageLinkText={serviceDetails.serviceName}
      />
      <Spacing lg="145" md="80" />
      <Div className="container pl-24 pr-24">
        <SectionHeading
          title={serviceDetails.serviceName}
          subtitle={serviceDetails.shortDescription}
          variant="cs-style1 text-center"
          btnLink={"/service/" + serviceDetails._id}
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          <Div className="col-lg-4">
            <IconBox
              icon="/images/icons/service_icon_1.svg"
              title={serviceDetails.threeStepProcess[0].stepTitle}
              subtitle={serviceDetails.threeStepProcess[0].stepDescription}
            />
            <Spacing lg="30" md="30" />
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon="/images/icons/service_icon_2.svg"
              title={serviceDetails.threeStepProcess[1].stepTitle}
              subtitle={serviceDetails.threeStepProcess[1].stepDescription}
            />
            <Spacing lg="30" md="30" />
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon="/images/icons/service_icon_3.svg"
              title={serviceDetails.threeStepProcess[2].stepTitle}
              subtitle={serviceDetails.threeStepProcess[2].stepDescription}
            />
            <Spacing lg="30" md="30" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="120" md="50" />
      <Div className="container pl-24 pr-24">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <img
                src={imageUrlFromAsset(serviceDetails.serviceImage.asset)}
                alt="Service"
                className="cs-radius_15 w-100"
              />
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">
              Below our most design related services
            </h2>
            <Spacing lg="50" md="30" />
            <Div className="row">
              <Div className="col-lg-6">
                {allServices.map((service: any, index: number) => {
                  if (index % 2 === 0) {
                    return (
                      <>
                        <Button
                          btnLink={"/service/" + service._id}
                          btnText={service.serviceName}
                          variant="cs-type2"
                        />
                        <Spacing lg="20" md="10" />
                      </>
                    );
                  }
                })}
              </Div>
              <Div className="col-lg-6">
                {allServices.map((service: any, index: number) => {
                  if (index % 2 !== 0) {
                    return (
                      <>
                        <Button
                          btnLink={"/service/" + service._id}
                          btnText={service.serviceName}
                          variant="cs-type2"
                        />
                        <Spacing lg="20" md="10" />
                      </>
                    );
                  }
                })}
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      {/* <TestimonialSlider /> */}
      <Spacing lg="145" md="80" />
      <Div className="container cs-shape_wrap_4 pl-24 pr-24">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <SectionHeading
                title="Some pre questions and answers"
                subtitle="FAQ’s"
                btnLink="/service"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <Accordion faqs={serviceDetails.faqs} />
            </Div>
          </Div>
        </Div>
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
