import React from 'react'
import useStyles from './styles'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import moment from 'moment'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { useDispatch } from 'react-redux'
import { deleteDog } from '../../../actions/dogs'
import silhouette  from '../../../images/silhouette.jpg'


const Dog = ({ dog, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={silhouette}
                title={dog.dogsName}
            />
            <div className={classes.overlay}>
                <Typography variant="h6" style={{ color: 'black' }}>{dog.dogsName}</Typography>
                <Typography variant="body2" style={{ color: 'black' }}>{moment(dog.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: 'black' }} size="small" onClick={() => setCurrentId(dog._id)}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="h5" style={{ color: 'black' }}>Owner: {dog.owner}</Typography>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="body2" gutterBottom>Breed: {dog.breeding}</Typography>
                <Typography className={classes.title} variant="body2" gutterBottom>Weight: {dog.weight} lbs</Typography>
            </CardContent>
            <CardActions className={CardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(deleteDog(dog._id))} >
                    <DeleteIcon fontSize="small" />
                    &nbsp; Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Dog;