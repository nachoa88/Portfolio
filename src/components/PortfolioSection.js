function PortfolioSection() {
    return (
        <div className="w3-padding-32 w3-content" id="portfolioSection">
            <h2 className="w3-text-grey">My Portfolio</h2>
            <hr className="w3-opacity" />
            
            <div className="w3-row-padding" id="gridImg">
                <div className="w3-half">
                    <img src="/w3images/wedding.jpg" />
                    <img src="/w3images/rocks.jpg" />
                    <img src="/w3images/sailboat.jpg" />
                </div>

                <div className="w3-half">
                    <img src="/w3images/underwater.jpg" />
                    <img src="/w3images/chef.jpg" />
                    <img src="/w3images/wedding.jpg" />
                    <img src="/w3images/p6.jpg" />
                </div>
            </div>
        </div>
    );
}

export default PortfolioSection;