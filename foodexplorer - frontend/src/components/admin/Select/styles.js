import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  width: 100%;

  .select-header {
    display: flex;
    align-items:center;
    gap: 0.8rem;
    
    padding: 1.3rem 1.6rem;
    background: ${({theme}) => theme.COLORS.DARK_900};
    color: ${({theme}) => theme.COLORS.LIGHT_400};

    cursor: pointer;
  }

  .select-header::after {
    content: "";
    top: 1.2rem;
    right: 1.2rem;
    position: absolute;
    width: 2.4rem;
    height: 2.4rem;

    background-image: url("/src/assets/vector.svg");
    background-repeat: no-repeat;
    background-position: center;
    pointer-events: none;
  }

  .options-list {
    list-style: none;
    padding: 0;
    margin: 0;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.DARK_900};
    border: 1px solid ${({theme}) => theme.COLORS.LIGHT_600};
    z-index: 1;
  }

  .options-list li {
    display: flex;
    align-items:center;
    gap: 0.8rem;
    padding: 10px;
    color: ${({theme}) => theme.COLORS.LIGHT_400};
    cursor: pointer;
  }

  .options-list li:hover {
    background-color: ${({theme}) => theme.COLORS.LIGHT_700};
  }

  .highlighted {
    background-color: ${({theme}) => theme.COLORS.LIGHT_700};
  }

  span {
    width: .8rem;
    height: .8rem;
    border-radius: 50%;
  }

  .Pendente {
    background: ${({theme}) => theme.COLORS.TOMATO_300};
  }

  .Preparando {
    background: ${({theme}) => theme.COLORS.CARROT_100};
  }

  .Entregue {
    background: ${({theme}) => theme.COLORS.MINT_100};
  }
`