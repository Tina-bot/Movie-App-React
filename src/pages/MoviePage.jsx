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
                            <small>
                                🗓️ Release year: {movie.Year}
                                <br />
                                🌐 Made in: {movie.Country}
                            </small>
                            <br />
                            <img src={movie.Poster} alt={movie.Title} />
                        </div>
                        <br />
                        <div className="movie-info-left">
                            <small><i>Technical Information</i></small>
                            <h4>Story Description</h4>
                            <p>{movie.Plot}</p>
                            <div className="sublist">
                            
                                <div className="sublist-first" >

                                    <h4>Awards:</h4>
                                    <p>{movie.Awards}</p>
                                    <h4>Runtime:</h4>
                                    <p>{movie.Runtime}</p>
                                    <h4>Genre:</h4>
                                    <p>{movie.Genre}</p>
                                </div>
                                <br />
                                <div className="sublist-second">
                                    <h4>Director:</h4>
                                    <p>{movie.Director}</p>
                                    <h4>Cast:</h4>
                                    <p>{movie.Actors}</p>
                                    <h4>IMDb Rating:</h4>
                                    <p>{movie.imdbRating}/10</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </>
                : null}
        </div>
    )
}
export default MoviePage