import React, { useState } from 'react';

import LeftSidebar from '../components/LeftSidebar.js';
import HiddenSidebar from '../components/HiddenSidebar.js';
import NavButton from '../components/NavButton.js';
import Header from '../components/Header.js';
import PortfolioSection from '../components/PortfolioSection.js';
import ContactSection from '../components/ContactSection.js';

import '../components/css/LeftSidebar.css';
import '../components/css/HiddenSidebar.css';
import '../components/css/NavButton.css';
import '../components/css/Header.css';
import '../components/css/PortfolioSection.css';
import '../components/css/ContactSection.css';


function HomePage() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <>
            <LeftSidebar />
            <HiddenSidebar isVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
            <div className="w3-main w3-padding-large" id="content">
                <NavButton toggleSidebar={toggleSidebar} />
                <Header />
                <PortfolioSection id="portfolioSection" />
                <ContactSection id="contact" />
            </div>

        </>
    );
}

export default HomePage;