import ModelUser from '../model/User.js'

function index(req, res){
    ModelUser.find().sort({createAt: 'desc'}).then(users => {
        res.status(200).json({users})
    })
}

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

export  {
    index,
    login
}