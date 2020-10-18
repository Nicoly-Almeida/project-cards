const knex = require("../database/connection");

class BooksController{
    async store(req, res){
        const { title } = req.body;

        const books = {
            title,
            book: req.file.filename
        }

        await knex('books').insert(books)

        return res.json({
            "ok": true
        })
    }


    //Listagem de Livros
    async index(req,res){
        const result = await knex("books").select("*");

        const books = result.map((data)=>{
            const {id, title, book} = data;
            return{
                id:id,
                title:title,
                book:book,
                link_book: `http://localhost:3333/uploads/${book}`,
            }
        })
            return res.json(books);
    }




    async show(req, res){
        const { id } = req.params;

        const books = await knex('books')
        .select("*").where({ id })

        if(!books){
            return res.status(400).json({ message: 'Book not found.' });
        }

        const cards = await knex('books')
            .join('cards', 'books.id', 'cards.book_id')
            .select('*')
        
        const serializedCards = cards.map(card => {
            return {
                "id": card.id,
                "title": card.title,
                "description": card.description,
                "data": card.data
            }
        })

        const serializedBook = books.map(book => {
            return {
                ...books,
                book_url: `http://127.0.0.1:3333/uploads/${book.book}`
            }
        })



        return res.json({ books: serializedBook, serializedCards });
    }
    
}

module.exports = new BooksController();