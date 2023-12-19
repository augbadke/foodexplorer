const knex = require("../database/knex")

class DishesController {
  async create(request, response) {
    const { name, category, price, descriptions, tags } = request.body
    
    const [dish_id] = await knex("dishes").insert({
      name,
      category,
      price,
      descriptions,
    })

    const tagsInsert = tags.map(name => {
      return {
        dish_id,
        name,
      }
    })

    await knex("tags").insert(tagsInsert)

    return response.json(dish_id)
  }

  async show(request, response) {
    const { id } = request.params

    const dish = await knex("dishes").where({ id }).first()
    const tags = await knex("tags").where({ dish_id: id }).orderBy("name")
   
    return response.json({
      ...dish,
      tags,
    })
  }

  async index(request, response) {
    const { name, favorites } = request.query
    let dishes

    const tags_id = new Set(await knex("tags")
      .whereLike("tags.name", `%${name}%`)
      .pluck("dish_id"))

    let uniqueIds = Array.from(tags_id)

    if (favorites) {
      const ids = favorites.split(",").map(favorites => parseInt(favorites, 10))
 
      uniqueIds = uniqueIds.filter(valor => ids.includes(valor))

      dishes = await knex("dishes")
      .whereIn("id", ids)
      .andWhere(function() {
        this.whereLike("name", `%${name}%`)
       })
      .orWhere(function() {
        this.whereIn("id", uniqueIds)
      })
      .orderBy("created_at") 

    } else {
      dishes = await knex("dishes")
      .whereIn("id", uniqueIds)
      .orWhere(function() {
        this.whereLike("name", `%${name}%`)
      })
      .orderBy("created_at") 
    }

    return response.json(dishes)
  }

  async update(request, response) {
    const { name, category, price, descriptions, tags } = request.body
    const { id } = request.params
  
    await knex("dishes").where({ id }).update({ name, category, price, descriptions })

    if (tags) {
      const tagsInsert = tags.map(name => {
        return {
          dish_id: id,
          name,
        }
      })
 
      await knex("tags").where({ dish_id: id }).delete()
      await knex("tags").insert(tagsInsert) 
    }

    return response.json()
  }

  async delete(request, response) {
    const { id, image } = request.query
    const DiskStorage = require("../providers/DiskStorage")
    const diskStorage = new DiskStorage()

    await knex("dishes").where({ id }).delete()

    if (image) {
      await diskStorage.deleteFile(image)
    }

    return response.json()
  }

}

module.exports = DishesController
