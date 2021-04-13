import React from 'react'

// Redux
import { deleteMovie } from '../redux/actions/movieAction'
import { deleteFilter } from '../redux/actions/filterAction'
import { useDispatch } from 'react-redux'

// Icons
import { ImBin2 } from 'react-icons/im'

// Components
import Vote from './Vote'

const Movie = ({ movie }) => {

    const dispatch = useDispatch()

    return (
        <div className="movieContainer">

            <ul>
                <li className="title">{movie.title}</li>
                <li>{movie.category}</li>
            </ul>

            <Vote movie={movie} />
            <ImBin2 className="delete_btn" size={22} onClick={() => {
                dispatch(deleteFilter(movie.category))
                dispatch(deleteMovie(movie.id))
            }} />
        </div>

    )
}

export default Movie