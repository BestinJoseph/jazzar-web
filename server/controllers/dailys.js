import Daily from '../models/Daily.js'
import Project from '../models/project.js'
import _ from 'lodash'

export const getAllDaily = (req, res) => {
    Daily.find().populate({path: 'project', select: { project: 1, roles: 1 }}).exec((err, daily) => {
        if(err) {
            res.status(400).json({errors: err.message, success: false})
        } else {
            if(daily) {
                res.status(200).json({errors: null, success: true, daily})
            } else {
                res.status(400).json({errors: 'unable to load daily', success: false})
            }
        }
    })
}

export const postDaily = (req, res) => {
    Project.findOne({_id: req.params.project}).then( data => {
        if(data) {
            req.body.project = data._id
            req.body.requirements = data.roles.reduce( (acc, obj) => {
                if(Object.keys(req.body.requirements).includes(obj)) {
                    acc[obj] = _.isNaN(parseInt(req.body.requirements[obj])) ? 0 : parseInt(req.body.requirements[obj])
                } else {
                    acc[obj] = 0
                }
                return acc
            },{})
            Daily.create(req.body, (err, da) => {
                if(err) {
                    res.status(400).json({errors: err.message, success: false})
                } else {
                    if(da) {
                        Daily.findById(da._id).populate({path: 'project', select: ['project', 'roles']}).exec((err, daily) => {
                            if(daily) {
                                res.status(200).json({errors: null, success: true, daily})
                            } else {
                                res.status(200).json({errors: 'unable to save daily', success: false})
                            }
                        })
                        
                    } else {
                        res.status(400).json({errors: 'unable to save daily', success: false})
                    }
                }
            })
        }
    }).catch( err => res.status(400).json({errors: err.message, success: false}))
}

export const putDaily = (req, res) => {
    Daily.findOne({_id: req.params.daily}).then( data => {
        if(data) {
            Daily.findByIdAndUpdate(req.params.daily, { $set: { requirements: req.body.requirements } }, {new: true}, (err, da) => {
                if(err) {
                    res.status(400).json({errors: err.message, success: false})
                } else {
                    if(da) {
                        Daily.findById(da._id).exec((err, daily) => {
                            if(daily) {
                                res.status(200).json({errors: null, success: true, daily})
                            } else {
                                res.status(200).json({errors: 'unable to save daily', success: false})
                            }
                        })
                    } else {
                        res.status(400).json({errors: 'unable to save daily', success: false})
                    }
                }
            })
        }
    }).catch( err => res.status(400).json({errors: err.message, success: false}))
}