import { useTranslation } from 'react-i18next';

function LaPhotographyBody() {
    const { t } = useTranslation();

    return (
        <header className="container" id="projects">
            <h2 className="project-title">LA Photography</h2>
            <hr className="w3-opacity" />
            <h3 className="project-subtitle">{t("idea-title")}</h3>
            
            <hr className="w3-opacity" />
            <h2>Work in progress, sorry...</h2>
            <hr className="w3-opacity" />

        
            <div className="row">
                <div className="col-xl-7 col-md-12 col-sm-12">
                </div>
                <div className="col-xl-5 col-md-12 col-sm-12">
                </div>
            </div>
            <div className="row">
                <div className="col-xl-5 col-md-12 col-sm-12">
                </div>
                <div className="col-xl-7 col-md-12 col-sm-12">
                </div>
            </div>
        </header>
    );
}

export default LaPhotographyBody;