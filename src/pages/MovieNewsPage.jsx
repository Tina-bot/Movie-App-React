import MovieNews from "../components/MovieNews"
import "./MovieNewsPage.css"
import news from "../mocks/movieNews.js"

const MovieNewsPage = () => {

    return (<>
            <h1>News</h1>
        <div className="movie-news-page">
            <ul>
                {
                    news.map((newsItem) => (
                        <MovieNews news={newsItem} />
                        ))
                    }
            </ul>
        </div>
                    </>
    )
}

export default MovieNewsPage