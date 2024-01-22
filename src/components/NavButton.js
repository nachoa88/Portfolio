import '../components/css/NavButton.css';

function NavButton({ isVisible, toggleSidebar }) {
  // This function is to make the button more accessible.
  const handleButtonClick = (event) => {
    // If Enter or Space is pressed, trigger the sidebar toggle
    if (event.key === 'Enter' || event.key === ' ') {
      toggleSidebar();
    }
  };
  const handleClick = (event) => {
    toggleSidebar();
    event.currentTarget.blur(); // Remove focus after click
  };

  return (
    <span className="w3-button w3-top"
      id="menuIcon" onClick={handleClick} onKeyDown={handleButtonClick} tabIndex={0} role="button" aria-label="Toggle Sidebar">
      {isVisible ? <i className="fas fa-times fa-2x"></i> : <i className="fas fa-bars fa-2x"></i>}
    </span>
  );
}

export default NavButton;