import { Container, Form } from "./styles"

import { useState } from "react"
import { Link } from "react-router-dom"
import { BsFillHexagonFill } from "react-icons/bs"

import { useAuth } from "../../hooks/auth"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const { signIn } = useAuth()

  function handleSignIn() {
    setLoading(true)
    signIn({ email, password }).then(() => {
      setLoading(false)
    })
  }

  function singInOnPressEnter(e) {
    if (e.key === 'Enter') {
      signIn({ email, password })
    }
  }

  return (
    <Container>
      <h1><BsFillHexagonFill />food explorer</h1>
      <Form onKeyDown={singInOnPressEnter}>
        <h2>Faça login</h2>
        <Input title="E-mail"
          idname="email"
          type="text"
          autoComplete="username"
          onChange={e => setEmail(e.target.value)}
        />

        <Input title="Senha"
          idname="password"
          type="password"
          autoComplete="current-password"
          onChange={e => setPassword(e.target.value)}
        />

        <Button 
          title={loading ? "Carregando..." : "Entrar"}
          onClick={handleSignIn}
          disabled={loading} 
        />

        <Link to="/register">Criar uma conta</Link>

      </Form>

    </Container>
  )
}