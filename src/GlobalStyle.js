import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({ theme }) => theme.color.lightgrey};
    color: ${({ theme }) => theme.color.black};
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.5;
    overflow-x: hidden;
  }

  #root {
    min-height: 100vh;
    overflow-x: hidden;
  }

  button, input {
    font-family: inherit;
  }
`;
