import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import * as stylevar from "../styles/variables";
import styled from "styled-components";

const Container = styled.div``;

const SectionsGrid = styled.div`
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: repeat(${({ columns }) => Math.min(columns, 3)}, 1fr);
  gap: 40px;

  @media (max-width: ${stylevar.style.desktopWidth}) {
    grid-template-columns: repeat(${({ columns }) => Math.min(columns, 2)}, 1fr);
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

const MediaSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 48px;
`;

const MediaItem = styled.div`
  width: 100%;
`;

const MediaTitle = styled.h4`
  font-family: ${stylevar.style.blackFontFamily};
  font-size: ${stylevar.style.largeFontSize};
  color: ${({ $isDark }) => ($isDark ? stylevar.style.lightPrimary : stylevar.style.darkPrimary)};
  margin: 0 0 12px 0;
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

  const textSections = project.textSections || [];
  const mediaSections = project.mediaSections || [];

  return (
    <Container>
      <DateTag $isDark={isDarkTheme}>{project.date}</DateTag>

      <SectionsGrid columns={Math.max(textSections.length, 1)}>
        {textSections.map((section, i) => (
          <Section key={i}>
            <SectionTitle $isDark={isDarkTheme}>{section.title}</SectionTitle>
            <SectionText $isDark={isDarkTheme}>{section.text}</SectionText>
          </Section>
        ))}
      </SectionsGrid>

      {mediaSections.length > 0 && (
        <MediaSection>
          {mediaSections.map((section, i) => (
            <MediaItem key={i}>
              {section.title && (
                <MediaTitle $isDark={isDarkTheme}>{section.title}</MediaTitle>
              )}
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
            </MediaItem>
          ))}
        </MediaSection>
      )}
    </Container>
  );
}

export default Project;