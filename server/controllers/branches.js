import Branch from '../models/Branch.js'

export const getBranches = (req, res) => {
    try {
        Branch.find().populate({}).exec((err, branches) => {
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

export const postBranch = () => {
    Branch.findOne({name: req.body.name}).then((branch)=>{
        if(branch) {
            res.status(500).json({error: 'Branch is already available', success: false})
        } else {
            Branch.create(req.body).then((err, branch) => {
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