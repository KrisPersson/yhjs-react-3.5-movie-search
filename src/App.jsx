import { useState, useEffect } from 'react'
import './App.css'

import DisplayMovies from './components/DisplayMovies/DisplayMovies'
import SearchMovies from './components/SearchMovies/SearchMovies'

const API_KEY = '37fe945a'
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`

function App() {
  const [currentSearch, setCurrentSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect( () => {
    async function fetchData(searchTerm) {
      try {
        const response = await fetch(BASE_URL + searchTerm)
        const data = await response.json()
        if (data.Response === 'True') {
          setSearchResults(data.Search)
          console.log('Successfully set search results!')
        } else {
          console.log('false')
          setSearchResults([])
        }
      } catch (error) {
        console.log(error)
      }
    }
    if (currentSearch.length > 3) {
      fetchData(currentSearch)
    }
  }, [currentSearch])

  

  return (
    <div className="App">
      <SearchMovies setCurrentSearch={ setCurrentSearch } />
      <DisplayMovies 
        searchResults={ searchResults } 
        currentSearch={ currentSearch } 
      />
    </div>
  )
}

export default App
