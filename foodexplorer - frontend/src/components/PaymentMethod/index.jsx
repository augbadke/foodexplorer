import { Container } from "./styles"

import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

import { useAuth } from "../../hooks/auth"

import { PiCreditCard, PiCheckCircle, PiXCircle } from "react-icons/pi"

import { Button } from "../Button"

import pixIcon from "../../assets/pix-icon.png"
import qrCode from "../../assets/qrcode 1.png"

import { api } from "../../services/api"

export function PaymentMethod({ data, ...rest }) {

  const [paymentMethod, setPaymentMethod] = useState("pix")
  const [expirationDate, setExpirationDate] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [cvc, setCvc] = useState("")
  const [orderStatus, setOrderStatus] = useState("Waiting")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const { cart, setCart, user } = useAuth()

  function handleCardNumber(e) {
    const value = e.target.value

    // Remove espaços e não dígitos
    const formattedValue = value.replace(/[\s-]/g, "").replace(/\D/g, "")

    // Adiciona espaços a cada 4 dígitos
    let formattedOutput = ""
    for (let i = 0; i < formattedValue.length; i += 4) {
      formattedOutput += formattedValue.slice(i, i + 4) + " "
    }

    // Remove o espaço em branco extra no final (se houver)
    if (formattedOutput.endsWith(" ")) {
      formattedOutput = formattedOutput.slice(0, -1)
    }

    setCardNumber(formattedOutput)
  }

  function handleExpirationDate(e) {
    const value = e.target.value

    const formattedValue = value
      .replace(/\D/g, "") // Remova caracteres não numéricos
      .slice(0, 4) // Limite o comprimento a 4 dígitos

    let formattedOutput = formattedValue
    if (formattedValue.length >= 2) {
      formattedOutput = formattedValue.slice(0, 2)

      if (formattedValue.length > 2) {
        formattedOutput += "/" + formattedValue.slice(2)
      }
    }

    setExpirationDate(formattedOutput)
  }

  const handlePayment = () => {

    setLoading(true)
    payment().then((response) => {
      setOrderStatus(response.data.status)
      setLoading(false)
    })

  }

  async function payment() {
    const orders = cart.map(item => `${item.quantity} x ${item.name}`).join(", ")
    const creditCard = `${cardNumber} ${expirationDate} ${cvc}`

    return await api.post("/payment", { user_id: user.id, orders, creditCard })
  }

  useEffect(() => {

    if (orderStatus === "Pendente") {
      setTimeout(async () => {
        setCart([])
        navigate("/history")
      }, 3000)
    }

    if (orderStatus === "Failed") {
      setTimeout(async () => {
        setOrderStatus("Waiting")
      }, 2000)
    }

  }, [orderStatus])

  return (
    <Container className={cart.length > 0 ? "" : "removeBorder"}>
      {cart.length > 0 && <div className="align">
        <button onClick={() => setPaymentMethod("pix")} className={paymentMethod === "pix" ? "selected" : ""}><img src={pixIcon} alt="Icone do pix" /> PIX</button>
        <button onClick={() => setPaymentMethod("credit card")} className={paymentMethod === "credit card" ? "selected" : ""}><PiCreditCard />Crédito</button>
      </div>}

      {cart.length > 0 && orderStatus == "Waiting" && paymentMethod == "pix" && <img src={qrCode} alt="Imagem do QrCode" />}

      {cart.length > 0 && orderStatus == "Waiting" && paymentMethod == "credit card" && <form className="card-form">
        <div>
          <label htmlFor="card-number">Número do Cartão</label>
          <input
            type="text"
            id="card-number"
            placeholder="0000 0000 0000 0000"
            maxLength="19"
            value={cardNumber}
            onChange={handleCardNumber}
          />
        </div>

        <div className="expiration-cvc">
          <div className="expiration">
            <label htmlFor="expiration">Validade</label>
            <input
              type="text"
              id="expiration"
              placeholder="04/25"
              value={expirationDate}
              onChange={handleExpirationDate}
            />
          </div>

          <div className="cvc">
            <label htmlFor="cvc">CVC</label>
            <input
              type="text"
              id="cvc"
              placeholder="000"
              maxLength="3"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
            />
          </div>
        </div>
        <Button 
          onClick={handlePayment} 
          title={loading ? "Carregando..." : "Finalizar pagamento"}
          disabled={loading}
        />
      </form>}

      {orderStatus == "Failed" && <div className="order-status">
        <PiXCircle />
        <h2>Erro no pagamento</h2>
      </div>}

      {orderStatus == "Pendente" && <div className="order-status">
        <PiCheckCircle />
        <h2>Pagamento confirmado!</h2>
      </div>}

    </Container>
  )
}

