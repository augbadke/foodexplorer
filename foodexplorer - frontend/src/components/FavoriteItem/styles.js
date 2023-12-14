import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.3rem;

  max-height: 10.4rem;

  >img {
    border-radius: 50%;
    width: 7.2rem;
    height: 7.2rem;
  }

  h2 {
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
    font-weight: 500;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }

  button {
    background: none;
    border: none;

    color: ${({theme}) => theme.COLORS.TOMATO_400};
    font-size: 1.2rem;
    font-weight: 400;
  }
`