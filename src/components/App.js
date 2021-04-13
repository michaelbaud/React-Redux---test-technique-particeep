import React, { useState } from 'react'
import '../css/App.css'

// Components
import Searchbar from './Searchbar'
import Filters from './Filters'
import Movies from './Movies'
import Footer from './Footer'

const App = () => {

  const [inputSearchbar, setInputSearchbar] = useState('')

  return (
    <div className="App">
      <h1>Listes des films</h1>
      <Searchbar inputSerachbar={inputSearchbar} setInputSearchbar={setInputSearchbar} />
      <Filters />
      <Movies inputSearchbar={inputSearchbar} />
      <Footer />
    </div>
  )
}

export default App