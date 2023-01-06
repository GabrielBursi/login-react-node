import express from 'express'
import {index, login, deleteUser, editUser} from '../controllers/ApiController.js'

const router = express.Router()

router.get('/users', index)
router.post('/login', login)
router.delete('/users/:id', deleteUser)
router.put('/users/:id', editUser)

export default router