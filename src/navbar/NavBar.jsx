import { NavLink } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {


    return (
        <nav className="navbar">
            <div className="nav-group-items">
                <NavLink className="nav-item" to="mainpage" > MainPage </NavLink>
                <NavLink className="nav-item" to="listmovie" > List Movies </NavLink>
                <NavLink className="nav-item" to="movienews"> News </NavLink>
            </div>
        </nav>
    )
}

export default NavBar