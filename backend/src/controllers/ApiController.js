import mongoose from 'mongoose';

import ModelUser from '../model/User.js'

import bcrypt from 'bcrypt'
const saltRounds = 5;

function getAll(req, res){
    try {
        ModelUser.find().sort({createAt: 'desc'}).then(users => {
            res.json({ users }).status(200)
        })
    } catch (error) {
        res.json({ error: 'Nao foi possível acessar ao MongoDB: ' + error }).status(404)
    }
}

function createUser(req, res){
    const {name, email, password} = req.body

    if (!name ||!email ||!password ) {
        return res.json({ error: 'Informações inválidas' }).status(401)
    }

    try{
        ModelUser.findOne({email}).then((user) => {
            if (user) {
                return res.json({ error: "Esse email ja existe." }).status(401)
            }else{
                const newUser = new ModelUser({
                    name,
                    email,
                    password
                })
                
                const passwordHash = bcrypt.hashSync(password, saltRounds);
                
                newUser.password = passwordHash

                newUser.save().then(() => {
                    res.status(200).json({ validate: true, ...newUser._doc })
                })
                
            }
        })
    } catch (error) {
        res.json({ error: 'Nao possível acessar ao MongoDB: ' + error }).status(404)
    }
}

async function login(req, res){
    const {email, password} = req.body

    if (!email || !password) {
        return res.json({ error: 'Informações inválidas' }).status(401)
    }

    
    try {
        const user = await ModelUser.findOne({email})

        if (!user) return res.json({ error: 'Esse email não existe.' }).status(401)

        const passwordCompare = await bcrypt.compare(password, user.password)

        if(passwordCompare) return res.status(200).json({ validate: true, ...user._doc})
        
        res.json({ error: 'Senha incorreta.' }).status(401)

        
    } catch (error) {
        res.status(404).json({ error: 'Nao possível acessar ao MongoDB: ' + error }).status(404)
    }

}

function editUser(req, res) {
    const { id } = req.params
    const { name, email, password } = req.body

    if (!email || !password || !name) {
        res.json({ error: "Informações invalidas" }).status(401)
    } else {

        try {

            ModelUser.findOne({ email }).then((user) => {

                const _id = new mongoose.Types.ObjectId(id)

                if (user._id.toString() === _id.toString()) {

                    const passwordHash = bcrypt.hashSync(password, saltRounds);

                    ModelUser.findOneAndUpdate({ _id: id }, { email, password: passwordHash, name })
                        .then((user) => {
                            res.status(200).json({ validate: true, ...user._doc, password: passwordHash, email, name })
                        })
                        .catch(error => {
                            res.json({ error: "id invalido " + error }).status(401)
                        })

                } else {
                    return res.json({ error: 'Esse email já existe.' }).status(401)
                }

            })

        } catch (error) {
            res.json({ error: 'Nao possível acessar ao MongoDB: ' + error }).status(404)
        }
    }

}

function deleteUser(req, res){

    const id = req.params.id

    try {
        ModelUser.findByIdAndDelete(id)
            .then(() => res.status(200).json({message: 'Usuario excluído com sucesso!'}))
            .catch(error => res.json({ error: "Id invalido! " + error })).status(401)
    } catch (error) {
        res.json({ error: 'Nao possível acessar ao MongoDB: ' + error }).status(404)
    }
}

export  {
    getAll,
    createUser,
    deleteUser,
    editUser,
    login
}