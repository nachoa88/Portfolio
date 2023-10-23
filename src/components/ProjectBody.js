import { useTranslation } from 'react-i18next';

function ProjectBody() {
    const { t } = useTranslation();

    return (
        <header className="container" id="projectS">
            <h2><b>K0N3CT4</b></h2>
            <hr className="w3-opacity" />
            <div className="row">
                <div className="col-xl-7 col-md-6 col-sm-12">
                    <h3 className="project-subtitle">{t("idea-title")}</h3>
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
                <div className="col-xl-5 col-md-6 col-sm-12">
                    <img src="img/konecta.jpg" className="w3-image w3-round" id="project-img" alt="Portfolio" />
                </div>
                <div className="col-xl-5 col-md-6 col-sm-12">
                    <img src="img/konecta.jpg" className="w3-image w3-round" id="project-img" alt="Portfolio" />
                </div>
                <div className="col-xl-7 col-md-6 col-sm-12">
                    <h3 className="project-subtitle">{t("how-title")}</h3>
                    <p className="project-text">
                        {t("how-konecta-1")}<br></br>
                        {t("how-konecta-2")}<br></br>
                    </p>
                    <h4 className="bold-text">{t("front-end")}</h4>
                    <p className="project-text">{t("front-konecta-text")}</p>
                    <h4 className="bold-text">{t("back-end")}</h4>
                    <p className="project-text">{t("back-konecta-text")}</p>
                    <h4 className="bold-text">{t("data-base")}</h4>
                    <p className="project-text">{t("db-konecta-text")}</p>

                </div>
                
                <h3 className="project-subtitle">{t("in-dev-konecta")}</h3>
                <p className="project-text">{t("dev-konecta-text")}</p>
                
                <h3 className="project-subtitle">{t("colaborators-konecta")}</h3>
                <p className="project-text">{t("colaborators-text")}</p>

               

            </div>

            <hr className="w3-opacity" />
                <h2>Work in progress, sorry...</h2>
                <hr className="w3-opacity" />
        </header>
    );
}

export default ProjectBody;