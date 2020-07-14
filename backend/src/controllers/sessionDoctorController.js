const connection = require('../database/connection');


module.exports = {
    async create(request, response){
        const  { User, Password } = request.body;

        const doctor = await connection('doctor')
        .where({'email': User, 'password': Password})
        .select('id', 'name')
        .first();
        
        if (!doctor) {
           
           return response.status(400).json({ error: 'No doctor found with ths ID'});
        }

       return response.json(doctor);
       
    }
}