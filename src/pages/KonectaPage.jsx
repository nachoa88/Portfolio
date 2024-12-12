import KonectaBody from "../components/KonectaBody";
import Navbar from "../components/Navbar";
import BackTopButton from "../components/BackTopButton";

import '../components/css/ProjectBody.css';

function KonectaPage({ toggleTheme }) {
    return (
        <>
            <Navbar toggleTheme={toggleTheme} />
            <KonectaBody />
            <BackTopButton />
        </>
    );
}

export default KonectaPage;