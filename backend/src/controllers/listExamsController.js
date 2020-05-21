const connection = require('../database/connection')

module.exports = {
  async index(Request, Response){
    const patient_id = Request.headers.authorization;

    const exams = await connection('exams')
    .where('patient_id', patient_id)
    .select('*');

    return Response.json(exams);
  }
}