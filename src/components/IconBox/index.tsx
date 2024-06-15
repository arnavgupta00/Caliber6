import React from 'react';
import parse from 'html-react-parser';
import Div from '../Div';

interface IconBoxProps {
  title: string;
  subtitle: string;
  icon: string;
}

const IconBox: React.FC<IconBoxProps> = ({ title, subtitle, icon }) => {
  return (
    <Div className="cs-iconbox cs-style1 text-center">
      <Div className="cs-iconbox_icon">
        <img src={icon} alt="Icon" />
      </Div>
      <h2 className="cs-iconbox_title text-left">{parse(title)}</h2>
      <Div className="cs-iconbox_subtitle text-left">{parse(subtitle)}</Div>
    </Div>
  );
}

export default IconBox;
