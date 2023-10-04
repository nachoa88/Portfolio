function PortfolioSection() {
    return (
        <div className="w3-padding-32 w3-content" id="portfolioSection">
            <h2>Portfolio</h2>
            <hr className="w3-opacity" />

            <div className="row">
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <div className="card">
                        <img src="img/konecta.jpg" className="card-img-top" alt="Sample of konect project" />
                        <div className="card-body">
                            <h5 className="card-title">K0N3CT4</h5>
                            <p className="card-text">This project was made with my group during the Web Development Course. Front-end
                                was made in React and back-end with Spring Boot, using AWS for our servers, databases and storage.</p>
                            <a href="..." className="btn mr-2"><i className="fas fa-link"></i>Learn More</a>
                            <a href="https://github.com/nachoa88/KoNeCTaReact" target="_blank" rel="noopener noreferrer" className="btn mr-2">
                                <i className="fab fa-github"></i> Github</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <div className="card">
                        <img src="img/portfolio.jpg" className="card-img-top" alt="Sample of my portfolio" />
                        <div className="card-body">
                            <h5 className="card-title">My Portfolio</h5>
                            <p className="card-text">This is my own portfolio, it was made with React, using some samples from W3Schools
                                and Bootstrap, putting in practice my HTML, CSS, JS, & Bootstrap skiils. I've used Hostinger to host my website.</p>
                            <a href="..." className="btn mr-2"><i className="fas fa-link"></i>Learn More</a>
                            <a href="https://github.com/nachoa88/Portfolio" target="_blank" rel="noopener noreferrer" className="btn mr-2">
                                <i className="fab fa-github"></i> Github</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <div className="card">
                        <img src="img/laphotography.jpg" className="card-img-top" alt="Sample of photography portfolio" />
                        <div className="card-body">
                            <h5 className="card-title">Photography Portfolio</h5>
                            <p className="card-text">This project was made for a photographer friend of mine, it's a portfolio of his work.
                                I was done using Wordpress and Elementor's plugin, it was my first approach to this tools.</p>
                            <a href="..." className="btn mr-2"><i className="fas fa-link"></i>Learn More</a>
                            <a href="https://laphotography.es/" target="_blank" rel="noopener noreferrer" className="btn mr-2">
                                <i className="fas fa-link"></i> Visit Site</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PortfolioSection;