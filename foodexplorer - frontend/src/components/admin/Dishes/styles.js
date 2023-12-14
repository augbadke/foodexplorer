import styled from "styled-components"

export const Container = styled.div`
  width: 21rem;
  height: 29.2rem;
  background: ${({ theme }) => theme.COLORS.DARK_200};

  border-radius: 0.8rem;

  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-shrink: 0;

  >button {
    background: none;
    border: none;
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;

    >svg{
      font-size: 3.1rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300}
    }
  }

  >img {
    width: 8.8rem;
    height: 8.8rem;
    border-radius: 50%;

    cursor: pointer;
  }

  >a {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  >h2 {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  >p {
    display: none;
  }


  @media (min-width: ${({ theme }) => theme.MEDIA.SIZE}) {
    width: 30.4rem;
    height: 46.2rem;
    gap: 1.5rem;

    >img {
      width: 17.6rem;
      height: 17.6rem;
    }

    >a {
      font-size: 2.4rem;
    }

    >h2 {
      font-size: 3.2rem;
      line-height: 5.5rem;
    }

    >p {
      display: block;
      font-size: 1.4rem;
      line-height: 2.3rem;
      font-weight: 300;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};

      text-align: center;
    }
  }
`