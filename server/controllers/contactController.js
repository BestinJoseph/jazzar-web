import Contact from '../models/contact.js'
import mailer from '../utils/mail.js'

export const getContacts = (req, res) => {
    try {
        Contact.find().exec()
        res.status(200).json({data})
    } catch (err) {
        res.status(400).json({errors: err.message})
    }
}

export const postContact = (req, res) => {
    try {
        mailer(req.body)
        // res.status(200).json({ success: true, message: "Successfully submitted, " })
    } catch (err) {
        res.status(400).json({errors: err.message})
    }
}
