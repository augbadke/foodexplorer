import { Container } from "./styles"

import { Link, useNavigate } from "react-router-dom"

import dishesPlaceHolder from "../../../assets/placeholder.jpg"
import { PiPencilSimple } from "react-icons/pi"

import { api } from "../../../services/api"

export function Dishes({ data, ...rest }) {

  const imageUrl = data.image ? `${api.defaults.baseURL}/files/${data.image}` : dishesPlaceHolder
  const navigate = useNavigate()

  function handleNavigate() {
    navigate(`/new/${data.id}`)
  }

  return (
    <Container {...rest}>
      <button onClick={handleNavigate}><PiPencilSimple /></button>

      <img onClick={() => navigate(`/details/${data.id}`)} src={imageUrl} alt="Foto do prato" />

      <Link to={`/details/${data.id}`}>{data.name} &gt;</Link>
      <p>{data.descriptions}</p>
      <h2>{data.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h2>

    </Container>
  )
}