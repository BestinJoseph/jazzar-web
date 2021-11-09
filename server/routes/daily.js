import express from 'express'

import { getAllDaily, postDaily, putDaily } from '../controllers/dailys.js'
import { verifyUser } from '../utils/authentication.js'

const router = express.Router()

router.route('/').all(verifyUser).get(getAllDaily) //.all(verifyUser)
router.route('/:project/create').all(verifyUser).post(postDaily)
router.route('/:daily').all(verifyUser).put(putDaily)

export default router
