import React from 'react';
import '../styles/brandstrategy.css';

function BrandStrategy() {
    return (
        <div className="startup text-center text-white d-flex">
            <img className="cover2" src={`${process.env.PUBLIC_URL}/images/brandstratergy.jpg`} alt="Brand Strategy" />
        </div>
    );
}

export default BrandStrategy;
