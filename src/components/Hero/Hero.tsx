import React from "react";
import parse from "html-react-parser";
import Div from "../Div";
import VerticalLinks from "../VerticalLinks";

interface Hero4Props {
  title: string;
  subtitle: string;
  scrollDownId: string;
  socialLinksHeading: string;
  heroSocialLinks: any;
  phoneNumber?: string;
  email?: string;
}

const Hero: React.FC<Hero4Props> = ({
  title,
  subtitle,
  scrollDownId,
  socialLinksHeading,
  heroSocialLinks,
  phoneNumber,
  email,
}) => {
  return (
    <Div
      className="cs-hero cs-style1 cs-type1 text-center cs-fixed_bg w-full   mt-24 sm:mt-0"
      style={{ backgroundImage: "url(./images/hero_bg_2.jpeg)", width: "100vw" }}
    >
      <Div className="container w-full pt-12">
        <Div className="cs-hero_text w-full">
          <h1 className="cs-hero_title " style={{ fontSize: "clamp(55px, 10vw, 75px)" }}>
            {parse(title)}
          </h1>
          <Div className="cs-hero_info justify-content-center w-full">
            <Div className="cs-hero_subtitle w-full " style={{width:"95vw" , fontSize: "clamp(20px, 10vw, 5px)"}}>{parse(subtitle)}</Div>
          </Div>
        </Div>
      </Div>
      <a href={scrollDownId} className="cs-down_btn " style={{
        bottom:"153px"
      }}>
        .
      </a>
      <VerticalLinks data={heroSocialLinks} title={socialLinksHeading} />
      {(phoneNumber || email) && (
        <Div className="cs-hero_social_wrap cs-left_side cs-primary_font cs-primary_color">
          <ul className="cs-hero_social_links">
            {email && (
              <li>
                <span>{email}</span>
              </li>
            )}
            {phoneNumber && (
              <li>
                <span>{phoneNumber}</span>
              </li>
            )}
          </ul>
        </Div>
      )}
      
    </Div>
  );
}

export default Hero;
