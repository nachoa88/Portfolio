import React, { useState } from 'react';

import LeftSidebar from '../components/LeftSidebar.js';
import HiddenSidebar from '../components/HiddenSidebar.js';
import NavButton from '../components/NavButton.js';
import Header from '../components/Header.js';
import PortfolioSection from '../components/PortfolioSection.js';
import AboutSection from '../components/AboutSection.js';
import ContactSection from '../components/ContactSection.js';
import BackTopButton from '../components/BackTopButton.js';

import ThemeToggle from "../components/ThemeToggle.js";
import LanguageToggle from "../components/LanguageToggle.js";


function HomePage() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const [isDarkTheme, setDarkTheme] = useState(false);

    const toggleTheme = (darkMode) => {
        setDarkTheme(darkMode);
    };

    const homeStyles = {
        marginLeft: '40%',
    };
    
    return (
        <>
            <LeftSidebar />
            <HiddenSidebar isVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
            <div className="w3-main w3-padding-large" id="home" style={homeStyles}>
                <div className="toggle-container">
                    <ThemeToggle toggleTheme={toggleTheme} />
                    <LanguageToggle />
                </div>
                <NavButton toggleSidebar={toggleSidebar} />
                <Header />
                <PortfolioSection />
                {/* I pass this information to be able to change the icons for dark & light theme*/}
                <AboutSection isDarkMode={isDarkTheme} />
                <ContactSection />
            </div>
            <BackTopButton />
        </>
    );
}

export default HomePage;