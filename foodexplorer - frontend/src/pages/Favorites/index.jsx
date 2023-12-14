import { Container, Main } from "./styles"

import { useState, useEffect } from "react"

import { useAuth } from "../../hooks/auth"

import { Header } from "../../components/Header"
import { FavoriteItem } from "../../components/FavoriteItem"
import { Footer } from "../../components/Footer"

import { api } from "../../services/api"

export function Favorites() {
  const { isMenuClosed, search, favorites } = useAuth()

  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchFavorites() {
      if (favorites.length > 0) {
        const response = await api.get(`/dishes?name=${search}&favorites=${favorites.join(",")}`)
        setData(response.data)
      } else {
        setData([])
      }
    }

    fetchFavorites()

  }, [search, favorites])

  return (

    <Container>

      <Header />

      {isMenuClosed &&

        <Main>

          <h2>Meus Favoritos</h2>

          <div className="content">
            {
              data.map(item => (
                <FavoriteItem
                  key={String(item.id)}
                  data={item}
                />
              ))
            }
          </div>

        </Main>}

      <Footer />
      
    </Container>
  )

}