/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Secure from "assets/key-feature/Secure.png";
import Cloud from "assets/key-feature/Cloud.png";
import Complete from "assets/key-feature/Complete.png";
import Design from "assets/key-feature/Design.png";
import Help from "assets/key-feature/Help.png";
import FeatureCard from "components/feature-card";

const data = [
  {
    id: 1,
    imgSrc: Secure,
    altText: "Secure & Customizable",
    title: "Secure & Customizable",
    text:
      "All of our software runs on the MINISIS core database engine which uses a unique markup language. This keeps it safe from hackers targeting more common languages, and being able to create custom solutions."
  },
  {
    id: 2,
    imgSrc: Cloud,
    altText: "Cloud-based Hosting & Web Solutions",
    title: "Cloud-based Hosting & Web Solutions",
    text:
      "Our hosted solutions on the MS Azure Platform allow for redundant system availability without any need for local management. Enjoy the freedom to focus on your daily work activities and not IM/IT."
  },
  {
    id: 3,
    imgSrc: Design,
    altText: "Full Design Services",
    title: "Full Design Services",
    text:
      "We are familiar with guiding clients through the process of bringing a collection online as well as integrating into an existing website. This allows us to keep costs low and deliver projects quickly."
  },
  {
    id: 4,
    imgSrc: Help,
    altText: "Personal Help & Easy Tutorials",
    title: "Personal Help & Easy Tutorials",
    text:
      "As a MINISIS client you will have access to our log in area where you can find video tutorials, industry resources, events, and a full client support system. "
  }
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="features">
      <Container>
        <SectionHeader slogan="Our Features" title="Test Title"></SectionHeader>
        <Grid sx={styles.grid}>
          {data.map(item => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px"
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)"
    ]
  }
};
