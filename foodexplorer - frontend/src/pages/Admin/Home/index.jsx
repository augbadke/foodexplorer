import { Container, Group } from "./styles"

import { useState, useEffect } from "react"

import { useAuth } from "../../../hooks/auth"

import decorationBig from "../../../assets/pngegg1.png"
import decorationSmall from "../../../assets/pngegg2.png"

import { Header } from "../../../components/admin/Header"
import { Section } from "../../../components/Section"
import { Dishes } from "../../../components/admin/Dishes"
import { Footer } from "../../../components/Footer"

import { api } from "../../../services/api"

export function Home() {
  const { isMenuClosed, search } = useAuth()
  const [meals, setMeals] = useState([])
  const [desserts, setDesserts] = useState([])
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?name=${search}`)
      setMeals(response.data.filter(options => options.category === "Refeição"))
      setDesserts(response.data.filter(options => options.category === "Sobremesa"))
      setDrinks(response.data.filter(options => options.category === "Bebida"))
    }

    fetchDishes()
  }, [search])

  return (
    <Container>

      <Header />

      {isMenuClosed && <div>
        <Group>
          <img className="small" src={decorationSmall} />
          <img className="big" src={decorationBig} />
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </Group>

        {meals.length > 0 ? <Section title="Refeições">
          {
            meals.map(meal => (
              <Dishes
                key={String(meal.id)}
                data={meal}
              />
            ))
          }
        </Section> : null}

        {desserts.length > 0 ? <Section title="Sobremesas">
          {
            desserts.map(dessert => (
              <Dishes
                key={String(dessert.id)}
                data={dessert}
              // onClick={()=>handleDetails(dessert.id)}
              />
            ))
          }
        </Section> : null}

        {drinks.length > 0 ? <Section title="Bebidas">
          {
            drinks.map(drink => (
              <Dishes
                key={String(drink.id)}
                data={drink}
              // onClick={()=>handleDetails(drink.id)}
              />
            ))
          }
        </Section> : null}
      </div>}

      <Footer />
    </Container>
  )
}