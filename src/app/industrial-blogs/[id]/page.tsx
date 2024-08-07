import Cta from "@/components/Cta";
import Div from "@/components/Div";
import PageHeading from "@/components/PageHeading";
import Sidebar from "@/components/Sidebar.jsx";
import Spacing from "@/components/Spacing";
import { urlFor } from "@/utils/configSanity";
import { getBlogByID, getIndustrialBlogByID } from "@/utils/sanityActions";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const blogData = await getIndustrialBlogByID(params.id);
  const blog = blogData[0];

  const MainImageUrl =
    (blog.mainImage &&
      blog.mainImage.asset &&
      urlFor(blog.mainImage.asset).width(872).height(500).url()) ||
    null;

  return {
    title: `${blog.title} - Caliber6`,
    description:
      blog.description ||
      "Empowering Businesses Through Strategic Digital Solutions",
    openGraph: {
      title: `${blog.title} - Caliber6`,
      description:
        blog.description ||
        "Empowering Businesses Through Strategic Digital Solutions",
      images: [{ url: MainImageUrl }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} - Caliber6`,
      description:
        blog.description ||
        "Empowering Businesses Through Strategic Digital Solutions",
      images: [{ url: MainImageUrl }],
    },
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  var blog = await getIndustrialBlogByID(params.id);
  var blog = blog[0];
  // console.log("=====================", blog, "=====================", params.id);

  const MainImageUrl =
    (blog.mainImage &&
      blog.mainImage.asset &&
      urlFor(blog.mainImage.asset).width(872).height(500).url()) ||
    null;

  const SecondaryImageOne =
    (blog.secondaryImages[0] &&
      blog.secondaryImages[0].asset &&
      urlFor(blog.secondaryImages[0].asset).width(424).height(424).url()) ||
    null;
  const SecondaryImageTwo =
    (blog.secondaryImages[1] &&
      blog.secondaryImages[1].asset &&
      urlFor(blog.secondaryImages[1].asset).width(424).height(424).url()) ||
    null;

  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between p-0">
      {/* Start Page Heading Section */}
      <PageHeading
        title={blog.title}
        bgSrc="/images/blog_details_hero_bg.jpeg"
        pageLinkText={blog.category}
      />
      {/* End Page Heading Section */}

      {/* Start Blog Details */}
      <Spacing lg="150" md="80" />
      <Div className="container p-4 lg:p-0">
        <Div className="row">
          <Div className="col-lg-8">
            {/* Start Details Post Content */}
            <Div className="cs-post cs-style2">
              <Div className="cs-post_thumb cs-radius_15">
                <img
                  src={MainImageUrl}
                  alt="Post"
                  className="w-100 cs-radius_15"
                />
              </Div>
              <Div className="cs-post_info">
                <Div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font">
                  <span className="cs-posted_by">
                    {new Date(blog._createdAt).toLocaleDateString()}
                  </span>
                  <Link href="/blog" className="cs-post_avatar">
                    {blog.category}
                  </Link>
                </Div>
                {blog.content &&
                  blog.content.map((item: any, index: any) => {
                    return (
                      <div key={index}>
                        <h2 className="cs-post_title">{item.heading}</h2>
                        <p>{item.paragraphs}</p>
                      </div>
                    );
                  })}
                {/* <blockquote className="cs-primary_font">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, who expound the actual
                  teachings of the great explorer of the truth, the master.
                  <small>Loren Mulari</small>
                </blockquote>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire, that they
                  cannot foresee the pain and trouble that are bound to ensue;
                  and equal blame belongs to those who fail in their duty
                  through weakness of will, which is the same as saying through
                  shrinking from toil and pain. These cases are perfectly simple
                  and easy to distinguish. In a free hour, when our power of
                  choice is untrammelled and when nothing prevents our being
                  able to do what we like best, every pleasure is to be welcomed
                  and every pain avoided. But in certain circumstances and owing
                  to the claims of duty or the obligations of business it will
                  frequently occur that pleasures have to be repudiated.
                </p> */}
                <Div className="row">
                  {SecondaryImageOne && (
                    <Div className="col-md-6">
                      <img
                        src={SecondaryImageOne}
                        alt={blog.secondaryImages[0].alt}
                        className="cs-radius_15 w-100"
                      />
                      <Div className="cs-height_45 cs-height_lg_45" />
                    </Div>
                  )}
                  {SecondaryImageTwo && (
                    <Div className="col-md-6">
                      <img
                        src={SecondaryImageTwo}
                        alt={blog.secondaryImages[1].alt}
                        className="cs-radius_15 w-100"
                      />
                      <Div className="cs-height_45 cs-height_lg_45" />
                    </Div>
                  )}
                </Div>
                {/* <h3>Art is powerful and imaginary source</h3>
                <p>
                  we denounce with righteous indignation and dislike men who are
                  so beguiled and demoralized by the charms of pleasure of the
                  moment, so blinded by desire, that they cannot foresee the
                  pain and trouble that are bound to ensue; and equal blame
                  belongs to those who fail in their duty through weakness of
                  will, which is the same as saying through shrinking from toil
                  and pain. These cases are perfectly simple and easy to
                  distinguish. In a free hour, when our power of choice is
                  untrammelled and when nothing prevents our being able to do
                  what we like best, every pleasure is to be welcomed and every
                  pain avoided. But in certain circumstances.
                </p>
                <p>
                  So, blinded by desire, that they cannot foresee the pain and
                  trouble that are bound to ensue; and equal blame belongs to
                  those who fail in their duty through weakness of will, which
                  is the same as saying through shrinking from toil and pain.
                  These cases are perfectly simple and easy to distinguish. In a
                  free hour, when our power of choice is untrammelled and when
                  nothing prevents our being able to do what we like best, every
                  pleasure is to be welcomed and every pain avoided. But in
                  certain amount of people.
                </p> */}
              </Div>
            </Div>
            {/* End Details Post Content */}

            {/* Start Comment Section */}
            {/* <Spacing lg="30" md="30" />
            <h2 className="cs-font_50 cs-m0">Leave A Reply</h2>
            <Spacing lg="5" md="5" />
            <p className="cs-m0">
              Your email address will not be published. Required fields are
              marked *
            </p>
            <Spacing lg="40" md="30" />
            <form className="row">
              <Div className="col-lg-6">
                <label>Full Name*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
                <Div
                  data-lastpass-icon-root="true"
                  style={{
                    position: "relative",
                    height: "0px !important",
                    width: "0px !important",
                    float: "left",
                  }}
                />
              </Div>
              <Div className="col-lg-6">
                <label>Email*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
              </Div>
              <Div className="col-lg-12">
                <label>Website*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
              </Div>
              <Div className="col-lg-12">
                <label>Write Your Comment*</label>
                <textarea cols={30} rows={7} className="cs-form_field" />
                <Div className="cs-height_25 cs-height_lg_25" />
              </Div>
              <Div className="col-lg-12">
                <button className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
            </form> */}
            {/* End Comment Section */}
          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            {/* Start Sidebar */}
            <Spacing lg="0" md="80" />
            <Sidebar tagdata={blog.tags} />
            {/* End Sidebar */}
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      {/* Start Blog Details */}
      {/* Start CTA Section */}
      <Div className="container p-4 lg:p-0">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </main>
  );
}
