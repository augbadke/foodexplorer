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

  >h2 {
    font-family: "Poppins", sans-serif;
    font-size: 3.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-bottom: 4.3rem;
  }

  >.content {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  @media (min-width: ${({ theme }) => theme.MEDIA.SIZE}) {

    width: clamp(90rem,100vw - 5rem,112rem);
    margin: 0 auto;
    padding: 3.4rem 0;

    >.content {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 4.8rem;
    }
  }
`