import Resume from '../assets/CV2023.pdf'
import { useTranslation } from 'react-i18next';

import '../components/css/Header.css';

function Header() {
    const { t } = useTranslation();
    
    return (
        <header className="w3-container w3-center" id="header">
            <h1 className="w3-jumbo">Ignacio Albiol</h1>
            <p>{t('header-subtitle')}</p>
            <img src="img/fotoCV2.jpg" className="w3-image w3-hide-large w3-hide-small w3-round" id="home-img-medium" alt="Portfolio"/>
            <img src="img/fotoCV2.jpg" className="w3-image w3-hide-large w3-hide-medium w3-round" id="home-img-small" alt="Portfolio"/>
            <button className="resume-btn" onClick={() => window.open(Resume, '_blank')} download={Resume}>
                <i className="bi bi-download"></i>
                <span className="button-text">{t('download-cv')}</span>
            </button>
        </header>
    );
}

export default Header;