import React from 'react';
import '../styles/navbar.css';

function Navbar() {
    return (
        <nav className="zone blue sticky nav-radius" id="navbar">
            <ul className="main-nav">
                <li><a href="#"><strong>GrowthM5</strong></a></li>
                <li className="push-right"><a href="#">About</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
                <li className="button"><a href="#">We're Hiring</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
