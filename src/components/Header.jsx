import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import * as stylevar from "../styles/variables";
import BarsIcon from "../assets/bars.svg";
import XIcon from "../assets/x.svg";

const HeaderContainer = styled.header`
  background-color: ${(props) => (props.isDarkTheme ? stylevar.style.lightPrimary : stylevar.style.darkPrimary)};
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  transition: background-color 0.3s ease;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0;

  @media (min-width: ${stylevar.style.tabletWidth}) {
    padding: 0.5rem 1rem;
  }

  @media (min-width: ${stylevar.style.desktopWidth}) {
    max-width: 79.5rem;
    padding: 0.5rem 2rem;
  }
`;

const Logo = styled.button`
  background: none;
  border: none;
  text-decoration: none;
  color: ${(props) => (props.isDarkTheme ? stylevar.style.darkPrimary : stylevar.style.lightPrimary)};
  cursor: pointer;
  transition: color 0.3s ease;

  h1 {
    font-family: ${stylevar.style.blackFontFamily};
    font-size: ${stylevar.style.TitleFontSize};
    margin: 0;
    padding: 0;
  }
`;

const NavMenu = styled.nav`
  display: none;
  gap: 3rem;

  @media (min-width: ${stylevar.style.tabletWidth}) {
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: ${(props) => (props.isDarkTheme ? stylevar.style.darkPrimary : stylevar.style.lightPrimary)};
    font-family: ${stylevar.style.mediumFontFamily};
    font-size: ${stylevar.style.mediumFontSize};
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const HamburgerMenu = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  position: relative;
  z-index: 101;

  @media (min-width: ${stylevar.style.tabletWidth}) {
    display: none;
  }

  .bars-icon {
    width: 100%;
    height: 100%;
    filter: ${(props) => (props.isDarkTheme ? "brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)" : "brightness(0) saturate(100%) invert(88%) sepia(7%) saturate(431%) hue-rotate(33deg) brightness(97%) contrast(94%)")};
    opacity: ${(props) => (props.isOpen ? 0 : 1)};
    transition: opacity 0.15s ease;
  }

  .x-icon {
    position: absolute;
    width: 100%;
    height: 100%;
    filter: ${(props) => (props.isDarkTheme ? "brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)" : "brightness(0) saturate(100%) invert(88%) sepia(7%) saturate(431%) hue-rotate(33deg) brightness(97%) contrast(94%)")};
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    transition: opacity 0.15s ease;
  }
`;

const MobileMenu = styled.nav`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${(props) => (props.isDarkTheme ? stylevar.style.lightPrimary : stylevar.style.darkPrimary)};
  padding: 2rem 1rem;
  gap: 1.5rem;
  width: 100%;
  box-sizing: border-box;
  border-top: 1px solid ${stylevar.style.lightPrimary};
  animation: ${(props) => (props.isOpen ? "slideDown" : "none")} 0.2s ease-out;
  transition: background-color 0.3s ease;

  @media (min-width: ${stylevar.style.tabletWidth}) {
    display: none;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  a {
    text-decoration: none;
    color: ${(props) => (props.isDarkTheme ? stylevar.style.darkPrimary : stylevar.style.lightPrimary)};
    font-family: ${stylevar.style.mediumFontFamily};
    font-size: ${stylevar.style.mediumFontSize};
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const MobileLanguageToggle = styled.button`
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${(props) => (props.isDarkTheme ? stylevar.style.darkPrimary : stylevar.style.lightPrimary)};
  border: none;
  color: ${(props) => (props.isDarkTheme ? stylevar.style.lightPrimary : stylevar.style.darkPrimary)};
  font-family: ${stylevar.style.mediumFontFamily};
  font-size: ${stylevar.style.smallFontSize};
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  align-items: center;
  justify-content: center;
  align-self: flex-start;

  @media (min-width: ${stylevar.style.tabletWidth}) {
    display: none;
  }

  &:hover {
    opacity: 0.9;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
`;

const LanguageToggle = styled.button`
  display: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${(props) => (props.isDarkTheme ? stylevar.style.darkPrimary : stylevar.style.lightPrimary)};
  border: none;
  color: ${(props) => (props.isDarkTheme ? stylevar.style.lightPrimary : stylevar.style.darkPrimary)};
  font-family: ${stylevar.style.mediumFontFamily};
  font-size: ${stylevar.style.smallFontSize};
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (min-width: ${stylevar.style.tabletWidth}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    opacity: 0.9;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
`;

function Header({ isDarkTheme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "FR" : "EN");
  };

  const handleLogoClick = () => {
    toggleTheme();
  };

  let logoText = "Khôi Tran";
  if (location.pathname === "/") {
    logoText = "Khôi Tran";
  } else if (location.pathname.startsWith("/project/")) {
    const pathParts = location.pathname.split('/');
    logoText = decodeURIComponent(pathParts[2]);
  } else if (location.pathname === "/contact") {
    logoText = "Contact";
  } else if (location.pathname === "/about") {
    logoText = "About";
  }

  return (
    <HeaderContainer isDarkTheme={isDarkTheme}>
      <HeaderContent>
        <Logo onClick={handleLogoClick} isDarkTheme={isDarkTheme}>
          <h1>{logoText}</h1>
        </Logo>
        <NavMenu isDarkTheme={isDarkTheme}>
          <Link to="/about">About</Link>
          <Link to="/">Projects</Link>
          <Link to="/contact">Contact</Link>
          <LanguageToggle isDarkTheme={isDarkTheme} onClick={toggleLanguage}>
            {language}
          </LanguageToggle>
        </NavMenu>
        <HamburgerMenu isOpen={isMenuOpen} isDarkTheme={isDarkTheme} onClick={toggleMenu}>
          <img src={BarsIcon} alt="Menu" className="bars-icon" />
          <img src={XIcon} alt="Close" className="x-icon" />
        </HamburgerMenu>
        <MobileMenu isOpen={isMenuOpen} isDarkTheme={isDarkTheme}>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Projects
          </Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          <MobileLanguageToggle isDarkTheme={isDarkTheme} onClick={toggleLanguage}>
            {language}
          </MobileLanguageToggle>
        </MobileMenu>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
