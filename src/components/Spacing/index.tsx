import Div from '../Div';

interface SpacingProps {
  lg: string;
  md: string;
}

export default function Spacing({ lg, md }: SpacingProps) {
  return <Div className={`cs-height_${lg} cs-height_lg_${md}`}></Div>;
}
