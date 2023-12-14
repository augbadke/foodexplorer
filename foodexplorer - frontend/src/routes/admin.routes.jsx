import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/Admin/Home"
import { Details } from "../pages/Admin/Details"
import { New } from "../pages/Admin/New"
import { OrdersHistory } from "../pages/Admin/OrdersHistory"

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/new" element={<New />} />
      <Route path="/new/:id" element={<New />} />
      <Route path="/orders" element={<OrdersHistory />} />
    </Routes>
  )
}