const knex = require("../database/connection")
const bcrypt = require("bcrypt");
const totalvoice = require('totalvoice-node');
const client = new totalvoice("cc54dd1a806579fcad2f23ccbc060f10");

class UsersController{
    async store(req,res){
        const { name, email, phone, senha } = req.body;

        let password = bcrypt.hashSync(senha, 10)

        const result = await knex('users').insert({
            name,
            email,
            phone,
            password
        })

        var resposta_usuario = false;
        var multi_sms = false;
        var data_criacao = '';

        client.sms.enviar(phone, "Bem vindo ao My Notebook é só seguir para a página de login", resposta_usuario, multi_sms, data_criacao)
            .then(function (data) {
                console.log(data)
            })  
            .catch(function (error) {
                console.error('Erro: ', error)
            });



        return res.json({
            result
        })
    }
    async user(req, res){
        
        const result = await knex('users').select('*')

        result.password = undefined;

        return res.json({
            result
        })
    }
}

module.exports = UsersController