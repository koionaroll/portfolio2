import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import * as stylevar from "../styles/variables";
import gmailIcon from "../assets/gmail.svg";
import linkedinIcon from "../assets/in.svg";
import githubIcon from "../assets/gh.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  color: ${(props) => (props.isDarkTheme ? stylevar.style.lightPrimary : stylevar.style.darkPrimary)};
  font-family: ${stylevar.style.mediumFontFamily};
`;

const Email = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  input {
    border: none;
    padding: 1rem;
    font-size: 1rem;
    width: 100%;
    background-color: ${(props) => (props.isDarkTheme ? stylevar.style.lightPrimary : stylevar.style.darkPrimary)};
    color: ${(props) => (props.isDarkTheme ? stylevar.style.darkPrimary : stylevar.style.lightPrimary)};
    box-sizing: border-box;

    &::placeholder {
      color: ${(props) => (props.isDarkTheme ? stylevar.style.darkPrimary : stylevar.style.lightPrimary)};
    }
  }

  textarea {
    border: none;
    padding: 1rem;
    font-size: ${stylevar.style.smallFontSize};
    font-weight: 500;
    width: 100%;
    height: 200px;
    background-color: ${(props) => (props.isDarkTheme ? stylevar.style.lightPrimary : stylevar.style.darkPrimary)};
    color: ${(props) => (props.isDarkTheme ? stylevar.style.darkPrimary : stylevar.style.lightPrimary)};
    box-sizing: border-box;
    font-family: inherit;

      &::placeholder {
      color: ${(props) => (props.isDarkTheme ? stylevar.style.darkPrimary : stylevar.style.lightPrimary)};
    }
  }

  button {
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: ${stylevar.style.smallFontSize};
    width: fit-content;
    background-color: ${(props) => (props.isDarkTheme ? stylevar.style.lightPrimary : stylevar.style.darkPrimary)};
    color: ${(props) => (props.isDarkTheme ? stylevar.style.darkPrimary : stylevar.style.lightPrimary)};
    cursor: pointer;
    align-self: flex-end;
    transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out, color 0.2s ease-in-out;

    &:hover {
      background-color: ${(props) => (props.isDarkTheme ? stylevar.style.darkPrimary : stylevar.style.lightPrimary)};
      color: ${(props) => (props.isDarkTheme ? stylevar.style.lightPrimary : stylevar.style.darkPrimary)};
    }

    @media (min-width: ${stylevar.style.tabletWidth}) {
      padding: 1rem 2rem;
      font-size: ${stylevar.style.smallFontSize};
    }
  }

  section {
    height: 4rem;
    display: flex;
    flex-direction: column;
    font-size: ${stylevar.style.smallFontSize};
    color: ${(props) => (props.isDarkTheme ? stylevar.style.lightPrimary : stylevar.style.darkPrimary)};
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  margin: 1.25rem 0 4.3rem;
`;

const IconLink = styled.a`
  width: 3.25rem;
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

function Contact({ isDarkTheme }) {
  const ref = useRef(null);
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [reload, setReload] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      ref.current.name.value === "" ||
      ref.current.email.value === "" ||
      ref.current.message.value === ""
    ) {
      setEmpty(true);
      return;
    } else {
      setEmpty(false);
    }
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        ref.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSuccess(true);
          setTimeout(() => {
            setReload(1);
            setTimeout(() => {
              setReload(2);
              setTimeout(() => {
                setReload(3);
                setTimeout(() => {
                  navigate("/");
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Container>
      <Content>
        <Email ref={ref} onSubmit={handleSubmit} isDarkTheme={isDarkTheme}>
          <FormSection>
            <Label isDarkTheme={isDarkTheme}>Name</Label>
            <input type="text" name="name" placeholder="Your name" />
          </FormSection>

          <FormSection>
            <Label isDarkTheme={isDarkTheme}>Email</Label>
            <input type="email" name="email" placeholder="your@email.com" />
          </FormSection>

          <FormSection>
            <Label isDarkTheme={isDarkTheme}>Message</Label>
            <textarea
              name="message"
              placeholder="Write me anything // Écrivez-moi en français aussi"
              rows={10}
            />
          </FormSection>

          <button type="submit" value="Send">
            Send
          </button>

          <section>
            {success
              ? "Your message has been sent. I will get back to you shortly :) "
              : null}
            {empty ? "Please fill out all empty forms." : null}
            <div>
              {reload === 1 ? "Reloading in 3 ... " : null}
              {reload === 2 ? "Reloading in 2 ... " : null}
              {reload === 3 ? "Reloading in 1 ... " : null}
            </div>
          </section>
        </Email>
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
      </Content>
    </Container>
  );
}

export default Contact;