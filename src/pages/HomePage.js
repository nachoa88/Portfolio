import React, { useState } from 'react';

import LeftSidebar from '../components/LeftSidebar.js';
import HiddenSidebar from '../components/HiddenSidebar.js';
import NavButton from '../components/NavButton.js';
import Header from '../components/Header.js';
import PortfolioSection from '../components/PortfolioSection.js';
import AboutSection from '../components/AboutSection.js';
import ContactSection from '../components/ContactSection.js';

import ThemeToggle from "../components/ThemeToggle.js";

import '../components/css/LeftSidebar.css';
import '../components/css/HiddenSidebar.css';
import '../components/css/NavButton.css';
import '../components/css/Header.css';
import '../components/css/PortfolioSection.css';
import '../components/css/AboutSection.css';
import '../components/css/ContactSection.css';

import '../components/css/ThemeToggle.css';

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
                <ThemeToggle toggleTheme={toggleTheme} />
                <NavButton toggleSidebar={toggleSidebar} />
                <Header />
                <PortfolioSection />
                <AboutSection />
                <ContactSection />
            </div>
        </>
    );
}

export default HomePage;