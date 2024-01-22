import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import Dropdown from 'react-bootstrap/Dropdown';

import ThemeToggle from "./ThemeToggle.js";
import LanguageToggle from "./LanguageToggle.js";

import '../components/css/Navbar.css';

function Navbar({ toggleTheme }) {

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler custom-icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars fa-2x"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="normal-btn" aria-label="Go to Home Page">
                                <i className="bi bi-house-door-fill h3 icon-center"></i>Home</Link></li>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <i className="bi bi-pc-display h3 icon-center"></i>Projects
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="custom-dropdown-menu">
                                <li>
                                    <Dropdown.Item><Link className="dropdown-item" to="/konecta" aria-label="Go to Konecta project">
                                        K0N3CT4</Link></Dropdown.Item>
                                </li>
                                <li>
                                    <Dropdown.Item><Link className="dropdown-item" to="/laphotography" aria-label="Go to LA Photography">
                                        LA Photography</Link></Dropdown.Item>
                                </li>
                                <Dropdown.Divider />
                                <li>
                                    <Dropdown.Item><Link className="dropdown-item" to="/portfoliopage" aria-label="Go to My Portfolio">
                                        My Portfolio</Link></Dropdown.Item>
                                </li>
                            </Dropdown.Menu>
                        </Dropdown>
                        <li className="nav-item">
                            <HashLink smooth to="/#contact" className="normal-btn" aria-label="Go to Contact">
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