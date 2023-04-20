import { useEffect, useState } from "react"
import { fetchMoviesList } from "../services/movies"
import { Link } from "react-router-dom"
import './ListMovies.css'

const ListMoviesPage = () => {
    const [movies, setMovies] = useState([])
    const [year, setYear] = useState(2023)

    const makeList = async () => {
        const data = await fetchMoviesList(1, year)
        const data2 = await fetchMoviesList(2, year)
        const data3 = await fetchMoviesList(3, year)
        const data4 = await fetchMoviesList(4, year)

        setMovies([...data, ...data2, ...data3, ...data4])
        console.log(data)
    }
    useEffect(() => {
        makeList()
    }, [year])

    const handleSubmit = async (e) => {
        e.preventDefault();
        makeList()

    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="year">Year</label>
                <input type="number"
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