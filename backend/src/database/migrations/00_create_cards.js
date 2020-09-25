exports.up = knex => 
    knex.schema.createTable('cards', t => {
        t.increments('id').primary()
        t.string('title').unique().notNullable()
        t.string('description')
})

exports.down = knex => 
    knex.schema.dropTable('cards')