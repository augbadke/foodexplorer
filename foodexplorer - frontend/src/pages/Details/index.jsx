import { Container, Main, Content, Amount } from "./styles"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

import { useAuth } from "../../hooks/auth"

import dishesPlaceHolder from "../../assets/placeholder.jpg"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { PiCaretLeft, PiReceipt } from "react-icons/pi"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Tag } from "../../components/Tag"

import { api } from "../../services/api"

export function Details() {
  const navigate = useNavigate()
  const { cart, setCart } = useAuth()
  const [quantity, setQuantity] = useState(1)
  const [data, setData] = useState(null)
  const params = useParams()
  const { isMenuClosed } = useAuth()
  const imageUrl = data ? `${api.defaults.baseURL}/files/${data.image}` : dishesPlaceHolder

  function add() {
    setQuantity(prevState => prevState + 1)
    // setQuantity = qualquerNome => qualquerNome + 1
  }

  function reduce() {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  function handleCart() {
    const existingDish = cart.find((item) => item.name === data.name)

    if (existingDish) {
      const updatedCart = cart.map((item) =>
        item.name === data.name
          ? { ...item, quantity: quantity }
          : item
      )
      setCart(updatedCart)
    } else {
      setCart([...cart, { id: data.id, name: data.name, quantity: quantity, price: data.price, image: imageUrl }])
    }
  }

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)
      setData(response.data)
    }

    fetchDish()
  }, [])

  return (
    <Container>

      <Header />

      {isMenuClosed &&
        <div className="btnAlign">
          <button type="button" onClick={handleBack}><PiCaretLeft />voltar</button>
        </div>
      }

      {data && isMenuClosed && <Main>

        <img src={`${data.image ? imageUrl : dishesPlaceHolder}`} />

        <Content>

          <h1>{data.name}</h1>

          <p>{data.descriptions}</p>

          {data.tags && <div className="tags-wrapper">
            {
              data.tags.map(tag => (
                <Tag key={String(tag.id)} title={tag.name} />
              ))
            }
          </div>}

          <div className="align">
            <Amount>
              <button type="button" onClick={reduce}><AiOutlineMinus /></button>
              <p>{quantity.toString().padStart(2, "0")}</p>
              <button type="button" onClick={add}><AiOutlinePlus /></button>
            </Amount>

            <button onClick={handleCart}><PiReceipt /> incluir ∙ R$ {data.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</button>
          </div>

        </Content>

      </Main>}

      <Footer />

    </Container>
  )
}