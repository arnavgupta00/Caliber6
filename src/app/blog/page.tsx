import Div from "@/components/Div";
import PageHeading from "@/components/PageHeading";
import PostStyle2 from "@/components/Post/PostStyle2";
import Sidebar from "@/components/Sidebar.jsx";
import Spacing from "@/components/Spacing";
import { getBlogs } from "@/utils/sanityActions";
import { Metadata } from "next";
import { Key } from "react";

export const metadata: Metadata = {
  title: "Blog's",
  description: "Still in development",
};

export const revalidate = 0; // revalidate at most every hour

export default async function Page() {
  const blogs = await getBlogs();
  //console.log(blogs);

  const tagsExtractFromAllBlogs = blogs.map((blog: any) => blog.tags);
  const tags = Array.from(new Set(tagsExtractFromAllBlogs.flat())) as Key[];

  return (
    <>
      <PageHeading
        title="Our Blog"
        bgSrc="/images/blog_hero_bg.jpeg"
        pageLinkText="Blog"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">
            {blogs.map((item: any, index: any) => {
              //console.log(item);
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
    </>
  );
}
