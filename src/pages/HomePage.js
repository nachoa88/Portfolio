import React, { useState } from 'react';

import LeftSidebar from '../components/LeftSidebar.js';
import HiddenSidebar from '../components/HiddenSidebar.js';
import NavButton from '../components/NavButton.js';
import Header from '../components/Header.js';
import PortfolioSection from '../components/PortfolioSection.js';
import AboutSection from '../components/AboutSection.js';
import ContactSection from '../components/ContactSection.js';

import ThemeToggle from "../components/ThemeToggle.js";
import LanguageToggle from "../components/LanguageToggle.js";

import '../components/css/LeftSidebar.css';
import '../components/css/HiddenSidebar.css';
import '../components/css/NavButton.css';
import '../components/css/Header.css';
import '../components/css/PortfolioSection.css';
import '../components/css/AboutSection.css';
import '../components/css/ContactSection.css';

import '../components/css/ThemeToggle.css';
import '../components/css/LanguageToggle.css';

function HomePage() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const [isDarkTheme, setDarkTheme] = useState(false);

    const toggleTheme = (darkMode) => {
        setDarkTheme(darkMode);
    };

    return (
        <>
            <LeftSidebar />
            <HiddenSidebar isVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
            <div className="w3-main w3-padding-large" id="content">
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
        </>
    );
}

export default HomePage;