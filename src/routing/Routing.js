import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import HomePage from '../pages/HomePage.js';
import KonectaPage from "../pages/KonectaPage.js";
import PortfolioPage from "../pages/PortfolioPage.js";
import LaPhotographyPage from "../pages/LaPhotographyPage.js";
import Footer from '../components/Footer.js';


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
            <Routes>
                <Route index element={<HomePage toggleTheme={toggleTheme} getIconFileName={getIconFileName}/>} />
                <Route path="konecta" element={<KonectaPage />} />
                <Route path="portfoliopage" element={<PortfolioPage />} />
                <Route path="laphotography" element={<LaPhotographyPage />} />
            </Routes>
             {/* I pass this information to be able to change the icons for dark & light theme*/}
            <Footer getIconFileName={getIconFileName}/>
        </BrowserRouter>
    );
}

export default Routing;