import mongoose from 'mongoose'
import DogsInformation from '../models/dogsInformation.js'

export const getDogs = async (req, res) =>{
    try {
        const dogInformation = await DogsInformation.find();

        res.status(200).json(dogInformation)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getDog = async (req, res) => { 
    const { id } = req.params;

    try {
        const dog = await DogsInformation.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createDog = async (req, res) =>{
    const { dogsName, owner, breeding, weight, whelpedDate, earmark } = req.body;

    const newDog = new DogsInformation({ dogsName, owner, breeding, weight, whelpedDate, earmark });

    try {
        await newDog.save();

        res.status(201).json(newDog);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const editDog = async (req, res) => {
    const { id: _id } = req.params;
    const dog = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No dog found!');

    

    const editedDog = await DogsInformation.findByIdAndUpdate(_id, { ... dog, _id }, { new: true })

    res.json(editedDog);
}

export const deleteDog = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No dog found!');

    await DogsInformation.findByIdAndRemove(id);

    res.json({ message: 'Dog Information successfully deleted' })
}