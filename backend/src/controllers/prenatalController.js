const crypto = require('crypto');
const connection = require('../database/connection');
const { update } = require('../database/connection');

module.exports = {
  //lista todos os prenatal
  async index (Request, Response) {
    const prenatal = await connection('prenatal').select('*');

    return Response.json(prenatal);
  },
  //cria o prenatal
  async create(Request, Response){
    const { dateP, ig, au, pa, peso, bcf, apres, edema, mf, patient_id } = Request.body;
    const doctor_id = Request.headers.authorization;
    const [ id ] = await connection('prenatal').insert({
        dateP,
        ig,
        au,
        pa,
        peso,
        bcf,
        apres,
        edema,
        mf,
        patient_id,
        doctor_id
    })
    
    return Response.json({ id, dateP, ig, au, pa, peso, bcf, apres, edema, mf, patient_id, doctor_id });
  },
  //Atualiza
  async update(Request, Response){
    const { id } = Request.params;
    const { dateP, ig, au, pa, peso, bcf, apres, edema, mf, patient_id } = Request.body;
    const doctor_id = Request.headers.authorization;

    await connection('prenatal').where('id', id).update({
      dateP,
      ig,
      au,
      pa,
      peso,
      bcf,
      apres,
      edema,
      mf,
      patient_id,
      doctor_id
  })
  
  return Response.json({ id, dateP, ig, au, pa, peso, bcf, apres, edema, mf, patient_id, doctor_id });
  },

  //deleta o prenatal
  async delete(Request, Response){
    const { id } = Request.params;
    const doctor_id = Request.headers.authorization;

    const prenatal = await connection('prenatal')
      .where('id', id)
      .select('doctor_id')
      .first();
      
      if (prenatal.doctor_id !== doctor_id){
        return Response.status(401).json({ error: 'Operation not permitted.'});
      }
      
      await connection('prenatal').where('id', id).delete();

      return Response.status(204).send();
  }
};