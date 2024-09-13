import React from 'react';
import '../styles/teamsection.css';

function TeamSection() {
    const teamMembers = [
        {
            name: 'Adrian Walker',
            role: 'CEO',
            imageUrl: `${process.env.PUBLIC_URL}/images/adrian.jpg`,
            alt: 'Adrian Walker'
        },
        {
            name: 'Alice Wood',
            role: 'CTO',
            imageUrl: `${process.env.PUBLIC_URL}/images/alice.jpg`,
            alt: 'Alice Wood'
        },
        {
            name: 'Jack Wright',
            role: 'Developer',
            imageUrl: `${process.env.PUBLIC_URL}/images/jack.jpg`,
            alt: 'Jack Wright'
        }
    ];

    return (
        <div className="team-section">
            <h1 className="team-title">Our Team</h1>
            <div className="team-members">
                {teamMembers.map((member, index) => (
                    <div className="team-member" key={index}>
                        <img src={member.imageUrl} alt={member.alt} />
                        <h3 className="team-name">{member.name}</h3>
                        <h4 className="team-role">{member.role}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TeamSection;
