import React from 'react';
import '../styles/companyteam.css'; 

function CompanyTeam() {
    return (
        <div className="company-team">
            <div className="team-grid">
                <div className="team-mem">
                    <img className="team-photo" src="/images/logocreation.jpg" alt="Logo Creation" />
                    <h3 className="member-name highlighted1">Logo creation</h3>
                    <h4 className="member-role highlightedsmall">Facilisis gravida neque convallis a cras semper auctor.</h4>
                </div>
                <div className="team-mem">
                    <img className="team-photo" src="/images/webdesign.jpg" alt="Website Design & Development" />
                    <h3 className="member-name highlighted1">Website Design & Development</h3>
                    <h4 className="member-role highlightedsmall">Facilisis gravida neque convallis a cras semper auctor.</h4>
                </div>
                <div className="team-mem">
                    <img className="team-photo" src="/images/appdesign.jpg" alt="Apps Design & Development" />
                    <h3 className="member-name highlighted1">Apps Design & Development</h3>
                    <h4 className="member-role highlightedsmall">Facilisis gravida neque convallis a cras semper auctor.</h4>
                </div>
            </div>
        </div>
    );
}

export default CompanyTeam;
