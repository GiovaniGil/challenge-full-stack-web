const { tableNameStudent } = require("../../tables");

exports.up = function (knex) {
    return knex.schema.createTable(tableNameStudent, (table) => {
      table.increments('id');
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('academic_registry').notNullable();
      table.string('document', 14).notNullable().unique();
      table.datetime('createdAt').defaultTo(knex.fn.now());
      table.dateTime('updatedAt').defaultTo(knex.fn.now());

    });
};

exports.down = function (knex) {
    return knex.schema.dropTable(tableNameStudent);
};
