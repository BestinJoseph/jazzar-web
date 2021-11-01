import express from 'express'

import { getAllContacts } from '../../client/src/api/contactApi.js'
import { getProjects, postProject, putProjectImages, putProject, deleteProjectImages } from '../controllers/project.js'
import upload from '../middlewares/upload.js'
import { verifyUser } from '../utils/authentication.js'

const router = express.Router()

router.route('/').get(getProjects)

router.route('/').all(verifyUser).post(upload.array('images'), postProject)

router.route('/:id').all(verifyUser).put(putProject)

router.route('/:id/images').all(verifyUser).put(upload.array('images'), putProjectImages).delete(deleteProjectImages)

router.route('/:id/images/delete').all(verifyUser).put(deleteProjectImages)

// router.get('/:id', getSingleProjects)
// router.post('/', uploads.none(), postProject)
// router.put('/:id', uploads.array('files', 5), updateProject)
// router.put('/:id/image', uploads.none(), deleteProjectImage)
// router.put('/:id/category', uploads.none(), deleteProjectCategories)
// router.delete('/:id', deleteProject)

export default router
