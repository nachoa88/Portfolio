function HiddenSidebar({ isVisible, toggleSidebar }) {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        isVisible && (
            <nav className="w3-sidebar" id="hiddenSidebar" aria-label="Main Navigation">
                <button onClick={toggleSidebar} className="w3-button w3-xxxlarge w3-display-topright" id="closeButton" aria-label="Close Sidebar">
                    <i className="fa fa-remove" aria-hidden="true"></i>
                </button>
                <div className="w3-bar-block w3-center">
                    <button className="w3-bar-item w3-button w3-hover-black" 
                        onClick={() => { toggleSidebar(); scrollToSection("home"); }} aria-label="Navigate to Home">Home</button>
                    <button className="w3-bar-item w3-button w3-hover-black"
                        onClick={() => { toggleSidebar(); scrollToSection("portfolioSection"); }} aria-label="Navigate to Portfolio">Portfolio</button>
                    <button className="w3-bar-item w3-button w3-hover-black"
                        onClick={() => { toggleSidebar(); scrollToSection("about"); }} aria-label="Navigate to About Me">About Me</button>
                    <button className="w3-bar-item w3-button w3-hover-black"
                        onClick={() => { toggleSidebar(); scrollToSection("contact"); }} aria-label="Navigate to Contact">Contact</button>
                </div>
            </nav>
        )
    );
}

export default HiddenSidebar;