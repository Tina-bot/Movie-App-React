import { useState } from "react"
import { NavLink } from "react-router-dom"
import { fetchMoviesByID } from "../services/movies"
import "./NavBar.css"

const NavBar = () => {
    const [randomMovie, setRandomMovie] = useState('tt2488496')

    const getMovieRandom = async () => {
        const random = Math.floor(Math.random() * 100000)
        const id = "tt01" + random
        const data = await fetchMoviesByID(id);
        setRandomMovie(data.imdbID)
    }


    return (
        <nav className="navbar">
            <NavLink className="nav-item" to="mainpage" > MainPage </NavLink>
            <NavLink className="nav-item" to="mainpage" > List Movies </NavLink>
            <NavLink className="nav-item" to={`moviepage/${randomMovie}`}
                onClick={() => getMovieRandom} > Movie Random    </NavLink>
        </nav>
    )
}

export default NavBar