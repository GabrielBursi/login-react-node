import express from 'express'
import {index, login} from '../controllers/ApiController.js'

const router = express.Router()

router.get('/users', index)
router.post('/login', login)

export default router