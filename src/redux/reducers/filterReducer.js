import { GET_FILTERS, ADD_FILTER , EDIT_FILTER, DELETE_FILTER } from "../actions/filterAction"

const initialState = []

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FILTERS:
            return action.payload
        case ADD_FILTER:
            const filterArray = state.map(filter => filter.category)
            if(!filterArray.includes(action.payload.category)) {
                return [...state, action.payload]
            } else return state  
        case EDIT_FILTER:
            return state.map(filter => {
                if (filter.category === action.payload.category) {
                    return {...filter, isChecked: action.payload.isChecked}
                } else return filter
            })
        case DELETE_FILTER:
            return state.filter(filter => filter.category !== action.payload)
        default:
            return state
    }
}

export default filterReducer