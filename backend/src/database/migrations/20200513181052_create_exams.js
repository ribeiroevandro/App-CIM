exports.up = function(knex) {
  return knex.schema.createTable('exams', function (table){
   table.increments('id');
   table.string('aboRh').nullable();
   table.date('dateAboRh').nullable();

   table.string('glicemia').nullable();
   table.date('dateGlicemia').nullable();

   table.string('hbHt').nullable();
   table.date('dateHbHt').nullable();

   table.string('vdrl').nullable();
   table.date('dateVdrl').nullable();

   table.string('hiv').nullable();
   table.date('dateHiv').nullable();

   table.string('hepatiteB').nullable();
   table.date('dateHepatiteB').nullable();

   table.string('hepatiteC').nullable();
   table.date('dateHepatiteC').nullable();

   table.string('toxoplasmose').nullable();
   table.date('dateToxoplasmose').nullable();

   table.string('rubeola').nullable();
   table.date('dateRubeola').nullable();

   table.string('outro').nullable();
   table.date('dateOutro').nullable();

   
   table.string('patient_id').notNullable();
   table.foreign('patient_id').references('id').inTable('patient');
   table.string('doctor_id').notNullable();
   table.foreign('doctor_id').references('id').inTable('doctor');
 });
};

exports.down = function(knex) {
 return knex.schema.dropTable('exams');
};