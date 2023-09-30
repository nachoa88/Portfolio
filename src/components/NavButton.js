function NavButton({ toggleSidebar }) {

    return (
        <span className="w3-button w3-top w3-white w3-xxlarge w3-text-grey w3-hover-text-black"
            id="menuIcon" onClick={toggleSidebar}><i className="fa fa-bars"></i>
        </span>
    );
}

export default NavButton;