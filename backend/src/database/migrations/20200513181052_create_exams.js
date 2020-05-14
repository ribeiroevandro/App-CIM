exports.up = function(knex) {
  return knex.schema.createTable('exams', function (table){
   table.increments('id');
   table.string('nameEx').notNullable();
   table.string('resultEx').notNullable();
   table.date('dateEx').notNullable();
   
   table.string('patient_id').notNullable();
   table.foreign('patient_id').references('id').inTable('patient');
 });
};

exports.down = function(knex) {
 return knex.schema.dropTable('exams');
};