import React from 'react';
import { Link } from 'react-router-dom';
import {  } from "./Header.css";
const Header = () => {
    return (
        <section className="header sticky-top">
        <nav id="navbar" className="navbar text-center navbar-expand-md">
            <div className="container">
                <Link to="/home" className="nav-link active px-3"><h2>Football League</h2></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ms-auto  mb-lg-0 nav justify-content-end">
                <li className="nav-item pt-2">
                        <span>                           
                            <Link to="/home" className="nav-link active px-3 "> <h5>Home</h5></Link>
                        </span>
                    </li>
                    <li className="nav-item pt-2">
                        <span>
                            <a className="nav-link active px-3"  href="#navbar">
                            <h5>Match Centre</h5>
                            </a>
                        </span>
                    </li>
                    <li className="nav-item pt-2">
                        <span>
                            <a className="nav-link active px-3"  href="#navbar">
                            <h5 >Fixture</h5>
                            </a>
                        </span>
                    </li>
                    <li className="nav-item pt-2">
                        <span>
                            <a className="nav-link active px-3" href="#navbar">
                            <h5>Team</h5>
                            </a>
                        </span>
                    </li>
                    <li className="nav-item pt-2">
                        <span>
                            <a className="nav-link active px-3  text-dark"  href="#navbar">
                            <h5 className="text-white">Tickets</h5>
                            </a>
                        </span>
                    </li>
                    <li className="nav-item pt-2">
                        <span>
                            <a className="nav-link active px-3  text-dark"  href="#navbar">
                            <h5  className="text-white">Player</h5>
                            </a>
                        </span>
                    </li>
                    <li className="nav-item pt-2">
                        <span>
                            <a className="nav-link active px-3  text-dark"  href="#navbar">
                            <h5  className="text-white">Help</h5>
                            </a>
                        </span>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </section>
    );
};

export default Header;