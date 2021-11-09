import mongoose from "mongoose"

const dailySchema = mongoose.Schema({
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projects'
    },
    createBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    requirements: {}
}, {timestamps: true})

export default mongoose.model('daily', dailySchema)
