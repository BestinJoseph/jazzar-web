import Service from '../models/service.js'
import imageFile from '../models/image.js'
import service from '../models/service.js'

export const getAllServices = async (req, res) => {
    try {
        Service.find()
            .populate('images')
            .exec((err, services) => {
                if(err) res.status(400).json({errors: err.message})
                if(services) res.status(200).json(services)
            })
    } catch (err) {
        res.status(400).json({errors: err.message})
    }
}

export const getOneService = async (req, res) => {
    console.log(req.params.slug)
    try {
        res.status(200).json({service: 'get One the service here...'})
    } catch (err) {
        res.status(400).json({errors: err.message})
    }
}

export const postService = (req, res) => {
    const slug = req.body.name.toLowerCase().split(' ').join('-')

    try {
        req.body.service = req.body.name
        req.body.department = req.body.name
        req.body.slug = slug
        req.body.arname = req.body.name
        Service.create(req.body, (err, service) => {
            if(err) {
                // console.log(err.message)
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

export const putService = async (req, res) => {

    try {
        if(req.file === undefined) {
            Service.findOneAndUpdate({slug: req.params.slug}, {$set: req.body}, (err, service) => {
                if(err) {
                    res.status(400).json({errors: err.message})
                } else {
                    if(service) {
                        res.status(209).json({message: "successfully update."})
                    } else {
                        res.status(400).json({errors: "Problem Updating Service"})
                    }
                }
            })
        } else {
            req.files.forEach( ele => {
                const file = new imageFile({
                    name: ele.path.split('\\')[2],
                    path: `http://localhost:8000/images/${ele.path.split('\\')[2]}`,
                    type: ele.mimetype,
                    size: ele.size
                })
                file.save()
                    .then( files => {
                        if(files) {
                            Service.findOneAndUpdate({slug: req.params.slug}, {$push: { images: files._id }}, (err, service) => {
                                if(err) {
                                    res.status(400).json({errors: err.message})
                                } else {
                                    if(service) {
                                        res.status(209).json({message: "successfully update."})
                                    } else {
                                        res.status(400).json({errors: "Problem Updating Service"})
                                    }
                                }
                            })
                        }
                    })
                    .catch( err => res.status(400).json({errors: err.message}))
            })
        }
        
    } catch(err) {
        res.status(400).json({errors: err.message})
    }
}

export const updateServiceImages = async (req, res) => {

    try {
        Service.findByIdAndUpdate(req.params.id, {$set: {images: req.body}}, {new: true})
            .populate('images')
            .exec((err, services) => {
                if(err) res.status(401).json({Errors: err.message})
                if(services) res.status(200).json({services})
            })
    } catch (err) {
        res.status(400).json({errors: err.message})
    }
}

export const deleteServiceImages = async (req, res) => {
    try {
        Service.findOneAndUpdate({slug: req.params.slug}, {$set: { images: []}}, (err, service) => {
            if(err) {
                res.status(400).json({errors: err.message})
            } else {
                if(service) {
                    res.status(209).json({message: "successfully images deleted"})
                } else {
                    res.status(400).json({errors: "Problem deleting service images"})
                }
            }
        })
    } catch (err) {
        res.status(400).json({errors: err.message})
    }
}
