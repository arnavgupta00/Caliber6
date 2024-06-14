import React from 'react';
import Div from '../Div';

interface TextWidgetProps {
  logoSrc: string;
  logoAlt: string;
  text: string;
}

const TextWidget: React.FC<TextWidgetProps> = ({ logoSrc, logoAlt, text }) => {
  return (
    <Div className="cs-text_widget">
      <img src={logoSrc} alt={logoAlt} />
      <p>{text}</p>
    </Div>
  );
};

export default TextWidget;
