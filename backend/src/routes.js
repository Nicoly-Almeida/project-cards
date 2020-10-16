const express = require("express");
const multer = require("multer");
const multerConfig = require("./config/multerConfig");
const book = require("./controllers/BooksController");
const card = require("./controllers/CardsController");

const routes = express.Router();

const upload = multer(multerConfig)

routes.get("/", (req, res) => {
    res.send("Olá Mundo!")
})

routes.post("/book", upload.single('book'), book.store)
routes.get("/books", book.index);
routes.post("/cards", card.store);
routes.get("/books/:id", book.show);

//Alteração de dados 
routes.put("/cards/:id", card.cardupdate)

//Exclusão dos dados
routes.delete("/cards", card.deletecard)

//Coleta  de dados
routes.get("/cards", card.listcards)


module.exports = routes;