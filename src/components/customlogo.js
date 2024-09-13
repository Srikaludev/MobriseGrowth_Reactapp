import React from 'react';
import '../styles/customlogo.css'; 

function CustomLogoSection() {
    return (
        <div className="custom-logo-section">
            <div className="text-content">
                <h1 className="splgrey">Customize Your Logo with 'Creative Logo Studio'</h1>
                <h3 className="smallblacktext">
                    Auctor urna nunc id cursus metus aliquam eleifend.
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique.
                </h3>
            </div>
            <div className="image-content">
                <img src={`${process.env.PUBLIC_URL}/images/1.jpg`} alt="Creative Logo Studio" />
            </div>
        </div>
    );
}

export default CustomLogoSection;
