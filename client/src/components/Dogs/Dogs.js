import React from 'react'
import Dog from './Dog/Dog'
import { Grid, CircularProgress } from '@material-ui/core'
import useStyles from './styles'
import { useSelector } from 'react-redux';

const Dogs = ({ setCurrentId }) => {
    const classes = useStyles();
    const dogs = useSelector((state) => state.dogs)

    console.log(dogs);

    return (
        !dogs.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {dogs.map((dog) =>(
                    <Grid key={dog.id} item xs={12} sm={6}>
                        <Dog dog={dog} setCurrentId={setCurrentId} /> 
                    </Grid>
                ))}
            </Grid>
        )
     )
}

export default Dogs;

//<Dog dog={dog} /> sends dog to each dog component