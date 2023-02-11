import './MovieCard.css'

function MovieCard({imdbID, poster, title, year}) {

    return (
        <li className='movie-card'>
            <section className='movie-card__poster-container'>
                <img src={ poster } alt={`${title}-poster`} />
            </section>
            <section className='movie-card__info-box'>
                <h2>{ title }</h2>
                <p>IMDB-ID: <br />{ imdbID }</p>
                <p className='info-box__year'>{ year }</p>
            </section>
        </li>
    )
}

export default MovieCard