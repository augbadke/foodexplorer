import styled from "styled-components"

export const Container = styled.section`
  margin-left: 2.4rem;
  margin-bottom: 2.4rem;

  >h2 {
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    font-family: "Poppins", sans-serif;
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 2.4rem;
  }

  >button {
    display: none;
  }

  >.left {
    left: 0;
  }

  >.right {
    right: 0;
  }

  .scroll {
    overflow-x: auto;
    scroll-behavior: smooth;
    scrollbar-width: none;

    >div {
      display: flex;
      gap: 1.6rem;
    }
  }

  .scroll::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${({theme}) => theme.MEDIA.SIZE}) {
    margin: 0 auto;
    width: clamp(90rem,100vw - 5rem,112rem);
    margin-bottom: 4.7rem;
    position: relative;

    > h2 {
      font-size: 3.2rem;
    }

    >button {
      display: block;
      position: absolute;
      background: none;
      border: none;
      
      font-size: 4rem;
      color: ${({theme}) => theme.COLORS.LIGHT_100};

      top: 50%;
    }

    .scroll {
      >div {
        gap: 2.7rem;
      }
    }

    .scroll::after {
      content: "";
      width: 100%;
      height: 46.2rem;
      background: linear-gradient(90deg, rgba(0,10,15,1) 0%, rgba(0,10,15,0) 15%, rgba(1,15,0,0) 85%, rgba(0,10,15,1) 100%);
      position: absolute;
      top: 70px;
      left: 0;
      pointer-events: none;
    }
  }
`