import styled from "styled-components"

export const Container = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0.5rem 0.8rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
`