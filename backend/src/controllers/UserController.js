const admin = require("../firebase/firebaseConfigAdmin");
const firebase = require("../firebase/firebaseConfigApp");


class Usercontroller{
    async store(req, res){
        const { name, phone, email, password } = req.body;


        await admin.auth().createUser({
            email,
            emailVerified: false,
            phoneNumber: phone,
            password,
            displayName: name,
            disabled: false
        })
            .then(() => {
                return res.json({
                    "ok": "Cadastro realizado!"
                })
            })
            .catch((error) => {
                console.log(error)
            })
        

        
    }
    async login(req, res){
        const { email, password } = req.body;

        let auth = await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response => {
                res.json({
                    ok: true
                })
            })
    }
    async read(req, res){
        const { user } = req.headers;

        
        admin.database().ref("users").on('value', (snapshot) => {
           snapshot.forEach((item) => {
            let format = admin.auth().getUserByEmail(user)    
               if(format.uid === item.val().users){
                    return res.json(
                        item.val().cards
                    )
               }
           })
       })

       
    }
    async store_cards(req, res){
        const { user, title, description } = req.body;

        let date = new Date;
        let mes = Number(date.getMonth() + 1)
        let data =  date.getDate() + "/" + mes + "/" + date.getFullYear()

        let dados = {
            title,
            description,
            data
        }
        
        
        let format = await admin.auth().getUserByEmail(user)    

        admin.database().ref(`users/${format.uid}/cards`).push(dados)
    
        return res.json({
            ok: true
        })
    }

}

module.exports = Usercontroller