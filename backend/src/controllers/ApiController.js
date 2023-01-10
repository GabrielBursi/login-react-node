import ModelUser from '../model/User.js'

import bcrypt from 'bcrypt'
const saltRounds = 5;

function getAll(req, res){
    try {
        ModelUser.find().sort({createAt: 'desc'}).then(users => {
            res.status(200).json({users})
        })
    } catch (error) {
        res.status(404).json(error)
    }
}

function login(req, res){
    const {email, password} = req.body

    if (!email || !password) {
        return res.json({error: 'Informações inválidas'})
    }

    try {
        ModelUser.findOne({email}).then(user => {
            if(user) {
                res.json({ validate: true })
            }
            else{
                res.json({error: 'Email ou senha incorretas!'})
            }
        })
    } catch (error) {
        res.status(404).json(error)
    }

}

function createUser(req, res){
    const {name, email, password} = req.body

    if (!name ||!email ||!password ) {
        return res.status(400).json({error: 'Informações inválidas'})
    }

    try{
        ModelUser.findOne({email}).then((user) => {
            if (user) {
                return res.json({error: "Email ja existe"})
            }else{
                const newUser = new ModelUser({
                    name,
                    email,
                    password
                })
    
                bcrypt.genSalt(saltRounds, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err){
                            res.status(5400).json({message:err})
                        }else{
                            newUser.password = hash
    
                            newUser.save().then(() => {
                                res.status(200).json({message: 'Usuario cadastrado!'})
                            })
                        }
                    })
                })
            }
        })
    } catch (error) {
        res.status(404).json(error)
    }
}

function deleteUser(req, res){

    const id = req.params.id

    try {
        ModelUser.findByIdAndDelete(id)
            .then(() => res.status(200).json({message: 'Usuario excluído com sucesso!'}))
            .catch(err => res.json({error : "Id invalido!"}))
    } catch (error) {
        res.status(404).json(error)
    }
}

function editUser(req, res){
    const id = req.params.id
    const {email, password} = req.body
    
    try {
        ModelUser.findByIdAndUpdate(id, {email, password}).then(() => res.status(200).json({message: 'Usuario editado com sucesso!'}))
    } catch (error) {
        res.status(404).json(error)
    }
}

export  {
    getAll,
    createUser,
    deleteUser,
    editUser,
    login
}