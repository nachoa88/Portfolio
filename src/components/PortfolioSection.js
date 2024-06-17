import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import '../components/css/PortfolioSection.css';


function PortfolioSection() {
    const { t } = useTranslation();

    return (
        <div className="portfolio" id="portfolio">
            <h2>{t('sidebar-portfolio')}</h2>
            <hr className="w3-opacity" />
            <div className="row">
            <div className="col-xl-4 col-md-6 col-sm-12">
                    <div className="card">
                        <img src="img/ultimate_league.jpg" className="card-img-top" alt="Sample of Ultimate League" loading="lazy" />
                        <div className="card-body">
                            <p className="card-title">Ultimate League</p>
                            <p className="card-text">{t('ultimateleague-text')}</p>
                            <a href="https://ultimateleague.ignacioalbiol.tech/" target="_blank" rel="noopener noreferrer" className="normal-btn small-btn"><i className="fas fa-link card-icon"></i>{t('visit-site')}</a>
                            <a href="https://github.com/nachoa88/sprint4.git" target="_blank" rel="noopener noreferrer" className="normal-btn small-btn">
                                <i className="fab fa-github card-icon" ></i>Github</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <div className="card">
                        <img src="img/blackjack.jpg" className="card-img-top" alt="Sample of Blackjack API" loading="lazy" />
                        <div className="card-body">
                            <p className="card-title">Blackjack API</p>
                            <p className="card-text">{t('blackjack-text')}</p>
                            <a href="https://blackjack-api.ignacioalbiol.tech/api/documentation" target="_blank" rel="noopener noreferrer" className="normal-btn small-btn"><i className="fas fa-link card-icon"></i>{t('visit-site')}</a>
                            <a href="https://github.com/nachoa88/sprint5.git" target="_blank" rel="noopener noreferrer" className="normal-btn small-btn">
                                <i className="fab fa-github card-icon" ></i>Github</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <div className="card">
                        <img src="img/pokedex.jpg" className="card-img-top" alt="Sample of Pokedex" loading="lazy" />
                        <div className="card-body">
                            <p className="card-title">Pokédex - PokéAPI</p>
                            <p className="card-text">{t('pokedex-text')}</p>
                            <a href="https://pokedex.ignacioalbiol.tech/" target="_blank" rel="noopener noreferrer" className="normal-btn small-btn"><i className="fas fa-link card-icon"></i>{t('visit-site')}</a>
                            <a href="https://github.com/nachoa88/Pokedex-PokeAPI" target="_blank" rel="noopener noreferrer" className="normal-btn small-btn">
                                <i className="fab fa-github card-icon" ></i>Github</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <div className="card">
                        <img src="img/konecta.jpg" className="card-img-top" alt="Sample of Konecta project" loading="lazy" />
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
                        <img src="img/laphotography.jpg" className="card-img-top" alt="Sample of photography portfolio" loading="lazy" />
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
                        <img src="img/tilevania.jpg" className="card-img-top" alt="Sample of Tile Vania" loading="lazy" />
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
                        <img src="img/project-boost.jpg" className="card-img-top" alt="Sample of Space-Boost" loading="lazy" />
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