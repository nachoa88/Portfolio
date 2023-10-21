import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from '../pages/HomePage.js';
import ProjectsPage from "../pages/ProjectsPage.js";
import Footer from '../components/Footer.js';

import '../components/css/Footer.css';


function Routing() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="projects" element={<ProjectsPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Routing;