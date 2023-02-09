import express from 'express'
import {getAll, createUser, deleteUser, editUser, login} from '../controllers/ApiController.js'

const router = express.Router()

router.get('/', (req,res) => {res.send('Ola')})
router.get('/users', getAll)
router.post('/create', createUser)
router.post('/login', login)
router.delete('/users/:id', deleteUser)
router.put('/users/:id', editUser)

export default router