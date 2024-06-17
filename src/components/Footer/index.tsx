import React from "react";
import Div from "../Div";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import MenuWidget from "../Widget/MenuWidget";
import Newsletter from "../Widget/Newsletter";
import SocialWidget from "../Widget/SocialWidget";
import TextWidget from "../Widget/TextWidget";

export default function Footer() {
  const copyrightLinks = [
    {
      title: "Terms of Use",
      href: "/",
    },
    {
      title: "Privacy Policy",
      href: "/",
    },
  ];

  const serviceMenu = [
    {
      title: "Systems Integrations",
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
    {
      title: "Staffing and Recruiting",
      href: "/service/service-details",
    },
  ];

  return (
    <footer className="cs-fooer pl-24 pr-24" >
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget
                  logoSrc="/images/footer_logo.svg"
                  logoAlt="Logo"
                  text="We are dedicated to revolutionizing your business operations with cutting-edge solutions. As a premier consultancy, we specialize in providing bespoke services that drive efficiency, scalability, and growth."
                />
                <SocialWidget />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading="Services" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title="Contact Us" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter
                  title="Ping me"
                  subtitle="Ready to take your business to the next level? Contact us today to
explore how our tailored digital solutions can drive your success."
                  placeholder="caliber6@gmail.com"
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">Copyright © 2024 Calibersix.</Div>
          </Div>
          {/* <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=" cs-style2" />
          </Div> */}
        </Div>
      </Div>
    </footer>
  );
}
