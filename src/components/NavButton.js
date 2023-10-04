function NavButton({ toggleSidebar }) {
    // This function is to make the button more accessible.
    const handleButtonClick = (event) => {
        // If Enter or Space is pressed, trigger the sidebar toggle
        if (event.key === 'Enter' || event.key === ' ') {
          toggleSidebar();
        }
      };

    return (
        <span className="w3-button w3-top w3-white w3-xxlarge w3-hover-text-black"
            id="menuIcon" onClick={toggleSidebar} onKeyDown={handleButtonClick} tabIndex={0} role="button" aria-label="Toggle Sidebar">
                <i className="fa fa-bars"></i>
        </span>
    );
}

export default NavButton;