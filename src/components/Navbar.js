import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="...">
                    <img src="/logo192.png" alt="Logo" width="30" height="24" 
                    className="d-inline-block align-text-top"/>NA88</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" aria-label="Go to Home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-link" aria-label="View Projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link" aria-label="View About Me">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link" aria-label="Got to Contact">Contact</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="...">Action</a></li>
                                <li><a className="dropdown-item" href="...">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="...">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;