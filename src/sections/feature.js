/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import MINT from "assets/feature/mint2.png";
import M2L from "assets/feature/m2l2.png";
import M3 from "assets/feature/m32.png";
import M2A from "assets/feature/m2a2.png";

const data = [
  {
    id: 1,
    imgSrc: MINT,
    altText: "MINT / MINISIS Integrated Archives, Library, and Museum System",
    title: "MINT / MINISIS Integrated Archives, Library, and Museum System",
    text:
      "MINISIS Inc. has proved that it is possible to fully integrate archival, library, and museum items in one system — without compromising the documentation standards privy to each descriptive focus."
  },
  {
    id: 2,
    imgSrc: M2L,
    altText: "M2L / MINISIS Management for Libraries",
    title: "M2L / MINISIS Management for Libraries",
    text:
      "M2L is a completely integrated library system that has captured the attention of specialized, reference, public, and national libraries throughout the world."
  },
  {
    id: 3,
    imgSrc: M2A,
    altText: "M2A / MINISIS Management for Archives",
    title: "M2A / MINISIS Management for Archives",
    text:
      "M2A is a fully integrated, pre-defined application for managing all aspects of archiving, from accessioning and description, to conservation, circulation, dynamic online access, and reading room management."
  },
  {
    id: 4,
    imgSrc: M3,
    altText: "M3 / MINISIS Management for Museums",
    title: "M3 / MINISIS Management for Museums",
    text:
      "M3 is one of the world’s top collections management systems. It has been accredited three times by the CHIN Collections Software Review and is consistently ranked in the top 5 worldwide."
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
