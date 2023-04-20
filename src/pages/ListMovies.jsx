import { useEffect, useState } from "react"
import { fetchMoviesList } from "../services/movies"
import { Link } from "react-router-dom"
import './ListMovies.css'

/** TODO: Add filter and errors to input, add second filter (title, type or genre) **/

const ListMoviesPage = () => {
    const [movies, setMovies] = useState([])
    const [year, setYear] = useState(2023)

    useEffect(() => {
        const makeList = async () => {
            const data = await fetchMoviesList(1, year)
            const data2 = await fetchMoviesList(2, year)
            const data3 = await fetchMoviesList(3, year)
            const data4 = await fetchMoviesList(4, year)

            setMovies([...data, ...data2, ...data3, ...data4])
            console.log(data)
        }
        makeList()
    }, [year])
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await fetchMoviesList(1, year);
        const data2 = await fetchMoviesList(2, year);
        const data3 = await fetchMoviesList(3, year);
        const data4 = await fetchMoviesList(4, year);
        setMovies([...data, ...data2, ...data3, ...data4]);
    };
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="year">Year</label>
                <input type="text"
                    id="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)} />

            </form>
            <ul>
                {
                    movies.length > 1 ?

                        movies.map((movie) =>
                            <li key={movie.imdbID}>
                                <Link to={`/moviepage/${movie.imdbID}`}>
                                    {movie.Title}
                                </Link>
                            </li>
                        )
                        : <h1>Loading...</h1>

                }
            </ul>
        </div>
    )
}

export default ListMoviesPage