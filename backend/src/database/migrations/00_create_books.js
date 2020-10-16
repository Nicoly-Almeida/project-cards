exports.up = knex => 
    knex.schema.createTable('books', t => {
        t.increments('id').primary()
        t.string('title').unique().notNullable()
        t.string('book').unique().notNullable()
 
})

exports.down = knex => 
    knex.schema.dropTable('books')