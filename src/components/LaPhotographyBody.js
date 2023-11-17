import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

function LaPhotographyBody() {
    const { t } = useTranslation();

    return (
        <header className="container" id="projects">
            <h2 className="project-title">LA Photography</h2>
            <hr className="w3-opacity" />
            <h3 className="project-subtitle">{t("idea-title")}</h3>

            <div className="row">
                <div className="col-xl-7 col-md-12 col-sm-12">
                    <p className="project-text">
                        {t("idea-laphoto-1")}<br></br>
                        {t("idea-laphoto-2")}<br></br>
                    </p>
                    <p className="project-text">
                        {t("idea-laphoto-3")}<br></br>
                    </p>
                </div>
                <div className="col-xl-5 col-md-12 col-sm-12">
                    <img src="img/laphotography1.jpg" className="project-img" alt="LA Photography 1 of 2" />
                </div>
            </div>

            <hr className="w3-opacity" />
            <h3 className="project-subtitle">{t("how-title")}</h3>

            <div className="row">
                <div className="col-12">
                    <p className="project-text">
                        {t("how-laphoto-1")}<br></br>
                        {t("how-laphoto-2")}<br></br>
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-5 col-md-12 col-sm-12">
                    <img src="img/laphotography2.jpg" className="project-img" alt="LA Photography 2 of 2" />
                </div>
                <div className="col-xl-7 col-md-12 col-sm-12">
                    <p className="project-text">
                        {t("how-laphoto-3")}<br></br>
                    </p>
                    <p className="project-text">
                        {t("how-laphoto-4")}<br></br>
                    </p>
                    <p className="project-text">
                        {t("how-laphoto-5")}<br></br>
                    </p>
                    <p className="project-text">
                        {t("how-laphoto-6")}
                        <Link to="https://laphotography.es/" target="_blank"
                                rel="noopener noreferrer" aria-label="Go to Ingrid's Github Profile">LA Photography</Link>
                    </p>
                </div>
            </div>

            <hr className="w3-opacity" />
            <div className="row skills-used">
                <p className="skill-title w3-wide">{t("skills-used")}</p>
                <div className="col-xl-1 col-md-2 col-sm-3 col-3">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/wordpress_icon.png" alt="Wordpress icon" />
                        <p className="skill-text">Wordpress</p>
                    </div>
                </div>
                <div className="col-xl-1 col-md-2 col-sm-3 col-3">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/elementor_icon.png" alt="Elementor icon" />
                        <p className="skill-text">Elementor</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default LaPhotographyBody;