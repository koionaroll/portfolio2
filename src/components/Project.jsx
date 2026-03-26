import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import * as stylevar from "../styles/variables";
import styled from "styled-components";

const Container = styled.div``;

const SectionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: ${stylevar.style.desktopWidth}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${stylevar.style.tabletWidth}) {
    grid-template-columns: 1fr;
  }
`;

const Section = styled.div``;

const SectionMedia = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`;

const SectionImage = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
`;

const SectionVideo = styled.video`
  width: 100%;
  display: block;
  object-fit: cover;
`;

const SectionTitle = styled.h3`
  font-family: ${stylevar.style.blackFontFamily};
  font-size: ${stylevar.style.largeFontSize};
  color: ${({ $isDark }) => ($isDark ? stylevar.style.lightPrimary : stylevar.style.darkPrimary)};
  margin: 0 0 12px 0;
`;

const SectionText = styled.p`
  font-family: ${stylevar.style.mediumFontFamily};
  font-size: ${stylevar.style.smallFontSize};
  color: ${({ $isDark }) => ($isDark ? stylevar.style.lightPrimary : stylevar.style.darkPrimary)};
  line-height: 1.7;
  text-align: justify;
  margin: 0;
`;

const DateTag = styled.p`
  font-family: ${stylevar.style.mediumFontFamily};
  font-size: ${stylevar.style.smallFontSize};
  color: ${({ $isDark }) => ($isDark ? stylevar.style.lightPrimary : stylevar.style.darkPrimary)};
  margin: 0 0 32px 0;
`;

function Project({ isDarkTheme }) {
  const { name } = useParams();
  const project = data.projects.find((p) => p.name === name);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <Container>
      <DateTag $isDark={isDarkTheme}>{project.date}</DateTag>
      <SectionsGrid>
        {project.sections.map((section, i) => (
          <Section key={i}>
            <SectionTitle $isDark={isDarkTheme}>{section.title}</SectionTitle>
            {(section.image || section.video) && (
              <SectionMedia>
                {section.image && (
                  <SectionImage src={section.image} alt={section.title} />
                )}
                {section.video && (
                  <SectionVideo
                    src={section.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                )}
              </SectionMedia>
            )}
            <SectionText $isDark={isDarkTheme}>{section.text}</SectionText>
          </Section>
        ))}
      </SectionsGrid>
    </Container>
  );
}

export default Project;