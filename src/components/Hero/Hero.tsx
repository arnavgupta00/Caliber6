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
      className="cs-hero cs-style1 cs-type1 text-center cs-fixed_bg w-full"
      style={{ backgroundImage: "url(./images/hero_bg_2.jpeg)" }}
    >
      <Div className="container">
        <Div className="cs-hero_text">
          <h1 className="cs-hero_title" style={{ fontSize: "75px" }}>
            {parse(title)}
          </h1>
          <Div className="cs-hero_info justify-content-center">
            <Div className="cs-hero_subtitle">{subtitle}</Div>
          </Div>
        </Div>
      </Div>
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
      <a href={scrollDownId} className="cs-down_btn">
        .
      </a>
    </Div>
  );
}

export default Hero;
