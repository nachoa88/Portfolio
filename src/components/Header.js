import { useState } from 'react';
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Resume from '../assets/CV2024.pdf'
import { useTranslation } from 'react-i18next';

import '../components/css/Header.css';

function Header() {
    const { t } = useTranslation();
    const [imgSrc, setImgSrc] = useState("img/portrait2_lq.jpg");

    const handleImageLoad = () => {
        setImgSrc("img/portrait2.jpg");
    };

    const handleClick = (event) => {
        window.open(Resume, '_blank');
        event.currentTarget.blur(); // Remove focus after click
    };

    return (
        <HelmetProvider>
            {/* This is to preload the image so it doesn't take time to load when the user clicks on the download button. */}
            <Helmet>
                <link rel="preload" href="img/portrait2.jpg" as="image" />
            </Helmet>
            <header className="w3-container w3-center" id="header">
                <h1 className="w3-jumbo">Ignacio Albiol</h1>
                <h4 className='under-text'>{t('header-subtitle')}</h4>
                <img src={imgSrc} onLoad={handleImageLoad} className="w3-image w3-hide-large w3-round" id="home-img-medium" alt="Portfolio" loading="lazy" />
                <div className="container">
                    <Link className="bi bi-linkedin header-icon" to="https://www.linkedin.com/in/ignacio-albiol/" target="_blank"
                        rel="noopener noreferrer" aria-label="LinkedIn Profile of Ignacio Albiol"></Link>
                    <Link className="bi bi-github header-icon" to="https://github.com/nachoa88" target="_blank"
                        rel="noopener noreferrer" aria-label="GitHub Profile of Ignacio Albiol"></Link>
                </div>
                <button className="normal-btn" onClick={handleClick} download={Resume}>
                    <i className="bi bi-download"></i>
                    <span className="button-text">{t('download-cv')}</span>
                </button>

            </header>
        </HelmetProvider>
    );
}

export default Header;