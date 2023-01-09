import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

import connectDB from './database/db.js'
connectDB()

import router from './routes/api.js'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/', router)

app.listen(process.env.PORT)
