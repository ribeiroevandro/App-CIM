const connection = require('../database/connection')

module.exports = {
  async index(Request, Response){
    const { user_id } = Request.params;
    const prenatal = await connection('prenatal')
    .where('patient_id', user_id)
    .select('*')

    console.log(prenatal);
    return Response.json(prenatal);
    
  }
}