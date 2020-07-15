const express = require('express');
const clinicController = require('./controllers/clinicController');
const doctorController = require('./controllers/doctorController');
const patientController = require('./controllers/patientController');
const prenatalController = require('./controllers/prenatalController');
const examsController = require('./controllers/examsController');
const profileController = require('./controllers/profileController');
const listExamsController = require('./controllers/listExamsController');
const listPrenatalController = require('./controllers/listPrenatalController');
const sessionVisitController = require('./controllers/sessionVisitController');
const sessionPatientController = require('./controllers/sessionPatientController');
const sessionDoctorController = require('./controllers/sessionDoctorController');
const sessionClinicController = require('./controllers/sessionClinicController');
const listDoctor = require('./controllers/listDoctorController')
const routes = express.Router();

//Metodo GET = Listar paciente, exame e prenatel expecifico
routes.get('/profile/:user_id', profileController.index);
<<<<<<< HEAD
routes.get('/listExams', listExamsController.index);
routes.get('/listPrenatal', listPrenatalController.index);
routes.get('/listDoctor/:doctor_id', listDoctor.index);
=======
routes.get('/listExams/:user_id', listExamsController.index);
routes.get('/listPrenatal/:user_id', listPrenatalController.index);
>>>>>>> c83b345f7f367fd60846f81e1704a872e21d9b7a

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
routes.delete('/exams/:id', examsController.delete);


//Update
routes.put('/doctor/:id', doctorController.update);
routes.put('/exams/:id', examsController.update);
routes.put('/prenatal/:id', prenatalController.update);
routes.put('/patient/:id', patientController.update);

//Login Metodo POST em SESSION
routes.post('/sessionsVisit', sessionVisitController.create);
routes.post('/sessionsPatient', sessionPatientController.create);
routes.post('/sessionsDoctor', sessionDoctorController.create);
routes.post('/sessionsClinic', sessionClinicController.create);

module.exports = routes;