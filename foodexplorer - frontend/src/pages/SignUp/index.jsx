import { Container, Form } from "./styles"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BsFillHexagonFill } from "react-icons/bs"

import { Input } from "../../components/Input"

import { api } from "../../services/api"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp(e) {
    e.preventDefault()
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }

    if (password.length < 6) {
      return alert("A senha deve ter no mínimo 6 caracteres!")
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!")
        navigate("/")
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível cadastrar")
        }
      })
  }

  return (
    <Container>

      <h1><BsFillHexagonFill />food explorer</h1>

      <Form onSubmit={handleSignUp}>

        <h2>Crie sua conta</h2>
        
        <Input title="Seu nome"
          idname="name"
          placeholder="Exemplo: Maria da Silva"
          type="text"
          required
          onChange={e => setName(e.target.value)}
        />

        <Input title="E-mail"
          idname="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="email"
          required
          onChange={e => setEmail(e.target.value)}
        />

        <Input title="Senha"
          idname="password"
          placeholder="No mínimo 6 caracteres"
          type="password"
          minLength={6}
          required
          onChange={e => setPassword(e.target.value)}
        />

        <input type="submit" value="Criar conta" />

        <Link to="/">Já tenho uma conta</Link>

      </Form>

    </Container>
  )
}