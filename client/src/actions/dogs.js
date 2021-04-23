import {FETCH_ALL, CREATE , UPDATE, DELETE } from '../constants/actionTypes'
import * as api from '../api';

//action creators
export const getDogs = () => async (dispatch) => {
    try {
        const { data } = await api.fetchDogs();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
    
}

export const createDog = (dog) => async (dispatch) => {
    try {
        const { data } = await api.createDog(dog);

        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const editDog = (id, dog) => async (dispatch) => {
    try {
        const { data } = await api.editDog(id, dog)

        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const deleteDog = (id) => async (dispatch) => {
    try {
        await api.deleteDog(id);

        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log(error)
    }
}