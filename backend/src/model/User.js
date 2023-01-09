import mongoose from 'mongoose'
const Schema = mongoose.Schema

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createAt: {
        type: String,
        default: new Date().toLocaleDateString()
    }
})

const ModelUser = mongoose.model('users', user)

export default ModelUser