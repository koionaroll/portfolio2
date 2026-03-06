import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Project from "./components/Project";
import Contact from "./components/Contact";
import * as stylevar from "./styles/variables";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  @media (min-width: ${stylevar.style.tabletWidth}) {
    justify-content: space-between;
    padding: 2rem;
  }
  @media (min-width: ${stylevar.style.desktopWidth}) {
    margin: 0 auto;
    max-width: 79.5rem;
  }
`;

function App() {
  return (
    <>
      <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Grid />} />
          <Route path="/project/:name" element={<Project />} />
          <Route path="/aboutme" element={<Contact />} />
        </Routes>
        <Footer />
      </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
