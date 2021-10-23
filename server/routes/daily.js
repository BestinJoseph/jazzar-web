import express from 'express'

import { getAllDaily, postDaily, putDaily } from '../controllers/dailys.js'

const router = express.Router()

router.route('/').get(getAllDaily)
router.route('/:project/create').post(postDaily)
router.route('/:daily').put(putDaily)

export default router