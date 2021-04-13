import React from 'react'

const Searchbar = ({ inputSearchbar, setInputSearchbar }) => {

    return (
        <div className="searchbar">
            <form>
                <div>
                    <input
                        type="text" id="searchbar"
                        onChange={e => setInputSearchbar(e.target.value)}
                        value={inputSearchbar}
                        pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
                    />
                    <label htmlFor="searchbar">Rechercher une film</label>
                </div>
            </form>
        </div>
    )
}

export default Searchbar