import Resume from '../assets/CV2024.pdf'
import { useTranslation } from 'react-i18next';

import '../components/css/Header.css';

function Header() {
    const { t } = useTranslation();
    
    const handleClick = (event) => {
        window.open(Resume, '_blank');
        event.currentTarget.blur(); // Remove focus after click
    };

    return (
        <header className="w3-container w3-center" id="header">
            <h1 className="w3-jumbo">Ignacio Albiol</h1>
            <p>{t('header-subtitle')}</p>
            <img src="img/fotoCV2.jpg" className="w3-image w3-hide-large w3-round" id="home-img-medium" alt="Portfolio"/>
            <button className="normal-btn" onClick={handleClick} download={Resume}>
                <i className="bi bi-download"></i>
                <span className="button-text">{t('download-cv')}</span>
            </button>
        </header>
    );
}

export default Header;