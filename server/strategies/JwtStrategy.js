import passport from 'passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import dotenv from 'dotenv'
dotenv.config()

import users from '../models/users.js'

const opt = {}
opt.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opt.secretOrKey = process.env.JWT_SECRET

passport.use(
    new Strategy(opt, (jwt_payload, done) => {
        users.findOne({_id: jwt_payload}, (err, user) => {
            if (err) {
                return done(err, false)
            } else {
                if(user) {
                    return done(null, user)
                } else {
                    return done(null, false)
                }
            }
        })
    })
)