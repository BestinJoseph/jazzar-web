import mongoose from "mongoose"
import passportLocalMongoose from 'passport-local-mongoose'

const session = mongoose.Schema({
    refreshToken: {
        type: String,
        default: ''
    }
})

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    authStrategy: {
        type: String,
        default: ''
    },
    points: {
        type: Number,
        default: 50
    },
    refreshToken: {
        type: [session]
    }
}, {timestamps: true})

userSchema.set("toJSON", {
    transform: (doc, ret, options) => {
        delete ret.refreshToken
        return ret
    }
})

userSchema.plugin(passportLocalMongoose)

export default mongoose.model('user', userSchema)