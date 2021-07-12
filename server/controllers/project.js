import Project from '../models/project.js'
import fs from 'fs'
import path from 'path'

const __dirname = path.resolve()

export const getProjects =  async (req, res) => {
    try {
        const data = await Project.find()
        res.json({projects: data})
    } catch (err) {
        res.json({ error: err.message })
    }
}

export const getSingleProjects = async (req, res) => {
    const id = req.params.id
    try {
        const data = await Project.findById(id).exec()
        res.status(200).json({ project: data })
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

export const postProject = async (req, res) => {
    try {
        Project.create(req.body, (err, data) => {
            if(err) {
                res.status(401).json({error: err.message})
            } else {
                res.status(201).json({ project: data})
            }
        })
    } catch (err) {
        res.status(401).json({error: err.message})
    }
}

export const updateProject = async (req, res) => {
    const id = req.params.id
    let fileArray = []
    let categories = []
    if( (typeof req.body.catergories) === 'string') {
        categories.push(req.body.catergories)
    } else {
        categories = req.body.catergories
    }
    delete req.body.catergories
    req.files.forEach( (el) => {
        const file = {
            fileName: el.path.split('\\')[2],
            filePath: el.path,
            fileType: el.mimetype,
            fileSize: fileSizeFormatter(el.size, 2)
        }
        fileArray.push(file)
    })
    const updatedProject = { $set: { ...req.body }, $push: { images: { $each: fileArray }, catergories: { $each : categories } } }
    if( !req.fileValidationError ) {
        try {
            Project.findByIdAndUpdate(id, updatedProject, { upsert: true, new: true }, (err, data) => {
                if(err) {
                    res.status(401).json({error: err.message})
                } else {
                    res.status(201).json({ message: 'updated successfully', project: data })
                }
            })
        } catch (err) {
            res.status(401).json({ error: err.message })
        }
    } else {
        res.status(401).json({ error: req.fileValidationError })
    }
}

export const deleteProject = async (req, res) => {
    const id = req.params.id
    const project = await Project.findById(id).exec()
    try {
        Project.findByIdAndRemove(id, null, (err, data) => {
            if(err) {
                res.status(401).json({error: err.message})
            } else {
                try {
                    project.images.map( img => {
                        fs.unlinkSync(path.join(__dirname, '/public/uploads/' + img.fileName ))
                    })
                    res.status(209).json({ message: 'successfully deleted', project: data })
                } catch (err) {
                    res.status(409).json({ error: err.message })
                }
            }
        })
    } catch (err) {
        res.status(401).json({error: err.message})
    }
}

export const deleteProjectImage = async (req, res) => {
    const id = req.params.id
    const fileName = req.body.image
    try {
        Project.findByIdAndUpdate(id, { $pull: {images: { fileName: fileName }} }, { new: true }, (err, data ) => {
            if(err) {
                res.status(401).json({ error: err.message })
            } else {
                try {
                    fs.unlinkSync( path.join( __dirname, "public/uploads/" + fileName ))
                    res.status(209).json({ message: "success" })
                } catch (err) {
                    res.status(409).json({ error: err.message })
                }
            }
        })
    } catch (err) {
        res.status(401).json({ error: err.message })
    }
}

export const deleteProjectCategories = async (req, res) => {
    const id = req.params.id
    const category = req.body.category
    console.log(category)
    try {
        Project.findByIdAndUpdate(id, { $pull: { catergories: { $gte: category } } }, { new: true }, (err, data ) => {
            if(err) {
                res.status(401).json({ error: err.message })
            } else {
                res.status(209).json({ message: "success", project: data })
            }
        })
    } catch (err) {
        res.status(401).json({ error: err.message })
    }
}

const fileSizeFormatter = (bytes, decimal) => {
    if(bytes === 0) {
        return '0 Bytes'
    } else {
        const dm = decimal || 2
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB']
        const index = Math.floor(Math.log(bytes) / Math.log(1000))
        return parseFloat((bytes/Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index]
    }
}