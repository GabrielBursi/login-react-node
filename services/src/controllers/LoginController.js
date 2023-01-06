import ModelUser from "../model/User.js"

function login(req, res){
    const {name, email, password} = req.body

    new ModelUser({
        name,
        email,
        password
    }).save()
        .then(() => console.log('Pronto'))
        .catch(erro => res.send(erro))
}

export default login