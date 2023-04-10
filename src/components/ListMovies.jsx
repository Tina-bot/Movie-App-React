

const ListMovies = ({ movies }) => {


   
    const hasMovies = movies.length > 0

    return (
        hasMovies ?
            (
                <ul className="grid">
                    {
                        movies.map((movie) => (
                            <li key={movie.imdbID}
                                onClick={() => { handleClick(movie) }}>
                                    
                                <div className="text-card">
                                    <h4>{movie.Title}</h4>
                                    <p>{movie.Year}</p>
                                </div>
                                <img src={movie.Poster}
                                    alt={movie.Title} />
                            </li>
                        ))
                    }
                </ul>
            )
            :
            ("No movies found")
    )

}
export default ListMovies