import { Container, Main } from "./styles"

import { useAuth } from "../../hooks/auth"

import { Header } from "../../components/Header"
import { PaymentMethod } from "../../components/PaymentMethod"
import { Footer } from "../../components/Footer"

export function Checkout() {
  const { isMenuClosed } = useAuth()

  return (

    <Container>

      <Header />

      {isMenuClosed && <Main>

        <h2>Pagamento</h2>

        <PaymentMethod />

      </Main>}

      <Footer />

    </Container>
  )

}