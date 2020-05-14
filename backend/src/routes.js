const express = require('express');
const clinicController = require('./controllers/clinicController');
const doctorController = require('./controllers/doctorController');
const patientController = require('./controllers/patientController');
const prenatalController = require('./controllers/prenatalController');
const examsController = require('./controllers/examsController');
const routes = express.Router();

//Metodo GET = Listar
routes.get('/clinic', clinicController.index);
routes.get('/doctor', doctorController.index);
routes.get('/patient', patientController.index);
routes.get('/prenatal', prenatalController.index);
routes.get('/exams', examsController.index);

//Metodo POST = Criar
routes.post('/clinic', clinicController.create);
routes.post('/doctor', doctorController.create);
routes.post('/patient', patientController.create);
routes.post('/prenatal', prenatalController.create);
routes.post('/exams', examsController.create);

//Metodo DELETE = Deletar
routes.delete('/doctor/:id', doctorController.delete);
routes.delete('/clinic/:id', clinicController.delete);
routes.delete('/patient/:id', patientController.delete);
routes.delete('/prenatal/:id', prenatalController.delete);
//routes.delete('/exams/:id', examsController.delete);


module.exports = routes;