import mongoose from 'mongoose'

const projectSchema = mongoose.Schema({
    project: {
        type: String,
        unique: true,
        require: true
    },
    client: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    catergories: {
        type: [String],
        require: true
    },
    start_date: {
        type: Date,
        require: true,
        default: Date.now()
    },
    end_date: {
        type: Date,
        require: false
    },
    description: {
        type: String
    },
    images: {
        type: [Object],
        require: false
    }
}, {timestamps: true})

export default mongoose.model('projects', projectSchema)