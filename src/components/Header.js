function Header() {
    return (
        <header className="w3-container w3-center" id="home">
            <h1 className="w3-jumbo"><b>Ignacio Albiol</b></h1>
            <p>Game and Web Developer.</p>
            <img src="img/fotoCV.jpg" className="w3-image w3-hide-large w3-hide-small w3-round" id="imgHome1"/>
            <img src="img/fotoCV.jpg" className="w3-image w3-hide-large w3-hide-medium w3-round" width="1000" height="1333"/>
            <button className="w3-button" id="resumeBtn">
                <i className="fa fa-download"></i> Download Resume
            </button>
        </header>
    );
}

export default Header;