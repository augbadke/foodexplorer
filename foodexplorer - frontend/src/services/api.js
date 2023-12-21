import axios from "axios"

export const api = axios.create({
	baseURL: "https://foodexplorer-api-z598.onrender.com"
})