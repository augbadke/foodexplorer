const { Router } = require("express")

async function testConection(request, response) {

  return response.json(false)
}

const testConectionRoute = Router()
testConectionRoute.get("/", testConection)

module.exports = testConectionRoute