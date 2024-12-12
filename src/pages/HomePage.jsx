import React, { useState, useEffect } from 'react';

import LeftSidebar from '../components/LeftSidebar.jsx';
import NavButton from '../components/NavButton.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Header from '../components/Header.jsx';
import PortfolioSection from '../components/PortfolioSection.jsx';
import AboutSection from '../components/AboutSection.jsx';
import ContactSection from '../components/ContactSection.jsx';
import BackTopButton from '../components/BackTopButton.jsx';


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
        marginLeft: '30%',
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