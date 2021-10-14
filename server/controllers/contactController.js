import Contact from '../models/contact.js'
import mailer from '../utils/mail.js'

export const getContacts = (req, res) => {
    try {
        Contact.find().exec((err, data) => {
            if(err) {
                res.status(200).json({errors: err.message, success: false})
            } else {
                if(data) {
                    res.status(200).json({errors: null, success: false, data})
                } else {
                    res.status(200).json({errors: 'unable to load contacts', success: false})
                }
            }
        })
        
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
