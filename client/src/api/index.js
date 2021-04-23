import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req;
})

export const fetchDogs = () => API.get('/dogs')
export const createDog = (newDog) => API.post('/dogs', newDog)
export const editDog = (id, editedDog) => API.patch(`/dogs/${id}`, editedDog)
export const deleteDog = ( id ) => API.delete(`/dogs/${id}`)

export const signIn = (FormData) => API.post('/user/signIn', FormData);
export const signUp = (FormData) => API.post('/user/signUp', FormData);