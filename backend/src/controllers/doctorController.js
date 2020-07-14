const crypto = require('crypto');
const connection = require('../database/connection');
const { update } = require('../database/connection');
const { put } = require('../routes');

module.exports = {
  //lista todos os doutores
  async index (Request, Response) {
    const doctor = await connection('doctor').select('*');

    return Response.json(doctor);
  },
  //cria o doutor
  async create(Request, Response){
    const { name, email, password } = Request.body;
    const clinic_id = Request.headers.authorization;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('doctor').insert({
        id,
        name,
        email,
        password,
        clinic_id,
    })

    return Response.json({ id, name, email, password, clinic_id })
  },
  //Atualiza
  async update(Request, Response){
    const { id } = Request.params;
    const clinic_id = Request.headers.authorization;
    const { name, email, password } = Request.body;

    await connection('doctor').where('id', id).update({
      name,
      email,
      password,
      clinic_id,
  })

    return Response.json({ id, name, email, password, clinic_id })

  },

  //deleta o doutor
  async delete(Request, Response){
    const { id } = Request.params;
    const clinic_id = Request.headers.authorization;

    const doctor = await connection('doctor')
      .where('id', id)
      .select('clinic_id')
      .first();
      
      if (doctor.clinic_id !== clinic_id){
        return Response.status(401).json({ error: 'Operation not permitted.'});
      }
      
      await connection('doctor').where('id', id).delete();

      return Response.status(204).send();
  }
};