const { verify } = require("jsonwebtoken")
const AppError = require("../utils/AppError")
const authConfig = require("../configs/auth")

function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError("JWT Token não informado", 401)
  }

  const [, token] = authHeader.split(" ")
  //split usa o espaço como referência para separar o conteúdo de texto da variável authHeader em outras variaveis

  try {
     verify(token, authConfig.jwt.secret)

    return next()
  } catch {
    throw new AppError("JWT Token inválido", 401)
  }
}

module.exports = ensureAuthenticated