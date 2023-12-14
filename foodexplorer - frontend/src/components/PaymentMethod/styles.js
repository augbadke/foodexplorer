import styled from "styled-components"

export const Container = styled.div`
  width: 35.3rem;
  border: 1px solid ${({theme}) => theme.COLORS.LIGHT_600};
  border-radius: 8px;
  overflow: hidden;

  &.removeBorder {
    border: none;
  } 

  .align {
    display: flex;

    >.selected {
      background: ${({theme}) => theme.COLORS.DARK_800};
    }

    >button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.4rem;
      width: 50%;
      height: 8.1rem;
      background: transparent;
      border: none;
      border-bottom: 1px solid ${({theme}) => theme.COLORS.LIGHT_600};

      font-size: 1.6rem;
      color: ${({theme}) => theme.COLORS.LIGHT_100};
      font-weight: 400;
    }

    >button:first-child {
      border-right: 1px solid ${({theme}) => theme.COLORS.LIGHT_600};
    }
  }

  svg {
    font-size: 2.8rem;
  }

  >img {
    display: block;
    margin: 3rem auto;
  }

  .card-form {
    margin: 0 auto;
    padding: 5rem 2.6rem;
    display: flex;
    flex-direction: column;
    gap: 3.7rem;
    text-align: left;

    >img {
        width: 2.4rem;
        height: 2.4rem;
    }
  }

  label {
    display: block;
    margin-bottom: 1rem;

    font-size: 1.6rem;
    color: ${({theme}) => theme.COLORS.LIGHT_400};
  }

  input { 
    width: 100%;
    padding: 1.2rem 1.4rem;
    background: transparent;
    border: 1px solid ${({theme}) => theme.COLORS.LIGHT_400};
    border-radius: 5px;

    color: ${({theme}) => theme.COLORS.LIGHT_400};
  }

  .expiration-cvc {
    display: flex;
    gap: 1.7rem;
  }

  .order-status {
    height: 38.1rem;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    gap: 3.3rem;

    >svg {
      font-size: 9.6rem;
      color: ${({theme}) => theme.COLORS.LIGHT_600};
    }

    >h2 {
      font-size: 2rem;
      color: ${({theme}) => theme.COLORS.LIGHT_600};
      font-weight: 700;
    }
  }

  @media (min-width: ${({theme}) => theme.MEDIA.SIZE}) {
    width: 53rem;

    >img {
      width: 25rem;
      height: 25rem;
      margin: 5.7rem auto;
    }

    .card-form {
      padding: 5rem 0;
      width: 34.8rem;
    }

    .order-status {
      height: 31.1rem;

      >svg {
        font-size: 12.8rem;
      }

      >h2 {
        font-size: 2.4rem;
      }
    }
  }
`