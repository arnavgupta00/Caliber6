import React from "react";
import Div from "../Div";

interface FunFactItem {
  factNumber: string;
  title: string;
  description: string;
}

interface FunFact2Props {
  data: FunFactItem[];
  variant?: string;
  bgUrl?: string;
}

export default function FunFact2({ data, variant, bgUrl }: FunFact2Props) {
  return (
    <Div
      className={variant ? `cs-funfact_wrap_2 ${variant}  w-11/12` : "cs-funfact_wrap_2  w-11/12"}
    >
      {bgUrl && (
        <div
          className="cs-funfact_shape"
          style={{ backgroundImage: `url(${bgUrl})` }}
        ></div>
      )}
      <Div className="cs-funfacts">
        {data.map((item, index) => (
          <Div key={index} className="w-3/12">
            <Div className="cs-funfact cs-style2">
              <Div className="cs-funfact_number cs-primary_font cs-semi_bold cs-primary_color">
                <span className="odometer" />
                {item.factNumber}
                <span className="cs-plus"></span>
              </Div>
              <h3 className="cs-funfact_title">{item.title}</h3>
              <Div className="cs-hero_subtitle mt-4 text-sm">{item.description}</Div>
            </Div>
          </Div>
        ))}
      </Div>
    </Div>
  );
}
