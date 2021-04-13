import React, { useState } from 'react'

// Redux
import { useDispatch } from 'react-redux'
import { setLikesDislikes } from '../redux/actions/movieAction'

// Icons
import { AiFillLike, AiFillDislike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'

const Vote = ({ movie }) => {

    const dispatch = useDispatch()

    const [isliked, setIsliked] = useState(false)
    const [isDisliked, setIsDisliked] = useState(false)
    
    const handle_likes = () => {

        let movieData = movie

        if (isliked && !isDisliked) {
            setIsliked(!isliked)
            --movieData.likes
            dispatch(setLikesDislikes(movieData))
        } else if (!isliked && isDisliked) {
            setIsliked(!isliked)
            setIsDisliked(!isDisliked)
            ++movieData.likes
            --movieData.dislikes
            dispatch(setLikesDislikes(movieData))
        } else if (!isliked && !isDisliked) {
            setIsliked(!isliked)
            ++movieData.likes
            dispatch(setLikesDislikes(movieData))
        }
    }

    const handle_dislikes = () => {

        let movieData = movie

        if (isliked && !isDisliked) {
            setIsliked(!isliked)
            setIsDisliked(!isDisliked)
            --movieData.likes
            ++movieData.dislikes
            dispatch(setLikesDislikes(movieData))
        } else if (!isliked && isDisliked) {
            setIsDisliked(!isDisliked)
            --movieData.dislikes
            dispatch(setLikesDislikes(movieData))
        } else if (!isliked && !isDisliked) {
            setIsDisliked(!isDisliked)
            ++movieData.dislikes
            dispatch(setLikesDislikes(movieData))
        }
    }

    return (
        <div className="vote">
            <div className="vote_bar">
                <div className="vote_progress" style={{ width: movie.likes + movie.dislikes === 0 ? 100 : Math.round(100 * (movie.likes / (movie.likes + movie.dislikes))) + '%' }}></div>
            </div>
            <div className="vote_btns">
                {
                    isliked ?
                    <button 
                        className={`vote_btn vote_like ${isliked && 'vote_isLiked'}`}
                        onClick={handle_likes}>
                            <AiFillLike className="react_icons" size={22} />{movie.likes}
                    </button> :
                    <button 
                        className="vote_btn vote_like"
                        onClick={handle_likes}>
                            <AiOutlineLike className="react_icons" size={22} />{movie.likes}
                    </button>
                }
                {
                    isDisliked ?
                        <button 
                            className={`vote_btn vote_dislike ${isDisliked && 'vote_isDisliked'}`}
                            onClick={handle_dislikes}>
                                <AiFillDislike className="react_icons" size={22} />{movie.dislikes}
                        </button> :
                        <button 
                            className="vote_btn vote_dislike"
                            onClick={handle_dislikes}>
                                <AiOutlineDislike className="react_icons" size={22} />{movie.dislikes}
                        </button>
                }
            </div>
        </div>     
    )
}

export default Vote