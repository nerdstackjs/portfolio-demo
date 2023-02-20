import React from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { DarkTheme, lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";

import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Skills from "./components/Skills";

require("dotenv").config();

function App() {
  // const k = process.env.React;
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/" component={About} />
          <Route exact path="/" component={Contact} />
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/" component={Services} />
          <Route exact path="/" component={Skills} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
