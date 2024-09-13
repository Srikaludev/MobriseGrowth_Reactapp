import React from 'react';
import '../styles/pinkzone.css';

function PinkZone() {
    return (
        <div className="pink-zone">
            <img className="pink-image" src={`${process.env.PUBLIC_URL}/images/pink.jpeg`} alt="Pink Cover Image" />
            <div className="pink-overlay">
                <div>
                    <h1 className="pink-heading">
                        Our Clients Believe Our Creative Logo<br />Design Services Are To Die For.
                    </h1>
                    <hr />
                    <button className="pink-button">Contact Us</button>
                </div>
            </div>
        </div>
    );
}

export default PinkZone;
