import Project from '../models/project.js'

export const getProjects = async (req, res) => {
    try {
        const data = await Project.find()
        res.status(200).json({data})
    } catch (err) {
        res.status(400).json({errors: err})
    }
}