import {FETCH_ALL, CREATE , UPDATE, DELETE } from '../constants/actionTypes'

export default (dogs = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [ ...dogs, action.payload ];
        case UPDATE:
            return dogs.map((dog) => dog._id === action.payload._id ? action.payload : dog)
        case DELETE:
            return dogs.filter((dog) => dog._id !== action.payload)
        default:
            return dogs;
    }
}