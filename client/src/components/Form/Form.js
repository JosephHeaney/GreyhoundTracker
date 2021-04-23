import React, { useState, useEffect } from 'react'
import useStyles from './styles'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { createDog, editDog } from '../../actions/dogs'
import { useSelector } from 'react-redux';

const Form = ({ currentId, setCurrentId }) => {
    const [dogData, setDogData] = useState({
        dogsName: '',
        owner: '',
        breeding: '',
        weight: '',
        whelpedDate: '',
        earmark: ''
    })

    const dog = useSelector((state) => currentId ? state.dogs.find((d) => d._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (dog) setDogData(dog);
    }, [dog])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (currentId) {
            dispatch(editDog(currentId, dogData))
        } else {
            dispatch(createDog(dogData))
        }
        clear()
    }

    const clear = () => {
        setCurrentId(null)

        setDogData({
            dogsName: '',
            owner: '',
            breeding: '',
            weight: '',
            whelpedDate: '',
            earmark: ''
        })
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6" align="center">{currentId ? 'Edit ' : 'Tell me about '}your dog</Typography>
                <TextField name="Dogs Name" variant="outlined" label="Dog Name" fullWidth value={dogData.dogsName} onChange={(e) => setDogData({ ...dogData, dogsName: e.target.value })} />
                <TextField name="Owner" variant="outlined" label="Owner" fullWidth value={dogData.owner} onChange={(e) => setDogData({ ...dogData, owner: e.target.value })} />
                <TextField name="Breeding" variant="outlined" label="Breed" fullWidth value={dogData.breeding} onChange={(e) => setDogData({ ...dogData, breeding: e.target.value })} />
                <TextField name="Weight" variant="outlined" label="Weight" fullWidth value={dogData.weight} onChange={(e) => setDogData({ ...dogData, weight: e.target.value })} />
                <TextField name="Whelped Date" variant="outlined" label="Whelped Date" fullWidth value={dogData.whelpedDate} onChange={(e) => setDogData({ ...dogData, whelpedDate: e.target.value })} />
                <TextField name="Earmark" variant="outlined" label="Earmark" fullWidth value={dogData.earmark} onChange={(e) => setDogData({ ...dogData, earmark: e.target.value })} />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

//...dogData means that it will only change it's current state instead of everything


export default Form;