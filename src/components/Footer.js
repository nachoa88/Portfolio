import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Footer() {
    // This will let the browser see if the actual routing is homePage or not, and use one footer o the other one.
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (

        <footer className={`${ isHomePage ? "home-page-footer" : "other-page-footer" } w3-container w3-xxlarge`}>
            <div className="footer-icons">
                <Link className="bi bi-linkedin" to="https://www.linkedin.com/in/ignacio-albiol/" target="_blank"
                    rel="noopener noreferrer" aria-label="LinkedIn Profile of Ignacio Albiol"></Link>
                <Link className="bi bi-github" to="https://github.com/nachoa88" target="_blank"
                    rel="noopener noreferrer" aria-label="GitHub Profile of Ignacio Albiol"></Link>
                <Link className="bi bi-discord" to="..." target="_blank"
                    rel="noopener noreferrer" aria-label="Discord Profile of Ignacio Albiol"></Link>
                <Link className="bi bi-instagram" to="https://www.instagram.com/albiol.nacho/" target="_blank"
                    rel="noopener noreferrer" aria-label="Instagram Profile of Ignacio Albiol"></Link>
            </div>
            <p className="w3-medium">Copyright 2023 - Ignacio Albiol Dev.</p>
        </footer>
    );
}

export default Footer;