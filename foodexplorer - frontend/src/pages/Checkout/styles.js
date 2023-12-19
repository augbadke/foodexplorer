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
`