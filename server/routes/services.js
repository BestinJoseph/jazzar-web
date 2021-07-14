import express from 'express'

import { getAllServices, getOneService, postService } from '../controllers/service.js'

const router = express.Router()

router.route('/').get(getAllServices).post(postService)

router.route('/:slug').get(getOneService)

export default router