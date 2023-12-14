import { Container, BtnMenu, Orders, Search, Logout, MenuOpen, MenuHeader, MenuSearch, MenuOption } from "./styles"

import { VscChromeClose } from "react-icons/vsc"
import { BsFillHexagonFill } from "react-icons/bs"
import { SlMenu } from "react-icons/sl"
import { PiReceipt, PiMagnifyingGlassLight, PiSignOut } from "react-icons/pi"

import { Link, useNavigate } from "react-router-dom"

import { useAuth } from "../../hooks/auth"

import { Input } from "../Input"

export function Header() {
  const { signOut, isMenuClosed, setIsMenuClosed, setSearch, cart } = useAuth()

  const total = cart.reduce((acc, item) => acc + item.quantity, 0)

  const navigate = useNavigate()

  function handleSignOut() {
    const confirmed = window.confirm("Deseja realmente sair?")
    if (confirmed) {
      navigate("/")
      signOut()
      setIsMenuClosed(true)
    }
  }

  function navigateFavorites() {
    navigate("/favorites")
    setIsMenuClosed((prevState) => !prevState)
  }

  function navigateHistory() {
    navigate("/history")
    setIsMenuClosed((prevState) => !prevState)
  }

  const toggleHide = () => {
    setIsMenuClosed((prevState) => !prevState)
  }

  return (
    isMenuClosed ?

      <Container>

        <BtnMenu onClick={toggleHide}>
          <SlMenu />
        </BtnMenu>

        <h1 onClick={() => navigate("/")}><BsFillHexagonFill />food explorer</h1>

        <Search>
          <Input
            icon={PiMagnifyingGlassLight}
            placeholder="Busque por pratos ou ingredientes"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Search>

        <Link to="/favorites">Meus favoritos</Link>

        <Link to="/history">Histórico de pedidos</Link>

        <Orders onClick={() => navigate("/cart")}>
          <PiReceipt />
          <p>Pedidos <span>({total})</span></p>
          <div>{total}</div>
        </Orders>

        <Logout onClick={handleSignOut} >
          <PiSignOut />
        </Logout>

      </Container>

      :

      <MenuOpen>
        <MenuHeader>
          <button onClick={toggleHide}><VscChromeClose /></button>
          <h1>Menu</h1>
        </MenuHeader>

        <MenuSearch>
          <Input
            icon={PiMagnifyingGlassLight}
            placeholder="Busque por pratos ou ingredientes"
            onChange={(e) => setSearch(e.target.value)}
          />
        </MenuSearch>

        <MenuOption onClick={navigateFavorites} >
          Meus favoritos
        </MenuOption>

        <MenuOption onClick={navigateHistory}>
          Histórico de pedidos
        </MenuOption>

        <MenuOption onClick={handleSignOut} >
          Sair
        </MenuOption>

      </MenuOpen>
  )
}