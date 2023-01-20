import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  body {
    margin: 0;
    font-family: "Poppins", system-ui;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
    //box-sizing: border-box;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  h1,
  h2,
  h3,
  p {
    padding: 0;
    margin: 0;
  }
  a {
    display: block;
    text-decoration: none;
  }
  img {
    display: block;
  }
`;