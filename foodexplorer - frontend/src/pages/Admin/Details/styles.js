import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  min-width: 375px;
  display: grid;
  grid-template-rows: auto auto 1fr auto;

  .hide {
    display: none;
  }

  .btnAlign {

    >button {
    margin-top: 3.6rem;
    margin-left: 5rem;
    margin-bottom: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    width: max-content;
    border: none;
    background: none;

      >svg {
        font-size: 3.3rem;
      }
    } 
  }

  @media (min-width: ${({ theme }) => theme.MEDIA.SIZE}) {
      
    .btnAlign {
      margin: 0 auto 1.6rem;
      width: clamp(90rem,100vw - 5rem,112rem);

      >button {
        margin-left: 0;
      } 
    }  
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 5rem 4.8rem;
  animation: topdown 400ms ease 50ms backwards;

  >img {
    width: 26.4rem;
    height: 26.4rem;
    border-radius: 50%;
    align-self: center;
  }

  @media (min-width: ${({ theme }) => theme.MEDIA.SIZE}) {
    flex-direction: row;
    padding: 0;
    width: clamp(90rem,100vw - 5rem,112rem);
    margin: 0 auto;
    gap: 4.7rem;
    align-self: start;

    >img {
        width: 39rem;
        height: 39rem;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  >h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 2.7rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  >p {
    font-family: "Poppins", sans-serif;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    text-align: center;
  }

  >.tags-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2.4rem;
  }

  >button {
    margin-top: 2.8rem;
    max-width: 31.6rem;
  }

  @media (min-width: ${({ theme }) => theme.MEDIA.SIZE}) {
    align-items: start;

    >h1 {
      font-size: 4rem;
    }

    p{
      text-align: left;
      font-size: 2.4rem;
    }

    >.tags-wrapper {
      justify-content: left;
      gap: 1.2rem;
    }

    >button {
      margin-top: 2.8rem;
      width: 13.1rem;
    }
  }
`