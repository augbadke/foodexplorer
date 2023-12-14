const knex = require("../database/knex")

class PaymentController {
  
  async create(request, response) {
    const { user_id, orders, creditCard } = request.body
    let status = "Failed"
    let orderId = null

    if (creditCard=="0000 0000 0000 0000 04/25 000") {
      status = "Pendente"
  
      orderId = await knex("paymentHistory").insert({
        user_id,
        status,
        orders,
      })
    }

    return response.json({status,orderId})
  }

  async show(request, response) {
    const { id } = request.params

    const history = await knex("paymentHistory").where({ user_id: id }).orderBy("created_at", "desc")
   
    return response.json(history)
  }

  async index(request, response) {

    const history = await knex("paymentHistory").orderBy("created_at", "desc")
   
    return response.json(history)
  }

  async update(request, response) {
    const { id, status } = request.query

    await knex("paymentHistory").where({ id }).update({ status })
   
    return response.json()
  }

}

module.exports = PaymentController
