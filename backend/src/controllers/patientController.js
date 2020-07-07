const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  //lista todos os pacientes
  async index (Request, Response) {
    const patient = await connection('patient').select('*');

    return Response.json(patient);
  },
  //cria o paciente
  async create(Request, Response){
    const { name, user, password, pregnance, abortion, linkVideo, birthType, dateDUM, dataDPP, } = Request.body;
    const doctor_id = Request.headers.authorization;

    const id = crypto.randomBytes(4).toString('HEX');
    const userIdVisitor = crypto.randomBytes(4).toString('HEX');
    
    await connection('patient').insert({
        id,
        userIdVisitor,
        linkVideo,
        name,
        user,
        password,
        pregnance,
        abortion,
        birthType,
        dateDUM,
        dataDPP,
        doctor_id,
    })

    return Response.json({ id, userIdVisitor, linkVideo, name, user, pregnance, abortion, birthType, dateDUM, dataDPP, doctor_id })
  },
    //deleta o patient
    async delete(Request, Response){
      const { id } = Request.params;
      const doctor_id = Request.headers.authorization;
  
      const patient = await connection('patient')
        .where('id', id)
        .select('doctor_id')
        .first();
        
        if (patient.doctor_id !== doctor_id){
          return Response.status(401).json({ error: 'Operation not permitted.'});
        }
        
        await connection('patient').where('id', id).delete();
  
        return Response.status(204).send();
    }
};