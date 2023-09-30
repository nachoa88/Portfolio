import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import HomePage from '../pages/HomePage.js';
import ProjectsPage from "../pages/ProjectsPage.js";

import '../components/css/Navbar.css';
import '../components/css/Footer.css';

function Routing() {
    return (
        <BrowserRouter>
            {/*<Navbar /> */}
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="projects" element={<ProjectsPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Routing;