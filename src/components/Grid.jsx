import React, { useEffect } from "react";
import styled from "styled-components";
import * as stylevar from "../styles/variables";
import data from "../projectData.json";
import { Link } from "react-router-dom";

const Project = styled.div`
  width: 100%;
  height: 25vh;
  background-color: gray;
  border: 1px solid black;
`;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* gap: 1rem; */
  justify-content: space-between;
  width: 100%;

  @media (min-width: ${stylevar.style.tabletWidth}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Container = styled.div`
`;

function Grid() {
  useEffect(() => {
    console.log(data.projects[0].name);
  }, []);

  return (
    <Container>
      <GridLayout>
        {data.projects.map((project, index) => (
          <Link key={index} to={`/project/${project.name}`}>
            <Project>{project.name}</Project>
          </Link>
        ))}
      </GridLayout>
    </Container>
  );
}

export default Grid;
