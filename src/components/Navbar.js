import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import Dropdown from 'react-bootstrap/Dropdown';

import ThemeToggle from "./ThemeToggle.js";
import LanguageToggle from "./LanguageToggle.js";

import '../components/css/ThemeToggle.css';
import '../components/css/LanguageToggle.css';


function Navbar() {
    const [isDarkTheme, setDarkTheme] = useState(false);

    const toggleTheme = (darkMode) => {
        setDarkTheme(darkMode);
    };

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">

                {/*Ver este collapsed mode que no me termina de convencerW*/}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" aria-label="Go to Home">
                                <i className="bi bi-house-door-fill h3 icon-center"></i>Home</Link></li>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <i className="bi bi-pc-display h3 icon-center"></i>Projects
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <li>
                                    <Dropdown.Item><a className="dropdown-item" href="...">K0N3CT4</a></Dropdown.Item>
                                </li>
                                <li>
                                    <Dropdown.Item><a className="dropdown-item" href="...">LA Photography</a></Dropdown.Item>
                                </li>
                                <Dropdown.Divider />
                                <li>
                                    <Dropdown.Item><a className="dropdown-item" href="...">My Portfolio</a></Dropdown.Item>
                                </li>
                            </Dropdown.Menu>
                        </Dropdown>
                        <li className="nav-item">
                            <HashLink smooth to="/#contact" className="nav-link" aria-label="Go to Contact">
                                <i className="bi bi-person-fill h3 icon-center"></i>Contact</HashLink></li>
                    </ul>

                </div>
                <ThemeToggle toggleTheme={toggleTheme} />
                <LanguageToggle />
            </div>
        </nav>
    )
};

export default Navbar;