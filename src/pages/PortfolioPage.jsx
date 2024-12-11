import PortfolioBody from "../components/PortfolioBody";
import Navbar from "../components/Navbar";
import BackTopButton from "../components/BackTopButton";

import '../components/css/ProjectBody.css';

function PortfolioPage({ toggleTheme }) {
    return (
        <>
            <Navbar toggleTheme={toggleTheme} />
            <PortfolioBody />
            <BackTopButton />
        </>
    );
}

export default PortfolioPage;