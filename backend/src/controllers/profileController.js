const connection = require('../database/connection')

module.exports = {
  async index(Request, Response){
    const doctor_id = Request.headers.authorization;

    const patient = await connection('patient')
    .where('doctor_id', doctor_id)
    .select('*');

    return Response.json(patient);
  }
}