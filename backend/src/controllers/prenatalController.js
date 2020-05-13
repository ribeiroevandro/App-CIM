const connection = require('../database/connection');
module.exports = {
  async index (Request, Response) {
    const prenatal = await connection('prenatal').select('*');

    return Response.json(prenatal);
  },

  async create(Request, Response){
    const { dateEx, abo_rh, glucose, hb_ht, vdrl, hiv, hepatiti_b, hepatiti_c, toxoplasmosis, rubella, } = Request.body;
    const patient_id = Request.headers.authorization;

    const [ id ] = await connection('prenatal').insert({
        dateEx,
        abo_rh,
        glucose,
        hb_ht,
        vdrl,
        hiv,
        hepatiti_b,
        hepatiti_c,
        toxoplasmosis,
        rubella,
        patient_id,
    })

    return Response.json({ id, dateEx, abo_rh, glucose, hb_ht, vdrl, hiv, hepatiti_b, hepatiti_c, toxoplasmosis, rubella, patient_id })
  }
};