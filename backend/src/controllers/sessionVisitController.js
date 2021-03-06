const connection = require('../database/connection');


module.exports = {
    async create(request, response){
        const  { IdVisitor }  = request.body;

        const patient = await connection('patient')
        .where('userIdVisitor', IdVisitor)
        .select('*')
        .first();
        
        if (!patient) {
           
           return response.status(400).json({ error: 'No Patient found with ths ID'});
        }

       return response.json(patient);
       
    }
}