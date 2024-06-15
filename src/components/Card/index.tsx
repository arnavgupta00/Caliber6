import Link from 'next/link';
import Div from '../Div';

interface CardProps {
  title: string;
  link: string;
  src: string;
  alt: string;
}

export default function Card({ title, link, src, alt }: CardProps) {
  return (
    <Link href={link} className="cs-card cs-style1">
      <>
        <img src={src} alt={alt} />
        <Div className="cs-card_overlay" />
        <Div className="cs-card_info">
          <span className=" cs-hover_layer3 cs-accent_bg" />
          <h2 className="cs-card_title">{title}</h2>
        </Div>
      </>
    </Link>
  );
}
