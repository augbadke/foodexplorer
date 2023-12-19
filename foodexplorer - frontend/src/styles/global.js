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

  @keyframes rainbowText {
    0% {
      background-position: 100% 0;
    }

    15% {
      background-position: 0% 0;
      color: transparent;
    }

    30% {
      background-position: -100% 0;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  @keyframes topdown {
    0% {
      opacity: 0;
      transform: translateY(-25px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);

    }
  }
`