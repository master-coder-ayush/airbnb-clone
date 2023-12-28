import logo from "/airbnb-logo.png";
import "./navbar.css";

export default function NavBar() {
    return (
        <nav>
            <img src={logo} alt="AirBNB Logo" className="logo" />
        </nav>
    );
}
