import { useTranslation } from 'react-i18next';

import ThemeToggle from "./ThemeToggle.jsx";
import LanguageToggle from "./LanguageToggle.jsx";

import '../components/css/Sidebar.css';

function Sidebar({ isVisible, toggleTheme }) {
    const { t } = useTranslation();

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={`sidebar-container ${isVisible ? 'visible' : ''}`}>
            <div className='toggle-container'>
                <ThemeToggle toggleTheme={toggleTheme} />
                <LanguageToggle />
            </div>

            <nav className="navbar-container" aria-label="Main Navigation">
                <button className="normal-btn small-btn"
                    onClick={() => { scrollToSection("home"); }} aria-label="Navigate to Home">{t('sidebar-home')}</button>
                <button className="normal-btn small-btn"
                    onClick={() => { scrollToSection("portfolio"); }} aria-label="Navigate to Portfolio">{t('sidebar-portfolio')}</button>
                <button className="normal-btn small-btn"
                    onClick={() => { scrollToSection("about"); }} aria-label="Navigate to About Me">{t('sidebar-about')}</button>
                <button className="normal-btn small-btn"
                    onClick={() => { scrollToSection("contact"); }} aria-label="Navigate to Contact">{t('sidebar-contact')}</button>
            </nav>
        </div>
    );
}

export default Sidebar;