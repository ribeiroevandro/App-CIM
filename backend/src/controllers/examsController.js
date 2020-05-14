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
      doctor_id,
    })

    return Response.json({ id, dateEx, nameEx, resultEx, patient_id, doctor_id });
  },
   //deleta o exams
   async delete(Request, Response){
    const { id } = Request.params;
    const doctor_id = Request.headers.authorization;

    const exams = await connection('exams')
      .where('id', id)
      .select('doctor_id')
      .first();
      
      if (exams.doctor_id !== doctor_id){
        return Response.status(401).json({ error: 'Operation not permitted.'});
      }
      
      await connection('exams').where('id', id).delete();

      return Response.status(204).send();
  }
};