import express from 'express'
import { getProjects, getSingleProjects, postProject, deleteProject, updateProject, deleteProjectImage, deleteProjectCategories } from '../controllers/project.js'
import uploads from '../middlewares/upload.js'

const router = express.Router()

router.get('/', getProjects)
router.get('/:id', getSingleProjects)
router.post('/', uploads.none(), postProject)
router.put('/:id', uploads.array('files', 5), updateProject)
router.put('/:id/image', uploads.none(), deleteProjectImage)
router.put('/:id/category', uploads.none(), deleteProjectCategories)
router.delete('/:id', deleteProject)

export default router