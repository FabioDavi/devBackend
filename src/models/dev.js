const mongoose  = require('mongoose')
const pointSchema = require('./utils/pointSchema')

const DevSchema = new mongoose.Schema(
    {
        name: String,
        github_username: String,
        biografia: String,
        avatar_url: String,
        techs: [String],
        location:{ // aqui estou passando um objeto no lugar de um tipo especifico
            type: pointSchema,
            index: '2dsphere'
        }
    }
)

module.exports = mongoose.model('Dev', DevSchema)