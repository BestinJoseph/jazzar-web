import mongoose from 'mongoose'

const branchSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    address: {
        type: String,
        require: true,
    },
    telephone: {
        type: String,
        require: true
    },
    fax: {
        type: String,
        require: false,
        default: ""
    },
    email: {
        type: String,
        require: true,
        default: 'info@jazzar.com.sa'
    },
    location: {
        type: String,
        require: true,
        unique: true
    },
    landmark: {
        type: String,
        require: true
    },
    active: {
        type: Boolean,
        default: true
    },
    started: {
        type: Date,
        require: true,
        default: Date.now
    }
}, {timestamps: true})

export default mongoose.model('branches', branchSchema)