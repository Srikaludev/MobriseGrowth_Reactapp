import React from 'react';
import '../styles/recentwork.css'; 

function RecentWork() {
    return (
        <>
            <div className="recent-work-section">
                <h1 className="fontofapple">When the looks matter -<br />we deliver the best</h1>
                <img className="applepandu" src={`${process.env.PUBLIC_URL}/images/appleskai.jpg`} alt="Apple Skai" />
            </div>

            <div className="recent-work-section">
                <h2>Our Recent Awesome Work</h2>
                <div className="image-gallery">
                    <img src={`${process.env.PUBLIC_URL}/images/c1.png`} alt="Work 1" />
                    <img src={`${process.env.PUBLIC_URL}/images/c2.png`} alt="Work 2" />
                    <img src={`${process.env.PUBLIC_URL}/images/c3.png`} alt="Work 3" />
                    <img src={`${process.env.PUBLIC_URL}/images/c4.png`} alt="Work 4" />
                    <img src={`${process.env.PUBLIC_URL}/images/c5.png`} alt="Work 5" />
                </div>
            </div>
        </>
    );
}

export default RecentWork;
