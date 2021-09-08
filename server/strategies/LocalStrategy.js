import passport from 'passport'
import { Strategy as LocalStrategy} from 'passport-local'

import User from '../models/users.js'

passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser())