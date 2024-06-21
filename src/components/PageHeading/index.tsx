import Link from 'next/link';
import Div from '../Div';

interface PageHeadingProps {
  title: string;
  bgSrc: string;
  pageLinkText: string;
}

export default function PageHeading({ title, bgSrc, pageLinkText }: PageHeadingProps) {
  return (
    <Div
      className="cs-page_heading cs-style1 cs-center text-center cs-bg w-full"
      style={{ backgroundImage: `url(${bgSrc})` , width:"100vw" , padding:"0px" }}
    >
      <Div className="container">
        <Div className="cs-page_heading_in">
          <h1 className="cs-page_title cs-font_50 cs-white_color">{title}</h1>
          <ol className="breadcrumb text-uppercase">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item active">{pageLinkText}</li>
          </ol>
        </Div>
      </Div>
    </Div>
  );
}
