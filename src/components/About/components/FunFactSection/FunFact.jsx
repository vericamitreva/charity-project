import React, { useState, useEffect } from 'react';
import './funfact.css';
import Shape from './funfactshape.png';

export default function FunFact() {
    const [counts, setCounts] = useState({
        expertVolunteers: 0,
        happyFamilies: 0,
        totalDonations: 0,
        successfulCampaigns: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCounts(prevCounts => ({
                expertVolunteers: prevCounts.expertVolunteers < 250 ? prevCounts.expertVolunteers + 10 : 250,
                happyFamilies: prevCounts.happyFamilies < 1026 ? prevCounts.happyFamilies + 10 : 1026,
                totalDonations: prevCounts.totalDonations < 25 ? prevCounts.totalDonations + 10 : 25,
                successfulCampaigns: prevCounts.successfulCampaigns < 1250 ? prevCounts.successfulCampaigns + 10 : 1250
            }));
        }, 10); 

        return () => clearInterval(interval);
    }, []);

  

    return (
        <div className="fun-fact-section">
            <div className="fun-fact-container">
                <div className="fun-fact-shape">
                    <img src={Shape} alt="" />
                </div>
                <div className="facts">
                    <div className="fact">
                        <div className="info">
                            <h3>{counts.expertVolunteers} <span>+</span></h3>
                            <p>Expert volunteer</p>
                        </div>
                    </div>

                    <div className="fact">
                        <div className="info">
                            <h3>{counts.happyFamilies} <span>+</span></h3>
                            <p>Happy families</p>
                        </div>
                    </div>

                    <div className="fact">
                        <div className="info">
                            <h3>{counts.totalDonations} <span>M</span></h3>
                            <p>Total donations</p>
                        </div>
                    </div>

                    <div className="fact">
                        <div className="info">
                            <h3>{counts.successfulCampaigns} <span>+</span></h3>
                            <p>Successful campaigns</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}