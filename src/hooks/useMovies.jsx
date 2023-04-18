import movieRes from "../mocks/movieRes"

export function useMovies() {
    const movies = movieRes.Search

    const mappedMovies = movies?.map(movie => (
        {
            imdbID: movie.imdbID,
            Title: movie.Title,
            Year: movie.Year,
            Poster: movie.Poster
        }))

    return { movies: mappedMovies }
}