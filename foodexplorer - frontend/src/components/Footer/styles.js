import styled from "styled-components"

export const Container = styled.footer`
  background: ${({theme}) => theme.COLORS.DARK_700};

  width: 100%;

  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;

  padding: 3rem 2.78rem;

  >h1 {
    display: flex;
    justify-content: center;
    gap: 0.65rem;

    color: ${({theme}) => theme.COLORS.LIGHT_700};
    font-size: 1.5rem;

    >svg {
      font-size: 1.9rem;
      color: ${({theme}) => theme.COLORS.LIGHT_700};
    }
  }

  >p {
    font-family: "DM Sans", sans-serif;
    font-size: 1.2rem;
    color: ${({theme}) => theme.COLORS.LIGHT_200};
  }

  @media (min-width: ${({theme}) => theme.MEDIA.SIZE}) {
    justify-content: center;
    gap: clamp(20rem,50vw,69.4rem);
    
    >h1 {
      font-size: 2.4rem;
      white-space: nowrap;

      >svg {
        font-size: 3rem;
      }
    }

    >p {
      font-family: "Roboto", sans-serif;
      font-size: 1.4rem;
      white-space: nowrap;
    }
  }
`