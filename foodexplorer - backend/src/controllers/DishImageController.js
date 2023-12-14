const knex = require("../database/knex")
const DiskStorage = require("../providers/DiskStorage")
const AppError = require("../utils/AppError")

const diskStorage = new DiskStorage()

class DishImageController {
  async update(request, response) {
    const { id } = request.params
    const imageFilename = request.file.filename

    const dish = await knex("dishes").where({ id }).first()

    if (!dish) {
      throw new AppError("Opção não encontrada", 401)
    }

    if (dish.image) {
      await diskStorage.deleteFile(dish.image)
    }

    const filename = await diskStorage.saveFile(imageFilename)

    await knex("dishes").where({ id }).update({ image: filename })

    return response.json()

  }
}

module.exports = DishImageController