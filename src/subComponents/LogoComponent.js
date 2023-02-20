import React from "react";
import styled from "styled-components";
import { DarkTheme } from "../components/Themes";

const Logo = styled.h4`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  font-family: "Poppins", sans-serif;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;

const LogoComponent = (props) => {
  return <Logo color={props.theme}>Yamikani</Logo>;
};

export default LogoComponent;
