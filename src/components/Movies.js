import React, { useState, useEffect } from 'react'

// Redux
import { useSelector } from 'react-redux'

// Components
import Movie from './Movie'
import Loader from './Loader'
import Pagination from './Pagination'

const Movies = ({ inputSearchbar }) => {

    const movies = useSelector(state => state.movieReducer)
    const filters = useSelector(state => state.filterReducer)
    const [searchArray, setSearchArray] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentCategories, setCurrentCategories] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [moviesPerPage, setMoviePerPage] = useState(12)


    useEffect(() => {
        setIsLoading(false)
    }, [])
        
    // Set searchbar
    useEffect(() => {
        if (inputSearchbar !== '') {
            const searchFilter = movies.filter(movie => {
                const str = movie.title.toUpperCase()
                return str.includes(inputSearchbar.toUpperCase())
            })
            setSearchArray(searchFilter)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputSearchbar])
    
    // Set current categories
    useEffect(() => {
        const categoriesArray = filters.map(filter => {
            return filter.isChecked ? filter.category : null
        })
        return setCurrentCategories(categoriesArray)
    }, [filters])

    // Get current movies
    const indexOfLastMovie = currentPage * moviesPerPage
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage
    const currentMovies = movies.filter(movie => currentCategories.includes(movie.category)).slice(indexOfFirstMovie, indexOfLastMovie)
    const currentSearchedMovies = searchArray.filter(movie => currentCategories.includes(movie.category)).slice(indexOfFirstMovie, indexOfLastMovie)

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div>
            <div className="moviesContainer">
                {
                    isLoading && <Loader />
                }
                {
                    inputSearchbar !== '' ?
                        currentSearchedMovies.map((movie, index) => {
                            return  <Movie key={index} movie={movie} /> 
                        })
                        :
                        currentMovies.map((movie, index) => {
                            return <Movie key={index} movie={movie} /> 
                        })
                }
            </div>
            <Pagination moviesPerPages={moviesPerPage} totalMovies={movies.length} paginate={paginate} />
            <div className="nbPerPage">
                <ul>
                    <li onClick={() => setMoviePerPage(4)}>X4</li>
                    <li onClick={() => setMoviePerPage(8)}>X8</li>
                    <li onClick={() => setMoviePerPage(12)}>X12</li>
                </ul>      
            </div>
        </div>
    )
}

export default Movies