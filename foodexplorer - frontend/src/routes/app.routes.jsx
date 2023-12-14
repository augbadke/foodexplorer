import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { Details } from "../pages/Details"
import { Favorites } from "../pages/Favorites"
import { Cart } from "../pages/Cart"
import { Checkout } from "../pages/Checkout"
import { OrdersHistory } from "../pages/OrdersHistory"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/history" element={<OrdersHistory />} />
    </Routes>
  )
}