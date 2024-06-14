import Link from 'next/link';
import Div from '../Div';

interface Tag {
  url?: string;
  title: string;
}

interface TagWidgetProps {
  title: string;
  data: string[];
}

export default function TagWidget({ title, data }: TagWidgetProps) {
  return (
    <>
      <h4 className="cs-sidebar_widget_title">{title}</h4>
      <Div className="tagcloud">
        {data?.map((tag:string, index) => (
          <Link href={tag} className="tag-cloud-link" key={index}>
            {tag}
          </Link>
        ))}
      </Div>
    </>
  );
}
