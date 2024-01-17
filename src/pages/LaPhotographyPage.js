import LaPhotographyBody from "../components/LaPhotographyBody";
import Navbar from "../components/Navbar";
import BackTopButton from "../components/BackTopButton";

import '../components/css/ProjectBody.css';

function LaPhotographyPage({ toggleTheme }) {
    return (
        <>
            <Navbar toggleTheme={toggleTheme} />
            <LaPhotographyBody />
            <BackTopButton />
        </>
    );
}

export default LaPhotographyPage;