const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  //lista todas as clinicas
  async index (Request, Response) {
    const clinic = await connection('clinic').select('*');

    return Response.json(clinic);
  },
  //cria a clinica
  async create(Request, Response){
    const { user, password } = Request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('clinic').insert({
        id,
        user,
        password
    })

    return Response.json({ id, user, password })
  },
  //deleta a clinica
  async delete(Request, Response){
    const { id } = Request.params;
    
      await connection('clinic').where('id', id).delete();

      return Response.status(204).send();
  }
};