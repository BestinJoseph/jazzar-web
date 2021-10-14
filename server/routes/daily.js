import express from 'express'

import { getAllDaily, postDaily } from '../controllers/dailys.js'

const router = express.Router()

router.route('/').get(getAllDaily)
router.route('/:project/create').post(postDaily)
router.route('/:id').put()

export default router