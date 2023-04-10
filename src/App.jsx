import { useEffect, useRef, useState } from 'react';
import './App.css';
import ListMovies from './components/ListMovies';
import { useMovies } from './hooks/useMovies';

const API_KEY = 'afd76987';


function App() {
  const [movieSearch, setMovieSearch] = useState('');
  const [error, setError] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const inputRef = useRef();

  const { movies } = useMovies();

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${movieSearch}&page=1`);
        const data = await response.json();
        setMoviesList(data.Search || movies);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies()
  }, [movieSearch])

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(movieSearch, 'Esto guarde');
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
        {movieSearch ?
          <ListMovies movies={moviesList} />
          : null}
      </main>
    </div>
  );
}

export default App;
