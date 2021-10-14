import mongoose from "mongoose"

const dailySchema = mongoose.Schema({
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projects'
    },
    requirements: {
        technicians: {
            type: Number,
            default: 0
        },
        rigs: {
            type: Number,
            default: 0
        },
        helpers: {
            type: Number,
            default: 0
        },
    }
}, {timestamps: true})

export default mongoose.model('daily', dailySchema)
