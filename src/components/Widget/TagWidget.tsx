import Link from "next/link";
import Div from "../Div";
import Button from "../Button";

interface Tag {
  url?: string;
  title: string;
}

interface TagWidgetProps {
  title: string;
  data: string[];
}

export default function TagWidget({ title, data }: TagWidgetProps) {
  if (!data) return null;
  return (
    <>
      <h4 className="cs-sidebar_widget_title">{title}</h4>
      <Div className="tagcloud">
        {data?.map((tag: string, index) => (
          <button className="tag-cloud-link" key={index}>
            {tag}
          </button>
        ))}
      </Div>
    </>
  );
}
