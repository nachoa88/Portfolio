import Resume from '../assets/CV2023.pdf'
import { useTranslation } from 'react-i18next';

function Header() {
    const { t } = useTranslation();
    
    return (
        <header className="w3-container w3-center" id="header">
            <h1 className="w3-jumbo">Ignacio Albiol</h1>
            <p>{t('header-subtitle')}</p>
            <img src="img/fotoCV2.jpg" className="w3-image w3-hide-large w3-hide-small w3-round" id="home-img-medium" alt="Portfolio"/>
            <img src="img/fotoCV2.jpg" className="w3-image w3-hide-large w3-hide-medium w3-round" id="home-img-small" alt="Portfolio"/>
            <a href={Resume} target="_blank" rel="noopener noreferrer"> {/* rel="noopener noreferrer" is for security */}
            <button className="w3-button" id="resumeBtn">
                <i className="bi bi-download"></i>
                <span className="button-text">{t('download-cv')}</span>
            </button></a>
        </header>
    );
}

export default Header;