import { useTranslation } from 'react-i18next';

function AboutSection({ isDarkMode }) {
    const { t } = useTranslation();
    
    // This is for the system to check if we're in light mode to add a '.png' and if it's dark to add a '_w.png' and show a different icon.
    const getIconFileName = (baseFileName) => {
        return isDarkMode ? `${baseFileName}_w.png` : `${baseFileName}.png`;
    };
    
    return (
        <div className="w3-content w3-justify w3-padding-32" id="about">
            <h2>{t('sidebar-about')}</h2>
            <hr className="w3-opacity" />
            <div id="about-text">
                <p>{t('about-1')}</p>
                <p>{t('about-2')}</p>
                <p>{t('about-3')}</p>
            </div>
            <h3>{t('my-skills')}</h3>
            <hr className="w3-opacity" />
            <div className="row">
                <p className="skill-title w3-wide">Front-End</p>
                <div className="col-xl-2 col-md-3 col-sm-4 col-4">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/html5_icon.png" alt="HTML5 icon" />
                        <p className="skill-text">HTML5</p>
                    </div>
                </div>
                <div className="col-xl-2 col-md-3 col-sm-4 col-4">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/css3_icon.png" alt="CSS icon" />
                        <p className="skill-text">CSS</p>
                    </div>
                </div>
                <div className="col-xl-2 col-md-3 col-sm-4 col-4">
                    <div className="icon-container">
                        <img className="iconImg" src="/img/icons/javascript_icon.png" alt="JavaScript icon" />
                        <p className="skill-text">JavaScript</p>
                    </div>
                </div>
                <div className="col-xl-2 col-md-3 col-sm-4 col-4">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/react_icon.png" alt="React icon" />
                        <p className="skill-text">React</p>
                    </div>
                </div>
                <div className="col-xl-2 col-md-3 col-sm-4 col-4">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/bootstrap_icon.png" alt="Bootstrap icon" />
                        <p className="skill-text">Bootstrap</p>
                    </div>
                </div>

            </div>
            <div className="row">
                <p className="skill-title w3-wide">Back-End</p>
                <div className="col-xl-2 col-md-3 col-sm-4 col-4">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/mysql_icon.png" alt="MySQL icon" />
                        <p className="skill-text">MySQL</p>
                    </div>
                </div>      
                <div className="col-xl-2 col-md-3 col-sm-4 col-4">
                    <div className="icon-container">
                        <img className="iconImg" src="/img/icons/postman_icon.png" alt="Postman icon" />
                        <p className="skill-text">Postman</p>
                    </div>
                </div>
                <div className="col-xl-2 col-md-3 col-sm-4 col-4">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/java_icon.png" alt="Java icon" />
                        <p className="skill-text">Java</p>
                    </div>
                </div>
                <div className="col-xl-2 col-md-3 col-sm-4 col-4">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/spring_boot_icon.png" alt="Spring Boot icon" />
                        <p className="skill-text">Spring Boot</p>
                    </div>
                </div>
            </div>


            <div className="row">
                <p className="skill-title w3-wide">{t("game-dev")}</p>
                <div className="col-xl-2 col-md-3 col-sm-4 col-4">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/csharp_icon.png" alt="C Sharp icon" />
                        <p className="skill-text">C#</p>
                    </div>
                </div>
                <div className="col-xl-2 col-md-3 col-sm-4 col-4">
                    <div className="icon-container">
                        <img className="iconImg" src={getIconFileName("img/icons/unity_icon")} alt="Unity icon" />
                        <p className="skill-text">Unity 2D & 3D</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <p className="skill-title w3-wide">{t("web-design")}</p>
                <div className="col-xl-2 col-md-3 col-sm-4 col-4">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/wordpress_icon.png" alt="Wordpress icon" />
                        <p className="skill-text">Wordpress</p>
                    </div>
                </div>
                <div className="col-xl-2 col-md-3 col-sm-4 col-4">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/elementor_icon.png" alt="Elementor icon" />
                        <p className="skill-text">Elementor</p>
                    </div>
                </div>
                <div className="col-xl-2 col-md-3 col-sm-4 col-4">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/figma_icon.png" alt="Figma icon" />
                        <p className="skill-text">Figma</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <p className="skill-title w3-wide">{t("other")}</p>
                <div className="col-xl-2 col-md-3 col-sm-4 col-4">
                    <div className="icon-container">
                        <img className="iconImg" src={getIconFileName("img/icons/github_icon")} alt="GitHub icon" />
                        <p className="skill-text">GitHub</p>
                    </div>
                </div>
                <div className="col-xl-2 col-md-3 col-sm-4 col-4">
                    <div className="icon-container">
                        <img className="iconImg" src={getIconFileName("img/icons/aws_icon")} alt="HTML5 icon" />
                        <p className="skill-text">Amazon Web Services</p>
                    </div>
                </div>
                <div className="col-xl-2 col-md-3 col-sm-4 col-4">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/trello_icon.png" alt="Trello icon" />
                        <p className="skill-text">Trello</p>
                    </div>
                </div>
                <div className="col-xl-2 col-md-3 col-sm-4 col-4">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/ubuntu_icon.png" alt="Ubuntu icon" />
                        <p className="skill-text">Ubuntu 22.04</p>
                    </div>
                </div>
                <div className="col-xl-2 col-md-3 col-sm-4 col-4">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/agile_dev_icon.png" alt="Agile Methodology icon" />
                        <p className="skill-text">Agile Methodology</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;