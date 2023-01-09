import mongoose from 'mongoose'

function connectDB(){
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

export default connectDB