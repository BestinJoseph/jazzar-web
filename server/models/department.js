import mongoose from 'mongoose'

const departmentSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    slug: {
        type: String,
        require: true
    },
    abb: {
        type: String,
        require: true
    }
})

export default mongoose.model('departments', departmentSchema)