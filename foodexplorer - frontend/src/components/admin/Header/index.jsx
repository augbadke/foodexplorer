import { Container, Menu, New, Orders, Search, Logout, MenuOpen, MenuHeader, MenuSearch, MenuOption } from "./styles"

import { BsFillHexagonFill } from "react-icons/bs"
import { SlMenu } from "react-icons/sl"
import { PiReceipt, PiMagnifyingGlassLight, PiSignOut } from "react-icons/pi"
import { VscChromeClose } from "react-icons/vsc"

import { useAuth } from "../../../hooks/auth"
import { useNavigate } from "react-router-dom"

import { Input } from "../../Input"

export function Header({setSearch}) {
  const { signOut, isMenuClosed, setIsMenuClosed } = useAuth()

  const navigate = useNavigate()

  function handleSignOut() {
    const confirm = window.confirm("Deseja realmente sair?")
    if (confirm) {
      navigate("/")
      signOut()
      setIsMenuClosed(true)
    }
  }

  function navigateNew() {
    navigate("/new")
    setIsMenuClosed((prevState) => !prevState)
  }

  function navigateOrders() {
    navigate("/orders")
    setIsMenuClosed((prevState) => !prevState)
  }

  const toggleHide = () => {
    setIsMenuClosed((prevState) => !prevState)
  }

  return (

    isMenuClosed ?

      <Container>

        <div className="align">
          <Menu onClick={toggleHide}>
            <SlMenu />
          </Menu>

          <h1 onClick={() => navigate("/")}><BsFillHexagonFill />food explorer <span>admin</span></h1>

          <Search>
            <Input
              icon={PiMagnifyingGlassLight}
              placeholder="Busque por pratos ou ingredientes"
              onChange={e => { setSearch && setSearch(e.target.value) }}
            />
          </Search>

          <New to="/new">Novo prato</New>

          <Orders onClick={() => navigate("/orders")}>
            <PiReceipt />
            <p>Pedidos</p>
          </Orders>

          <Logout onClick={handleSignOut} >
            <PiSignOut />
          </Logout>
        </div>

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
            onChange={e => { setSearch && setSearch(e.target.value) }}
          />
        </MenuSearch>

        <MenuOption onClick={navigateNew}>
          Novo prato
        </MenuOption>

        <MenuOption onClick={navigateOrders}>
          Pedidos
        </MenuOption>

        <MenuOption onClick={handleSignOut} >
          Sair
        </MenuOption>

      </MenuOpen>
  )
}