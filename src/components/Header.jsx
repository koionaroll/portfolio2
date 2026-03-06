import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as stylevar from "../styles/variables";
import Cv from "../assets/cv.svg";
import Gh from "../assets/gh.svg";
import In from "../assets/in.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${stylevar.style.tabletWidth}) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    div{
      display: flex;
      align-items: flex-end;
      line-height: 1;
    }
    /* img {
      width: 3rem;
    } */
    h3{
      width:100%;
    }
  }
  @media (min-width: ${stylevar.style.desktopWidth}) {
  }
  h1{
    font-family: 'SuperRocky';
    font-size: 2.5rem;
    font-weight:bold;
    padding-right: 2rem;
  }
`;
function Header() {
  return (
    <>
      <Container>
        <div>
          <Link to="/">
            <h1>Khôi Tran</h1>
          </Link>
          <Link to="/aboutme">
          <h2>About Me / Get in Touch</h2>
          </Link>
        </div>
        <div>
          {/* <img src={Cv} alt="CV" />
          <img src={In} alt="IN" />
          <img src={Gh} alt="GH" /> */}
          <h3>Contact</h3>

        </div>
      </Container>
    </>
  );
}

export default Header;
