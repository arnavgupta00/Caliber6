import Link from "next/link";
import Button from "../Button";
import Div from "../Div";
import { urlFor } from "@/utils/configSanity";

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
    <Div className="cs-post cs-style2" style={{ flexDirection: "row" }}>
      <Link
        href={"/blog/" + href}
        className="cs-post_thumb cs-radius_15"
      >
        <img src={MainImageUrl} alt="Post" className="w-100 cs-radius_15" />
      </Link>
      <Div className="cs-post_info">
        <Div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font">
          <span className="cs-posted_by">
            {new Date(date).toLocaleDateString()}
          </span>
          <Link
            href={"/blog/" + categoryHref}
            className="cs-post_avatar"
          >
            {category}
          </Link>
        </Div>
        <h2 className="cs-post_title">
          <Link href={"/blog/" + href}>{title}</Link>
        </h2>
        <h3 className="cs-funfact_title">{subtitle.heading}</h3>
        <Div className="cs-hero_subtitle mt-4 text-sm">
          {subtitle.paragraphs}
        </Div>
        <Button btnLink={"/blog/" + href} btnText="See More" />
      </Div>
    </Div>
  );
}
