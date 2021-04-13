import React, { useEffect } from 'react'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { addFilter, editFilter } from '../redux/actions/filterAction'

const Filters = () => {

    const dispatch = useDispatch()

    const movies = useSelector(state => state.movieReducer)
    const filters = useSelector(state => state.filterReducer)

    useEffect(() => {

        let filtersArray = []
        movies.forEach(movie => {
            if(!filtersArray.includes(movie.category)) {
                filtersArray.push(movie.category)
            }
        })

        filtersArray.forEach(filter =>  dispatch(addFilter({ category: filter, isChecked: true })))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movies])

    const handleCheck = e => {
        let filterUpdated
        filters.forEach(obj => {
            if(obj.category === e.target.id) {
                filterUpdated = { ...obj, isChecked: !obj.isChecked}
            }
        })
        dispatch(editFilter(filterUpdated))
    }

    const renderFilters = filters.map((filter, index) => {
        return (
            <div key={index} className="filterContainer">
                <input type="checkbox" id={filter.category} onChange={e =>handleCheck(e)} defaultChecked={filter.isChecked} />
                <label htmlFor={filter.category}>
                    <span></span> {filter.category}
                </label>
            </div>
        )
    })

    return (
        <div className="filtersSection">
            <div className="filtersContainer">
                {renderFilters}
            </div>

        </div>
    )
}

export default Filters