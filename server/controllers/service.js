import Service from '../models/service.js'

export const getAllServices = async (req, res) => {
    try {
        const data = await Service.find()
        res.status(200).json(data)
    } catch (err) {
        res.status(400).json({errors: err.message})
    }
}

export const getOneService = async (req, res) => {
    try {
        res.status(200).json({services: 'get One the service here...'})
    } catch (err) {
        res.status(400).json({errors: err.message})
    }
}

export const postService = (req, res) => {
    try {
        Service.create(req.body, (err, service) => {
            if(err) {
                res.status(400).json({errors: err.message})
            } else {
                if(service) {
                    res.status(209).json(service)
                } else {
                    res.status(400).json({errors: "Problem creating Service"})
                }
            }
        })
    } catch (err) {
        res.status(400).json({errors: err.message})
    }
}