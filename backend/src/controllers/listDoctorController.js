const connection = require('../database/connection')

module.exports = {
  async index(Request, Response){
    const doctor_id = Request.params.doctor_id;

    const doctor = await connection('doctor')
    .where('id', doctor_id)
    .select('*')
    .first();

    return Response.json(doctor);
  }
}