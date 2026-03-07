import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
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
  min-height: 100vh;
  background-color: ${(props) => (props.isDarkTheme ? stylevar.style.darkPrimary : stylevar.style.lightPrimary)};
  color: ${(props) => (props.isDarkTheme ? stylevar.style.lightPrimary : stylevar.style.darkPrimary)};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem;

  @media (min-width: ${stylevar.style.tabletWidth}) {
    padding: 2rem;
  }

  @media (min-width: ${stylevar.style.desktopWidth}) {
    margin: 0 auto;
    max-width: 79.5rem;
    width: 100%;
  }
`;

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("isDarkTheme");
    if (savedTheme !== null) {
      setIsDarkTheme(JSON.parse(savedTheme));
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem("isDarkTheme", JSON.stringify(newTheme));
  };

  return (
    <>
      <BrowserRouter>
        <Container isDarkTheme={isDarkTheme}>
          <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
          <MainContent>
            <Routes>
              <Route path="/" element={<Grid isDarkTheme={isDarkTheme} />} />
              <Route path="/project/:name" element={<Project isDarkTheme={isDarkTheme} />} />
              <Route path="/about" element={<About isDarkTheme={isDarkTheme} />} />
              <Route path="/contact" element={<Contact isDarkTheme={isDarkTheme} />} />
            </Routes>
            <Footer isDarkTheme={isDarkTheme} />
          </MainContent>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
