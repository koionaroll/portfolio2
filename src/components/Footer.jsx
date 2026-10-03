import React from "react";
import styled from "styled-components";
import * as stylevar from "../styles/variables";
import gmailIcon from "../assets/gmail.svg";
import linkedinIcon from "../assets/in.svg";
import githubIcon from "../assets/gh.svg";

const Container = styled.div`
 margin-top: 5rem;
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  margin: 1.25rem 0 4.3rem;
  @media (max-width: ${stylevar.style.tabletWidth}) {
    gap: 2rem;
    margin: 0;
    padding: 0 2rem 1rem;
    justify-content: space-between;
  }
`;
const IconLink = styled.a`
  width:4rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, opacity 0.2s ease;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;

    filter: ${(props) => (props.isDarkTheme ? "brightness(0) saturate(100%) invert(88%) sepia(7%) saturate(431%) hue-rotate(33deg) brightness(97%) contrast(94%)" 
      :"brightness(0) saturate(100%) invert(28%) sepia(7%) saturate(262%) hue-rotate(72deg) brightness(93%) contrast(88%)")};
    transition: filter 0.2s ease;
  }

  &:hover {
    transform: translateY(-2px);
    opacity: 0.85;
  }

  @media (min-width: ${stylevar.style.tabletWidth}) {
    width: 3.5rem;
    height: 3.5rem;
  }
`;


function Footer({ isDarkTheme }) {
  return (
    <Container>
       <Links>
                <IconLink
                  href="mailto:tranvankhoi2002@gmail.com"
                  aria-label="Email"
                  isDarkTheme={isDarkTheme}
                >
                  <img src={gmailIcon} alt="Email" />
                </IconLink>
                <IconLink
                  href="https://www.linkedin.com/in/tranvankhoi"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  isDarkTheme={isDarkTheme}
                >
                  <img src={linkedinIcon} alt="LinkedIn" />
                </IconLink>
                <IconLink
                  href="https://github.com/koionaroll"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  isDarkTheme={isDarkTheme}
                >
                  <img src={githubIcon} alt="GitHub" />
                </IconLink>
              </Links>
                <p>Developed by Khôi Tran</p>
    </Container>
    
  );
}

export default Footer;
