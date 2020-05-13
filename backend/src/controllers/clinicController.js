const crypto = require('crypto');
const connection = require('../database/connection');
module.exports = {
  async index (Request, Response) {
    const clinic = await connection('clinic').select('*');

    return Response.json(clinic);
  },

  async create(Request, Response){
    const { user } = Request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('clinic').insert({
        id,
        user,
    })

    return Response.json({ id, user })
  },

};