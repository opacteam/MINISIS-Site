/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import TeamCard from "components/team-card";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import Chris from "assets/team/christopher2.jpg";
import Richard from "assets/team/richard.jpg";
import Karen from "assets/team/karen.jpg";
import Mary from "assets/team/mary.jpg";
import Karl from "assets/team/karl.jpg";
import Kyle from "assets/team/kyle.jpg";

const data = [
  {
    id: 1,
    imgSrc: Chris,
    altText: "Christopher Burcsik",
    title: "Christopher Burcsik",
    designation: "CEO and Founder",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaInstagram />
      }
    ]
  },
  {
    id: 2,
    imgSrc: Richard,
    altText: "Richard Lee",
    title: "Richard Lee",
    designation: "Chief Architect",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaInstagram />
      }
    ]
  },
  {
    id: 3,
    imgSrc: Mary,
    altText: "Mary Campbell",
    title: "Mary Campbell",
    designation: "Software Specialist",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaInstagram />
      }
    ]
  },
  {
    id: 4,
    imgSrc: Karen,
    altText: "Karen Nishimura",
    title: "Karen Nishimura",
    designation: "Software Specialist",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaInstagram />
      }
    ]
  },
  {
    id: 5,
    imgSrc: Karl,
    altText: "Karl Walk",
    title: "Karl Walk",
    designation: "Software Specialist",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaInstagram />
      }
    ]
  },
  {
    id: 6,
    imgSrc: Kyle,
    altText: "Kyle Handsaeme",
    title: "Kyle Handsaeme",
    designation: "Software Specialist",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaInstagram />
      }
    ]
  }
];

export default function TeamSection() {
  return (
    <section id="team">
      <Container>
        <SectionHeader slogan="our team" title="Team" />

        <Grid sx={styles.grid}>
          {data.map(item => (
            <TeamCard
              key={item.id}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ["35px 0px", null, 0, null, null, "30px 35px"],
    gridTemplateColumns: [
      "repeat(2,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)"
    ]
  }
};
