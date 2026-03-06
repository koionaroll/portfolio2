import React from 'react'
import * as stylevar from "../styles/variables";
import styled from "styled-components";

const Container = styled.div`
`;

const Profile = styled.div`

`
const GetInTouch = styled.div`

`

function Contact({ isDarkTheme }) {
  return (
    <Container>
    <Profile>contact</Profile>
    <GetInTouch>projects</GetInTouch>
    </Container>
  )
}

export default Contact