import { BrowserRouter } from "react-router-dom"
import { useAuth } from "../hooks/auth"

import { AuthRoutes } from "./auth.routes"
import { AppRoutes } from "./app.routes"
import { AdminRoutes } from "./admin.routes"

import { LoadingScreen } from "../components/LoadingScreen"

export function Routes() {
	const { user } = useAuth()
	return (
		<BrowserRouter>
			<LoadingScreen/>
			{user ? (user.isAdmin ? <AdminRoutes /> : <AppRoutes />) : <AuthRoutes />}
	  </BrowserRouter>
	)
}