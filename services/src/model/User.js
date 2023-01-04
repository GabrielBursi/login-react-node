import mongoose from 'mongoose'

const timeElapsed = Date.now();
const today = new Date(timeElapsed);

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
    date: {
        type: Date,
        default: today.toLocaleDateString()
    }

})

const ModelUser = mongoose.model('users', user)

export default ModelUser