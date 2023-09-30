import { Link } from 'react-router-dom';

function HiddenSidebar({ isVisible, toggleSidebar }) {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };


    
    const handleCloseAndNavigate = (to) => {
        toggleSidebar(); // Close the sidebar first
        // You can add additional logic here if needed
        //Quizás podría hacer que baje hasta ese tag en lugar de que sea un enlace a una página diferente.
    };

    return (
        isVisible && (
            <nav className="w3-sidebar w3-black w3-animate-right w3-xxlarge" id="hiddenSidebar">
                <button onClick={toggleSidebar} className="w3-button w3-black w3-xxxlarge w3-display-topright" id="closeButton">
                    <i className="fa fa-remove"></i>
                </button>
                <div className="w3-bar-block w3-center">
                    <Link to="/" className="w3-bar-item w3-button w3-text-grey w3-hover-black" >Home</Link>
                    <button className="w3-bar-item w3-button w3-text-grey w3-hover-black"
                        onClick={() => { toggleSidebar(); scrollToSection("portfolioSection"); }}>
                        Portfolio
                    </button>
                    <Link to="/about" className="w3-bar-item w3-button w3-text-grey w3-hover-black"
                        onClick={() => handleCloseAndNavigate('/about')}>About</Link>
                    <button className="w3-bar-item w3-button w3-text-grey w3-hover-black"
                        onClick={() => { toggleSidebar(); scrollToSection("contact"); }}>
                        Contact
                    </button>
                </div>
            </nav>
        )
    );
}

export default HiddenSidebar;