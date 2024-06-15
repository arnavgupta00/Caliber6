import Cta from "@/components/Cta";
import Div from "@/components/Div";
import PageHeading from "@/components/PageHeading";
import Spacing from "@/components/Spacing";
import SocialWidget from "@/components/Widget/SocialWidget";
import Link from "next/link";
import { Icon } from '@iconify/react';

export default function Page({ params }: { params: { id: string } }) {
  const teamData = [
    {
      id: "1",
      memberImage: "/images/member_1.jpeg",
      memberName: "Melon Bulgery",
      memberDesignation: "Product Designer",
      memberSocial: {
        linkedin: "/",
        twitter: "/",
        youtube: "/",
        facebook: "/",
      },
      memberDescription:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium voltire doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
      id: "2",
      memberImage: "/images/member_2.jpeg",
      memberName: "Olinaz Fushi",
      memberDesignation: "Product Designer",
      memberSocial: {
        linkedin: "/",
        twitter: "/",
        youtube: "/",
        facebook: "/",
      },
      memberDescription:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium voltire doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
      id: "3",
      memberImage: "/images/member_3.jpeg",
      memberName: "David Elone",
      memberDesignation: "React Developer",
      memberSocial: {
        linkedin: "/",
        twitter: "/",
        youtube: "/",
        facebook: "/",
      },
      memberDescription:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium voltire doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
      id: "4",
      memberImage: "/images/member_4.jpeg",
      memberName: "Melina Opole",
      memberDesignation: "WP Developer",
      memberSocial: {
        linkedin: "/",
        twitter: "/",
        youtube: "/",
        facebook: "/",
      },
      memberDescription:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium voltire doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
      id: "5",
      memberImage: "/images/member_3.jpeg",
      memberName: "David Elone",
      memberDesignation: "React Developer",
      memberSocial: {
        linkedin: "/",
        twitter: "/",
        youtube: "/",
        facebook: "/",
      },
      memberDescription:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium voltire doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
      id: "6",
      memberImage: "/images/member_4.jpeg",
      memberName: "Melina Opole",
      memberDesignation: "WP Developer",
      memberSocial: {
        linkedin: "/",
        twitter: "/",
        youtube: "/",
        facebook: "/",
      },
      memberDescription:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium voltire doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
      id: "7",
      memberImage: "/images/member_1.jpeg",
      memberName: "Melon Bulgery",
      memberDesignation: "Product Designer",
      memberSocial: {
        linkedin: "/",
        twitter: "/",
        youtube: "/",
        facebook: "/",
      },
      memberDescription:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium voltire doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
      id: "8",
      memberImage: "/images/member_2.jpeg",
      memberName: "Olinaz Fushi",
      memberDesignation: "Product Designer",
      memberSocial: {
        linkedin: "/",
        twitter: "/",
        youtube: "/",
        facebook: "/",
      },
      memberDescription:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium voltire doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
  ];

  const member = teamData.find((member) => member.id === params.id);

  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between p-0">
      <PageHeading
        title="Team Details"
        bgSrc="/images/team_hero_bg.jpeg"
        pageLinkText="Team Details"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <img
                src="/images/member_details_1.jpeg"
                alt="Member"
                className="w-100"
              />
            </Div>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <Spacing lg="0" md="45" />
            <Div className="cs-section_heading cs-style1">
              <h2 className="cs-section_title">{member?.memberName}</h2>
              <Div className="cs-height_10 cs-height_lg_10" />
              <h3 className="cs-section_subtitle">
                {member?.memberDesignation}
              </h3>
              <Div className="cs-height_5 cs-height_lg_5" />
              <Div className="cs-separator cs-accent_bg" />
              <Div className="cs-height_45 cs-height_lg_25" />
              <p className="cs-m0">{member?.memberDescription}</p>
              {/* <Div className="cs-height_25 cs-height_lg_20" />
              <p className="cs-m0">
                Ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                quis nostrum exercitationem ullam corporis suscipit.
              </p>
              <Div className="cs-height_45 cs-height_lg_30" /> */}
              <Div className="cs-social_btns cs-style1 mt-4">
                {member?.memberSocial.linkedin && <Link href={member?.memberSocial.linkedin} className="cs-center">
                  <Icon icon="fa6-brands:linkedin-in" />
                </Link>}
                {member?.memberSocial.twitter && <Link href={member?.memberSocial.twitter} className="cs-center">
                  <Icon icon="fa6-brands:twitter" />
                </Link>}
                {member?.memberSocial.youtube && <Link href={member?.memberSocial.youtube}className="cs-center">
                  <Icon icon="fa6-brands:youtube" />
                </Link>}
                {member?.memberSocial.facebook && <Link href={member?.memberSocial.facebook} className="cs-center">
                  <Icon icon="fa6-brands:facebook" />
                </Link>}
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </main>
  );
}
