const connection = require('../database/connection')

module.exports = {
  async index(Request, Response){
    const { user_id } = Request.params;
    const patient = await connection('patient')
    .where('id', user_id)
    .select('*')
    .first();

    console.log(patient);
    return Response.json(patient);
    
  }
}