exports.up = (knex) =>
    knex.schema.createTable('EMPLOYEE', (table) => {
        table.integer('id').notNullable().unique();
        table.string('name').notNullable();
        table.string('email').notNullable().unique();
        table.string('phone').notNullable();
        table.string('address', 500).notNullable();
        table
            .integer('departmentId')
            .unsigned()
            .references('id')
            .inTable('DEPARTMENTS')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table
            .timestamp('created_timestamp')
            .notNullable()
            .defaultTo(knex.fn.now());
        table
            .timestamp('last_update_timestamp')
            .notNullable()
            .defaultTo(knex.fn.now());
    });

exports.down = (knex) => knex.schema.dropTable('EMPLOYEE');
