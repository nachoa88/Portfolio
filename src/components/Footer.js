import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import '../components/css/Footer.css';

function Footer() {
    // This will let the browser see if the actual routing is homePage or not, and use one footer o the other one.
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (

        <footer className={`${isHomePage ? "home-page-footer" : "other-page-footer"} w3-container w3-xxlarge`}>
            <div className="footer-icons">
                <Link className="bi bi-linkedin" to="https://www.linkedin.com/in/ignacio-albiol/" target="_blank"
                    rel="noopener noreferrer" aria-label="LinkedIn Profile of Ignacio Albiol"></Link>
                <Link className="bi bi-github" to="https://github.com/nachoa88" target="_blank"
                    rel="noopener noreferrer" aria-label="GitHub Profile of Ignacio Albiol"></Link>
            </div>
            <div className="footer-logo">
                <Link to="https://ignacioalbiol.tech/" target="_blank"
                    rel="noopener noreferrer" aria-label="Go to IAP Dev Web Page">
                    <img src="logo.png" className="logo-img" alt="IAP Dev Logo" />
                </Link>
                <p className="logo-text">Copyright 2024</p>
            </div>

        </footer>
    );
}

export default Footer;