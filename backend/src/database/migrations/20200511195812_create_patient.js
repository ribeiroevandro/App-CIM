exports.up = function(knex) {
  return knex.schema.createTable('patient', function (table){
   table.increments('id');
   table.string('name').notNullable();
   table.string('user').notNullable();
   table.string('userIdVisitor').notNullable();
   table.int('pregnance', 2).notNullable();
   table.int('abortion', 2).notNullable();
   table.string('birthType').notNullable();
   table.date('dateDUM').notNullable();
   table.date('dataDPP').notNullable();

   table.string('doctor_id').notNullable();
   table.foreign('doctor_id').references('id').inTable('doctor');
 });
};

exports.down = function(knex) {
 return knex.schema.dropTable('patient');
};
