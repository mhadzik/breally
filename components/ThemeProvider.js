import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import defaultTheme from "../styles/theme";
import { rem } from "polished";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }


  :root {
    --font-size-base: ${rem(16)};

  }


  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-size: var(--font-size-base);
    margin: 0;

    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;

    overflow-x: hidden;
  }

  

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
    line-height: 1.2;
    margin-top: 0.6em;
    margin-bottom: 1.4em;
  }

  h3, h4, h5 {
    line-height: 1.6;
  }

  p {
    line-height: 1.6;
    margin-top: 0;
    margin-bottom: 0;
  }

  

  ul {
    list-style: none;
    padding-left: 0;
  }

 
`;

export default function ThemeProvider({ children }) {
  return (
    <StyledThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
}
