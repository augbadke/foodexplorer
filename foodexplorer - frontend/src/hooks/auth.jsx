import { createContext, useContext, useState, useEffect } from "react"
import { api } from "../services/api"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})
  const [isMenuClosed, setIsMenuClosed] = useState(true)
  const [search, setSearch] = useState("")
  const [favorites, setFavorites] = useState([])
  const [cart, setCart] = useState([])

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user))
      localStorage.setItem("@foodexplorer:token", token)

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`
      setData({ user, token })

      fetchFavorites(user.id)
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível entrar.")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@foodexplorer:token")
    localStorage.removeItem("@foodexplorer:user")

    setData({})
    setCart([])
  }

  async function fetchFavorites(id) {
    const response = await api.get(`/users/${id}`)
    setFavorites(response.data)
  }

  useEffect(() => {
    const token = localStorage.getItem("@foodexplorer:token")
    const user = localStorage.getItem("@foodexplorer:user")

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`
      
      fetchFavorites(JSON.parse(user).id).catch(() => {
        setData({})
        localStorage.removeItem("@foodexplorer:token")
        localStorage.removeItem("@foodexplorer:user")
        return
      })

      setData({
        token,
        user: JSON.parse(user)
      })
    }

  }, [])

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user, isMenuClosed, setIsMenuClosed, search, setSearch, favorites, setFavorites, cart, setCart }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }