const { hash } = require("bcryptjs")
const AppError = require("../utils/AppError")
const knex = require("../database/knex")

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body

    const checkUserExists = await knex("users").where({email}).first()

    if (checkUserExists) {
      throw new AppError("Este e-mail a esta em uso")
    }

    const hashedPassword = await hash(password, 8)

    await knex("users").insert({
      name,
      email,
      password: hashedPassword
    })

    return response.status(201).json()
  }

  async updateFavorites (request, response) {
    let {id, favorites} = request.body

    favorites = JSON.stringify(favorites)

    await knex("users").where({ id }).update({ favorites })

    return response.json()
  }

  async showFavorites (request, response) {
    const { id } = request.params

    const favorites = await knex("users").select("favorites").where({ id })

    return response.json(JSON.parse(favorites[0].favorites))
  }
}


module.exports = UsersController
