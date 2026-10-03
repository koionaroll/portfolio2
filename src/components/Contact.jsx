import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import * as stylevar from "../styles/variables";

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
      </Content>
    </Container>
  );
}

export default Contact;