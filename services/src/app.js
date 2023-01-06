import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

import './database/db.js'
import routerUser from './routes/apiUSer.js'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {res.send('Hello back end!')})

app.use('/',routerUser)

app.listen(process.env.PORT)
