import React from 'react';
import '../styles/Livechat.css';

function Livechat() {
    return (
        <div className="zone1 white">
            <div className="content-wrapper">
                <img className="kanye" src={`${process.env.PUBLIC_URL}/images/ideaimage.png`} alt="Image Description" />
                <div className="text-content">
                    <h1>Good Logo Design Ensures a Better Customer Response</h1>
                    <h3>Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla velit ut tortor pretium viverra suspendisse.</h3>
                    <div className="col-lg-12 my-auto">
                        <button className="btn custom-btn-xl">Live Chat</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Livechat;
