exports.up = function(knex) {
  return knex.schema.createTable('prenatal', function (table){
   table.increments('id');
   table.date('dateEx').notNullable();
   table.string('abo_rh').notNullable();
   table.string('glucose').notNullable();
   table.string('hb_ht').notNullable();
   table.string('vdrl').notNullable();
   table.string('hiv').notNullable();
   table.string('hepatiti_b').notNullable();
   table.string('hepatiti_c').notNullable();
   table.string('toxoplasmosis').notNullable();
   table.string('rubella').notNullable();


   table.string('patient_id').notNullable();
   table.foreign('patient_id').references('id').inTable('patient');
 });
};

exports.down = function(knex) {
 return knex.schema.dropTable('prenatal');
};
