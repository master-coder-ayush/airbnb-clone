import React from "react";
import logo from "../assets/images/airbnb-logo.png";
import "./navbar.css";

export default function NavBar() {
    return (
        <nav>
            <img src={logo} alt="AirBNB Logo" className="logo" />
        </nav>
    );
}