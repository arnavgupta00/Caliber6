import Link from "next/link";
import Div from "../Div";

export default function CategoryWidget({
  title,
  data,
}: {
  title: string;
  data: any;
}) {
  if (!data) return null;
  return (
    <>
      <h4 className="cs-sidebar_widget_title">{title}</h4>
      <Div className="tagcloud ">
        <Link
          href={"/industrial-blogs/category/" + "All"}
          className="tag-cloud-link text-xl p-3 pl-4 pr-4 font-bold"
        >
          All
        </Link>
        {data?.map((tag: string, index: any) => (
          <Link
            href={"/industrial-blogs/category/" + tag}
            className="tag-cloud-link text-xl p-3 pl-4 pr-4 font-bold"
            key={index}
          >
            {tag}
          </Link>
        ))}
      </Div>
    </>
  );
}
