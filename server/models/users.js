import mongoose from "mongoose"
import passportLocalMongoose from 'passport-local-mongoose'

const session = mongoose.Schema({
    refreshToken: {
        type: String,
        default: ''
    }
})

const userSchema = mongoose.Schema({
    username: {
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
    branch: {
        type: String,
    },
    role: {
        type: String
    },
    promotions: [
        {
            name: Number,
            dated: {
                type: Date,
                default: Date.now
            }
            
        }
    ],
    authStrategy: {
        type: String,
        default: "local",
    },
    refreshToken: {
        type: [session]
    }
}, {timestamps: true})


userSchema.pre('save', function(next) {
    if(!this.isModified('password')) return next()
    bcrypt.hash(this.password, 10, (err, passwordHash) => {
        if(err)
            return next(err)
        this.password = passwordHash
        next()
    })
})

userSchema.methods.comparePassword = function ( password, cb) {
    bcrypt.compare( password, this.password, (err, isMatch) => {
        if(err) {
            return cb(err)
        } else {
            if(!isMatch) {
                return cb(null, isMatch)
            } else {
                return cb(null, this)
            }
        }
    })
}

userSchema.set("toJSON", {
    transform: (doc, ret, options) => {
        delete ret.refreshToken
        return ret
    }
})

userSchema.plugin(passportLocalMongoose)

export default mongoose.model('user', userSchema)