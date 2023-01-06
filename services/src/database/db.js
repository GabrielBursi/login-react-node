import mongoose from 'mongoose'

mongoose.set('strictQuery', false)
try {
    await mongoose.connect('mongodb+srv://gabriel:gabriell4@cluster0.qhyomzh.mongodb.net/?retryWrites=true&w=majority');
} catch (error) {
    console.log(error);
}
