function AboutSection() {
    return (
        <div className="w3-content w3-justify w3-text-grey w3-padding-32" id="about">
            <h2>About Me</h2>
            <hr className="w3-opacity" />
            <div id="about-text">
                <p>
                    My name is Ignacio Albiol, I'm a game & web developer and I live in Barcelona. For the last years I've been through
                    the process of professional reconversion, going from the educational to the programming and development sector. At
                    first, I started learning Unity and C# on my own, and later doing a web application development intensive course
                    full-stack profile. Right now I'm doing my first steps in the business, and willing to continue learning and
                    imporving my knoledge in this areas.
                </p>
                <p>
                    As for my soft skills, I consider myself a serious, responsible, decisive and hard-working person. I enjoy learning
                    from different projects and I have a very good ability to work as a team and learn from my coworkers. I'm resilient, have lots of
                    patience, and problem-solver by nature.
                </p>
            </div>
            <h3>My Skills</h3>
            <hr className="w3-opacity" />
            <div className="row">
                <h5 className="w3-wide">Front-End</h5>
                <div className="col-xl-2 col-md-4 col-sm-4 col-6">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/html5_icon.png" alt="HTML5 icon"/>
                        <p className="skill-text">HTML5</p>
                    </div>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-4 col-6">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/css3_icon.png" alt="CSS icon"/>
                        <p className="skill-text">CSS</p>
                    </div>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-4 col-6">
                    <div className="icon-container">
                        <img className="iconImg" src="/img/icons/javascript_icon.png" alt="JavaScript icon"/>
                        <p className="skill-text">JavaScript</p>
                    </div>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-4 col-6">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/react_icon.png" alt="React icon"/>
                        <p className="skill-text">React</p>
                    </div>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-4 col-6">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/bootstrap_icon.png" alt="Bootstrap icon"/>
                        <p className="skill-text">Bootstrap</p>
                    </div>
                </div>

            </div>

            <div className="row">
                <h5 className="w3-wide">Game Development</h5>
                <div className="col-xl-2 col-md-4 col-sm-4 col-6">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/csharp_icon.png" alt="C Sharp icon"/>
                        <p className="skill-text">C#</p>
                    </div>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-4 col-6">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/unity_icon.png" alt="Unity icon"/>
                        <p className="skill-text">Unity 2D & 3D</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <h5 className="w3-wide">Web Design</h5>
                <div className="col-xl-2 col-md-4 col-sm-4 col-6">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/wordpress_icon.png" alt="Wordpress icon"/>
                        <p className="skill-text">Wordpress</p>
                    </div>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-4 col-6">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/elementor_icon.png" alt="Elementor icon"/>
                        <p className="skill-text">Elementor</p>
                    </div>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-4 col-6">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/figma_icon.png" alt="Figma icon"/>
                        <p className="skill-text">Figma</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <h5 className="w3-wide">Other skills</h5>
                <div className="col-xl-2 col-md-4 col-sm-4 col-6">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/github_icon.png" alt="GitHub icon"/>
                        <p className="skill-text">GitHub</p>
                    </div>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-4 col-6">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/aws_icon.png" alt="HTML5 icon"/>
                        <p className="skill-text">Amazon Web Services</p>
                    </div>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-4 col-6">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/trello_icon.png" alt="Trello icon"/>
                        <p className="skill-text">Trello</p>
                    </div>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-4 col-6">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/ubuntu_icon.png" alt="Ubuntu icon"/>
                        <p className="skill-text">Ubuntu 22.04</p>
                    </div>
                </div>
            </div>


            <h3>Section in progress...</h3>
            <div className="w3-row w3-center w3-dark-grey w3-padding-16 w3-section">
                <div className="w3-quarter w3-section">
                    <span className="w3-xlarge">14+</span><br />
                    Partners
                </div>
                <div className="w3-quarter w3-section">
                    <span className="w3-xlarge">55+</span><br />
                    Projects Done
                </div>
                <div className="w3-quarter w3-section">
                    <span className="w3-xlarge">89+</span><br />
                    Happy Clients
                </div>
                <div className="w3-quarter w3-section">
                    <span className="w3-xlarge">150+</span><br />
                    Meetings
                </div>
            </div>
        </div>
    );
}

export default AboutSection;