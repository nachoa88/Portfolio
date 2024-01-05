import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

import '../components/css/BackTopButton.css';

function BackTopButton() {
    const { t } = useTranslation();
    
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down to given amount (300px)
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <button id="back-top" className={isVisible ? 'visible' : ''} onClick={scrollToTop}>
            <span className="button-text">{t('back-to-top')}</span>
        </button>
    )
}

export default BackTopButton;