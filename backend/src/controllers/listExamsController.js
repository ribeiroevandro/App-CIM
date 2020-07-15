const connection = require('../database/connection')

module.exports = {
  async index(Request, Response){
    const { user_id } = Request.params;
    const exams = await connection('exams')
    .where('patient_id', user_id)
    .select('*')

    return Response.json(exams);
    
  }
}