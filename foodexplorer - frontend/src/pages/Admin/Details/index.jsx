import { Container, Main, Content } from "./styles"

import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

import { useAuth } from "../../../hooks/auth"

import dishesPlaceHolder from "../../../assets/placeholder.jpg"

import { PiCaretLeft } from "react-icons/pi"

import { Header } from "../../../components/admin/Header"
import { Footer } from "../../../components/Footer"
import { Tag } from "../../../components/Tag"
import { Button } from "../../../components/Button"

import { api } from "../../../services/api"

export function Details() {
  const [data, setData] = useState(null)

  const navigate = useNavigate()
  const params = useParams()

  function handleBack() {
    navigate(-1)
  }

  function handleNavigate() {
    navigate(`/new/${params.id}`)
  }

  const imageUrl = data ? `${api.defaults.baseURL}/files/${data.image}` : dishesPlaceHolder

  const { isMenuClosed } = useAuth()

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

      <div className={`btnAlign ${isMenuClosed ? "" : "hide"}`}>
        <button type="button" onClick={handleBack}><PiCaretLeft />voltar</button>
      </div>

      {isMenuClosed && data && <Main>

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

          <Button onClick={handleNavigate} title="Editar prato" />

        </Content>

      </Main>}

      <Footer />

    </Container>
  )
}