function AboutSection() {
    return (
        <div className="w3-content w3-justify w3-text-grey w3-padding-32" id="about">
            <h2>About</h2>
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
                from different projects and I have a very good ability to work as a team and learn from my coworkers. I have lots of
                patience and I'm resilient, very used to resolve issues to achieve my goals.
            </p>
            <h3 className="w3-padding-16">My Skills</h3>
            <p className="w3-wide">Photography</p>
            <div className="w3-light-grey" id="photographyBar">
                <div className="w3-container w3-center w3-padding-small w3-dark-grey">75%</div>
            </div>
            <p className="w3-wide">Web Design</p>
            <div className="w3-light-grey" id="webBar">
                <div className="w3-container w3-center w3-padding-small w3-dark-grey">85%</div>
            </div>
            <p className="w3-wide">Wordpress</p>
            <div className="w3-light-grey" id="wordpressBar">
                <div className="w3-container w3-center w3-padding-small w3-dark-grey">70%</div>
            </div><br />

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