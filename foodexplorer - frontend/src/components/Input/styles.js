import styled from "styled-components"

export const Container = styled.div`
  color: ${({theme}) => theme.COLORS.LIGHT_400};

  label {
    display:inline-block;
    margin-bottom: 0.8rem;
  }

  .dark900{
    background: ${({theme}) => theme.COLORS.DARK_900};
  }

  .dark800{
    background: ${({theme}) => theme.COLORS.DARK_800};
  }

  >div {
    display: flex;
    align-items: center;
    border-radius: 0.8rem;
      
    >input {
      height: 4.8rem;
      width: 100%;

      padding: 1.2rem;

      color: ${({theme}) => theme.COLORS.LIGHT_100};
      background: transparent;
      border: 0;

      &:placeholder {
        color: ${({theme}) => theme.COLORS.LIGHT_500};
      }
    }

    input:-webkit-autofill{
      border-radius: 0.8rem;
      -webkit-text-fill-color: ${({theme}) => theme.COLORS.DARK_100};
      box-shadow: inset 0 0 10rem 10rem ${({theme}) => theme.COLORS.LIGHT_300};
    }
    
    >svg {
        font-size: 2.6rem;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
    }
  }
`