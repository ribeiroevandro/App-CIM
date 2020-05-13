exports.up = function(knex) {
  return knex.schema.createTable('clinic', function (table){
   table.string('id').primary();
   table.string('user').notNullable();
 });
};

exports.down = function(knex) {
  return knex.schema.dropTable('clinic');
};
