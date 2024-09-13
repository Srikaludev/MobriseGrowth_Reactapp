import React from 'react';
import '../styles/prizepackage.css';

function PricePackage() {
    return (
        <div className="price-package-section zone1 white" style={{ paddingTop: '150px', paddingBottom: '150px' }}>
            <h1>Pocket-Friendly<br /> Price Packages</h1>
            <h3>Mattis enim ut tellus elementum sagittis vitae et.<br /> Leo in vitae turpis massa. Arcu cursus vitae
                congue<br />
                mauris rhoncus.</h3>
            <img src={`${process.env.PUBLIC_URL}/images/pocketfrndly.png`} alt="Pocket-Friendly Price Packages" className="image1" />
        </div>
    );
}

export default PricePackage;
