import { Routes, Route, Navigate } from "react-router-dom"
import NavBar from "../navbar/NavBar"
import MainPage from "../pages/MainPage"
import MoviePage from "../pages/MoviePage"
import ListMovies from "../pages/ListMovies"
import MovieNewsPage from "../pages/MovieNewsPage"

const Router = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="moviepage/:id" element={<MoviePage />} />
                <Route path="mainpage" element={<MainPage />} />
                <Route path="listmovie" element={<ListMovies />} />
                <Route path="movienews" element={<MovieNewsPage />} />
                <Route path="/" element={<Navigate to="mainpage" />} />
            </Routes>
        </>
    )
}

export default Router