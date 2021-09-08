import jwt from 'jsonwebtoken'

import User from '../models/users.js'
import { COOKIE_OPTIONS, getRefreshToken, getToken } from '../utils/authentication.js'

export const userSignup = (req, res) => {
    if(!req.body.firstName)  {
        res.status(500).json({errors: 'First Name is Requires', success: false})
    } else [
        User.register(
            new User({ username: req.body.username }),
            req.body.password,
            (err, user) => {
                if(err) {
                    res.status(500).json({errors: err.message, success: false})
                } else {
                    user.firstName = req.body.firstName,
                    user.lastName = req.body.lastName || ""
                    const token = getToken({ _id: user._id })
                    const refreshToken = getRefreshToken({ _id: user._id })
                    user.refreshToken.push({ refreshToken })
                    user.save((err, user) => {
                        if(err) {
                            req.status(500).json({errors: err.message, success: false})
                        } else {
                            res.cookie('refreshToken', refreshToken, COOKIE_OPTIONS)
                            res.status(209).json({errors: null, success: true, token})
                        }
                    })
                }
            }
        )
    ]
}

export const userLogin = (req, res) => {

    const token = getToken({ _id: req.user._id })
    const refreshToken = getRefreshToken({ _id: req.user._id })
    User.findById(req.user._id, (err, user) => {
        if(err) {
            res.status(400).json({errors: "Login cerdential not", success: false})
        } else {
            if(user) {
                user.refreshToken.push({refreshToken})
                user.save((err, user) => {
                    if(err) {
                        res.status(400).json({errors: "Login cerdential not", success: false})
                    } else {
                        if(user) {
                            res.cookie('refreshToken', refreshToken, COOKIE_OPTIONS)
                            res.status(200).json({errors: null, token, success: true})
                        } else {
                            res.status(500).json({errors: "User not found.", success: false})
                        }
                    }
                })
            } else {
                res.status(500).json({errors: "User not found.", success: false})
            }
        }
    })
}

export const refreshToken = (req, res) => {
    const {signedCookies = {}} = req
    const { refreshToken } = signedCookies

    if(refreshToken) {
        try {
            const payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
            const userId = payload._id
            User.findOne({_id: userId})
                .then( user => {
                    if(user) {
                        const tokenIndex = user.refreshToken.findIndex( item => item.refreshToken === refreshToken)
                        if(tokenIndex === -1) {
                            res.status(401).json({errors: 'Unable to refresh token', success: false})
                        } else {
                            const token = getToken({_id: userId})
                            const newRefreshToken = getRefreshToken({_id: userId})
                            user.refreshToken[tokenIndex] = {refreshToken: newRefreshToken}
                            user.save((err, user) => {
                                if(err) {
                                    res.status(401).json({errors: 'Error update refresh token in user.', success: false})
                                } else {
                                    if(user) {
                                        res.cookie('refreshToken', newRefreshToken, COOKIE_OPTIONS)
                                        res.status(200).json({errors: null, success: true, token})
                                    } else {
                                        res.status(401).json({errors: 'Not update refresh token in user.', success: false})
                                    }
                                }
                            })
                        }
                    }
                })
        } catch (err) {
            
        }
    }
}

export const userProfile = (req, res) => {
    res.status(200).json({errors: null, success: true, user: req.user})
}

export const userLogout = (req, res) => {
    const { signedCookies = {}} = req
    const { refreshToken } = signedCookies
    User.findById(req.user._id)
        .then( user => {
            const tokenIndex = user.refreshToken.findIndex( item => item.refreshToken === refreshToken)
            if(tokenIndex === -1) {
                res.status(500).json({errors: 'No login', success: false})
            } else {
                user.refreshToken.id(user.refreshToken[tokenIndex]._id).remove()
                user.save((err, user) => {
                    if(err) {
                        res.status(500).json({errors: 'Unable to remove refresh token', success: false})
                    } else {
                        if(user) {
                            res.clearCookie('refreshToken', COOKIE_OPTIONS)
                            res.status(200).json({errors: null, success: true})
                        } else {
                            res.status(500).json({errors: 'Error updating user.', success: false})
                        }
                    }
                })
            }
        })
}
