import { Link } from "react-router-dom";
export default function NavBar(){
    return(
        <div>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item">
                    <Link to="/" className="navbar-link">Home</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/about-us" className="navbar-link">About Us</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/contact-us" className="navbar-link">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}