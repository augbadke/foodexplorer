import { Container, Main, Orders, Table } from "./styles"

import { useState, useEffect } from "react"
import { useAuth } from "../../../hooks/auth"

import { Header } from "../../../components/admin/Header"
import { Select } from "../../../components/admin/Select"
import { Footer } from "../../../components/Footer"

import { api } from "../../../services/api"

export function OrdersHistory() {
  const { isMenuClosed } = useAuth()
  const [data, setData] = useState([])

  function formatDate(date) {
    const newDate = new Date(date)
    const padStart2 = (value) => value.toString().padStart(2, "0")

    return `${padStart2(newDate.getDate())}/${padStart2(newDate.getMonth() + 1)} às ${padStart2(newDate.getHours())}h${padStart2(newDate.getMinutes())}`
  }

  useEffect(() => {

    async function fetchHistory() {
      const response = await api.get(`/payment`)
      setData(response.data)
    }

    fetchHistory()

  }, [])

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
                {/* <p><span className={`status-indicator ${item.status}`}></span> {item.status}</p> */}
                <p>{formatDate(item.created_at)}</p>
              </div>
              <p>{item.orders}</p>
              <Select defaultValue={item.status} orderId={item.id} userId={item.user_id} />
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
                <td>
                  <Select defaultValue={item.status} orderId={item.id} userId={item.user_id} />
                </td>
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