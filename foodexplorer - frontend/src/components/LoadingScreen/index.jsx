import { useEffect, useState } from "react"

import { Container } from "./styles"

import { api } from "../../services/api"

export function LoadingScreen() {

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchTest() {
      setIsLoading(true)
      await api.get(`/testconection`).then((response) => {
        setIsLoading(response.data)
      }).catch(() => {
        alert("Não foi possível conectar ao servidor, tente reiniciar a página.")
        setIsLoading(false)
      })

    }

    fetchTest()

  }, [])

  return (
    <Container $isloading={isLoading}>
      <div className="flex-box">
        <div className="spinner" />
        <div className="align">
          <h2>Conectando com o servidor</h2>
          <p>Este processo pode levar alguns minutos</p>
        </div>
      </div>
    </Container>
  )
}