const connection = require('../database/connection');

module.exports = {
  //lista o exams
  async index (Request, Response) {
    const exams = await connection('exams').select('*');

    return Response.json(exams);
  },
  //cria o exams
  async create(Request, Response){
    const { nameEx, resultEx, dateEx, patient_id} = Request.body;
    const doctor_id = Request.headers.authorization;

    const [ id ] = await connection('exams').insert({
      nameEx, 
      resultEx, 
      dateEx, 
      patient_id,
    })

    return Response.json({ id, dateEx, nameEx, resultEx, patient_id })
  }
};