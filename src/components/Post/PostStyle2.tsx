import Link from "next/link";
import Button from "../Button";
import Div from "../Div";
import { urlFor } from "@/utils/configSanity";
import Spacing from "../Spacing";

interface PostStyle2Props {
  thumb: any;
  title: string;
  subtitle: {
    heading: string;
    _key: string;
    paragraphs: any;
  };
  date: string;
  category: string;
  categoryHref: string;
  href: string;
}

export default async function PostStyle2({
  thumb,
  title,
  subtitle,
  date,
  category,
  categoryHref,
  href,
}: PostStyle2Props) {
  //console.log(thumb.asset);

  const MainImageUrl =
    (thumb.asset && urlFor(thumb.asset).width(872).height(500).url()) || null;

  if (!MainImageUrl) return null;
  if (href === "undefined") return null;
  return (
    <Div className="cs-post cs-style2 w-full flex-col lg:flex-row gap-8" style={{display:"flex" }}>
      <Link
        href={"/industrial-blogs/" + href}
        className="cs-post_thumb cs-radius_15 "
        style={{minWidth:"60%"}}
      >
        <img src={MainImageUrl} alt="Post" className="w-100 cs-radius_15" />
      </Link>
      <Div className="cs-post_info">
        <Div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font">
          <span className="cs-posted_by">
            {new Date(date).toLocaleDateString()}
          </span>
          <Link
            href={"/industrial-blogs/" + categoryHref}
            className="cs-post_avatar"
          >
            {category}
          </Link>
        </Div>
        <h2 className="cs-post_title">
          <Link href={"/industrial-blogs/" + href}>{title}</Link>
        </h2>
        <h3 className="cs-funfact_title">{subtitle.heading}</h3>
        <Div className="cs-hero_subtitle mt-4 text-sm">
        {subtitle.paragraphs.join(' ').slice(0, 350) + " ..."}
        </Div>
        <Spacing lg="25" md="80" />
        <Button btnLink={"/industrial-blogs/" + href} btnText="See More" />
      </Div>
    </Div>
  );
}
