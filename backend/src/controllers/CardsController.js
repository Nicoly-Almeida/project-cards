const knex = require("../database/connection");

class CardsController{
    async store(req, res){
        const { title, description, nbook } = req.body;

        let date = new Date;
        let mes = Number(date.getMonth() + 1)
        let data =  date.getDate() + "/" + mes + "/" + date.getFullYear()


        const result = await knex('books').select("*").where('id', nbook)

        const myid = result.map(book => {
            return book.id
        })

        const card = await knex('cards').insert({
            title,
            description,
            data, 
            book_id: myid           
        })

        return res.json({
            card
        })

    }
    async listcards(req, res){
        
        const result = await knex('cards').select("*")

        return res.json({
            result
        })
    }
    async cardupdate(req,res){
        const { title, description } = req.body;
        const { id } = req.params;

        const result = await knex('cards')
            .where({ id })
            .update({
                title,
                description
            })

        return res.json({
            result
        })
    }
    async deletecard(req,res){
        const { id } = req.query;

        const result = await knex('cards').where({ id }).del()

        return res.json({
            result
        })
    }


}

module.exports = new CardsController();