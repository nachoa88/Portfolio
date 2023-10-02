function AboutSection() {
    return (
        <div className="w3-content w3-justify w3-text-grey w3-padding-32" id="about">
            <h2>About Me</h2>
            <hr className="w3-opacity" />
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

            <h3>My Skills</h3>
            <hr className="w3-opacity" />
            <div className="row">
                <h5 className="w3-wide">Front-End</h5>
                <div className="col-xl-2 col-md-4 col-sm-4 col-6">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/html5_icon.png" />
                        <p>HTML5</p>
                    </div>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-4 col-6">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/css3_icon.png" />
                        <p>CSS</p>
                    </div>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-4 col-6">
                    <div className="icon-container">
                        <img className="iconImg" src="/img/icons/javascript_icon.png" />
                        <p>JavaScript</p>
                    </div>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-4 col-6">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/react_icon.png" />
                        <p>React</p>
                    </div>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-4 col-6">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/bootstrap_icon.png" />
                        <p>Bootstrap</p>
                    </div>
                </div>

            </div>

            <div className="row">
                <h5 className="w3-wide">Game Development</h5>
                <div className="col-xl-2 col-md-4 col-sm-4 col-6">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/csharp_icon.png" />
                        <p>C#</p>
                    </div>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-6">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/unity_icon.png" />
                        <p>Unity 2D & 3D</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <h5 className="w3-wide">Web Design</h5>
                <div className="col-xl-2 col-md-4 col-sm-4 col-6">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/wordpress_icon.png" />
                        <p>Wordpress</p>
                    </div>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-6">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/elementor_icon.png" />
                        <p>Elementor</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <h5 className="w3-wide">Other skills</h5>
                <div className="col-xl-2 col-md-4 col-sm-4 col-6">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/github_icon.png" />
                        <p>GitHub</p>
                    </div>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-4 col-6">
                    <div className="icon-container">
                        <img className="iconImg" src="img/icons/ubuntu_icon.png" />
                        <p>Ubuntu 22.04</p>
                    </div>
                </div>
            </div>



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