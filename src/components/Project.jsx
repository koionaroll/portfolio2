import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import * as stylevar from "../styles/variables";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    div{
        display: flex;
        flex-direction: column;
    }
    @media (min-width: ${stylevar.style.tabletWidth}) {
        display: flex;
    }
`;

function Project({ isDarkTheme }) {
  const { name } = useParams();
  const project = data.projects.find((project) => project.name === name);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <Container>
      <p>{project.name}</p>
      <p>{project.desc}</p>
      <div>
        {project.images.map((image, index) => (
          <img key={index} src={image} alt={`${project.name} ${index + 1}`} />
        ))}
      </div>
    </Container>
  );
}

export default Project;