import React, { ReactNode } from "react";
import parse from "html-react-parser";
import Button from "../Button";
import Spacing from "../Spacing";
import Div from "../Div";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  btnLink: string;
  btnText?: string;
  variant?: string;
  children?: ReactNode;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  btnLink,
  btnText,
  variant,
  children,
  className,
}: SectionHeadingProps) {
  return (
    <Div
      className={
        variant
          ? `cs-section_heading ${variant}  `
          : `cs-section_heading cs-style1   `
        
      }
    >
      <h2 className={`cs-section_title  ${className ? className : ""}`}>{parse(title)}</h2>
      <h3 className={`cs-section_subtitle  ${className ? className : ""}`} style={{ marginTop: "20px" }}>
        {parse(subtitle)}
      </h3>

      {children}
      {btnText && (
        <>
          <Spacing lg="45" md="20" />
          <Button btnLink={btnLink} btnText={btnText} />
        </>
      )}
    </Div>
  );
}
