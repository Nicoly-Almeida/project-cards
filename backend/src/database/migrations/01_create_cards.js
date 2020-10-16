exports.up = knex => 
    knex.schema.createTable('cards', t => {
        t.increments('id').primary()
        t.string('title').unique().notNullable()
        t.string('description')
        t.string('data').notNullable()
        t.integer('book_id').unsigned()
        t.foreign('book_id').references('Books.id')
})

exports.down = knex => 
    knex.schema.dropTable('cards')