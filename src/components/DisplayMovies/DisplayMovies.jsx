import './DisplayMovies.css'

import MovieCard from '../MovieCard/MovieCard'


function DisplayMovies({ searchResults, currentSearch }) {
    console.log(searchResults)
    let movieCardElements = []
    if (searchResults.length > 0) {
        movieCardElements = searchResults.map(searchResult => {
            return <MovieCard 
                        imdbID={ searchResult.imdbID } 
                        poster={ searchResult.Poster }
                        title={ searchResult.Title }
                        year={ searchResult.Year }
                        key={ searchResult.imdbID }
                    />
        })
    }

    

    return (
        <ul className='display-movies'>
            { searchResults.length > 0 ? movieCardElements : currentSearch.length > 0 ? <h2>No results for { currentSearch } :( </h2> : <h2>Search a movie!</h2>  }
        </ul>
    )
}

export default DisplayMovies