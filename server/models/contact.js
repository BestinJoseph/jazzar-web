import mongoose from 'mongoose'

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }
}, {timestamps: true})

export default mongoose.model('contacts', contactSchema)