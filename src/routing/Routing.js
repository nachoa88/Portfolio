import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
//import Navbar from '../components/NavbarModel.js';
import Footer from '../components/Footer.js';
import HomePage from '../pages/HomePage.js';
import ProjectsPage from "../pages/ProjectsPage.js";


import '../components/css/NavbarModel.css';
import '../components/css/Footer.css';

function Routing() {
    
    
    return (
        <BrowserRouter>
            
            {/*<NavbarModel /> */}
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="projects" element={<ProjectsPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Routing;