const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  //lista todos os doutores
  async index (Request, Response) {
    const doctor = await connection('doctor').select('*');

    return Response.json(doctor);
  },
  //cria o doutor
  async create(Request, Response){
    const { name, email } = Request.body;
    const clinic_id = Request.headers.authorization;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('doctor').insert({
        id,
        name,
        email,
        clinic_id,
    })

    return Response.json({ id, name, email, clinic_id })
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
        return Response.status(401);
      }
      
      
      
  }
};