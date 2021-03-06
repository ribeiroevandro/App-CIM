exports.up = function(knex) {
  return knex.schema.createTable('prenatal', function (table){
      table.increments('id');
      table.date('dateP').nullable();
      table.string('ig').nullable();
      table.string('au').nullable();
      table.string('pa').nullable();
      table.string('peso').nullable();
      table.string('bcf').nullable();
      table.string('apres').nullable();
      table.string('edema').nullable();
      table.string('mf').nullable();
      
      table.string('patient_id').notNullable();
      table.foreign('patient_id').references('id').inTable('patient');
      table.string('doctor_id').notNullable();
      table.foreign('doctor_id').references('id').inTable('doctor');
    });
   
};

exports.down = function(knex) {
  return knex.schema.dropTable('prenatal');
};