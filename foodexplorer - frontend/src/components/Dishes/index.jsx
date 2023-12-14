import { Container, Quantity } from "./styles"

import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

import { useAuth } from "../../hooks/auth"

import { Button } from "../../components/Button"
import dishesPlaceHolder from "../../assets/placeholder.jpg"
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

import { api } from "../../services/api"

export function Dishes({ data, ...rest }) {
  const { user, favorites, setFavorites, cart, setCart } = useAuth()

  const [isFavorite, setIsFavorite] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const navigate = useNavigate()

  const imageUrl = data.image ? `${api.defaults.baseURL}/files/${data.image}` : dishesPlaceHolder

  async function handleLike() {
    let addFavorites = [...favorites, data.id]

    setFavorites(addFavorites)

    setIsFavorite((prevState) => !prevState)

    const id = user.id
    await api.put(`/users`, { id, favorites: addFavorites })
  }

  async function handleDislike() {

    const filteredFavorites = favorites.filter(favorite => favorite !== data.id)

    setFavorites(filteredFavorites)

    setIsFavorite((prevState) => !prevState)

    const id = user.id
    await api.put(`/users`, { id, favorites: filteredFavorites })

  }

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

  useEffect(() => {
    if (favorites) {
      const isThisFavorite = favorites.includes(data.id)
      setIsFavorite(isThisFavorite)
    } else {
      setFavorites([])
    }
  }, [])

  return (
    <Container {...rest}>
      {isFavorite ?
        <button className="like" onClick={handleDislike}><IoMdHeart /></button> :
        <button className="like" onClick={handleLike}><IoMdHeartEmpty /></button>
      }

      <img onClick={() => navigate(`/details/${data.id}`)} src={imageUrl} alt="Foto do prato" />

      <Link to={`/details/${data.id}`}>{data.name} &gt;</Link>
      <p>{data.descriptions}</p>
      <h2>{data.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h2>

      <div className="align">
        <Quantity>
          <button onClick={reduce}><AiOutlineMinus /></button>
          <p>{quantity.toString().padStart(2, "0")}</p>
          <button onClick={add}><AiOutlinePlus /></button>
        </Quantity>

        <Button onClick={handleCart} title="incluir" />
      </div>

    </Container>
  )
}