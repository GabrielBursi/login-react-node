import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import morgan from 'morgan'

import connectDB from './database/db.js'
connectDB()

import router from './routes/api.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))

app.use('/', router)

const PORT = process.env.PORT || 3000

app.listen(PORT)
