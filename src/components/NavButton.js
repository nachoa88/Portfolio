function NavButton({ toggleSidebar }) {
    // This function is to make the button more accessible.
    const handleButtonClick = (event) => {
        // If Enter or Space is pressed, trigger the sidebar toggle
        if (event.key === 'Enter' || event.key === ' ') {
          toggleSidebar();
        }
      };

    return (
        <span className="w3-button w3-top"
            id="menuIcon" onClick={toggleSidebar} onKeyDown={handleButtonClick} tabIndex={0} role="button" aria-label="Toggle Sidebar">
                <i className="fa fa-bars fa-2x"></i>
        </span>
    );
}

export default NavButton;