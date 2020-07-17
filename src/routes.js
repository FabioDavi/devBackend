
const {Router} = require('express')

const devController = require('./controllers/devController')
const searchController = require('./controllers/searchController')
// aqwuii estou pegando somente a parte de routers do express

const routes = Router() 

//algumas convenções : index, show, destroy, update, store
// index.. convencionamos qdo estamos buscando 1 registro
// store: criar | etc

routes.get("/devs", devController.index)
routes.post("/devs", devController.store)
routes.get("/search", searchController.index)

module.exports = routes




