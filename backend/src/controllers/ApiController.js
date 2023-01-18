import mongoose from 'mongoose';

import ModelUser from '../model/User.js'

import bcrypt from 'bcrypt'
const saltRounds = 5;

function getAll(req, res){
    try {
        ModelUser.find().sort({createAt: 'desc'}).then(users => {
            res.status(200).json({users})
        })
    } catch (error) {
        res.status(404).json({error : 'Nao foi possível acessar ao MongoDB: ' + error})
    }
}

function createUser(req, res){
    const {name, email, password} = req.body

    if (!name ||!email ||!password ) {
        return res.status(401).json({error: 'Informações inválidas'})
    }

    try{
        ModelUser.findOne({email}).then((user) => {
            if (user) {
                return res.status(401).json({error: "Esse email ja existe."})
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
        res.status(404).json({ error: 'Nao possível acessar ao MongoDB: ' + error })
    }
}

async function login(req, res){
    const {email, password} = req.body

    if (!email || !password) {
        return res.status(401).json({error: 'Informações inválidas'})
    }

    
    try {
        const user = await ModelUser.findOne({email})

        if (!user) return res.status(401).json({error: 'Esse email não existe.'})

        const passwordCompare = await bcrypt.compare(password, user.password)

        if(passwordCompare) return res.status(200).json({ validate: true, ...user._doc})
        
        res.json({error: 'Senha incorreta.'})

        
    } catch (error) {
        res.status(404).json({ error: 'Nao possível acessar ao MongoDB: ' + error })
    }

}

function editUser(req, res) {
    const { id } = req.params
    const { name, email, password } = req.body

    if (!email || !password || !name) {
        res.status(401).json({ error: "Informações invalidas" })
    }else{

        try {
    
            ModelUser.findOne({email}).then((user) => {

                const _id = new mongoose.Types.ObjectId(id)

                if (user._id.toString() === _id.toString()){
                    
                    const passwordHash = bcrypt.hashSync(password, saltRounds);
                    
                    ModelUser.findOneAndUpdate({_id: id}, { email, password: passwordHash, name })
                        .then((user) => {
                            res.status(200).json({ validate: true, ...user._doc, password: passwordHash, email, name})
                        })
                        .catch(error => {
                            res.status(500).json({ error: "id invalido " + error })
                        })

                }else{
                    return res.status(401).json({ error: 'Esse email já existe.' })
                }

            })
                
        } catch (error) {
            res.status(404).json({ error: 'Nao possível acessar ao MongoDB: ' + error })
        }
    }

}

function deleteUser(req, res){

    const id = req.params.id

    try {
        ModelUser.findByIdAndDelete(id)
            .then(() => res.status(200).json({message: 'Usuario excluído com sucesso!'}))
            .catch(error => res.status(500).json({error : "Id invalido! " + error}))
    } catch (error) {
        res.status(404).json({ error: 'Nao possível acessar ao MongoDB: ' + error })
    }
}

export  {
    getAll,
    createUser,
    deleteUser,
    editUser,
    login
}