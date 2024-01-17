import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import '../components/css/PortfolioSection.css';


function PortfolioSection() {
    const { t } = useTranslation();

    return (
        <div className="w3-padding-32 w3-content" id="portfolio">
            <h2>{t('sidebar-portfolio')}</h2>
            <hr className="w3-opacity" />
            <div className="row">
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <div className="card">
                        <img src="img/pokedex.jpg" className="card-img-top" alt="Sample of konect project" />
                        <div className="card-body">
                            <p className="card-title">Pokédex - PokéAPI</p>
                            <p className="card-text">{t('pokedex-text')}</p>
                            <a href="https://pokedex-iap.netlify.app/" target="_blank" rel="noopener noreferrer" className="normal-btn small-btn"><i className="fas fa-link card-icon"></i>{t('visit-site')}</a>
                            <a href="https://github.com/nachoa88/Pokedex-PokeAPI" target="_blank" rel="noopener noreferrer" className="normal-btn small-btn">
                                <i className="fab fa-github card-icon" ></i>Github</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <div className="card">
                        <img src="img/konecta.jpg" className="card-img-top" alt="Sample of konect project" />
                        <div className="card-body">
                            <p className="card-title">K0N3CT4</p>
                            <p className="card-text">{t('konecta-text')}</p>
                            <Link to="/konecta" className="normal-btn small-btn"><i className="fas fa-link card-icon" ></i>{t('learn-more')}</Link>
                            <a href="https://github.com/nachoa88/KoNeCTaReact" target="_blank" rel="noopener noreferrer" className="normal-btn small-btn">
                                <i className="fab fa-github card-icon" ></i>Github</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <div className="card">
                        <img src="img/laphotography.jpg" className="card-img-top" alt="Sample of photography portfolio" />
                        <div className="card-body">
                            <p className="card-title">Photography Portfolio</p>
                            <p className="card-text">{t('photography-text')}</p>
                            <Link to="/laphotography" className="normal-btn small-btn"><i className="fas fa-link card-icon" ></i>{t('learn-more')}</Link>
                            <a href="https://laphotography.es/" target="_blank" rel="noopener noreferrer" className="normal-btn small-btn">
                                <i className="fas fa-link card-icon" ></i>{t('visit-site')}</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <div className="card">
                        <img src="img/tilevania.jpg" className="card-img-top" alt="Sample of Tile Vania" />
                        <div className="card-body">
                            <p className="card-title">Game: Tile Vania</p>
                            <p className="card-text">{t('tilevania-text')}</p>
                            <a href="https://sharemygame.com/@nachoa88/tilevania" target="_blank" rel="noopener noreferrer" className="normal-btn small-btn">
                                <i className="fas fa-link card-icon" ></i>{t('play-game')}</a>
                            <a href="https://github.com/nachoa88/TileVania" target="_blank" rel="noopener noreferrer" className="normal-btn small-btn">
                                <i className="fab fa-github card-icon" ></i>Github</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <div className="card">
                        <img src="img/project-boost.jpg" className="card-img-top" alt="Sample of Space-Boost" />
                        <div className="card-body">
                            <p className="card-title">Game: Space-Boost</p>
                            <p className="card-text">{t('projectboost-text')}</p>
                            <a href="https://sharemygame.com/@nachoa88/project-boost-prototype" target="_blank" rel="noopener noreferrer" className="normal-btn small-btn">
                                <i className="fas fa-link card-icon" ></i>{t('play-game')}</a>
                            <a href="https://github.com/nachoa88/SpaceBoost-Prototype" target="_blank" rel="noopener noreferrer" className="normal-btn small-btn">
                                <i className="fab fa-github card-icon" ></i>Github</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="more-portfolio">
                <Link to="/portfoliopage" className="normal-btn">
                    <i className="fas fa-link"></i>
                    <span className="button-text">{t('more-portfolio')}</span>
                </Link>
            </div>
        </div>
    );
}

export default PortfolioSection;