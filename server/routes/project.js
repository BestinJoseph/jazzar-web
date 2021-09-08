import express from 'express'
import { getProjects, postProject, putProjectImages, putProject, deleteProjectImages } from '../controllers/project.js'
import upload from '../middlewares/upload.js'

const router = express.Router()

router.route('/').get(getProjects).post(upload.array('images'), postProject)

router.route('/:id').put(putProject)

router.route('/:id/images').put(upload.array('images'), putProjectImages).delete(deleteProjectImages)

router.route('/:id/images/delete').put(deleteProjectImages)

// router.get('/:id', getSingleProjects)
// router.post('/', uploads.none(), postProject)
// router.put('/:id', uploads.array('files', 5), updateProject)
// router.put('/:id/image', uploads.none(), deleteProjectImage)
// router.put('/:id/category', uploads.none(), deleteProjectCategories)
// router.delete('/:id', deleteProject)

export default router
