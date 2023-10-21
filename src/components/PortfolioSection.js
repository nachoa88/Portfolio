import { useTranslation } from 'react-i18next';

function PortfolioSection() {
    const { t } = useTranslation();

    return (
        <div className="w3-padding-32 w3-content" id="portfolioSection">
            <h2>{t('sidebar-portfolio')}</h2>
            <hr className="w3-opacity" />
            <div className="row">
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <div className="card">
                        <img src="img/konecta.jpg" className="card-img-top" alt="Sample of konect project" />
                        <div className="card-body">
                            <p className="card-title">K0N3CT4</p>
                            <p className="card-text">{t('konecta-text')}</p>
                            <a href="/projects" className="btn mr-2"><i className="fas fa-link" style={{ marginRight: '5px' }}></i>{t('learn-more')}</a>
                            <a href="https://github.com/nachoa88/KoNeCTaReact" target="_blank" rel="noopener noreferrer" className="btn mr-2">
                                <i className="fab fa-github" style={{ marginRight: '5px' }}></i>Github</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <div className="card">
                        <img src="img/portfolio.jpg" className="card-img-top" alt="Sample of my portfolio" />
                        <div className="card-body">
                            <p className="card-title">Portfolio</p>
                            <p className="card-text">{t('portfolio-text')}</p>
                            <a href="/projects" className="btn mr-2"><i className="fas fa-link" style={{ marginRight: '5px' }}></i>{t('learn-more')}</a>
                            <a href="https://github.com/nachoa88/Portfolio" target="_blank" rel="noopener noreferrer" className="btn mr-2">
                                <i className="fab fa-github" style={{ marginRight: '5px' }}></i>Github</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <div className="card">
                        <img src="img/laphotography.jpg" className="card-img-top" alt="Sample of photography portfolio" />
                        <div className="card-body">
                            <p className="card-title">Photography Portfolio</p>
                            <p className="card-text">{t('photography-text')}</p>
                            <a href="/projects" className="btn mr-2"><i className="fas fa-link" style={{ marginRight: '5px' }}></i>{t('learn-more')}</a>
                            <a href="https://laphotography.es/" target="_blank" rel="noopener noreferrer" className="btn mr-2">
                                <i className="fas fa-link" style={{ marginRight: '5px' }}></i>{t('visit-site')}</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PortfolioSection;