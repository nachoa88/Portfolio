function ProjectBody() {
    return (
        <header className="container" id="projectS">
            <h2>Work in progress, sorry...</h2>
            <hr className="w3-opacity" />

            <h2>K0N3CT4</h2>
            <hr className="w3-opacity" />
            <div className="row">
                <div className="col-xl-7 col-md-6 col-sm-12">
                    <p className="project-text">
                        K0N3CT4 is the result of my final group project for the Full Stack Web Development course I've finished in November-23. 
                        The project was developed by 4 people, using Trello to manage our workflow and GitHub to help us manage, track and 
                        control the changes while developing the app.<br></br>
                        The idea of the hole project arised from a slogan proposed by our professor: How to relate adolescents and culture?
                        This question has led us to think about different ways to bring adolescents, with their needs and restrictions, 
                        closer to culture.<br></br>
                        
                        This is why we decided to create an application specific for teenagers, that is practical and simple, 
                        where they could find free underground cultural events that they may like.
                    </p>
                    <p className="project-text">
                        The project will gather information on free underground cultural events (description, type of event, time and place). 
                        These events are shown in two formats, a list with all the details and also on a map. Both the list and the map allow users 
                        to filter the content to quickly and easily find the event that fits their needs. 
                        These filters can be customized when creating a user by completing the interest fields.

                        In turn, users can interact with each other, see the events their friends are attending, 
                        and can unlock rewards for participating in the community by commenting and rating events they have attended.
                    </p>
                </div>
                <div className="col-xl-5 col-md-6 col-sm-12">
                    <img src="img/konecta.jpg" className="w3-image w3-round" id="project-img" alt="Portfolio" />
                </div>
                <div className="col-xl-5 col-md-6 col-sm-12">
                    <img src="img/konecta.jpg" className="w3-image w3-round" id="project-img" alt="Portfolio" />
                </div>
                <div className="col-xl-7 col-md-6 col-sm-12">
                    <p className="project-text">
                        My name is Ignacio Albiol, I'm a game & web developer and I live in Barcelona. For the last years I've been through
                        the process of professional reconversion, going from the educational to the programming and development sector. At
                        first, I started learning Unity and C# on my own, and later doing a web application development intensive course
                        full-stack profile. Right now I'm doing my first steps in the business, and willing to continue learning and
                        imporving my knoledge in this areas.
                    </p>
                </div>
            </div>
        </header>
    );
}

export default ProjectBody;