const connection = require('../database/connection');


module.exports = {
    async create(request, response){
        const  { User, Password } = request.body;

        const clinic = await connection('clinic')
        .where({'user': User, 'password': Password})
        .select('id')
        .first();
        
        if (!clinic) {
           
           return response.status(400).json({ error: 'No clinic found with ths ID'});
        }

       return response.json(clinic);
       
    }
}