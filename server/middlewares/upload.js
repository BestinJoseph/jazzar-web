import multer from 'multer'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads')
    },
    filename: (req, file, cb) => {
        req.file_name = Date.now() + '-' + file.originalname
        cb(null, req.file_name)
    }
})

const fileFilter = (req, file, cb) => {
    // console.log(file)
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true)
    } else {
        req.fileValidationError = 'goes wrong file'
        cb(null, false, new Error('goes wrong...'))
    }
}

export default multer({ storage: storage, fileFilter: fileFilter })