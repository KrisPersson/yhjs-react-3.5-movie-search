import './SearchMovies.css'
import { useState } from 'react'

function SearchMovies({ setCurrentSearch }) {

    const [input, setInput] = useState('')

    function handleChange(event) {
        const value = event.target.value
        setInput(value)
    }

    function handleClick(event) {
        event.preventDefault()
        console.log(input.length)
        if (input.length > 3) {
            setCurrentSearch(input)
        }
    }

    return (
        <form>
            <h1>MOVIE SEARCH</h1>
            <section>
                <input onChange={handleChange} type="text" placeholder='Ex. Batman Begins...' />
                <button onClick={handleClick}><i class="fa-solid fa-magnifying-glass"></i></button>
            </section>
            
        </form>
    )
}

export default SearchMovies