import React, { useState, useEffect } from 'react';

function ThemeToggle({ toggleTheme }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggle the theme and update the state
    const handleThemeToggle = () => {
        const newIsDarkMode = !isDarkMode; // Get the new state value
        setIsDarkMode(newIsDarkMode); // Update the state
        toggleTheme(newIsDarkMode); // Pass the new theme value to the parent component
        document.body.classList.toggle('dark', newIsDarkMode); // Apply the theme class to the body element with the new state value
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        const initialTheme = storedTheme === 'dark' ? true : false;
        setIsDarkMode(initialTheme); // Update the state
        toggleTheme(initialTheme); // Pass the initial theme value to the parent component
        document.body.classList.toggle('dark', initialTheme); // Apply the initial theme class to the body
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light'); // Update the theme in local storage whenever it changes
    }, [isDarkMode]);

    return (
        <div className="nav-item">
            <label htmlFor="dark-mode-toggle" className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}>
                <i className={`theme-icon fas ${isDarkMode ? 'fa-moon' : 'fa-sun'}`} aria-hidden="true"></i>
                <input type="checkbox" id="dark-mode-toggle" onChange={handleThemeToggle} checked={isDarkMode} aria-label="Toggle Dark Mode" />
            </label>
        </div>
    );
}

export default ThemeToggle;