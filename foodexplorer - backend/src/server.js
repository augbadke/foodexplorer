require("dotenv/config")
require("express-async-errors")
const cors = require("cors")
const express = require("express")

const AppError = require("./utils/AppError")
const uploadConfig = require("./configs/upload")
const database = require("./database/sqlite")
// const knex = require("./database/knex")
const routes = require("./routes")

database()

const app = express()
app.use(express.json())
app.use(cors())
app.use(routes)

// knex("users")
//   .where({ id: "1" })
//   .update({ isAdmin: true })
//   .then(() => {
//     console.log("Usuário atualizado com sucesso.")
//   })
//   .catch((error) => {
//     console.error("Erro ao atualizar o usuário:", error)
//   })

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))

app.use((error, request, response, next) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: "error",
        message: error.message
      })
    }

    console.log(error)
    
    return response.status(500).json({
      status: "error",
      message: "Internal server error"
    })
})

const port = process.env.SERVER_PORT

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
