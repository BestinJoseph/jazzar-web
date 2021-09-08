import express from 'express'

import { singleImage } from '../controllers/images.js'

const router = express.Router()

router.route('/:id').get(singleImage)

export default router