exports.up = knex => 
    knex.schema.createTable('users', t => {
        t.increments('id').primary()
        t.string('name').notNullable();
        t.string('email').unique().notNullable();
        t.string('phone').unique().notNullable()
        t.string('password').notNullable();
})

exports.down = knex => 
    knex.schema.dropTable('users')