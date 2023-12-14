import { Container } from "./styles"

import dishesPlaceHolder from "../../assets/placeholder.jpg"

import { useAuth } from "../../hooks/auth"

import { api } from "../../services/api"

export function FavoriteItem({ data, ...rest }) {

  const { user, favorites, setFavorites } = useAuth()

  const imageUrl = data.image ? `${api.defaults.baseURL}/files/${data.image}` : dishesPlaceHolder

  async function handleDislike() {
    const filteredFavorites = favorites.filter(favorite => favorite !== data.id)
    setFavorites(filteredFavorites)

    const id = user.id
    await api.put(`/users`, { id, favorites: filteredFavorites })
  }

  return (
    <Container>
      <img src={imageUrl} alt="Foto do prato" />
      <div className="align">
        <h2>{data.name}</h2>
        <button onClick={handleDislike}>Romover dos favoritos</button>
      </div>
    </Container>
  )
}

