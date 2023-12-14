exports.up = knex =>
  knex.schema.createTable("dishes", table => {
    table.increments("id")
    table.text("image").nullable()
    table.text("name")
    table.text("category")
    table.decimal("price")
    table.text("descriptions")

    table.timestamp("created_at").default(knex.fn.now())
    table.timestamp("updated_at").default(knex.fn.now())
  })

exports.down = knex => knex.schema.dropTable("dishes")
