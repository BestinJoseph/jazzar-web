import express from 'express'

import { verifyUser } from '../utils/authentication.js'
import { getBranches, postBranch, putBranch } from '../controllers/branches.js'

const router = express.Router()

router.route('/').get(getBranches)

router.route('/').all().post(postBranch)

router.route('/edit').all().put(putBranch)

export default router