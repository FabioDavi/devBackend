const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
    async index(request, response){
        
        const { latitude, longitude, techs } = request.query

        const techsArray = parseStringAsArray(techs)

        const devs = await Dev.find({
            techs:{
               // abaixo filtramos pelo tipo de profissão e localização
               // in é um operador logico dentro do mongo (ver operadores mongodb)
               $in: techsArray,
            },
            location:{
                //recebe dois parametro... localiza objetos proximos a ele
                $near:{
                    $geometry:{
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000, // 10km                 
                },
            },


        })

        return response.json({ devs })
    }
}