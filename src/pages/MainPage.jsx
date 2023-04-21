import { useEffect, useRef, useState } from 'react';
import '../App.css'
import ListMovies from '../components/ListMovies';
import { useMovies } from '../hooks/useMovies';
import { fetchMovies } from '../services/movies'
import useDebounce from '../hooks/useDebounce';


const MainPage = () => {
  const [movieSearch, setMovieSearch] = useState('');
  const [error, setError] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const inputRef = useRef();

  const { movies } = useMovies();
  const debouncedMovieSearch = useDebounce(movieSearch, 100)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMovies(debouncedMovieSearch)
      setMoviesList(data);
    }
    fetchData()

  }, [debouncedMovieSearch])

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const newQuery = event.target.value;

    setMovieSearch(newQuery);

    if (!newQuery) {
      setError('Please enter a search term');
    } else if (newQuery.match(/^\d+$/)) {
      setError('Please enter a valid search term');
    } else if (newQuery.length < 3) {
      setError('The search term must be at least 3 characters');
    } else {
      setError(null);
    }
  };

  return (
    <>
      <div className="main-page">
        <header>
          <h1>Movie App 🍿</h1>
          <form className="form"
            onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              value={movieSearch}
              name="inputMovie"
              placeholder="The Lord of the Rings, Star Wars, Titanic..."
              ref={inputRef}
            />
            <button type="submit">Search</button>
          </form>

          {error ? (
            <small style={{ color: 'red' }}>
              {error}
            </small>
          ) : null}

        </header>
        <main>
          {movieSearch.length > 2 ?
            <ListMovies movies={moviesList} />
            : <ListMovies movies={movies} />}
        </main>
      </div>
    </>
  );

}

export default MainPage