import { combineReducers } from 'redux'
import dogs from './dogs'
import login from './login'

export default combineReducers({ dogs, login })