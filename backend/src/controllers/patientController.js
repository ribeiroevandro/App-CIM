const crypto = require('crypto');
const connection = require('../database/connection');
const { update } = require('../database/connection');
const { response } = require('express');


module.exports = {
  //lista todos os pacientes
  async index (Request, Response) {
    const patient = await connection('patient').select('*');

    return Response.json(patient);
  },
  
  //cria o paciente
  async create(Request, Response){
    const { name, user, password, pregnance, abortion, birthType, dateDUM, dataDPP, observacao } = Request.body;
    const doctor_id = Request.headers.authorization;

    const id = crypto.randomBytes(4).toString('HEX');
    const userIdVisitor = crypto.randomBytes(4).toString('HEX');

    
    await connection('patient').insert({
        id,
        userIdVisitor,
        name,
        user,
        password,
        pregnance,
        abortion,
        birthType,
        dateDUM,
        dataDPP,
        doctor_id,
        observacao,
    })
    // //const patient_id = Response.json({id});
    // await connection('exams').insert({
    //   aboRh: '-', 
    //   dateAboRh: '-', 
    //   glicemia: '-', 
    //   dateGlicemia: '-', 
    //   hbHt: '-', 
    //   dateHbHt: '-', 
    //   vdrl: '-', 
    //   dateVdrl: '-', 
    //   hiv: '-', 
    //   dateHiv: '-', 
    //   hepatiteB: '-', 
    //   dateHepatiteB: '-', 
    //   hepatiteC: '-', 
    //   dateHepatiteC: '-', 
    //   toxoplasmose: '-', 
    //   dateToxoplasmose: '-', 
    //   rubeola: '-', 
    //   dateRubeola: '-', 
    //   outro: '-', 
    //   dateOutro: '-', 
    //   patient_id: id,
    //   doctor_id: doctor_id,
    // })

    // await connection('exams').insert({
    //   aboRh: '-', 
    //   dateAboRh: '-', 
    //   glicemia: '-', 
    //   dateGlicemia: '-', 
    //   hbHt: '-', 
    //   dateHbHt: '-', 
    //   vdrl: '-', 
    //   dateVdrl: '-', 
    //   hiv: '-', 
    //   dateHiv: '-', 
    //   hepatiteB: '-', 
    //   dateHepatiteB: '-', 
    //   hepatiteC: '-', 
    //   dateHepatiteC: '-', 
    //   toxoplasmose: '-', 
    //   dateToxoplasmose: '-', 
    //   rubeola: '-', 
    //   dateRubeola: '-', 
    //   outro: '-', 
    //   dateOutro: '-', 
    //   patient_id: id,
    //   doctor_id: doctor_id,
    // })
    
    return Response.json({ id, userIdVisitor, name, user, pregnance, abortion, birthType, dateDUM, dataDPP, observacao, doctor_id })
    
  },

  //Atualiza
  async update(Request, Response){
    const { id } = Request.params;
    const { name, user, password, pregnance, abortion, birthType, dateDUM, dataDPP, observacao } = Request.body;
    const doctor_id = Request.headers.authorization;

    await connection('patient').where('id', id).update({
      id,
      name,
      user,
      password,
      pregnance,
      abortion,
      birthType,
      dateDUM,
      dataDPP,
      doctor_id,
      observacao,
  })

  return Response.json({ id, name, user, pregnance, abortion, birthType, dateDUM, dataDPP, observacao, doctor_id })

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