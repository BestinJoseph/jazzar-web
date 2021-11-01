import path from 'path'
import fs from 'fs'

import Project from '../models/project.js'
import Image from '../models/image.js'

const __dirname = path.resolve()

export const getProjects = async (req, res) => {
    try {
        const data = await Project.find().populate('images') //.populate('services')
        res.status(200).json({data})
    } catch (err) {
        res.status(400).json({errors: err.message})
    }
}

export const postProject = async (req, res) => {
    try {
        Project.create(req.body, (err, pro) => {
            if(err) {
                res.status(400).json({errors: err.message})
            } else {
                if(pro) {
                    res.status(200).json(pro)
                } else {
                    res.status(400).json({errors: 'Unable to post project'})
                }
            }
        })
    } catch (err) {
        res.status(400).json({errors: err.message})
    }
}

export const putProjectImages = async (req, res) => {
    // console.log(req.files)
    try {
        let savedImages = []
        await req.files.map( fi => {
            const file = new Image({
                name: fi.path.split('\\')[2],
                path: 'http://localhost:8000/images/'+fi.path.split('\\')[2],
                size: fi.size,
                type: fi.mimetype
            })
            file.save()
                .then( savedFile => {
                    savedImages.push(savedFile._id)
                    if(req.files.length === savedImages.length) {
                        Project.findByIdAndUpdate(req.params.id, {$push: {images: savedImages}}, { new: true})
                            .populate({path: 'images'})
                            .exec( (err, proj) => {
                                if (err) res.status(400).json({errors: err.message})
                                if (proj) res.status(200).json({message: 'Project Successfully Updated.', project: proj})
                            })
                    }
                })
                .catch( err => res.status(400).json({errors: err.message}) )
        })

    } catch (err) {
        res.status(400).json({errors: err.message})
    }
}

export const putProject = async (req, res) => {
    console.log()
    try {
        Project.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
            .populate({path: 'images'})
            .exec( (err, proj) => {
                if(err) res.status(409).json({ errors: err.message })
                if(proj) res.status(200).json({errors: null, success: false, project: proj})
            })
    } catch (err) {
        res.status(400).json({errors: err.message})
    }
}

export const deleteProjectImages = async (req, res) => {
    try {
        Image.findByIdAndRemove(req.body.imageId)
            .exec( (err, image) => {
                if(err) res.status(400).json({errors: err.message}) 
                if(image) {
                    Project.findByIdAndUpdate(req.params.id, {$pull: { images: { $in: [req.body.imageId] }}}, {multi: true, new: true})
                    .populate({ path: 'images'})
                    .exec( (err, proj) => {
                        if(err) res.status(409).json({ errors: err.message })
                        if(proj) {
                            fs.unlinkSync(path.join(__dirname, `public/uploads/${image.name}`))
                            res.status(200).json({message: 'Project Successfully Updated.', project: proj})
                        } else {
                            res.status(400).json({errors: err.message})
                        }
                    })
                }
            })
    } catch (err) {
        res.status(400).json({errors: err.message})
    }
}