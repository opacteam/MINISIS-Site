/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Performance from "assets/feature/performance.svg";
import Partnership from "assets/feature/partnership.svg";
import Subscription from "assets/feature/subscription.svg";
import Support from "assets/feature/support.svg";

const data = [
  {
    id: 1,
    imgSrc: Subscription,
    altText: "MINT / MINISIS Integrated Archives, Library, and Museum System",
    title: "MINT / MINISIS Integrated Archives, Library, and Museum System",
    text:
      "Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world."
  },
  {
    id: 2,
    imgSrc: Support,
    altText: "M2L / MINISIS Management for Libraries",
    title: "M2L / MINISIS Management for Libraries",
    text:
      "We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers."
  },
  {
    id: 3,
    imgSrc: Support,
    altText: "M2A / MINISIS Management for Archives",
    title: "M2A / MINISIS Management for Archives",
    text:
      "We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers."
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "M3 / MINISIS Management for Museums",
    title: "M3 / MINISIS Management for Museums",
    text:
      "We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers."
  }
];

export default function Feature() {
  return (
    <section sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader slogan="Our Products" title="Our Core Products" />

        <Grid sx={styles.grid}>
          {data.map(item => (
            <FeatureCard
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
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      "40px 0",
      null,
      "45px 30px",
      null,
      "60px 50px",
      "70px 50px",
      null,
      "80px 90px"
    ],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)"]
  }
};
