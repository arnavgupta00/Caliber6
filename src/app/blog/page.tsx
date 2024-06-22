import Div from "@/components/Div";
import PageHeading from "@/components/PageHeading";
import PostStyle2 from "@/components/Post/PostStyle2Blogs";
import Sidebar from "@/components/Sidebar.jsx";
import Spacing from "@/components/Spacing";
import { getBlogs } from "@/utils/sanityActions";
import { Metadata } from "next";
import { Key } from "react";

export const metadata: Metadata = {
  applicationName: "Caliber6",
  title: {
    default: "Blog's - Caliber6",
    template: "Blog's - Caliber6",  // Set specific title for Blog's page
  },
  description: "Learn more about Caliber6 and our mission to empower businesses through strategic digital solutions.",
  openGraph: {
    type: "website",
    siteName: "Caliber6",
    title: {
      default: "Blog's - Caliber6",  // Specific title for Open Graph
      template: "Blog's - Caliber6",
    },
    description: "Learn more about Caliber6 and our mission to empower businesses through strategic digital solutions.",
  },
  twitter: {
    card: "summary",
    title: {
      default: "Blog's - Caliber6",  // Specific title for Twitter
      template: "Blog's - Caliber6",
    },
    description: "Learn more about Caliber6 and our mission to empower businesses through strategic digital solutions.",
  },
};


export const revalidate = 0; 
export default async function Page() {
  const blogs = await getBlogs();
  //console.log(blogs);

  const tagsExtractFromAllBlogs = blogs.map((blog: any) => blog.tags);
  const tags = Array.from(new Set(tagsExtractFromAllBlogs.flat())) as Key[];

  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between p-0">
      <PageHeading
        title="Our Blog"
        bgSrc="/images/blog_hero_bg.jpeg"
        pageLinkText="Blog"
      />
      <Spacing lg="150" md="80" />
      <Div className="container p-4 lg:p-0" >
        <Div className="row">
          <Div className="col-lg-8">
            {blogs.map((item: { mainImage: any; title: string; content: { heading: string; _key: string; paragraphs: any; }[]; _createdAt: string; category: string; _id: string; }, index: any) => {
              //console.log(item);
                            
              if(!item.content) return null;
              if(!item._id) return null;
              if(!item.mainImage) return null;
              if(!item.title) return null;
              if(!item.category) return null;
              if(!item._createdAt) return null;
              if(item.content.length === 0) return null;
              return (
                <Div key={index}>
                  <PostStyle2
                    thumb={item.mainImage}
                    title={item.title}
                    subtitle={item.content[0]}
                    date={item._createdAt}
                    category={item.category}
                    categoryHref={"/"}
                    href={item._id}
                  />
                  {blogs.length > index + 1 && <Spacing lg="95" md="60" />}
                </Div>
              );
            })}
            <Spacing lg="60" md="40" />
            {/* <Pagination /> */}
          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            <Spacing lg="0" md="80" />
            <Sidebar tagdata={tags} />
          </Div>
        </Div>
      </Div>
    </main>
  );
}
