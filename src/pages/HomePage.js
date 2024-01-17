import React, { useState, useEffect } from 'react';

import LeftSidebar from '../components/LeftSidebar.js';
import NavButton from '../components/NavButton.js';
import Sidebar from '../components/Sidebar.js';
import Header from '../components/Header.js';
import PortfolioSection from '../components/PortfolioSection.js';
import AboutSection from '../components/AboutSection.js';
import ContactSection from '../components/ContactSection.js';
import BackTopButton from '../components/BackTopButton.js';


function HomePage({ toggleTheme, getIconFileName }) {
    // This is to set the default state of the sidebar for mobile devices.
    const [sidebarVisible, setSidebarVisible] = useState(window.innerWidth > 768);
    // If the window is resized, check if the sidebar should be visible or not.
    useEffect(() => {
        const handleResize = () => {
            setSidebarVisible(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const homeStyles = {
        marginLeft: '40%',
    };


    return (
        <>
            <LeftSidebar />

            <div className="w3-main w3-padding-large" id="home" style={homeStyles}>
                <NavButton isVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
                <Sidebar isVisible={sidebarVisible} toggleTheme={toggleTheme} />
                <Header />
                <PortfolioSection />
                {/* I pass this information to be able to change the icons for dark & light theme*/}
                <AboutSection getIconFileName={getIconFileName} />
                <ContactSection />
            </div>
            <BackTopButton />
        </>
    );
}

export default HomePage;