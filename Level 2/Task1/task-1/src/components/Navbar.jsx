import { Link, useLocation } from "react-router-dom";
import "../index.css";

function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar">
            <h1 className="logo">My<span>SPA</span></h1>
            <ul>
                <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
                <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link></li>
                <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
