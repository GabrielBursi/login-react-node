import ModelUser from "../model/User.js"

function login(req, res){
    const {name, email, password} = req.body

    new ModelUser({
        name,
        email,
        password
    }).save()
        .then(() => res.send('Pronto'))
        .catch(erro => res.send(erro))
}

export default login