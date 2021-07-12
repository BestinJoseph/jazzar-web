import express from 'express'
import mongoose from 'mongoose'
import project from './routes/project.js'
import cors from 'cors'
import path from 'path'

const app = express()
const __dirname = path.resolve()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/projects', project)

const port = process.env.PORT || 8000
const db = "mongodb+srv://bestin_38:mypwD1234@cluster0.wzhxc.mongodb.net/ojcprojects?retryWrites=true&w=majority"

mongoose.connect( db, {useNewUrlParser: true, useUnifiedTopology: true, 'useCreateIndex': true, useFindAndModify: false})
mongoose.connection.once('open', () => app.listen( port, () => { console.log('app running on port ', port)}))
mongoose.connection.on('error', console.error.bind(console, 'connection error: '))