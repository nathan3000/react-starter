import React from "react";
import { ThemeProvider } from "emotion-theming";
import GlobalStyles from "./GlobalStyles";
import theme from "../theme";

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);
