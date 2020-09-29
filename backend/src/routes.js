const express = require("express");

const routes = express.Router();
const CardController = require("./controllers/CardController");

const cards = new CardController();



routes.get("/", (req,res) => {
    console.log("My notebook API")
})

//Cadastro de cartão
routes.post("/cards", cards.store)

//Coleta  de dados
routes.get("/cards", cards.listcards)

//Coleta de dados específicos
routes.get("/cards/:id", cards.card)

//Alteração de dados 
routes.put("/cards/:id", cards.cardupdate)

//Exclusão dos dados
routes.delete("/cards", cards.deletecard)



module.exports = routes