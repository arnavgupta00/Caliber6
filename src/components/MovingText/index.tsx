import React from "react";
import Div from "../Div";

interface Logo {
  src: string;
  alt: string;
}

interface MovingTextProps {
  logoList: Logo[];
}

export default function MovingText({ logoList }: MovingTextProps) {
  const partnerLogos: Logo[] = logoList || [];
  return (
    <Div className="cs-moving_text_wrap cs-bold cs-primary_font">
      <Div className="cs-moving_text_in">
        <Div className="cs-moving_text">
          {partnerLogos.map((partnerLogo: Logo, index: number) => (
            <div className="cs-partner_logo" key={index}>
              <img src={partnerLogo.src} alt={partnerLogo.alt} />
            </div>
          ))}
        </Div>
        <Div className="cs-moving_text">
          {partnerLogos.map((partnerLogo: Logo, index: number) => (
            <div className="cs-partner_logo" key={index}>
              <img src={partnerLogo.src} alt={partnerLogo.alt} />
            </div>
          ))}
        </Div>
      </Div>
    </Div>
  );
}
