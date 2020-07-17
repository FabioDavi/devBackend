

const axios = require('axios')
const Dev = require('../models/Dev')

const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
    // o que o async e await fazem abaixo 
    //async diz que a função pode demorar pra responder
    // o await diz que vai aguardar a api do github devolver ou enviar,, para então CONTINUAR com o restante do codigo
    
    async index(request, response){
        const devs = await Dev.find()
        return response.json(devs)
    },
    
    
    async store(request, response)  {
    
        const { github_username, techs, latitude, longitude } = request.body
        
        //baixo.. vou no banco de dados e procuro alguem com o mesmo username 
        let dev = await Dev.findOne({github_username})

        if(!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)//qdo eu coloco crase posso colocar variaveis dentro
            let {name, avatar_url, bio} = apiResponse.data
        
            if(!name){
                name = apiResponse.data.github_username 
            }
            //abaixo faz automaticamente a checagem acima ( se name naõ existir ele vai pegar o username)
            //let {name = github_username, avatar_url, bio} = apiResponse.data
            
            const techArrays = parseStringAsArray(techs)
            console.log(name, avatar_url, bio,  github_username)
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
           
            // neste bloco,, se o dev não existir pelo username ele cria um novo registro no mongodb
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs : techArrays,
                location
            })
        }
        
       
        return response.json(dev)
        //return response.json({message: 'omnistack fabio44 dddavi r22auh'})
    },

    async update(){

    },


    async destroy(){

    }
}