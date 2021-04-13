import { combineReducers } from 'redux'

import movieReducer from './movieReducer'
import filterReducer from './filterReducer'

export default combineReducers({
    movieReducer,
    filterReducer
})