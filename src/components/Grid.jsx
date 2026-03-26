import React from "react";
import styled from "styled-components";
import * as stylevar from "../styles/variables";
import data from "../data.json";
import { Link } from "react-router-dom";

const ProjectCard = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  background-color: ${(props) => (props.isDarkTheme ? stylevar.style.darkPrimary : stylevar.style.lightPrimary)};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: ${(props) => (props.isDarkTheme ? 
    "0 7px 15px rgba(255, 255, 255, 0.5)"
    :"0 7px 15px rgba(0, 0, 0, 0.5)")};
  }

  &:hover img,
  &:focus-within img {
    transform: scale(1.03);
  }

  &:hover .project-overlay,
  &:focus-within .project-overlay {
    opacity: 1;
  }

  img {
    // thumbnail should be 4:3 
    width: 100%;
    height: 80%;
    object-fit: contain;
    padding: 2rem;
    transition: transform 0.2s ease;
  }

`;

const ProjectOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1.2rem;
  color: ${(props) => (props.isDarkTheme ? stylevar.style.lightPrimary : stylevar.style.darkPrimary)};
  opacity: 0;
  transition: opacity 0.2s ease;

  @media (max-width: ${stylevar.style.tabletWidth}) {
    opacity: 1;
  }
`;

const OverlayTitle = styled.h3`
  margin: 0;
  font-family: ${stylevar.style.blackFontFamily};
  font-size: ${stylevar.style.largeFontSize};
`;

const OverlayDescription = styled.p`
  margin: 0;
  font-family: ${stylevar.style.mediumFontFamily};
  font-size: ${stylevar.style.smallFontSize};
  line-height: 1.45;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const StackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`;

const StackItem = styled.span`
  border: 1px solid ${(props) => (props.isDarkTheme ? stylevar.style.lightPrimary : stylevar.style.darkPrimary)};
  border-radius: 999px;
  padding: 0.2rem 0.55rem;
  font-family: ${stylevar.style.mediumFontFamily};
  font-size: 0.75rem;
`;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  width: 100%;

  @media (min-width: ${stylevar.style.tabletWidth}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (min-width: ${stylevar.style.desktopWidth}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`;

const Container = styled.div``;

function Grid({ isDarkTheme }) {  
  return (
    <Container>
      <GridLayout>
        {data.projects.map((project, index) => (
          <Link key={index} to={`/project/${project.name}`} style={{ textDecoration: "none" }}>
            <ProjectCard isDarkTheme={isDarkTheme}>
              {project.thumbnail ? (
                <img src={project.thumbnail} alt={project.name} />
              ) : (
                <span>{project.name}</span>
              )}
              <ProjectOverlay className="project-overlay" isDarkTheme={isDarkTheme}>
                <OverlayTitle>{project.name}</OverlayTitle>
                <OverlayDescription>{project.shortDescription || "No description available."}</OverlayDescription>
                <StackList>
                  {(project.stack || []).map((item) => (
                    <StackItem key={item} isDarkTheme={isDarkTheme}>{item}</StackItem>
                  ))}
                </StackList>
              </ProjectOverlay>
            </ProjectCard>
          </Link>
        ))}
      </GridLayout>
    </Container>
  );
}

export default Grid;
