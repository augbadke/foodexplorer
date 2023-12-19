import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  min-width: 375px;
  display: grid;
  grid-template-rows: auto 1fr auto;

  >.hide {
      display: none;
  }
`

export const Main = styled.div`
  padding: 5.6rem 3.5rem 4rem;
  animation: topdown 400ms ease 50ms backwards;

  >.content {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    >h2 {
      font-family: "Poppins", sans-serif;
      font-size: 3.2rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      margin-bottom: 1.1rem;
    }

    >h3 {
      font-family: "Poppins", sans-serif;
      font-size: 2rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    >button {
      align-self: end;
      width: 21.6rem;
      margin-top: 1.5rem;
    }
  }

  .payment {
    display: none;
  }
  
  @media (min-width: ${({ theme }) => theme.MEDIA.SIZE}) {

    display: flex;
    justify-content: space-between;
    width: clamp(90rem,100vw - 5rem,112rem);
    margin: 0 auto;
    padding: 3.4rem 0;

    >.content {

      >button {
          display: none;
      }
    }

    .payment {
      display: flex;
      flex-direction: column;
      gap: 3.2rem;

      >h2 {
        font-family: "Poppins", sans-serif;
        font-size: 3.2rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }
    }
  }
`

export const CartItems = styled.div`

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
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    display: flex;
    align-items: center;
    gap: 1rem;

    flex-wrap: wrap;
  }
  
  span {
    font-family: "Roboto", sans-serif;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  button {
    background: none;
    border: none;

    color: ${({ theme }) => theme.COLORS.TOMATO_400};
    font-size: 1.2rem;
    font-weight: 400;
  }

`