import express from 'express'
import mongoose from 'mongoose'
import project from './routes/project.js'
import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv'

const app = express()
const __dirname = path.resolve()

dotenv.config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({origin: ['https://cocky-lumiere-90393c.netlify.app', 'http://localhost:3000']}))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send('Its started working.')
})

app.use('/api/projects', project)

const port = process.env.PORT || 8000
const db = process.env.DB_URI

mongoose.connect( db, {useNewUrlParser: true, useUnifiedTopology: true, 'useCreateIndex': true, useFindAndModify: false})
mongoose.connection.once('open', () => app.listen( port, () => { console.log('app running on port ', port)}))
mongoose.connection.on('error', console.error.bind(console, 'connection error: '))