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
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3.6rem clamp(2rem,60vw - 20.5rem,5rem);;  

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

  >.align{
    margin-top: 2.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;

    >button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.7rem;

      background: ${({ theme }) => theme.COLORS.TOMATO_100};
      border: none;
      border-radius: 0.3rem;

      font-size: 1.1rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      height: 3.8rem;
      width: 18.8rem;

      >svg {
        font-size: 2.2rem;
      }
    }
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

    .align {
      gap: 3.3rem;

      >button {
        height: 4.8rem;
        width: 16rem;
        border-radius: 0.5rem;
        font-size: 1.4rem;
        
        >svg {
          display: none;
        }
      }
    }
  }
`

export const Amount = styled.div`
  display: flex;
  gap: 1.4rem;
  justify-content: center;
  align-items: center;

  >p {
      font-size: 2.2rem;
      font-weight: 700;
    }

  >button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    display: flex;

    >svg {
      font-size: 3.1rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.MEDIA.SIZE}) {
    >p {
      font-size: 2.2rem;
      font-weight: 700;
    }

    >button{
        >svg {
          font-size: 2.6rem;
        }
    }
  }
`