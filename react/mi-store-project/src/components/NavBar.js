import React from 'react'
import "../styles/Nav.css";
import { Link } from "react-router-dom";



const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M39.8 41.95 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L42 39.75Zm-20.95-13.4q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z" /></svg>;

const NavBar = ({logo}) => {
    return (
        <div>
            <div className="nav">
                <div className="logo">
                    <Link to="/">
                        <img id="logoImage" src={logo}   alt="Not" />
                    </Link>

                </div>

                <a className="navlinks" href="/miphones">Mi Phones</a>
                <a className="navlinks" href="/redmiphones">Redmi Phones</a>
                <a className="navlinks" href="/tv">TV</a>
                <a className="navlinks" href="/laptops">Laptops</a>
                <a className="navlinks" href="/lifestyle">Fitness & Lifestyle</a>
                <a className="navlinks" href="/home">Home</a>
                <a className="navlinks" href="/audio">Radio</a>
                <a className="navlinks" href="/accessories">Accessories</a>

                <div className="searchbox">
                    <input type="text" name="search" placeholder="Search Products" />
                    {searchIcon}

                </div>


            </div>
        </div>
    )
}

export default NavBar