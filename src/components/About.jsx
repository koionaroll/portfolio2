import React from "react";
import styled from "styled-components";
import * as stylevar from "../styles/variables";
import data from "../data.json";

const Container = styled.div`
`;

const ProfileBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-bottom: 48px;

  @media (max-width: ${stylevar.style.tabletWidth}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const ProfileImage = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-color: #ccc;
  flex-shrink: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ProfileName = styled.h2`
  font-family: ${stylevar.style.blackFontFamily};
  font-size: ${stylevar.style.TitleFontSize};
  color: ${({ $isDark }) => ($isDark ? stylevar.style.lightPrimary : stylevar.style.darkPrimary)};
  margin: 0;
`;

const ProfileSubtitle = styled.p`
  font-family: ${stylevar.style.mediumFontFamily};
  font-size: ${stylevar.style.smallFontSize};
  color: ${({ $isDark }) => ($isDark ? stylevar.style.lightPrimary : stylevar.style.darkPrimary)};
  margin: 0;
`;

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

function About({ isDarkTheme }) {
  const { profile, sections } = data.about;

  return (
    <Container>
      <ProfileBlock>
        <ProfileImage>
          {profile.image && <img src={profile.image} alt={profile.name} />}
        </ProfileImage>
        <ProfileInfo>
          <ProfileName $isDark={isDarkTheme}>{profile.name}</ProfileName>
          <ProfileSubtitle $isDark={isDarkTheme}>{profile.subtitle}</ProfileSubtitle>
          <ProfileSubtitle $isDark={isDarkTheme}>{profile.subtitleUpper}</ProfileSubtitle>
        </ProfileInfo>
      </ProfileBlock>
      <SectionsGrid>
        {sections.map((section, i) => (
          <Section key={i}>
            <SectionTitle $isDark={isDarkTheme}>{section.title}</SectionTitle>
            <SectionText $isDark={isDarkTheme}>{section.text}</SectionText>
          </Section>
        ))}
      </SectionsGrid>
    </Container>
  );
}

export default About;
