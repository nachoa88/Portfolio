import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Footer() {
    // This will let the browser see if the actual routing is homePage or not, and use one footer o the other one.
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (

        <footer className={`${ isHomePage ? "home-page-footer" : "other-page-footer" } w3-container w3-xxlarge`}>
            <div className="footer-icons">
                <Link className="fa fa-linkedin" to="https://www.linkedin.com/in/ignacio-albiol/" target="_blank"
                    rel="noopener noreferrer" aria-label="LinkedIn Profile of Ignacio Albiol"></Link>
                <Link className="fa fa-github" to="https://github.com/nachoa88" target="_blank"
                    rel="noopener noreferrer" aria-label="GitHub Profile of Ignacio Albiol"></Link>
                <Link className="fa fa-wordpress" to="..." target="_blank"
                    rel="noopener noreferrer" aria-label="WordPress Profile of Ignacio Albiol"></Link>
                <Link className="fa fa-instagram" to="https://www.instagram.com/albiol.nacho/" target="_blank"
                    rel="noopener noreferrer" aria-label="Instagram Profile of Ignacio Albiol"></Link>
            </div>
            <p className="w3-medium">Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank"
                rel="noopener noreferrer" className="w3-hover-text-green">w3.css</a></p>
        </footer>
    );
}

export default Footer;