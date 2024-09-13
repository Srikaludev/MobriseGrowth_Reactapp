import React from 'react';
import '../styles/header.css';

function Header() {
    return (
        <div className="header-container">
            <img className="header-image" src={`${process.env.PUBLIC_URL}/images/img.jpg`} alt="Cover" />
            <div className="header-text">
                <h3 className="text-uppercase faded">
                    Scelerisque varius morbi enim<br />
                    nunc faucibus a pellentesque.
                </h3>
                <hr />
                <button className="header-button">Contact Us</button>
            </div>
        </div>
    );
}

export default Header;
