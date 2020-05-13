exports.up = function(knex) {
   return knex.schema.createTable('doctor', function (table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();

    table.string('clinic_id').notNullable();
    table.foreign('clinic_id').references('id').inTable('clinic');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('doctor');
};
