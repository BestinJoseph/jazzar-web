import dotenv from 'dotenv'
if(process.env.NODE_ENV !== 'production') {
    dotenv.config()
}

import express from 'express'
import cors from 'cors'
import path from 'path'
import passport from 'passport'
import cookieParser from 'cookie-parser'

import project from './routes/project.js'
import service from './routes/services.js'
import contact from './routes/contact.js'
import user from './routes/user.js'
import branches from './routes/branch.js'
import dailies from './routes/daily.js'
import './strategies/JwtStrategy.js'
import './strategies/LocalStrategy.js'
import './utils/authentication.js'
import './database.js'

const app = express()
const port = process.env.PORT || 8000
const __dirname = path.resolve()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(cors({origin: ['https://infallible-feynman-a382a9.netlify.app', 'http://localhost:3000', 'http://192.168.1.10:3000']}))

app.use(passport.initialize())

app.use('/images', express.static(path.join(__dirname, 'public/uploads')))

app.use('/api/projects', project)
app.use('/api/services', service)
app.use('/api/contacts', contact)
app.use('/api/users', user)
app.use('/api/branches', branches)
app.use('/api/dailies', dailies)

app.listen( port, () => console.log('Server on', port) )
