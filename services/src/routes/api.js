import express from 'express'
import index from '../controllers/ApiController.js'

const router = express.Router()

router.get('/api', index)

export default router