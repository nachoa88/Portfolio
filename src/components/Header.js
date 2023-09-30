function Header() {
    return (
        <header className="w3-container w3-center" id="home">
            <h1 className="w3-jumbo"><b>Ignacio Albiol</b></h1>
            <p>Game and Web Designer.</p>
            <img src="/w3images/profile_girl.jpg" className="w3-image w3-hide-large w3-hide-small w3-round" id="imgHome1"/>
            <img src="/w3images/profile_girl.jpg" className="w3-image w3-hide-large w3-hide-medium w3-round" width="1000" height="1333"/>
            <button className="w3-button w3-light-grey w3-padding-large w3-margin-top">
                <i className="fa fa-download"></i> Download Resume
            </button>
        </header>
    );
}

export default Header;