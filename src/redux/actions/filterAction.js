export const GET_FILTERS = 'GET_FILTERS'
export const ADD_FILTER = 'ADD_FILTER'
export const EDIT_FILTER = 'EDIT_FILTER'
export const DELETE_FILTER = 'DELETE_FILTER'

export const getFilters = () => {
    return (dispatch) => {
            dispatch({ type: GET_FILTERS })
    }
}

export const addFilter = filter => {
    return (dispatch) => {
        dispatch({ type: ADD_FILTER, payload: filter })
    }
}

export const editFilter = filter => {
    return (dispatch) => {
        dispatch({ type: EDIT_FILTER, payload: filter })
    }
}

export const deleteFilter = category => {
    return (dispatch) => {
        dispatch({ type: DELETE_FILTER, payload: category })
    }
}

