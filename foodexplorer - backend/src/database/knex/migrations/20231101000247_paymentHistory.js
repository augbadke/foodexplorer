exports.up = knex =>
  knex.schema.createTable("paymentHistory", table => {
    table.increments("id")
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
    table.text("status")
    table.text("orders")

    table.timestamp("created_at").default(knex.fn.now())
  })

exports.down = knex => knex.schema.dropTable("paymentHistory")
