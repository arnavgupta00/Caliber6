import React, { ReactNode } from 'react';

interface DivProps {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  onMouseEnter?: () => void;
}

export default function Div(props: DivProps) {
  return (
    <div {...props} >{props.children}</div>
  );
}
