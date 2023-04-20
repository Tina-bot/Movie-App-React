import { Routes, Route, Navigate } from "react-router-dom"
import NavBar from "../navbar/NavBar"
import MainPage from "../pages/MainPage"
import MoviePage from "../pages/MoviePage"
import ListMovies from "../pages/ListMovies"

const Router = () => {
    return (
        <>
            <NavBar />

            <Routes>
                <Route path="moviepage/:id" element={<MoviePage />} />
                <Route path="mainpage" element={<MainPage />} />
                <Route path="listmovie" element={<ListMovies />} />
                <Route path="/" element={<Navigate to="mainpage" />} />
            </Routes>
        </>
    )
}

export default Router