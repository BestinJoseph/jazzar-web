import mongoose from 'mongoose'

const serviceSchema = mongoose.Schema({
    service: {
        type: String,
        unique: true,
        require: true
    },
    department: {
        type: String,
        unique: true,
        require: true
    },
    slug: {
        type: String,
        unique: true,
        require: true
    },
    abb: {
        type: String,
        unique: true,
        require: true
    },
    name: {
        type: String,
        unique: true,
        require: true
    },
    subtitle: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    scope: [
        { type: String }
    ],
    specialized: [
        { type: String }
    ],
    arname: {
        type: String,
        unique: true,
        require: true
    },
    arsubtitle: {
        type: String,
        require: true
    },
    arcontent: {
        type: String,
        require: true
    },
    arscope: [
        { type: String }
    ],
    arspecialized: [
        { type: String }
    ]
}, {timestamps: true})

export default mongoose.model('services', serviceSchema)