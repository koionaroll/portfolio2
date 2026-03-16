import React, { useEffect } from "react";
import styled from "styled-components";
import * as stylevar from "../styles/variables";
import data from "../data.json";
import { Link } from "react-router-dom";

const ProjectCard = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background-color: ${(props) => (props.isDarkTheme ? stylevar.style.darkPrimary : stylevar.style.lightPrimary)};
  border: 2px solid ${(props) => (props.isDarkTheme ? stylevar.style.lightPrimary : stylevar.style.darkPrimary)};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    /* box-shadow: 0 7px 15px rgba(0, 0, 0, 0.5); */
    box-shadow: ${(props) => (props.isDarkTheme ? 
    "0 7px 15px rgba(255, 255, 255, 0.5)"
    :"0 7px 15px rgba(0, 0, 0, 0.5)")};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 2rem;
  }
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
  useEffect(() => {
    console.log(data.projects[0].name);
  }, []);

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
            </ProjectCard>
          </Link>
        ))}
      </GridLayout>
    </Container>
  );
}

export default Grid;
