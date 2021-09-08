import mongoose from 'mongoose'
import dotenv from 'dotenv'

if(process.env.NODE_ENV !== 'production') {
    dotenv.config()
}

const db = process.env.DB_URI
const options = {useNewUrlParser: true, useUnifiedTopology: true, 'useCreateIndex': true, useFindAndModify: false}

mongoose.connect( db, options)
    .then( () => true )
    .catch((err) => console.log(err.message))