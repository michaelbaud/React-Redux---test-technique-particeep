import { GET_MOVIES, ADD_MOVIE, DELETE_MOVIE, SET_LIKES_DISLIKES } from "../actions/movieAction"

const initialState = []

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return action.payload
        case ADD_MOVIE:
            return [...state, action.payload]
        case DELETE_MOVIE:
            return state.filter(movie => movie.id !== action.payload.id)
        case SET_LIKES_DISLIKES:
            return state.map(movie => {
                if(movie.id === action.payload.id) {
                    return {
                        ...movie,
                        likes: action.payload.likes
                    }
                } else return movie
            })
        default:
            return state
    }
}

export default movieReducer