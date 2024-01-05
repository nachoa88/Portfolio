import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from '../pages/HomePage.js';
import KonectaPage from "../pages/KonectaPage.js";
import PortfolioPage from "../pages/PortfolioPage.js";
import LaPhotographyPage from "../pages/LaPhotographyPage.js";
import Footer from '../components/Footer.js';


function Routing() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="konecta" element={<KonectaPage />} />
                <Route path="portfoliopage" element={<PortfolioPage />} />
                <Route path="laphotography" element={<LaPhotographyPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Routing;