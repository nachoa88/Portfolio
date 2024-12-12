import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

function KonectaBody() {
    const { t } = useTranslation();

    return (
        <header className="container" id="projects">
            <h2 className="project-title">K0N3CT4</h2>
            <hr className="w3-opacity" />
            <h3 className="project-subtitle">{t("idea-title")}</h3>

            <div className="row">
                <div className="col-xl-7 col-md-12 col-sm-12">
                    <p className="project-text">
                        {t("idea-konecta-1")}<br></br>
                        {t("idea-konecta-2")}<br></br>
                    </p>
                    <p className="project-text">
                        {t("idea-konecta-3")}<br></br>
                        {t("idea-konecta-4")}<br></br>
                        {t("idea-konecta-5")}
                    </p>
                </div>
                <div className="col-xl-5 col-md-12 col-sm-12">
                    <img src="img/konecta1.jpg" className="project-img" alt="Konecta 1 of 3" />
                </div>
            </div>
            <hr className="w3-opacity" />
            <h3 className="project-subtitle">{t("how-title")}</h3>

            <div className="row">
                <div className="col-12">
                    <p className="project-text">
                        {t("how-konecta-1")}<br></br>
                        {t("how-konecta-2")}<br></br>
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-5 col-md-12 col-sm-12">
                    <img src="img/konecta2.jpg" className="project-img" alt="Konecta 2 of 3" />
                </div>
                <div className="col-xl-7 col-md-12 col-sm-12">
                    <h4 className="bold-text">Front-End</h4>
                    <p className="project-text">{t("front-konecta-text")}</p>
                    <h4 className="bold-text">Back-End</h4>
                    <p className="project-text">{t("back-konecta-text")}</p>
                    <h4 className="bold-text">{t("data-base")}</h4>
                    <p className="project-text">{t("db-konecta-text")}</p>
                </div>
            </div>
            <hr className="w3-opacity" />
            <h3 className="project-subtitle">{t("in-dev-konecta")}</h3>

            <div className="row">
                <div className="col-xl-7 col-md-12 col-sm-12">
                    <p className="project-text">{t("dev-konecta-text")}</p>
                    <ul className="project-text">
                        <li className="project-list">{t("dev-konecta-item1")}</li>
                        <li className="project-list">{t("dev-konecta-item2")}</li>
                        <li className="project-list">{t("dev-konecta-item3")}</li>
                        <li className="project-list">{t("dev-konecta-item4")}</li>
                        <li className="project-list">{t("dev-konecta-item5")}</li>
                        <li className="project-list">{t("dev-konecta-item6")}</li>
                        <li className="project-list">{t("dev-konecta-item7")}</li>
                    </ul>
                </div>
                <div className="col-xl-5 col-md-12 col-sm-12">
                    <img src="img/konecta3.jpg" className="project-img" alt="Konecta 3 of 3" />
                </div>
            </div>
            <hr className="w3-opacity" />
            <h3 className="project-subtitle">{t("colaborators-konecta")}</h3>
            <div className="row">
                <div className="col-12">
                    <ul className="project-text">
                        <li className="project-list">Ignacio Albiol<i className="bi bi-arrow-right"></i>
                            <Link className="bi bi-github" to="https://github.com/nachoa88" target="_blank"
                                rel="noopener noreferrer" aria-label="Go to Ignacio's Github Profile">Github</Link></li>
                        <li className="project-list">Eugenia Cames<i className="bi bi-arrow-right"></i>
                            <Link className="bi bi-github" to="https://github.com/Eucaba" target="_blank"
                                rel="noopener noreferrer" aria-label="Go to Eugenia's Github Profile">Github</Link></li>
                        <li className="project-list">Ingrid Barrachina<i className="bi bi-arrow-right"></i>
                            <Link className="bi bi-github" to="https://github.com/IngridBafk" target="_blank"
                                rel="noopener noreferrer" aria-label="Go to Ingrid's Github Profile">Github</Link></li>
                        <li className="project-list">Anthony Torres<i className="bi bi-arrow-right"></i>
                            <Link className="bi bi-github" to="https://github.com/AnthonyUPF" target="_blank"
                                rel="noopener noreferrer" aria-label="Go to Anthony's Github Profile">Github</Link></li>
                    </ul>
                </div>
            </div>

            <hr className="w3-opacity" />
            <div className="row skills-used">
                <p className="skill-title w3-wide">{t("skills-used")}</p>
                <div className="col-xl-1 col-md-2 col-sm-3 col-3">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/html5_icon.png" alt="HTML5 icon" />
                        <p className="skill-text">HTML5</p>
                    </div>
                </div>
                <div className="col-xl-1 col-md-2 col-sm-3 col-3">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/css3_icon.png" alt="CSS icon" />
                        <p className="skill-text">CSS</p>
                    </div>
                </div>
                <div className="col-xl-1 col-md-2 col-sm-3 col-3">
                    <div className="icon-container">
                        <img className="iconImg" src="/img/icons/javascript_icon.png" alt="JavaScript icon" />
                        <p className="skill-text">JavaScript</p>
                    </div>
                </div>
                <div className="col-xl-1 col-md-2 col-sm-3 col-3">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/react_icon.png" alt="React icon" />
                        <p className="skill-text">React</p>
                    </div>
                </div>
                <div className="col-xl-1 col-md-2 col-sm-3 col-3">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/bootstrap_icon.png" alt="Bootstrap icon" />
                        <p className="skill-text">Bootstrap</p>
                    </div>
                </div>
                <div className="col-xl-1 col-md-2 col-sm-3 col-3">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/mysql_icon.png" alt="MySQL icon" />
                        <p className="skill-text">MySQL</p>
                    </div>
                </div>      
                <div className="col-xl-1 col-md-2 col-sm-3 col-3">
                    <div className="icon-container">
                        <img className="iconImg" src="/img/icons/postman_icon.png" alt="Postman icon" />
                        <p className="skill-text">Postman</p>
                    </div>
                </div>
                <div className="col-xl-1 col-md-2 col-sm-3 col-3">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/java_icon.png" alt="Java icon" />
                        <p className="skill-text">Java</p>
                    </div>
                </div>
                <div className="col-xl-1 col-md-2 col-sm-3 col-3">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/spring_boot_icon.png" alt="Spring Boot icon" />
                        <p className="skill-text">Spring Boot</p>
                    </div>
                </div>
                <div className="col-xl-1 col-md-2 col-sm-3 col-3">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/figma_icon.png" alt="Figma icon" />
                        <p className="skill-text">Figma</p>
                    </div>
                </div>
                <div className="col-xl-1 col-md-2 col-sm-3 col-3">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/github_icon.png" alt="GitHub icon" />
                        <p className="skill-text">GitHub</p>
                    </div>
                </div>
                <div className="col-xl-1 col-md-2 col-sm-3 col-3">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/aws_icon.png" alt="HTML5 icon" />
                        <p className="skill-text">AWS</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default KonectaBody;