const knex = require("../database/connection")

class CardController {
    async store(req,res){
        const { title, description } = req.body;

        let date = new Date;
        let mes = Number(date.getMonth() + 1)
        let data =  date.getDate() + "/" + 0 + mes + "/" + date.getFullYear()

        const result = await knex('cards').insert({
            title,
            description,
            data
        });

        return res.json({
            result
        })
    }
    async listcards(req, res){
        
        const result = await knex('cards').select("*")

        return res.json({
            result
        })
    }
    async card(req,res){
        const { id } = req.params;

        const result = await knex('cards')
            .select("*")
            .where('id', id)

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

module.exports = CardController;