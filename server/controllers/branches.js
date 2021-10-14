import Branch from '../models/Branch.js'

export const getBranches = (req, res) => {
    try {
        Branch.find().exec((err, branches) => { //.populate({})
            if(err) {
                res.status(500).json({error: err.message, success: false})
            } else {
                if(branches) {
                    res.status(200).json({error: null, success: true, branches})
                } else {
                    res.status(500).json({error: err.message, success: false})
                }
            }
        })
    } catch (err) {
        res.status(500).json({error: err.message, success: false})
    }
}

export const postBranch = (req, res) => {
    Branch.findOne({name: req.body.name}).then((branch)=>{
        if(branch) {
            res.status(500).json({error: 'Branch is already available', success: false})
        } else {
            Branch.create(req.body).then((branch, err) => {
                if(err) {
                    res.status(500).json({error: err.message, success: false})
                } else {
                    if(branch) {
                        res.status(200).json({error: null, success: true, branch})
                    } else {
                        res.status(500).json({error: "Unable to get Branch info", success: false})
                    }
                }
            })
        }
    })
}

export const putBranch = (req, res) => {
    Branch.findById(req.query.id, (err, data) => {
        if(err) return res.status(500).json({error: err.message, success: false})
        if(data) {
            Branch.findByIdAndUpdate(req.query.id, {$set: req.body}, {new: true})
                // .populate()
                .exec((err, branch) => {
                    if(err) {
                        res.status(500).json({error: err.message, success: false})
                    } else {
                        if(!branch)  {
                            res.status(500).json({error: "Unable to get Branch info", success: false})
                        } else {
                            res.status(209).json({error: null, success: true, branch})
                        }
                    }
                })
        }
    })
}