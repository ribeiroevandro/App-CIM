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
    const { name, user, pregnance, abortion, birthType, dateDUM, dataDPP, } = Request.body;
    const doctor_id = Request.headers.authorization;

    const userIdVisitor = crypto.randomBytes(4).toString('HEX');

    const [ id ] = await connection('patient').insert({
        userIdVisitor,
        name,
        user,
        pregnance,
        abortion,
        birthType,
        dateDUM,
        dataDPP,
        doctor_id,
    })

    return Response.json({ id, userIdVisitor, name, user, pregnance, abortion, birthType, dateDUM, dataDPP, doctor_id })
  }
};