import { Container, Group } from "./styles"

import { useState, useEffect } from "react"

import { useAuth } from "../../hooks/auth"

import decorationBig from "../../assets/pngegg1.png"
import decorationSmall from "../../assets/pngegg2.png"

import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Dishes } from "../../components/Dishes"
import { Footer } from "../../components/Footer"

import { api } from "../../services/api"

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
  }, [search]) //aqui o useEffect é executado somente uma vez quando o componente é renderizado

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

        {meals.length > 0 && <Section title="Refeições">
          {
            meals.map(meal => (
              <Dishes
                key={String(meal.id)}
                data={meal}
              />
            ))
          }
        </Section>}

        {desserts.length > 0 && <Section title="Sobremesas">
          {
            desserts.map(dessert => (
              <Dishes
                key={String(dessert.id)}
                data={dessert}
              />
            ))
          }
        </Section>}

        {drinks.length > 0 && <Section title="Bebidas">
          {
            drinks.map(drink => (
              <Dishes
                key={String(drink.id)}
                data={drink}
              />
            ))
          }
        </Section>}

      </div>}

      <Footer />
      
    </Container>
  )
}