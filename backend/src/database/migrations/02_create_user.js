exports.up = knex =>
  knex.schema.createTable('users', t => {
    t.increments('id').primary()
    t.string('email').unique().notNullable()
    t.string('name')
    t.string('password').notNullable()
  })

exports.down = knex =>
  knex.schema.dropTable('users')