import styled from "styled-components"

export const Container = styled.div`
  min-width: 375px;
  height: 100vh;
  margin: 0 auto;

  >.hide {
    display: none;
  }

  >.set-animation {
    animation: topdown 400ms ease 50ms backwards;
  }

  @media (min-width: ${({ theme }) => theme.MEDIA.SIZE}) {
    max-width: 100%;
  }
`

export const Group = styled.div`
  height: 12rem;
  width: auto;
  padding-top: 3.6rem;
  padding-left: clamp(10.3rem,100vw - 27.2rem,15.3rem);
  padding-right: 2.1rem;
  margin: 4.4rem 1.6rem 6.2rem 3.6rem;

  position: relative;
  
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);

  .small {
    position: absolute;
    width: clamp(14rem,102vw - 24.25rem,19.1rem);
    height: 14.9rem;
    bottom: 0;
    left: -3rem;
  }

  .big {
    display: none;
  }

  >h2 {
    font-size: clamp(1.8rem, 4vw, 3rem);
    font-weight: 600;
    margin-bottom: 0.3rem;
  }

  >p {
    font-size: clamp(1.2rem, 2vw, 1.6rem);
    font-weight: 400;
  }

  @media (min-width: ${({ theme }) => theme.MEDIA.SIZE}) {
    height: 26rem;
    width: clamp(90rem,100vw - 5rem,112rem);
    padding-top: 8.8rem;
    padding-left: clamp(44rem,60vw - 12rem,59.8rem);
    margin: 16.4rem auto 6.2rem;

    .small {
      display: none;
    }

    .big {
      display: block;
      position: absolute;
      width: clamp(50rem,60vw,65.6rem);
      height: 41.2rem;
      bottom: -1.3rem;
      left: -7rem;
    }

    >h2 {
      font-size: 4rem;
      font-weight: 500;
      margin-bottom: 0.4rem;
    }
    >p {
      font-family: "Roboto", sans-serif;
      font-size: 1.6rem;
    }
  }
`