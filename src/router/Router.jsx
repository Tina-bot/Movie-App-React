import { Routes, Route, Navigate } from "react-router-dom"
import NavBar from "../navbar/NavBar"
import MainPage from "../pages/MainPage"
import MoviePage from "../pages/MoviePage"

const Router = () => {
    return (
        <>
            <NavBar />

            <Routes>
                <Route path="moviepage/:id" element={<MoviePage />} />
                <Route path="mainpage" element={<MainPage />} />
                <Route path="/" element={<Navigate to="mainpage" />} />
            </Routes>
        </>
    )
}

export default Router