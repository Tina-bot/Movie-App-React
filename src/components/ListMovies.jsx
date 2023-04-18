import { useNavigate } from "react-router-dom"


const ListMovies = ({ movies }) => {
    const navigation = useNavigate()

    const sendId = (id) => {
        navigation('/moviepage/' + id)
    }

    const hasMovies = movies

    return (
        hasMovies ?
            (
                <ul className="grid">
                    {
                        movies.map((movie) => (
                            <li key={movie.imdbID}
                                onClick={() => { sendId(movie.imdbID) }}>

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