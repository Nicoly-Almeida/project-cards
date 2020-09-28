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

        client.sms.enviar(phone, `Bem vindo ao My Notebook ${name}, seu cadastro está realizado. Agora é só seguir para a página de login`, resposta_usuario, multi_sms, data_criacao)
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
    async authenticate(req, res){
        const { email, senha } = req.body;
        
        const result = await knex('users')
            .select("*")
            .where({email})
            /*.then(users => {
                console.log(users.map(user => (
                    bcrypt.compareSync(senha, user.password)
                )))
            })*/
        result.map(user => {
            if(bcrypt.compareSync(senha, user.password) === true){
                return res.json({
                    ok: true
                })
            }else{
                return res.json({
                    ok: false
                })
            }
        })
            


}
}

module.exports = UsersController