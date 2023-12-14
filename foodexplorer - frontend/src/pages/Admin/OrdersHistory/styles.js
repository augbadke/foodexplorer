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
  display: flex;
  flex-direction: column;
  gap: 1.7rem;

  >h2 {
    font-family: "Poppins", sans-serif;
    font-size: 3.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  p {
    display: flex;
    align-items: center;
    gap: .7rem;

    font-size: 1.4rem;
    line-height: 1.6;
    font-weight: 300;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  .status-indicator {
    width: .8rem;
    height: .8rem;
    border-radius: 50%;
  }

  .Pendente {
    background: ${({ theme }) => theme.COLORS.TOMATO_300};
  }

  .Preparando {
    background: ${({ theme }) => theme.COLORS.CARROT_100};
  }

  .Entregue {
    background: ${({ theme }) => theme.COLORS.MINT_100};
  }

  @media (min-width: ${({ theme }) => theme.MEDIA.SIZE}) {
    margin: 0 auto;
    padding: 3.4rem 0;
    width: clamp(90rem,100vw - 5rem,112rem);
    gap: 3.4rem;
  }
`

export const Orders = styled.div`
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: .8rem;
  padding: 1.6rem 2rem;

  .align {
    display: flex;
    gap: 3.1rem;
    margin-bottom: 1.6rem;
  }

  >p {
    margin-bottom: 1.6rem;
  }

  @media (min-width: ${({ theme }) => theme.MEDIA.SIZE}) {
    display: none;
  }
`

export const Table = styled.table`
  display: none;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_300}; 
  border-collapse: collapse;

  th {
    padding: 2.1rem 2.4rem;
  }
  
  td {
    padding: 1.6rem 2.4rem;
  }

  th, td {
    text-align: left;
    width: 15rem;
    border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  }

  th:first-child, td:first-child {
    width: 22rem;
  }

  th:nth-child(3), td:nth-child(3) {
    width: clamp(48rem, 70.5882353vw - 19.05882353rem, 60rem);
  }

  th:nth-child(4), td:nth-child(4) {
    white-space: nowrap;
  }

  @media (min-width: ${({ theme }) => theme.MEDIA.SIZE}) {
    display: block;
  }

`