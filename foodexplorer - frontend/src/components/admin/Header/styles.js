import styled from "styled-components"
import { Link } from 'react-router-dom'

export const Container = styled.header`
  background: ${({ theme }) => theme.COLORS.DARK_700};

  width: 100%;

  .align {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 5rem 2.8rem 2.5rem;

    >h1 {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.8rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 2.1rem;

      cursor: pointer;

      >svg {
        font-size: 2.5rem;
        color: ${({ theme }) => theme.COLORS.CAKE_100};
      }

      >a {
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        display: none;
      }

      >span {
        font-size: 1.2rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.CAKE_200};
      }
    }
  }


  @media (min-width: ${({ theme }) => theme.MEDIA.SIZE}) {

    .align{
      padding: 2.8rem 0;
      justify-content: space-between;
      gap: 2rem;
      width: clamp(90rem,100vw - 5rem,112rem);
      margin: 0 auto;

      >h1 {
        font-size: 2.4rem;
        position: relative;
        white-space: nowrap;

        >svg {
          font-size: 3rem;
        }

        span {
          position: absolute;
          bottom: -12px;
          right: 0;
        }
      }
    }
  }     
`

export const Menu = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;

  >svg {
    font-size:2.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  @media (min-width: 950px) {
    display: none;
  }
`

export const New = styled(Link)`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  display: none;

  @media (min-width: 950px) {
    display: block;
    white-space: nowrap;
  }
`

export const Orders = styled.button`
  border: none;
  background: none;
  position: relative;
  display: flex;
  justify-content: center;
  align-items:center;

  >p {
    display: none;
  }

  >svg {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.MEDIA.SIZE}) {
    background: ${({ theme }) => theme.COLORS.TOMATO_100};
    padding: 1.2rem 4.6rem;
    gap: 0.8rem;
    border-radius: 5px;
    white-space: nowrap;

    >p {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      display: block;
    }

    >svg {
      display: block;
      font-size: 3.3rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`

export const Search = styled.div`
  display: none;
  width: 43%;

  >div {

    >div {
      margin: 0;
      padding-left: clamp(1rem,50vw - 54rem,10.2rem);
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