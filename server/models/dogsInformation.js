import mongoose from 'mongoose'

const dogsSchema = mongoose.Schema({
    dogsName: String,
    owner: String,
    breeding: String,
    weight: Number,
    whelpedDate: String,
    earmark: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

var DogsInformation = mongoose.model('DogsInformation', dogsSchema);

export default DogsInformation;