import express from 'express'

import { getAllServices, getOneService, postService, putService, deleteServiceImages, updateServiceImages } from '../controllers/service.js'
import upload from '../middlewares/upload.js'

const router = express.Router()

router.route('/').get(getAllServices).post(upload.single('image'), postService)

router.route('/:slug').get(getOneService).put(upload.array('images'), putService)

router.route('/:id/images').put(updateServiceImages)

router.route('/:slug/delete/images').put(deleteServiceImages)

export default router