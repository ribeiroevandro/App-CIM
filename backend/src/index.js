/**
 * Rota / Recurso
 */

/**
 * Método HTTP:
 * GET: Busca/listar informações do back-end;
 * POST: Criar uma Informação no back-end;
 * PUT: Alterar uma Informação no back-end;
 * DELETE: Deletar uma Informação no back-end;
 */
/**
 * Tipos de Parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o ? (Filtros/Paginação)
 * Route Params: Parâmetros utilizados para identificar recursos ex /users/:id
 * Request Body: Corpo da requisição, usado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSql: MongoDB, CouchDB, etc.
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('user').select('*').where()
   */



const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);



//app.listen(3333);
app.listen(3333, () => {
   console.log('🚀 Back-end started! 🎉');
 });





