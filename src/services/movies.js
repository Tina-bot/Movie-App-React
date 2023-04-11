const API_KEY = 'afd76987'

 export async function fetchMovies(movieSearch) {
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${movieSearch}&page=1`);
        const data = await response.json();
        console.log(JSON.stringify(data));
        return data.Search
    } catch (error) {
        console.log(error);
    }
}

