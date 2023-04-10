import movieRes from "../mocks/movieRes"

export function useMovies() {
    const movies = movieRes.Search

    const mappedMovies = movies?.map(movie => (
        {
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }))

    return { movies: mappedMovies }
}