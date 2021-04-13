import movies from '../../movies'

export const GET_MOVIES = 'GET_MOVIES'
export const ADD_MOVIE = 'ADD_MOVIE'
export const DELETE_MOVIE = 'DELETE_MOVIE'
export const SET_LIKES_DISLIKES = 'SET_LIKES_DISLIKES'

export const getMovies = () => {
    return (dispatch) => {
            dispatch({ type: GET_MOVIES, payload: movies })
    }
}

export const deleteMovie = id => {
    return (dispatch) => {
            dispatch({ type: DELETE_MOVIE, payload: { id } })
    }
}

export const setLikesDislikes = movie => {
    return (dispatch) => {
            movies[movie.id] = { ...movie }
            dispatch({ type: SET_LIKES_DISLIKES, payload: { ...movie } })
    }
}