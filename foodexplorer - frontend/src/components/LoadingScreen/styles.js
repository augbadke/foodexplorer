import  styled, { keyframes } from "styled-components"

export const Container = styled.div`
  height: 11.5rem;
  width: 100%;

  position: absolute;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0,7,10,0.95);

  animation: ${({ $isloading }) => ($isloading ? slideDown : slideUp)} 0.5s ease-in-out;
  transition: visibility 0.5s ease-in-out;
  visibility: ${({ $isloading }) => ($isloading ? "visible" : "hidden")};
  
  .spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
  }

  .flex-box {
    display: flex;
    gap: 3rem;
    align-items: center;
    justify-content: center;
  }

  .align {

    >h2 {
      color: ${({theme}) => theme.COLORS.LIGHT_100};
      font-size: 2.1rem;
      font-weight: 700;
      text-align: center;

      margin-bottom: 1rem;
    }

    >p {
      color: ${({theme}) => theme.COLORS.LIGHT_400};
      font-size: 1.6rem;
      font-weight: 400;
      text-align: center;
    }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

export const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const slideUp = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;