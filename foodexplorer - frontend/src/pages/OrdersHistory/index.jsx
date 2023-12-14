import { Container, Main, Orders, Table } from "./styles"

import { useState, useEffect, useRef } from "react"
import { useAuth } from "../../hooks/auth"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

import { api } from "../../services/api"

import { io } from "socket.io-client"

const ENDPOINT = "http://localhost:3000"

export function OrdersHistory() {
  const { isMenuClosed, user } = useAuth()
  const [data, setData] = useState([])
  const [shouldRerender, setShouldRerender] = useState("")
  const socketRef = useRef(null)

  function formatDate(date) {
    const newDate = new Date(date)
    const padStart2 = (value) => value.toString().padStart(2, "0")

    return `${padStart2(newDate.getDate())}/${padStart2(newDate.getMonth() + 1)} às ${padStart2(newDate.getHours())}h${padStart2(newDate.getMinutes())}`
  }

  useEffect(() => {

    async function fetchHistory() {
      const response = await api.get(`/payment/${user.id}`)
      setData(response.data)
    }

    fetchHistory()

    socketRef.current = io(ENDPOINT, {
      query: {
        userId: user.id,
      },
    })

    socketRef.current.on("statusChange", (data) => {
      setShouldRerender(data)
    })

    return () => {
      socketRef.current.disconnect()
    }
  }, [shouldRerender])

  return (

    <Container>

      <Header />

      {isMenuClosed && <Main>

        <h2>Pedidos</h2>

        {
          data.map(item => (
            <Orders key={String(item.id)}>
              <div className="align">
                <p>{item.id.toString().padStart(6, "0")}</p>
                <p><span className={`status-indicator ${item.status}`}></span> {item.status}</p>
                <p>{formatDate(item.created_at)}</p>
              </div>
              <p>{item.orders}</p>
            </Orders>
          ))
        }

        <Table>

          <thead>
            <tr>
              <th>Status</th>
              <th>Código</th>
              <th>Detalhamento</th>
              <th>Data e hora</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td><p><span className={`status-indicator ${item.status}`}></span> {item.status}</p></td>
                <td>{item.id.toString().padStart(6, "0")}</td>
                <td>{item.orders}</td>
                <td>{formatDate(item.created_at)}</td>
              </tr>
            ))}
          </tbody>

        </Table>

      </Main>}

      <Footer />

    </Container>
  )
}