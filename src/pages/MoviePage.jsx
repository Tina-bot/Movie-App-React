import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { fetchMoviesByID } from "../services/movies"
import "./MoviePage.css"

const MoviePage = () => {
    let { id } = useParams()
    const [movie, setMovie] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchMoviesByID(id)
            setMovie(data);
        }
        fetchData()
    }, [])

    return (
        <div>
            {movie ?
                <>
                    <h2 className="title-movie-page">{movie.Title}</h2>
                    <div className="movie-info">
                        <div className="movie-info-right">
                            <small>{movie.Year}, {movie.Country}</small>
                            <img src={movie.Poster} alt={movie.Title} />
                        </div>
                        <br />
                        <div className="movie-info-left">
                            <p>{movie.Plot}</p>
                            <p>{movie.Awards}</p>
                            <p>{movie.Runtime}</p>
                        </ div>
                    </div>
                </>
                : null }
        </div>
    )
}
export default MoviePage