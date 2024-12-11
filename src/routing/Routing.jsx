import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import ScrollToTop from '../components/utils/helpers/ScrollToTop.jsx';
import HomePage from '../pages/HomePage.jsx';
import KonectaPage from "../pages/KonectaPage.jsx";
import PortfolioPage from "../pages/PortfolioPage.jsx";
import LaPhotographyPage from "../pages/LaPhotographyPage.jsx";
import Footer from '../components/Footer.jsx';


function Routing() {
    // Set the state for the theme to be able to change it.
    const [isDarkTheme, setDarkTheme] = useState(false);

    const toggleTheme = (darkMode) => {
        setDarkTheme(darkMode);
    };

    // This is for the system to check if we're in light mode to add a '.png' and if it's dark to add a '_w.png' and show a different icon.
    const getIconFileName = (baseFileName) => {
        return isDarkTheme ? `${baseFileName}_w.png` : `${baseFileName}.png`;
    };

    return (
        <BrowserRouter>
            <ScrollToTop /> {/* To scroll to the top of the page when the user navigates to a new page. */}
            <Routes>
                <Route index element={<HomePage toggleTheme={toggleTheme} getIconFileName={getIconFileName} />} />
                <Route path="konecta" element={<KonectaPage toggleTheme={toggleTheme} />} />
                <Route path="portfoliopage" element={<PortfolioPage toggleTheme={toggleTheme} />} />
                <Route path="laphotography" element={<LaPhotographyPage toggleTheme={toggleTheme} />} />
            </Routes>
            {/* I pass this information to be able to change the icons for dark & light theme*/}
            <Footer getIconFileName={getIconFileName} />
        </BrowserRouter>
    );
}

export default Routing;