import express from 'express'

import { verifyUser } from '../utils/authentication'
import { getBranches } from '../controllers/branches.js'

const router = express.Router()

router.route('/branches').get()