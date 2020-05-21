const connection = require('../database/connection')

module.exports = {
  async index(Request, Response){
    const patient_id = Request.headers.authorization;

    const prenatal = await connection('prenatal')
    .where('patient_id', patient_id)
    .select('*');

    return Response.json(prenatal);
  }
}