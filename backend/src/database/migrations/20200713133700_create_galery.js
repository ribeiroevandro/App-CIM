exports.up = function(knex) {
    return knex.schema.createTable('galery', function (table){
     table.increments('id');
     table.string('link').notNullable();
     table.string('type').notNullable();
     
     table.string('patient_id').notNullable();
     table.foreign('patient_id').references('id').inTable('patient');
     table.string('doctor_id').notNullable();
     table.foreign('doctor_id').references('id').inTable('doctor');
   });
  };
  
  exports.down = function(knex) {
   return knex.schema.dropTable('galery');
  };