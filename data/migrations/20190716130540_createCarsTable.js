exports.up = function(knex, Promise) {
  return knex.schema.createTable('cars', table => {
    table.increments();
    table
      .string('VIN')
      .notNullable()
      .unique();
    table.string('make').notNullable();
    table.string('model').notNullable();
    table.integer('mileage').notNullable();
    table.text('transmission-type');
    table.text('status');
  });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableifExists('cars');
};
