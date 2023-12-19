import styled from "styled-components"

export const Container = styled.header`
  background: ${({ theme }) => theme.COLORS.DARK_700};

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5rem 2.8rem 2.5rem;

  >h1 {
    display: flex;
    justify-content: center;
    gap: 0.8rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 2.1rem;
    white-space: nowrap;

    background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet, red);
    background-clip: text;
    -webkit-background-clip: text;
    background-size: 150% 100%;
    animation: rainbowText 6s linear 2s infinite;

    cursor: pointer;

    >svg {
      font-size: 2.5rem;
      color: ${({ theme }) => theme.COLORS.CAKE_100};
    }
  }

  >a {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.MEDIA.SIZE}) {
    padding: 2.8rem 0;
    justify-content: space-between;
    width: clamp(90rem,100vw - 5rem,112rem);
    margin: 0 auto;
    gap: 2rem;

    h1::before {
      content: "";
      height: 11.3rem;
      width: 100%;
      background: ${({ theme }) => theme.COLORS.DARK_700};
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }

    >h1 {
      font-size: 2.4rem;

      >svg {
        font-size: 3rem;
      }
    }

    >a {
      display: block;
    }
  }
`

export const BtnMenu = styled.button`
  border: none;
  background: none;

  >svg {
    font-size:2.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  @media (min-width: 950px) {
    display: none;
  }
`

export const Orders = styled.button`
  border: none;
  background: none;
  position: relative;
  display: flex;
  justify-content: center;
  align-items:center;

  >div {
    position: absolute;
    background: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    top: -0.5rem;
    right: -0.5rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items:center;
  }

  >svg {
    font-size: 3.3rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  >p {
    display: none;
  }

  @media (min-width: 1120px) {
    background: ${({ theme }) => theme.COLORS.TOMATO_100};
    padding: 1.2rem 3.2rem;
    gap: 0.8rem;
    border-radius: 5px;

    >div {
      display: none;
    }

    >p {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      display: block;
      white-space: nowrap;
    }
  }
`

export const Search = styled.div`
  display: none;
  width: 30rem;
  
  >div {

    >div {
      margin: 0;
      padding-left: 0.5rem;
    }   
  }
  
  @media (min-width: ${({ theme }) => theme.MEDIA.SIZE}) {
      display: block;
  }
`

export const Logout = styled.button`
  border: none;
  background: none;
  display: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 3rem;
  }

  @media (min-width: ${({ theme }) => theme.MEDIA.SIZE}) {
    display: block;
  }
`

export const MenuOpen = styled.div`
  height: calc(100vh - 8rem);
  display: flex;
  flex-direction: column;
`

export const MenuHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 1.3rem;
  padding: 5.6rem 0 2.4rem 2.2rem;
  background: ${({ theme }) => theme.COLORS.DARK_700};

  >button {
    display: flex;
    justify-content: center;
    border: none;
    background: none;

    >svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 2.7rem;
    }
  }
  >h1 {
    font-size: 2.1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`

export const MenuSearch = styled.div`
  margin: 3.6rem 2.8rem;

  >div{

    >div {
      padding-left: 1.4rem;
    }
  }
`

export const MenuOption = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-size: 2.4rem;
  font-weight: 300;
  line-height: 5rem;
  text-align: left;

  padding-left: 1rem;
  margin: 0 2.8rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
`