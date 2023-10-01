import { Link } from 'react-router-dom';

function HiddenSidebar({ isVisible, toggleSidebar }) {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        isVisible && (
            <nav className="w3-sidebar" id="hiddenSidebar">
                <button onClick={toggleSidebar} className="w3-button w3-xxxlarge w3-display-topright" id="closeButton">
                    <i className="fa fa-remove"></i>
                </button>
                <div className="w3-bar-block w3-center">
                    <Link to="/" className="w3-bar-item w3-button w3-hover-black" >Home</Link>
                    <button className="w3-bar-item w3-button w3-hover-black"
                        onClick={() => { toggleSidebar(); scrollToSection("portfolioSection"); }}>Portfolio</button>
                    <button className="w3-bar-item w3-button w3-hover-black"
                        onClick={() => { toggleSidebar(); scrollToSection("about"); }}>About</button>
                    <button className="w3-bar-item w3-button w3-hover-black"
                        onClick={() => { toggleSidebar(); scrollToSection("contact"); }}>Contact</button>
                </div>
            </nav>
        )
    );
}

export default HiddenSidebar;