import styled from "styled-components"

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 32rem;
  margin: 0 auto;

  >h1 {
    font-size: 3.7rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    display: flex;
    margin-top: 15.8rem;
    margin-bottom:4rem;

    background: linear-gradient(45deg, red, violet, indigo, blue, green, yellow, orange, red);
    background-clip: text;
    -webkit-background-clip: text;
    background-size: 200% 100%;
    animation: rainbowText 8s linear 2s infinite;
    
    >svg {
      font-size: 4.3rem;
      margin-right: 1.1rem;
      color: ${({ theme }) => theme.COLORS.CAKE_100};
    }
  }

  @media (min-width: ${({ theme }) => theme.MEDIA.SIZE}) {
    height: 100vh;
    width: 100vw;
    min-height: 65rem;
    margin: 0;

    display: flex;
    flex-direction: row;
    gap: clamp(10rem,15vw,30.6rem);
    align-items: center;
    justify-content: center;

    >h1 {
      margin: 0;
      font-size: 4.2rem;

      >svg {
        font-size: 4.7rem;
      }
    }
  }
`

export const Form = styled.form`
  padding: 0 1rem;
  width: 33.6rem;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  animation: topdown 400ms ease 50ms backwards;

  h2 {
    display: none;
  }

  >a {
    margin: 0 auto;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
  
  input:focus {
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    border-radius: 0.5rem;
  }

  >input {
    border: none;
    border-radius: 0.5rem;
    padding: 1.3rem 0;
    background: ${({ theme }) => theme.COLORS.TOMATO_100};

    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  @media (min-width: ${({ theme }) => theme.MEDIA.SIZE}) {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    width: 47.6rem;
    padding: 6.4rem;
    border-radius: 1.6rem;

    >h2 {
      font-family: "Poppins", sans-serif;
      font-weight: 400;
      margin: 0 auto;
      display: block;
      font-size: 3.2rem;
    }
  }
`