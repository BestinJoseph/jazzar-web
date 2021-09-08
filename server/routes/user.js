import express from 'express'
import passport from 'passport'

import { verifyUser } from '../utils/authentication.js'
import { refreshToken, userLogin, userSignup, userProfile, userLogout } from '../controllers/userController.js'

const Router = express.Router()

Router.route('/signup').post(userSignup)

Router.route('/login').all(passport.authenticate("local")).post(userLogin)

Router.route('/refreshtoken').post(refreshToken)

Router.route('/profile').all(verifyUser).get(userProfile)

Router.route('/logout').all(verifyUser).get(userLogout)

export default Router
