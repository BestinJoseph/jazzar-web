import express from 'express'

import { getContacts, postContact } from '../controllers/contactController.js'

const router = express.Router()

router.route('/').get(getContacts).post(postContact)

export default router
