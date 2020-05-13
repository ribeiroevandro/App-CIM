const express = require('express');
const clinicController = require('./controllers/clinicController');
const doctorController = require('./controllers/doctorController');
const patientController = require('./controllers/patientController');
//const prenatalController = require('./controllers/prenatalController');
const routes = express.Router();

//Metodo GET = Listar
routes.get('/clinic', clinicController.index);
routes.get('/doctor', doctorController.index);
routes.get('/patient', patientController.index);
//routes.get('/prenatal', prenatalController.index);

//Metodo POST = Criar
routes.post('/clinic', clinicController.create);
routes.post('/doctor', doctorController.create);
routes.post('/patient', patientController.create);
//routes.post('/prenatal', prenatalController.create);

//Metodo DELETE = Deletar
routes.delete('/doctor/:id', doctorController.delete);


module.exports = routes;