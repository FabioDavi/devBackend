const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')

const mongoose  = require('mongoose')
// instalar a biblioteca npm add mongoose

// Mongodb (não relacional... otimo para banco sem muitos relacionamentos)
mongoose.connect('mongodb+srv://server:123@cluster0-bkguh.mongodb.net/bd?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//quando for fazer chamadas a api externas .. .instalr o npm add cors
//app.use(cors({ origin: 'http://localhost:3000'}))
app.use(cors()) /// a esquerda libera acesso para todas as aplicaçõpes
 
app.use(express.json())
// fazendo com que o express entenda requisições com corpo json
// precisa vir antes das rotas ( o node lê de forma linear... de cima pra baixo)


app.use(routes)

app.listen("3333")
