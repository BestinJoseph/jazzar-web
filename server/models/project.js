import mongoose from 'mongoose'

const projectSchema = mongoose.Schema({
    project: {
        type: String,
        unique: true,
        require: true
    },
    client: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true,
        enum: ['tower','university','housing','reservoir','airport','road']
    },
    roles: [
        {
            type: String,
            enum: ['technicians','helper','rigs','supervisor','engineer','secretary', 'driver', 'surveyor', 'geologist']
        }
    ],
    services: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'services'
        }
    ],
    start_date: {
        type: Date,
        require: true,
        default: Date.now()
    },
    end_date: {
        type: Date,
        require: false,
        default: ''
    },
    description: {
        type: String
    },
    images: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'images'
        }
    ]
}, {timestamps: true})

export default mongoose.model('projects', projectSchema)