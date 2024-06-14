import React from 'react';
import Div from '../Div';

interface AuthorWidgetProps {
  src: string;
  name: string;
  description: string;
}

const AuthorWidget: React.FC<AuthorWidgetProps> = ({ src, name, description }) => {
  return (
    <Div className="cs-author_card text-center">
      <img src={src} alt="Author" />
      <h3>{name}</h3>
      <p>{description}</p>
    </Div>
  );
};

export default AuthorWidget;
