import Cta from "@/components/Cta";
import Div from "@/components/Div";
import PageHeading from "@/components/PageHeading";
import SectionHeading from "@/components/SectionHeading";
import Spacing from "@/components/Spacing";
import Team from "@/components/Team";

export default function Page() {
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

  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between p-0">
      <PageHeading
        title="Our Team"
        bgSrc="images/team_hero_bg.jpeg"
        pageLinkText="Team"
      />
      <Div className="container p-24">
        <SectionHeading
          title="Meet our awesome <br/>team members"
          subtitle="Our Team"
          variant="cs-style1 text-center"
          btnLink="/team"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          {teamData.map((item, index) => (
            <Div key={index} className="col-lg-3 col-sm-6">
              <Team
                memberId={item.id}
                memberImage={item.memberImage}
                memberName={item.memberName}
                memberDesignation={item.memberDesignation}
                memberSocial={item.memberSocial}
              />
              <Spacing lg="80" md="30" />
            </Div>
          ))}
        </Div>
        <Spacing lg="70" md="50" />
        <Div className="container">
          <Cta
            title="Let’s disscuse make <br />something <i>cool</i> together"
            btnText="Apply For Meeting"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
    </main>
  );
}
