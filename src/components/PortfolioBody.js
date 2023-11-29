import { useTranslation } from 'react-i18next';

function PortfolioBody() {
    const { t } = useTranslation();

    return (
        <header className="container" id="projects">
            <h2 className="project-title">{t("my-portfolio")} - Section in progress, sorry</h2>
            <hr className="w3-opacity" />
            <h3 className="project-subtitle">{t("how-title")}</h3>

            <div className="row">
                <div className="col-xl-7 col-md-12 col-sm-12">
                    <p className="project-text">
                        {t("how-portfolio-1")}<br></br>
                        {t("how-portfolio-2")}<br></br>
                    </p>
                    <h4 className="bold-text">{t("design-portfolio")}</h4>
                    <p className="project-text">
                        {t("design-portfolio-text")}<br></br>
                    </p>
                </div>
                <div className="col-xl-5 col-md-12 col-sm-12">
                    <img src="img/portfolio1.jpg" className="project-img" alt="Portfolio 1 of 3" />
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <h4 className="bold-text">{t("form-portfolio")}</h4>
                    <p className="project-text">
                        {t("form-portfolio-text")}<br></br>
                    </p>
                </div>
            </div>

            <hr className="w3-opacity" />
            <h3 className="project-subtitle">{t("func-portfolio")}</h3>

            <div className="row">
                <div className="col-12">
                    <p className="project-text">
                        {t("func-portfolio-intro")}<br></br>
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-5 col-md-12 col-sm-12">
                    <img src="img/portfolio2.jpg" className="project-img" alt="Portfolio 2 of 3" />
                </div>

                <div className="col-xl-7 col-md-12 col-sm-12">
                    <h4 className="bold-text">"Light & Dark Mode"</h4>
                    <p className="project-text">
                        {t("func-portfolio-text-1")}<br></br>
                        {t("func-portfolio-text-2")}<br></br>
                        {t("func-portfolio-text-3")}<br></br>
                    </p>

                    <h4 className="bold-text">{t("lang-select-portfolio")}</h4>
                    <p className="project-text">
                        {t("lang-select-portfolio-text")}<br></br>
                    </p>
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
                        <img className="iconImg" src="img/icons/github_icon.png" alt="GitHub icon" />
                        <p className="skill-text">GitHub</p>
                    </div>
                </div>
            </div>

        </header>
    );
}

export default PortfolioBody;