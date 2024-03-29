import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid } from '@material-ui/core'
import Dogs from '../Dogs/Dogs'
import Form from '../Form/Form'
import { useDispatch } from 'react-redux'
import { getDogs } from '../../actions/dogs'

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getDogs());
    }, [currentId, dispatch]);

    return (
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing="3">
                    <Grid item xs={12} sm={7}>
                        <Dogs setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home;