import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    -webkit-font-smoothing: antialiased;   
  }

  body, input, textarea {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    outline: none;
  }

  button,a {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
  }


  a {
    text-decoration: none;
  }

  a, button {
    cursor: pointer;
    transition: filter 0.2s;
  }

  a:hover, button:hover {
    filter: brightness(0.9);
  }
`