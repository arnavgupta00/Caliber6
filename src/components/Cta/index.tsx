import React from 'react';
import parse from 'html-react-parser';
import Button from '../Button';
import Div from '../Div';
import Spacing from '../Spacing';

interface CtaProps {
  title: string;
  btnText?: string;
  btnLink: string;
  bgSrc: string;
  variant?: string;
}

const Cta: React.FC<CtaProps> = ({ title, btnText, btnLink, bgSrc, variant }) => {
  return (
    <Div
      className={`cs-cta cs-style1 cs-bg text-center cs-shape_wrap_1 cs-position_1 ${
        variant ? variant : ''
      }`}
      style={{ backgroundImage: `url(${bgSrc})` }}
    >
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-cta_in">
        <h2 className="cs-cta_title cs-semi_bold cs-m0">{parse(title)}</h2>
        {btnText && (
          <>
            <Spacing lg="70" md="30" />
            <Button btnLink={btnLink} btnText={btnText} />
          </>
        )}
      </Div>
    </Div>
  );
}

export default Cta;
