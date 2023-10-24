import { useTranslation } from 'react-i18next';

function LaPhotographyBody() {
    const { t } = useTranslation();

    return (
        <header className="container" id="projects">
            <h2><b>LA Photography</b></h2>
            <hr className="w3-opacity" />
            <h2>Work in progress, sorry...</h2>
            <hr className="w3-opacity" />

            <hr className="w3-opacity" />
            <div className="row">
                <div className="col-xl-7 col-md-6 col-sm-12">
                </div>
                <div className="col-xl-5 col-md-6 col-sm-12">
                </div>
                
                <div className="col-xl-5 col-md-6 col-sm-12">
                </div>
                <div className="col-xl-7 col-md-6 col-sm-12">
                </div>
            </div>
        </header>
    );
}

export default LaPhotographyBody;