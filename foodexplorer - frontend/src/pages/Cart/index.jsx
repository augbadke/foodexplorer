import { Container, Main, CartItems } from "./styles"

import { useNavigate } from "react-router-dom"

import { useAuth } from "../../hooks/auth"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"
import { PaymentMethod } from "../../components/PaymentMethod"

export function Cart() {
  const { isMenuClosed, cart, setCart } = useAuth()
  const navigate = useNavigate()

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  function romoveFromCart(item_id) {
    const updatedCart = cart.filter(item => item.id !== item_id)
    setCart(updatedCart)
  }

  return (

    <Container>

      <Header />

      {isMenuClosed && <Main>

        <div className="content">

          <h2>Meu pedido</h2>

          {
            cart.map(item => (
              <CartItems key={String(item.id)}>
                <img src={item.image} alt="Foto do prato" />
                <div className="align">
                  <h2>{item.quantity} x {item.name} <span>R$ {item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span></h2>
                  <button onClick={() => romoveFromCart(item.id)}>Excluir</button>
                </div>
              </CartItems>
            ))
          }

          <h3>Total: R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>

          {cart.length > 0 && <Button onClick={() => navigate("/checkout")} title="Avançar" />}

        </div>

        {cart.length > 0 && <div className="payment">

          <h2>Pagamento</h2>

          <PaymentMethod />

        </div>}

      </Main> }

      <Footer />
      
    </Container>
  )

}