import mongoose from 'mongoose'

const imageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true
    }
},{timestamps: true})

export default mongoose.model('images', imageSchema)